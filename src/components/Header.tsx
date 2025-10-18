import React from "react";
import { TerminalWindow } from "./TerminalWindow";
import { BlinkingCursor } from "./BlinkingCursor";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="container mx-auto px-4 py-8">
      <TerminalWindow title="p4rsec@blog:~$" className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* whoami command and result */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-terminal-text">$</span>
              <span className="text-terminal-text">whoami</span>
            </div>
            <div className="text-terminal-text space-y-3">
              <div className="text-2xl font-bold text-terminal-text">
                {title}
              </div>
              {subtitle && (
                <div className="text-terminal-text/80">{subtitle}</div>
              )}
            </div>
          </div>

          {/* cat social.txt command and result */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-terminal-text">$</span>
              <span className="text-terminal-text">cat social.txt</span>
            </div>
            <div className="text-terminal-text/80 text-sm space-y-2">
              <div>
                <a
                  href="https://github.com/p4rsec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terminal-text transition-colors"
                >
                  → https://github.com/p4rsec
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/_prakashgamit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terminal-text transition-colors"
                >
                  → https://twitter.com/_prakashgamit
                </a>
              </div>
            </div>
          </div>

          {/* <div className="flex items-center space-x-2">
            <span className="text-terminal-text">$</span>
            <span className="text-terminal-text animate-pulse">ls -la</span>
          </div>
          <div className="text-terminal-text/60 text-sm">
            <div>
              drwxr-xr-x 2 p4rsec p4rsec 4096 Dec 25 00:00{" "}
              <span className="text-terminal-text">posts/</span>
            </div>
            <div>
              drwxr-xr-x 2 p4rsec p4rsec 4096 Dec 25 00:00{" "}
              <span className="text-terminal-text">about/</span>
            </div>
            <div>
              -rw-r--r-- 1 p4rsec p4rsec 1024 Dec 25 00:00{" "}
              <span className="text-terminal-text">README.md</span>
            </div>
          </div> */}

          <BlinkingCursor />
        </div>
      </TerminalWindow>
    </header>
  );
};
