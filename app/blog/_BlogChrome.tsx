import { ReactNode } from 'react';

export function BlogShell({ children }: { children: ReactNode }) {
  return <main className="blog-page">{children}</main>;
}
