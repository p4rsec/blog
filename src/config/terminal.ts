/**
 * Terminal Configuration
 * Toggle terminal effects and styling
 */

export const TERMINAL_CONFIG = {
  // Enable/disable terminal window styling
  enableTerminalWindow: false,

  // Enable/disable blinking cursor animation
  enableBlinkingCursor: false,

  // Enable/disable matrix rain background effect
  enableMatrixRain: true,

  // Enable/disable terminal shadows/glow effects
  enableTerminalShadow: true,
} as const;

// Helper functions to check if features are enabled
export const isTerminalWindowEnabled = () =>
  TERMINAL_CONFIG.enableTerminalWindow;
export const isBlinkingCursorEnabled = () =>
  TERMINAL_CONFIG.enableBlinkingCursor;
export const isMatrixRainEnabled = () => TERMINAL_CONFIG.enableMatrixRain;
export const isTerminalShadowEnabled = () =>
  TERMINAL_CONFIG.enableTerminalShadow;
