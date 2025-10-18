import React from "react";
import { TerminalWindow } from "./TerminalWindow";

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  slug: string;
}

export const BlogPost: React.FC<BlogPostProps> = ({
  title,
  date,
  content,
  slug,
}) => {
  return (
    <article className="mb-8">
      <TerminalWindow
        title={`cat posts/${slug}.md`}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-text">$</span>
            <span className="text-terminal-text">cat posts/{slug}.md</span>
          </div>

          <div className="border-l-2 border-terminal-border pl-4">
            <div className="text-terminal-text/60 text-sm mb-2"># {title}</div>
            <div className="text-terminal-text/40 text-xs mb-4">
              Published: {date}
            </div>
            <div className="text-terminal-text">{content}</div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-terminal-text">$</span>
            <span className="text-terminal-text animate-pulse terminal-cursor">
              _
            </span>
          </div>
        </div>
      </TerminalWindow>
    </article>
  );
};
