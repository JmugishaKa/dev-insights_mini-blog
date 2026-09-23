import type { Post as PostType } from "../types";
import Post from "./Post";
import withLogger from "../hoc/withLogger";
import "./PostList.css";

const SAMPLE_POSTS: PostType[] = [
  {
    id: 1,
    title: "Getting Started with Vite + TypeScript",
    author: "Joshua Mugisha",
    content:
      "Vite gives you a near-instant dev server and lightning-fast HMR. Pair it with TypeScript and you get type safety without sacrificing speed. Here is how to set it up in five minutes.",
    datePosted: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Why We Chose React.memo Over PureComponent",
    author: "Fabiola Ingabire",
    content:
      "Functional components are our default, so React.memo was the natural fit for avoiding unnecessary re-renders instead of reaching for class-based PureComponent.",
    datePosted: "2026-09-15T09:30:00Z",
  },
  {
    id: 3,
    title: "A Practical Intro to Higher-Order Components",
    author: "Joshua Mugisha",
    content:
      "HOCs let you reuse component logic, like logging or auth checks, by wrapping a component in a function that returns a new component.",
    datePosted: "2026-09-10T14:00:00Z",
  },
];

interface PostListProps {
  highlightAuthor?: string;
}

function PostList({ highlightAuthor }: PostListProps) {
  return (
    <section className="post-list">
      {SAMPLE_POSTS.map((post) => (
        <Post key={post.id} post={post} highlightAuthor={highlightAuthor} />
      ))}
    </section>
  );
}

export default withLogger(PostList);


// side notes on the code above:

// Hardcoded sample posts. One date is set to "now" so the "New!" badge
// has something to show; the others are older.

// PostList is a functional component: it just maps data to Post cards
// and holds no state of its own.

// Optimization: a stable, unique `key` (post.id) lets React
// correctly track each item across re-renders instead of falling
// back to index-based reconciliation.