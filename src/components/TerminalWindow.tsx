import React from "react";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
  title = "terminal@p4rsec:~$",
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-terminal-bg border border-terminal-border shadow-terminal ${className}`}
    >
      {/* Terminal Header */}
      {/* <div className="bg-terminal-border/20 border-b border-terminal-border px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-terminal-text font-mono text-sm">{title}</span>
        </div>
      </div> */}

      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm">{children}</div>
    </div>
  );
};
