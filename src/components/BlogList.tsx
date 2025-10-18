import React from "react";
import { TerminalWindow } from "./TerminalWindow";
import { BlinkingCursor } from "./BlinkingCursor";

interface BlogPost {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

export const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <section className="container mx-auto px-4 py-8">
      <TerminalWindow title="ls -la posts/" className="max-w-4xl mx-auto">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-text">$</span>
            <span className="text-terminal-text">ls -la posts/</span>
          </div>

          <div className="text-terminal-text/60 text-sm mb-4">
            <div>total {posts.length}</div>
            <div>
              drwxr-xr-x 2 p4rsec p4rsec 4096 Dec 25 00:00{" "}
              <span className="text-terminal-text">.</span>
            </div>
            <div>
              drwxr-xr-x 2 p4rsec p4rsec 4096 Dec 25 00:00{" "}
              <span className="text-terminal-text">..</span>
            </div>
          </div>

          <div className="space-y-2">
            {posts.map((post, index) => (
              <div
                key={post.slug}
                className="border-l-2 border-terminal-border/30 pl-4 py-2 transition-colors"
              >
                <div className="text-terminal-text/60 text-sm mb-1">
                  -rw-r--r-- 1 p4rsec p4rsec{" "}
                  {Math.floor(Math.random() * 5000 + 1000)} Dec 25 00:00
                  <span className="text-terminal-text ml-2">
                    {post.slug}.md
                  </span>
                </div>
                <div className="text-terminal-text font-bold mb-1">
                  {post.title}
                </div>
                <div className="text-terminal-text/60 text-sm mb-2">
                  {post.date}
                </div>
                <div className="text-terminal-text/80 text-sm">
                  {post.excerpt}
                </div>
                <div className="text-terminal-text/40 text-xs mt-2">
                  <a
                    href={`/posts/${post.slug}`}
                    className="hover:text-terminal-text transition-colors"
                  >
                    → Read more
                  </a>
                </div>
              </div>
            ))}
          </div>

          <BlinkingCursor />
        </div>
      </TerminalWindow>
    </section>
  );
};
