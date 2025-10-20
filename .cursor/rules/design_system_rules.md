# Design System Rules - Maison Beignet

## 🎨 Design System Structure

### 1. Token Definitions

**Location**: `styles.css` lines 9-16
**Format**: CSS Custom Properties (CSS Variables)

```css
:root {
  --bg-color: #2D35DC;           /* Primary brand color - deep blue */
  --accent-color: #FEFD40;       /* Secondary brand color - bright yellow */
  --text-light: #ffffff;         /* Primary text color */
  --text-muted: rgba(255, 255, 255, 0.7); /* Secondary text color */
  --warm-brown: #b87333;         /* Accent color for warm elements */
  --max-width: 1180px;           /* Maximum content width */
}
```

**Token Categories**:
- **Colors**: Brand colors with semantic naming
- **Typography**: Font family defined globally
- **Spacing**: Implicit through component padding/margins
- **Layout**: Max-width constraint for content

### 2. Component Library

**Architecture**: CSS-based component system (no framework)
**Location**: `styles.css` - Component classes defined throughout

**Key Components**:
```css
/* Navigation */
.nav, .nav__logo, .nav__links, .nav__burger, .nav__icon

/* Hero Section */
.hero, .hero__content, .hero__text, .hero__beignet, .hero__wave

/* Buttons */
.btn, .btn--primary, .btn--outline

/* Cards */
.location-card, .product-card, .contact__inner

/* Sections */
.section, .section__intro, .section__eyebrow
```

**Component Pattern**: BEM-like naming convention
- Block: `.component`
- Element: `.component__element`
- Modifier: `.component--modifier`

### 3. Frameworks & Libraries

**UI Framework**: None (Vanilla HTML/CSS/JS)
**Styling**: Pure CSS with CSS Custom Properties
**Build System**: Static site (Netlify)
**Bundler**: None (direct file serving)

**Dependencies**:
- Custom font: `Super Joyful.ttf`
- No external CSS frameworks
- No JavaScript libraries

### 4. Asset Management

**Storage**: `/assets/` directory
**Structure**:
```
assets/
├── Images (PNG/JPG)
│   ├── Product images (beignet-*.png)
│   ├── Location images (Plage-*.jpg)
│   └── Brand assets (Logo-*.png)
├── Fonts
│   └── Super Joyful.ttf
└── Icons (embedded in images)
```

**Optimization Techniques**:
- Lazy loading: `loading="lazy"` attribute
- Image compression: Manual optimization
- Font loading: `font-display: swap`

### 5. Icon System

**Approach**: Image-based icons (no icon font)
**Location**: `/assets/` directory
**Naming Convention**: `Logo [Type].png`
- `Logo Texte.png` - Text logo
- `Logo Maison.png` - Icon logo

**Usage Pattern**:
```html
<img src="assets/Logo Texte.png" alt="Maison Beignet logo">
```

### 6. Styling Approach

**Methodology**: Component-based CSS with BEM-like naming
**Global Styles**: Reset and base styles in `styles.css`
**Responsive Design**: Mobile-first with media queries

**Media Query Breakpoints**:
```css
@media (max-width: 960px) { /* Tablet */ }
@media (max-width: 680px) { /* Mobile */ }
@media (max-width: 500px) { /* Small mobile */ }
```

**CSS Organization**:
1. CSS Reset & Base styles
2. CSS Custom Properties
3. Component styles
4. Responsive styles
5. Animations

### 7. Project Structure

```
/
├── index.html              # Main HTML file
├── styles.css              # All styles
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── netlify.toml            # Deployment config
└── assets/                 # All assets
    ├── Images/
    ├── Fonts/
    └── Icons/
```

**Patterns**:
- Single-page application structure
- Asset organization by type
- Configuration files at root level

## 🎯 Design System Guidelines

### Color Usage
- **Primary Blue** (`#2D35DC`): Background, primary elements
- **Accent Yellow** (`#FEFD40`): CTAs, highlights, text accents
- **White** (`#ffffff`): Primary text, contrast
- **Muted White** (`rgba(255,255,255,0.7)`): Secondary text
- **Warm Brown** (`#b87333`): Product-specific accents

### Typography
- **Font Family**: `Super Joyful` (custom font)
- **Fallbacks**: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Weights**: 700 (bold), 900 (black)
- **Responsive**: `clamp()` for fluid typography

### Spacing System
- **Implicit spacing**: Component-based padding/margins
- **Grid gaps**: `2rem`, `2.5rem`, `3rem`
- **Section padding**: `6rem 4vw`
- **Component padding**: `1.75rem`, `2rem`, `2.5rem`

### Component Patterns

**Button System**:
```css
.btn {
  /* Base button styles */
}
.btn--primary {
  /* Primary button variant */
}
.btn--outline {
  /* Outline button variant */
}
```

**Card System**:
```css
.location-card {
  /* Base card styles */
}
.location-card__image {
  /* Card image element */
}
.location-card__image--nauzan {
  /* Card image modifier */
}
```

## 🔧 Integration Guidelines

### Adding New Components
1. Follow BEM naming convention
2. Use CSS custom properties for theming
3. Include responsive variants
4. Add hover/focus states
5. Consider accessibility

### Asset Integration
1. Place in `/assets/` directory
2. Use descriptive filenames
3. Optimize for web (compress images)
4. Add lazy loading for images
5. Include alt text for accessibility

### Responsive Design
1. Mobile-first approach
2. Use `clamp()` for fluid typography
3. Test at all breakpoints
4. Consider touch targets (44px minimum)
5. Optimize for mobile performance

### Performance Considerations
1. Lazy load images below the fold
2. Use `font-display: swap` for custom fonts
3. Minimize CSS specificity
4. Use CSS custom properties for theming
5. Consider critical CSS for above-the-fold content

## 📱 Figma Integration Guidelines

### Design Token Mapping
When importing from Figma, map design tokens as follows:

**Colors**:
- Figma color → CSS custom property
- Use semantic naming (not color names)
- Maintain brand consistency

**Typography**:
- Figma text styles → CSS font properties
- Use `clamp()` for responsive sizing
- Maintain font hierarchy

**Spacing**:
- Figma spacing → CSS padding/margin
- Use consistent spacing scale
- Consider mobile adaptations

**Components**:
- Figma components → CSS classes
- Follow BEM naming convention
- Include all states (hover, focus, active)

### Asset Export Guidelines
1. **Images**: Export as PNG/JPG, optimize for web
2. **Icons**: Export as SVG when possible, PNG as fallback
3. **Fonts**: Export as TTF/WOFF2
4. **Naming**: Use descriptive, consistent naming

### Responsive Considerations
1. **Mobile-first**: Design for mobile, enhance for desktop
2. **Breakpoints**: Align with CSS media queries
3. **Touch targets**: Minimum 44px for interactive elements
4. **Content priority**: Ensure important content is visible on mobile

### Accessibility Integration
1. **Color contrast**: Ensure WCAG AA compliance
2. **Focus states**: Design visible focus indicators
3. **Alt text**: Plan for image descriptions
4. **Semantic HTML**: Use proper heading hierarchy

## 🚀 Development Workflow

### Component Development
1. **Design**: Create in Figma with design tokens
2. **Export**: Export assets and specifications
3. **Code**: Implement with CSS classes
4. **Test**: Verify responsive behavior
5. **Document**: Update component library

### Asset Pipeline
1. **Export**: From Figma with proper naming
2. **Optimize**: Compress images, convert formats
3. **Organize**: Place in `/assets/` directory
4. **Reference**: Update CSS/HTML with new paths
5. **Test**: Verify loading and display

### Quality Assurance
1. **Cross-browser**: Test in major browsers
2. **Responsive**: Test all breakpoints
3. **Performance**: Check loading times
4. **Accessibility**: Verify keyboard navigation
5. **SEO**: Validate meta tags and structure

## 📊 Performance Metrics

### Key Performance Indicators
- **Lighthouse Score**: Target 90+ for all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

### Optimization Strategies
1. **Images**: Lazy loading, WebP format, proper sizing
2. **Fonts**: `font-display: swap`, preload critical fonts
3. **CSS**: Minimize unused styles, critical CSS
4. **JavaScript**: Minimal, non-blocking scripts
5. **Caching**: Service worker for offline functionality

## 🔍 Code Quality Standards

### CSS Standards
- **Naming**: BEM methodology for components
- **Organization**: Logical grouping of styles
- **Comments**: Document complex styles
- **Consistency**: Use design tokens throughout
- **Performance**: Minimize specificity conflicts

### HTML Standards
- **Semantic**: Use proper HTML5 elements
- **Accessibility**: Include ARIA labels where needed
- **SEO**: Proper heading hierarchy and meta tags
- **Performance**: Optimize for loading speed
- **Validation**: Ensure valid HTML markup

### JavaScript Standards
- **Vanilla**: No external dependencies
- **Performance**: Minimal, efficient code
- **Accessibility**: Keyboard navigation support
- **Progressive**: Graceful degradation
- **Maintainable**: Clear, documented code