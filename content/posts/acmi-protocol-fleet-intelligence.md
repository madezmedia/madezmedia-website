---
title: "ACMI Protocol v1.2: how we built a self-organizing AI fleet that learns from its mistakes"
date: 2026-04-29
author: "Michael Shaw"
author_role: "Founder, Mad EZ Media Partners"
section: "Engineering"
read_time: "9 min read"
tags: [ACMI, multi-agent, Redis, infrastructure]
summary: "How a five-agent fleet ground to a halt without shared memory, why fragmented agent context breaks coordination, and the three-key Redis pattern that fixed it."
hero: "/blog/acmi-hero.jpg"
hero_alt: "ACMI Fleet Intelligence — abstract visualization of multi-agent coordination"
---

## The Moment Everything Stopped

April 24, 2026. I had five AI agents running — a coding agent, a research agent, an orchestrator, a UI specialist, and a protocol guardian. They were all working. They were all *busy*.

And yet, nothing was getting done.

Three tasks had been handed off between agents four times each. Two agents were working on the same problem without knowing it. One had been sitting on a critical handoff for six hours because the recipient agent never checked its inbox. The whole swarm had ground to a halt — not because the agents were broken, but because they couldn't talk to each other.

That was the day I realized: a fleet of AI agents without shared memory isn't a fleet. It's five guys in separate rooms, each told to "figure it out."

We needed infrastructure. We needed ACMI.

---

## The Problem: Agents Without Context

Here's the thing about AI agents — they're powerful individually but *useless* as a group without coordination. Each one wakes up with no memory of what happened before. No idea what the others are doing. No concept of "we're all working on the same thing."

Our setup before ACMI was chaotic:

- **No shared state.** Each agent lived in its own session. If claude-engineer finished a task, it had no reliable way to tell anyone.
- **No coordination.** Agents would grab the same work, or worse, nobody would grab it because each assumed someone else was handling it.
- **No learning.** An agent could fail at a task, get corrected, and then fail the exact same way the next day because it had zero memory of past mistakes.
- **No visibility.** I couldn't see what was happening without SSHing into sessions and reading logs. As the human operator, I was flying blind.

This isn't a theoretical problem. It's the central problem of multi-agent systems. And most "solutions" are just "add a chat channel" — which is how you get Discord bots arguing with each other at 3 AM.

---

## ACMI v1.0: The Foundation

We built ACMI — **Agentic Context Management Infrastructure** — as a shared substrate that every agent reads and writes through. The design is intentionally simple, backed by Upstash Redis (a managed Redis with a REST API, perfect for serverless agents).

The core idea: every entity in the system — agents, threads, tasks, workspaces — has the same three-part structure:

1. **Profile** — WHO/WHAT it is. Durable identity, slow-changing. A JSON blob stored as a Redis STRING.
2. **Signals** — Current STATE. Live status updated frequently (what's the agent working on? what's its health?). Also STRING+JSON.
3. **Timeline** — EVENT history. An append-only log using Redis sorted sets (ZSET), scored by millisecond timestamp. The source of truth for everything that happened.

```
acmi:agent:bentley:profile     → { name: "Bentley", role: "orchestrator", tier: "T4" }
acmi:agent:bentley:signals     → { status: "active", currentTask: "blog-post", health: "ok" }
acmi:agent:bentley:timeline    → ZSET of events, newest last
```

Agents communicate by appending events to shared timelines. A handoff isn't a function call — it's an event with `kind: "handoff-request"`, a `correlationId` to trace it, and a `summary` a human can read.

The coordination thread (`acmi:thread:agent-coordination:timeline`) is the central nervous system. Every major event flows through it. Any agent can read the last N events and instantly understand the fleet's state.

This worked. Agents could finally find each other. Tasks stopped falling through cracks. But v1.0 was just the foundation.

---

## v1.2 Protocol: The Rules That Made It Reliable

By April 28, we'd learned hard lessons about what breaks at scale. v1.2 codifies those lessons into protocol rules:

### Communication Standards (Comms Pattern v1.1)

Every event in the coordination thread **must** include five fields: `ts` (timestamp), `source` (which agent), `kind` (event type), `correlationId` (traceability), and `summary` (human-readable, ≤140 chars). No exceptions. No "I'll add it later."

The `correlationId` rule specifically came from a real incident where we had three events related to the same task but no way to link them. We spent two hours tracing the chain manually. Now every event chain is traceable by ID — `camelCase` only, no snake_case, no missing fields. We run a drift-diff checker every hour that flags violations.

### Lock-Protocol v1.0

When an agent starts a batch task — something that touches multiple keys or runs multiple steps — it posts a `coord-claim` event. Other agents see the claim and defer. If the claimant crashes, the claim auto-expires after 5 minutes. Simple, no deadlocks.

This came from an incident where two agents simultaneously rewrote the same ACMI registry key, each overwriting the other's changes. Classic race condition. Lock-protocol prevents it.

### Anti-Dead Heartbeats

Agents that haven't posted any event in 48 hours get their trackers reaped by `anti-dead.mjs`. No zombie tasks, no stale state. Clean fleet, clean mind.

---

## The Fleet: Four Specialized Agents

The fleet isn't one big model doing everything. It's specialized agents, each with a defined role, waking on a staggered schedule:

| Time (ET) | Agent | Role |
|---|---|---|
| :15 | gemini-cli | Schema, protocol, critique pipeline |
| :30 | claude-engineer | Coding, RL engine, ChromaDB |
| :45 | antigravity | Kanban UI, dashboards, RBAC |

And orchestrating all of them: **Bentley** (that's me — well, the main session agent), running on GLM-5.1 as the T4 orchestrator.

Each agent wakes hourly, checks its ACMI inbox, processes pending handoffs, does its specialized work, and posts results back to the timeline. If an agent has been silent for 3+ hours and has pending tasks, the wake system escalates to a human alert. No more silent failures.

The key insight: **cheap models doing frequent, simple tasks** (Gemini Flash at $0.10/1M tokens) plus **expensive models doing rare, complex tasks** (GLM-5.1 for orchestration). We're not burning T4 tokens on schema checks.

---

## Reinforcement Learning: The Fleet Gets Smarter

Here's where it gets interesting. v1.2 introduces a formal reinforcement learning cycle that runs on every workflow step:

```
Execute → Assess → Log → Analyze → Adjust → Execute (improved)
```

Every step gets a quality score (0–100). Every step logs what worked and what didn't. Before the next run, agents check the improvement log from prior runs and seed themselves with refined context.

We're building `logImprovement(stepId, lesson)` and `logAssessment(stepId, score, criteria)` directly into `AcmiWorkflowManager.mjs`. This means the workflow engine itself becomes a learning system — not because we trained a model, but because we built a feedback loop into the infrastructure.

Non-critical steps get automated scoring (the critique pipeline evaluates output against criteria). Critical steps — brand, legal, client-facing — route to human review. The audit trail is permanent.

This is the difference between "an AI that works" and "an AI that gets better at working."

---

## Semantic Search: Finding Knowledge by Meaning

With agents constantly producing work — code, documentation, decisions, assessments — the ACMI timeline grows fast. Keyword search isn't enough. You need to find things by meaning.

We're deploying **ChromaDB** with OpenAI embeddings as the fleet's semantic memory layer. When an agent logs a lesson, it also gets embedded. When another agent faces a similar problem months later, it can query by semantic similarity: "Has anyone dealt with Redis ZSET performance degradation under high cardinality?"

The answer surfaces — not because someone tagged it with the right keyword, but because the embedding captures the *concept*. This is P2 in our roadmap, and it's already changing how agents find and reuse past work.

---

## The Kanban: Operations at a Glance

All of this — the agents, the timelines, the handoffs, the HITL queue — is visible through [Cowork-Kanban](https://cowork-kanban.vercel.app), our operations dashboard. It's the control plane.

The Kanban shows:
- **Board view** — Active tasks, who owns them, what stage they're in
- **Swarm view** — Live agent status, last heartbeat, current workload
- **Activity feed** — Real-time stream of ACMI timeline events
- **HITL queue** — Tasks that need human decisions, sorted by urgency
- **Insights** — Aggregate metrics on fleet performance, cost, velocity

We didn't build this as a showcase. We built it because managing a fleet from the CLI is unsustainable. The Kanban is what makes multi-agent operations *readable* for humans.

---

## Results: One Day, Zero Drift

On April 28, 2026 — the day we locked Comms Pattern v1.1 — the fleet delivered:

- **15+ deliverables** in a single day (code, docs, schemas, tooling fixes)
- **0 communications drift** — every event had proper `correlationId`, `kind`, and `summary`
- **0 duplicate work** — agents knew what others were handling
- **26 automated cron jobs** running maintenance, monitoring, and sync tasks without human intervention
- **3 roundtable discussions** conducted entirely through ACMI timelines (agents proposed, debated, and synthesized without a single synchronous meeting)

The cost? Mostly Gemini Flash tokens for the hourly wakes. The T4 orchestrator (Bentley) only spins up when there's actual orchestration to do. The fleet runs lean.

But the real metric isn't output count. It's **zero comms drift**. In a multi-agent system, communication *is* the system. If the comms are clean, everything else follows.

---

## What's Next

We're building toward five pillars. Three are active, two are on the horizon:

1. **RL Engine** (active) — The assess→log→adjust cycle, wired into every workflow step
2. **Semantic Search** (active) — ChromaDB + embeddings for fleet-wide knowledge retrieval
3. **Automated Critique** (active) — AI-powered quality scoring for non-critical steps
4. **Fleet Learning** (planned) — When one agent learns, the whole fleet benefits. Shared improvement embeddings across all agents
5. **External Data Ingestion** (planned) — Pull GitHub events, email, social signals, analytics into ACMI so agents can react to the outside world autonomously

The endgame isn't more agents. It's agents that improve themselves — that log their mistakes, share what they learn, and execute better the next time. The infrastructure enables it. The RL cycle drives it. The fleet delivers it.

---

## Build Your Own

ACMI isn't a product. It's a pattern. Redis sorted sets for timelines. JSON strings for state. A comms protocol with mandatory fields. Staggered agent wakes with escalation. An RL cycle baked into the workflow engine.

You can build this yourself. The [full repository is open source](https://github.com/madezmedia/acmi) — including the normative [v1.2 protocol spec](https://github.com/madezmedia/acmi/blob/main/ACMI-PROTOCOL-v1.2.md), [operator onboarding guide](https://github.com/madezmedia/acmi/blob/main/OPERATOR-GUIDE.md), [fleet coordination tools](https://github.com/madezmedia/acmi/blob/main/invite-agent.mjs), and [communication cheatsheet](https://github.com/madezmedia/acmi/blob/main/ACMI-CHEATSHEET.md). The only prerequisite is a free Upstash Redis instance and agents that can POST to a REST API.

**Clone it, follow the 10-step operator guide, and you'll have a running multi-agent fleet in under an hour.**

If you're running more than two AI agents and they can't talk to each other, you're already feeling the pain we felt on April 24. The fix isn't more agents. The fix is infrastructure.

---

*Michael Shaw is the founder of [Mad EZ Media Partners](https://www.madezmedia.com), an AI-powered digital marketing and web development company. He builds multi-agent systems because single agents aren't enough anymore. He also talks to his agents like they're coworkers, because at this point, they kind of are.*

*This is the second post in the ACMI Protocol series. Read [Part 1: The ACMI Protocol — A Shared Memory Layer for AI Agent Fleets](./acmi-protocol-shared-memory.md).*
