# Terminal Configuration

This configuration file allows you to easily toggle terminal effects and styling.

## Configuration Options

Edit `src/config/terminal.ts` to enable/disable features:

### `enableTerminalWindow: boolean`

- Controls terminal window styling (background, borders, left borders)
- When `false`: Removes terminal background, borders, and left borders throughout the site
- Default: `true`

### `enableBlinkingCursor: boolean`

- Controls blinking cursor display and animation
- When `false`: Cursor blocks are completely hidden from the UI
- When `true`: Shows blinking cursor with animation
- Default: `true`

### `enableMatrixRain: boolean`

- Controls matrix rain background effect
- When `false`: Removes matrix rain animation completely
- Default: `true`

### `enableTerminalShadow: boolean`

- Controls terminal glow/shadow effects
- When `false`: Removes terminal shadows
- Default: `true`

## Usage Example

```typescript
export const TERMINAL_CONFIG = {
  enableTerminalWindow: false, // Disable terminal styling
  enableBlinkingCursor: true, // Keep cursor blinking
  enableMatrixRain: false, // Disable matrix rain
  enableTerminalShadow: false, // Disable shadows
} as const;
```

## Component Usage

The blinking cursor is now handled by the `BlinkingCursor` component:

```tsx
import { BlinkingCursor } from "./BlinkingCursor";

// Basic usage
<BlinkingCursor />

// With custom styling
<BlinkingCursor className="mt-4" />

// Without prompt (just cursor)
<BlinkingCursor showPrompt={false} />
```

## Effects

- **All enabled**: Full terminal aesthetic with matrix rain, borders, and blinking cursors
- **Terminal disabled**: Clean, minimal design without any terminal styling
- **Matrix rain disabled**: Terminal styling without background animation
- **Cursor disabled**: No blinking cursors anywhere on the site
- **Shadow disabled**: Terminal windows without glow effects

## Components Affected

- **TerminalWindow**: Uses terminal and shadow configs
- **Navigation**: Uses terminal and shadow configs
- **BlogList**: Uses cursor config
- **BlogPost**: Uses cursor config
- **About page**: Uses terminal and cursor configs
- **Blog post pages**: Uses terminal, shadow, and cursor configs
- **Layout**: Uses matrix rain config
