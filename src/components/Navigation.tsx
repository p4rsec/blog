import React from "react";

interface NavigationProps {
  currentPath?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentPath = "/",
}) => {
  const navItems = [
    { label: "Home", path: "/", command: "cd ~" },
    { label: "Posts", path: "/posts", command: "ls posts/" },
    { label: "About", path: "/about", command: "cat about.txt" },
  ];

  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-terminal-bg border shadow-terminal">
          {/* <div className="bg-terminal-border/20 border-b px-4 py-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-terminal-text font-mono text-sm">
                p4rsec@blog:~$
              </span>
            </div>
          </div> */}

          <div className="p-4 font-mono text-sm">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-terminal-text">$</span>
              <span className="text-terminal-text">which navigation</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    className={`block transition-all ${
                      isActive
                        ? "bg-terminal-border/10"
                        : "hover:bg-terminal-border/5"
                    }`}
                  >
                    <div className="text-terminal-text/60 text-xs mb-1">
                      {item.command}
                    </div>
                    <div
                      className={`text-terminal-text font-bold ${
                        isActive
                          ? "text-terminal-text underline decoration-terminal-border underline-offset-4"
                          : "text-terminal-text/80"
                      }`}
                    >
                      {item.label}
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="flex items-center space-x-2 mt-4">
              <span className="text-terminal-text">$</span>
              <span className="text-terminal-text animate-pulse terminal-cursor">
                _
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
