# p4rsec

A blog built with Astro, React, TypeScript, and Tailwind CSS, featuring a retro terminal aesthetic.

## Tech Stack

- **Astro** - Static site generation
- **React** - Interactive components
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling with custom terminal theme
- **HTML5 Canvas** - Terminal rain effect

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd blog
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## Project Structure

```
src/
├── components/          # React components
│   ├── TerminalWindow.tsx
│   ├── Header.tsx
│   ├── BlogPost.tsx
│   ├── BlogList.tsx
│   └── Navigation.tsx
├── layouts/            # Astro layouts
│   └── Layout.astro
├── pages/             # Astro pages
│   ├── index.astro
│   ├── about.astro
│   ├── posts.astro
│   └── posts/          # Individual blog posts
├── styles/            # Global styles
│   └── global.css
└── public/            # Static assets
    └── favicon.svg
```

## Customization

### Colors

The terminal theme uses CSS custom properties defined in `src/styles/global.css`:

```css
:root {
  --terminal-green: #00ff41;
  --terminal-dark-green: #008f11;
  --terminal-bg: #0d0208;
  --terminal-text: #00ff41;
  --terminal-accent: #008f11;
  --terminal-border: #003b00;
}
```

### Tailwind Configuration

Custom colors and animations are defined in `tailwind.config.mjs`:

```javascript
colors: {
  terminal: {
    green: '#00FF41',
    'dark-green': '#008F11',
    bg: '#0D0208',
    text: '#00FF41',
    accent: '#008F11',
    border: '#003B00',
  }
}
```

## Adding New Posts

1. Create a new file in `src/pages/posts/`
2. Use the existing post structure as a template
3. Update the posts array in `index.astro` and `posts.astro`

## Matrix Rain Effect

The matrix rain effect is implemented using HTML5 Canvas and JavaScript. It creates falling green characters in the background, reminiscent of classic terminal interfaces.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
