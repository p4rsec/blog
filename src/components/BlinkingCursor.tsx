import React from "react";
import { isBlinkingCursorEnabled } from "../config/terminal";

interface BlinkingCursorProps {
  showPrompt?: boolean;
  className?: string;
}

export const BlinkingCursor: React.FC<BlinkingCursorProps> = ({
  showPrompt = true,
  className = "",
}) => {
  // If blinking cursor is disabled, don't render anything
  if (!isBlinkingCursorEnabled()) {
    return null;
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {showPrompt && <span className="text-terminal-text">$</span>}
      <span className="text-terminal-text animate-pulse terminal-cursor">
        _
      </span>
    </div>
  );
};
