/**
 * Server-side PostHog (API routes / server actions).
 */
import { PostHog } from 'posthog-node';

let shared: PostHog | null = null;

export function getPostHogServer(): PostHog | null {
  const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (!token || !host) return null;
  if (!shared) {
    shared = new PostHog(token, {
      host,
      flushAt: 1,
      flushInterval: 0,
    });
  }
  return shared;
}

export function createPostHogServer(): PostHog | null {
  const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (!token || !host) return null;
  return new PostHog(token, {
    host,
    flushAt: 1,
    flushInterval: 0,
  });
}
