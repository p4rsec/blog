import React from "react";
import { TerminalWindow } from "./TerminalWindow";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="container mx-auto px-4 py-8">
      <TerminalWindow title="p4rsec@blog:~$" className="max-w-4xl mx-auto">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-text">$</span>
            <span className="text-terminal-text animate-pulse">whoami</span>
          </div>
          <div className="text-terminal-text">
            <div className="text-2xl font-bold text-terminal-text mb-2">
              {title}
            </div>
            {subtitle && (
              <div className="text-terminal-text/80 mb-4">{subtitle}</div>
            )}
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

          <div className="flex items-center space-x-2">
            <span className="text-terminal-text">$</span>
            <span className="text-terminal-text animate-pulse terminal-cursor">
              _
            </span>
          </div>
        </div>
      </TerminalWindow>
    </header>
  );
};
