import { useEffect, useState } from 'react';
import { RELEASE_REPO } from './site';

export type Release = {
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  html_url: string;
  assets: { name: string; browser_download_url: string; size: number }[];
};

// Một lần gọi API cho cả phiên (trang chủ + trang Download dùng chung)
let pending: Promise<Release> | null = null;
const load = () => (pending ??= fetch(`https://api.github.com/repos/${RELEASE_REPO}/releases/latest`)
  .then(r => (r.ok ? r.json() : Promise.reject(new Error(`GitHub returned ${r.status}`))))
  .catch(e => { pending = null; throw e; }));

/** Bản phát hành mới nhất trên GitHub; null khi đang tải; error khi không lấy được. */
export function useLatestRelease(): Release | null;
export function useLatestRelease(withError: true): { release: Release | null; error: string | null };
export function useLatestRelease(withError?: boolean) {
  const [release, setRelease] = useState<Release | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let alive = true;
    load().then(r => alive && setRelease(r)).catch((e: Error) => alive && setError(e.message));
    return () => { alive = false; };
  }, []);
  return withError ? { release, error } : release;
}
