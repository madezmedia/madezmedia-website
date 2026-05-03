'use client';

import { useState } from 'react';

export function CopyInstallButton({ id }: { id?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText('npm install @madezmedia/acmi');
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore
    }
  }

  return (
    <button
      type="button"
      id={id}
      className={`copy-btn ${copied ? 'copied' : ''}`}
      onClick={copy}
      aria-label="Copy install command"
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}
