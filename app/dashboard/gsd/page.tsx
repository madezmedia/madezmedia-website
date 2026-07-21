'use client';

import React, { useState, useEffect } from 'react';

interface Task {
  id: string | number;
  title: string;
  owner: string;
  priority: 'P0' | 'P1' | 'P2' | 'P3';
  status: 'Today' | 'This Week' | 'This Month' | 'Backlog';
  blocked: boolean;
  done: boolean;
}

const DEFAULT_TASKS: Task[] = [
  { id: '1', title: 'Deploy OwnerScout pipeline', owner: '@growth-hacker', priority: 'P0', status: 'Today', blocked: true, done: false },
  { id: '2', title: 'VAPI key rotation & validation', owner: '@ops-center', priority: 'P0', status: 'Today', blocked: false, done: true },
  { id: '3', title: 'Avery pre-foreclosure property watch', owner: '@avery-rei-worker', priority: 'P1', status: 'This Week', blocked: false, done: false },
  { id: '4', title: 'Audit GSD Kanban permissions', owner: '@antigravity', priority: 'P1', status: 'This Month', blocked: false, done: false },
  { id: '5', title: 'Archive historic lead segments', owner: '@outreach-specialist', priority: 'P2', status: 'Backlog', blocked: false, done: false }
];

export default function GSDPage() {
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);
  const [approvals, setApprovals] = useState([
    { id: 'appr-101', title: 'Approve SSH key creation for database migration', requester: '@claude-engineer', status: 'pending' },
    { id: 'appr-102', title: 'Approve outreach sequence launch for 8 Phoenix buyers', requester: '@outreach-specialist', status: 'pending' }
  ]);
  const [services, setServices] = useState([
    { name: 'Mattermost Relay', status: 'active', desc: 'Bidirectional chat router' },
    { name: 'ACMI Redis Bridge', status: 'active', desc: 'Port 8081 HTTP Command Exec' },
    { name: 'NocoDB Engine', status: 'active', desc: 'Port 8084 Postgres tables' },
    { name: 'OpenACP Daemon', status: 'active', desc: 'Port 21420 VM execution' },
    { name: 'n8n Workflows', status: 'active', desc: 'Property watch-cron & research' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        // Query tasks from NocoDB proxy
        const res = await fetch('/api/dashboard/nocodb/v3/data/plrjwos5se3uu50/mtizkx4ji0accqt/records?limit=50');
        const data = await res.json();
        if (data.list && data.list.length > 0) {
          const formatted = data.list.map((r: any) => ({
            id: r.id,
            title: r.Title || r.title || 'Untitled Task',
            owner: r.Owner || r.owner || 'unassigned',
            priority: r.Priority || r.priority || 'P2',
            status: r.Status || r.status || 'Today',
            blocked: !!(r.Blocked || r.blocked),
            done: !!(r.Done || r.done)
          }));
          setTasks(formatted);
        }
      } catch (err) {
        console.warn('Failed to load NocoDB tasks, using fallbacks:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const moveLane = (taskId: string | number, newStatus: Task['status']) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );
    // Silent background execution logic logs event to console
    console.log(`[ACMI Move] Task ${taskId} -> Lane ${newStatus}`);
  };

  const handleApprove = (id: string) => {
    setApprovals((prev) => prev.filter((a) => a.id !== id));
    console.log(`[HITL Approval] Approved ${id}`);
  };

  const lanes: Task['status'][] = ['Today', 'This Week', 'This Month', 'Backlog'];

  return (
    <div>
      <h1 className="text-3xl font-serif italic font-bold text-[#1a1a1a] mb-2">GSD Dashboard</h1>
      <p className="text-sm font-mono text-[#1a1a1a]/60">Operational pipelines, active tasks, approvals, and VM services</p>

      {/* Services Grid */}
      <section className="mt-8">
        <h2 className="text-sm font-bold text-[#1a1a1a] uppercase letter-wide tracking-wider mb-4">VM System Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {services.map((srv) => (
            <div key={srv.name} className="p-4 bg-[#f4f2eb] border border-[#d4d2cc] flex flex-col justify-between">
              <div>
                <strong className="text-sm font-semibold block text-[#1a1a1a]">{srv.name}</strong>
                <span className="text-xs text-[#1a1a1a]/60 mt-1 block">{srv.desc}</span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#52c41a] rounded-full" />
                <span className="text-xs font-mono uppercase text-[#278d0a]">{srv.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approvals section */}
      <section className="mt-8">
        <h2 className="text-sm font-bold text-[#1a1a1a] uppercase letter-wide tracking-wider mb-4">Pending Approvals (HITL)</h2>
        <div className="bg-[#f4f2eb] border border-[#d4d2cc]">
          {approvals.length === 0 ? (
            <div className="p-4 text-sm text-[#1a1a1a]/60 italic font-mono">No approvals pending in queue.</div>
          ) : (
            approvals.map((appr) => (
              <div key={appr.id} className="p-4 border-b border-[#d4d2cc] last:border-b-0 flex justify-between items-center gap-4">
                <div>
                  <span className="text-xs font-mono text-[#1a1a1a]/50 block">{appr.id} · Requested by {appr.requester}</span>
                  <span className="text-sm font-semibold text-[#1a1a1a] mt-1 block">{appr.title}</span>
                </div>
                <button
                  onClick={() => handleApprove(appr.id)}
                  className="bg-[#2d4a3e] text-[#faf9f5] border-0 hover:bg-[#5a7d6f] px-3 py-1.5 text-xs font-mono uppercase tracking-wider"
                >
                  Approve
                </button>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Kanban Board */}
      <section className="mt-8">
        <h2 className="text-sm font-bold text-[#1a1a1a] uppercase letter-wide tracking-wider mb-4">Kanban Boards</h2>
        {isLoading ? (
          <div className="p-8 text-sm font-mono text-[#1a1a1a]/60 italic">Loading tasks...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {lanes.map((lane) => {
              const laneTasks = tasks.filter((t) => t.status === lane);
              return (
                <div key={lane} className="bg-[#f4f2eb] border border-[#d4d2cc] p-4 flex flex-col min-h-[360px]">
                  <header className="border-b border-[#d4d2cc] pb-2 mb-4 flex justify-between items-center">
                    <h3 className="font-serif italic font-bold text-[#1a1a1a]">{lane}</h3>
                    <span className="text-xs font-mono bg-[#d4d2cc] px-2 py-0.5">{laneTasks.length}</span>
                  </header>

                  <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
                    {laneTasks.map((task) => (
                      <div key={task.id} className="p-4 bg-[#faf9f5] border border-[#d4d2cc] hover:border-[#2d4a3e] transition-colors relative group">
                        <div className="flex justify-between items-start gap-2">
                          <strong className="text-sm text-[#1a1a1a] font-semibold">{task.title}</strong>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <span className="text-xs font-mono text-[#1a1a1a]/60">{task.owner}</span>
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 ${task.priority === 'P0' ? 'bg-red-100 text-red-700' : 'bg-[#ebe8de] text-[#1a1a1a]'}`}>{task.priority}</span>
                        </div>

                        {/* Quick moves overlays */}
                        <div className="absolute inset-0 bg-[#f4f2eb]/95 hidden group-hover:flex items-center justify-center gap-1 p-2">
                          {lanes.filter(l => l !== lane).map(l => (
                            <button
                              key={l}
                              onClick={() => moveLane(task.id, l)}
                              className="bg-[#faf9f5] border border-[#d4d2cc] hover:bg-[#2d4a3e] hover:text-[#faf9f5] px-1.5 py-0.5 text-[9px] font-mono"
                            >
                              → {l.split(' ')[0]}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                    {laneTasks.length === 0 && (
                      <div className="text-xs italic text-[#1a1a1a]/40 text-center py-8">Lane Empty</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
