# CLAUDE.md - Project Documentation

## Project Overview

**Tailwind VPN Landingpage** is an open-source landing page template built with Next.js and Tailwind CSS. This template is designed for VPN or app landing pages with a modern, responsive design.

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Package Manager**: Bun
- **Language**: JavaScript/React
- **Animation**: Framer Motion

## Key Dependencies

- **Next.js**: React framework for production
- **React**: UI library (v17+)
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Slick**: Carousel/slider component
- **React Scroll**: Smooth scrolling functionality
- **PostCSS**: CSS processing tool
- **PurgeCSS**: Remove unused CSS

## Project Structure

```
ars-shrimp/
├── components/          # React components
├── pages/              # Next.js pages
├── public/             # Static assets
├── styles/             # CSS/Tailwind styles
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
└── postcss.config.js   # PostCSS configuration
```

## Development Commands

### Using Bun

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun run build

# Start production server
bun start

# Export static site
bun run export
```

## Features

- **Image Optimization**: Using Next.js Image component
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Scrolling**: React Scroll integration
- **Interactive Slider**: React Slick carousel
- **Animation**: Framer Motion for smooth animations
- **CSS Optimization**: PurgeCSS removes unused styles

## Development Workflow

1. **Install dependencies**: `bun install`
2. **Start dev server**: `bun dev`
3. **Make changes**: Edit files in components, pages, or styles
4. **Build**: `bun run build` to verify production build
5. **Export**: `bun run export` for static deployment

## Environment Setup

This project uses Bun as the package manager. Make sure you have Bun installed:

```bash
curl -fsSL https://bun.sh/install | bash
```

## Build Process

The build process includes:
- Next.js compilation and optimization
- Tailwind CSS processing
- PurgeCSS for removing unused styles
- Image optimization

## Deployment

This template is optimized for Vercel deployment but can be deployed to any platform that supports Next.js.

## Notes for Claude Code

- **Package Manager**: This project uses Bun (not npm or yarn)
- **Next.js Version**: Currently using Next.js 12.x
- **React Version**: Currently using React 17.x
- **Build Command**: Always run `bun run build` to verify changes don't break production
- **Lock File**: Uses `pnpm-lock.yaml` (can be replaced with `bun.lockb`)

## Common Tasks

### Adding a New Component
1. Create component in `/components` directory
2. Import and use in pages
3. Style with Tailwind CSS classes

### Updating Styles
1. Edit Tailwind classes in components
2. Or add custom CSS in `/styles` directory
3. Configure custom styles in `tailwind.config.js`

### Adding Dependencies
```bash
bun add <package-name>
bun add -D <package-name>  # for dev dependencies
```

## Known Issues

- None currently documented

## License

MIT License - See LICENSE file for details
