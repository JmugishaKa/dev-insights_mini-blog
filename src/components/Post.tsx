import { memo } from "react";
import type { Post as PostType } from "../types";
import "./Post.css";

interface PostProps {
  post: PostType;
  highlightAuthor?: string;
}

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

function getPreview(content: string, wordCount = 12): string {
  const words = content.trim().split(/\s+/);
  return words.length <= wordCount
    ? content
    : `${words.slice(0, wordCount).join(" ")}...`;
}

function isNew(datePosted: string): boolean {
  const posted = new Date(datePosted).getTime();
  return Date.now() - posted < ONE_DAY_MS;
}

function Post({ post, highlightAuthor }: PostProps) {
  const isHighlighted =
    !!highlightAuthor &&
    post.author.toLowerCase() === highlightAuthor.toLowerCase();

  const cardStyle: React.CSSProperties = {
    backgroundColor: isHighlighted ? "#fef3c7" : "#ffffff",
    borderLeft: isHighlighted ? "4px solid #f59e0b" : "4px solid transparent",
  };

  return (
    <article className="post" style={cardStyle}>
      <div className="post__meta">
        <h3 className="post__title">{post.title}</h3>
        {isNew(post.datePosted) && <span className="post__badge">New!</span>}
      </div>
      <p className="post__author">By {post.author}</p>
      <p className="post__preview">{getPreview(post.content)}</p>
      <p className="post__date">
        {new Date(post.datePosted).toLocaleDateString()}
      </p>
    </article>
  );
}

export default memo(Post);

// Notes here:
// Post is a functional component: it is purely presentational (renders
// props, holds no internal state), which is exactly the case functional
// components are best suited for.

// Inline style used here for a one-off, data-driven style (the
// highlight color depends on a runtime comparison), while the rest of
// the card's look lives in Post.css.

// Optimization: React.memo skips re-rendering this component when its
// props haven't changed, which matters once PostList re-renders for
// reasons unrelated to a specific post (e.g. filtering, parent state).
