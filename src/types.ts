// Shared TypeScript types for the Mini Blog platform

export interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  datePosted: string; // ISO date string, e.g. "2026-09-20T10:00:00Z"
}
