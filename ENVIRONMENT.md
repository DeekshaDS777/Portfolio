# 🔧 Environment & Build Configuration

## System Requirements

### Minimum Requirements
- **Node.js**: v14.0.0 or higher
- **npm**: v6.0.0 or higher (or yarn/pnpm)
- **RAM**: 512MB minimum
- **Disk Space**: ~500MB for dependencies

### Recommended Specifications
- **Node.js**: v18 LTS or higher
- **npm**: v8.0.0 or higher
- **RAM**: 2GB+
- **Modern browser**: Chrome, Firefox, Safari, or Edge (latest)

---

## Installation Steps

### 1. Verify Node.js Installation
```bash
node --version
npm --version
```

If not installed, download from [nodejs.org](https://nodejs.org/)

### 2. Navigate to Project
```bash
cd "d:\Deeksha Portfolio"
```

### 3. Install Dependencies
```bash
npm install
```

This installs all packages defined in `package.json`:
- React (UI Framework)
- ReactDOM (React renderer)
- Tailwind CSS (Styling)
- Vite (Build tool)
- PostCSS & Autoprefixer (CSS processing)

**Installation Time**: 2-5 minutes (depending on internet speed)

### 4. Verify Installation
```bash
npm list
```

Should show all dependencies without errors.

---

## Build Configurations

### Development Mode (`npm run dev`)

**Configuration**: `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

**Features**:
- Hot Module Replacement (HMR)
- Fast refresh on file changes
- Source maps for debugging
- Development server on port 5173
- No minification (for debugging)

**Performance**: Instant startup, fast reload

### Production Build (`npm run build`)

**Process**:
1. Minifies JavaScript and CSS
2. Removes unused Tailwind styles
3. Optimizes assets
4. Creates `dist/` folder
5. Ready for deployment

**Output**:
```
dist/
├── index.html        (~2-3KB)
├── assets/
│   ├── index-[hash].js     (~100KB)
│   └── index-[hash].css    (~15KB)
└── vite.svg
```

**Build Time**: 5-10 seconds

### Preview (`npm run preview`)

Tests production build locally before deploying.

```bash
npm run preview
```

Open: `http://localhost:4173`

---

## Tailwind CSS Configuration

### Configuration File: `tailwind.config.js`

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#faf8f3',
          100: '#f5f1e8',
          200: '#ede6da',
          // ... more colors
          900: '#4a4540',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### Customization

**Add Custom Colors**:
```javascript
theme: {
  extend: {
    colors: {
      customColor: {
        50: '#f0f0f0',
        500: '#5a5a5a',
        900: '#1a1a1a',
      }
    }
  }
}
```

**Add Custom Fonts**:
```javascript
theme: {
  extend: {
    fontFamily: {
      display: ['Playfair Display', 'serif'],
    }
  }
}
```

**Add Plugins**:
```javascript
plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
]
```

---

## PostCSS Configuration

### File: `postcss.config.js`

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**Functions**:
- **Tailwind CSS**: Processes Tailwind directives
- **Autoprefixer**: Adds vendor prefixes for browser compatibility

**Example Output**:
```css
/* Before */
display: flex;

/* After (with Autoprefixer) */
display: -webkit-box;
display: -webkit-flex;
display: -moz-box;
display: -ms-flexbox;
display: flex;
```

---

## Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",                    // Start dev server
    "build": "vite build",            // Production build
    "preview": "vite preview"         // Preview build
  }
}
```

### Running Scripts
```bash
npm run dev      # Development
npm run build    # Production
npm run preview  # Preview
```

---

## Environment Variables

### Creating `.env` File

Create file: `.env`

```env
VITE_APP_URL=http://localhost:5173
VITE_API_BASE_URL=https://api.example.com
```

### Using in Code

```javascript
const apiUrl = import.meta.env.VITE_API_BASE_URL
```

### Environment-Specific Files

- `.env` - All environments
- `.env.development` - Development only
- `.env.production` - Production only

---

## Development Server

### Default URL
```
http://localhost:5173
```

### Port Configuration

**Change port in `vite.config.js`**:
```javascript
export default defineConfig({
  server: {
    port: 3000,
  }
})
```

**Or via CLI**:
```bash
npm run dev -- --port 3000
```

### Auto-Open Browser

**In `vite.config.js`**:
```javascript
export default defineConfig({
  server: {
    open: true,  // Auto-open browser
  }
})
```

---

## Performance Optimization

### Bundle Analysis
```bash
npm install -g vite-plugin-visualizer
```

Add to `vite.config.js`:
```javascript
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    // ... other plugins
    visualizer(),
  ]
})
```

### CSS Optimization
Tailwind automatically:
- Removes unused styles
- Minifies CSS
- Deduplicates classes

### JavaScript Optimization
Vite:
- Tree-shakes unused imports
- Minifies code
- Bundles efficiently

---

## Browser Compatibility

### Target Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Fallbacks
All modern CSS features used have fallbacks or browser support.

---

## Deployment Configurations

### Vercel (`vercel.json`)

Optional - Vercel auto-detects Vite:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### Netlify (`netlify.toml`)

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Pages

Add to `package.json`:
```json
"homepage": "https://username.github.io/repo-name"
```

---

## Troubleshooting

### Port Already in Use
```bash
# On Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or change port
npm run dev -- --port 3001
```

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Memory Issues
```bash
# Increase Node memory
export NODE_OPTIONS=--max_old_space_size=4096
npm run build
```

### Dependencies Conflict
```bash
# Force resolution
npm install --save-peer-dependencies
```

---

## Performance Metrics

### Expected Build Times
- **Development Start**: < 500ms
- **Hot Reload**: < 100ms
- **Production Build**: 5-15 seconds

### Bundle Sizes (Gzipped)

| Asset | Size |
|-------|------|
| React | ~42KB |
| Tailwind CSS | ~15KB |
| App Code | ~50KB |
| **Total** | **~107KB** |

### Lighthouse Scores (Expected)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

---

## Production Checklist

Before deploying:
- [ ] Run `npm run build` successfully
- [ ] Test with `npm run preview`
- [ ] Check all pages load
- [ ] Test on mobile device
- [ ] Lighthouse score 80+
- [ ] No console errors
- [ ] All links working
- [ ] Images loading
- [ ] Forms functional

---

## Useful Commands

```bash
# Check Node/npm versions
node -v
npm -v

# List installed packages
npm list

# Check for outdated packages
npm outdated

# Update packages
npm update

# Clear npm cache
npm cache clean --force

# Check for security vulnerabilities
npm audit

# Install specific version
npm install package@version
```

---

## Next Steps

1. ✅ Verify Node.js and npm are installed
2. ✅ Run `npm install` to install dependencies
3. ✅ Run `npm run dev` to start development
4. ✅ Open browser to `http://localhost:5173`
5. ✅ Start customizing your portfolio!

---

**Environment setup complete! Ready to develop! 🚀**
