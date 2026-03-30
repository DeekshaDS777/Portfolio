# 🏗️ Component Architecture & Extension Guide

## Component Structure Overview

```
App (Main Container)
├── Navbar
│   └── Mobile Menu State
├── Hero
│   ├── Profile Section
│   └── CTA Buttons
├── About
│   ├── Bio Text
│   └── Highlight Cards
├── Skills
│   ├── Skill Categories
│   └── Proficiency Bars
├── Projects
│   └── Project Cards (Grid)
├── Education
│   └── Education Timeline
├── Achievements
│   ├── Achievement Cards
│   └── Statistics Grid
├── Contact
│   ├── Contact Form (With State)
│   ├── Contact Info
│   └── Social Links
└── Footer
    ├── Quick Links
    └── Social Media
```

---

## Component Breakdown

### 1. Navbar Component

**File**: `src/components/Navbar.jsx`

**Purpose**: Fixed navigation bar with responsive mobile menu

**Key Features**:
- Fixed positioning
- Mobile hamburger menu
- Smooth scroll links
- Backdrop blur effect

**Props**: None (Self-managed)

**State**:
```javascript
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

**Usage**:
```jsx
<Navbar />
```

**Customization**:
```javascript
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  // Add more links here
];
```

---

### 2. Hero Component

**File**: `src/components/Hero.jsx`

**Purpose**: Landing/hero section with intro and CTA buttons

**Key Features**:
- Large typography
- Two-column layout (responsive)
- Gradient background
- Profile image placeholder
- CTA buttons

**Props**: None

**Usage**:
```jsx
<Hero />
```

**Customization**:
```jsx
// Change name
<h1>Hi, I'm <span>Your Name</span></h1>

// Change intro text
<p>Your introduction here...</p>

// Change buttons
<a href="#projects">Your Button Text</a>
```

**Replace Profile Image**:
```jsx
// Old - emoji placeholder
<div className="text-6xl">📸</div>

// New - image
<img 
  src="/your-photo.jpg" 
  alt="Profile" 
  className="w-full h-full object-cover rounded-3xl" 
/>
```

---

### 3. About Component

**File**: `src/components/About.jsx`

**Purpose**: Personal introduction and highlight cards

**Key Features**:
- Intro paragraphs
- Highlight cards (4 grid)
- Icon-based cards
- Responsive layout

**Props**: None

**Customization**:
```javascript
// Update bio paragraphs
<p>Your biography text...</p>

// Highlight cards - add/remove/modify
<div>
  <div className="text-4xl mb-2">🎓</div>
  <h3>Your Title</h3>
  <p>Your description</p>
</div>
```

---

### 4. Skills Component

**File**: `src/components/Skills.jsx`

**Purpose**: Showcase technical and soft skills

**Key Features**:
- Categorized skills
- Skill tags with hover
- Proficiency progress bars
- Gradient progress bars

**Props**: None

**To Add Skills**:
```javascript
const skillCategories = [
  {
    category: 'Your Category',
    skills: ['Skill1', 'Skill2', 'Skill3'],
  },
];
```

**To Update Proficiency**:
```javascript
{
  skill: 'Skill Name',
  level: 90  // 0-100 percentage
}
```

---

### 5. Projects Component

**File**: `src/components/Projects.jsx`

**Purpose**: Showcase featured projects

**Key Features**:
- Project cards in 3-column grid
- Icon per project
- Tech stack tags
- Hover lift effect
- External links

**Props**: None

**Project Structure**:
```javascript
{
  title: 'Project Name',
  description: 'What the project does',
  tech: ['React', 'Node.js', 'MongoDB'],
  link: 'https://link-to-project.com',
  icon: '🚀',  // Any emoji or text
}
```

**To Add Projects**:
```javascript
const projects = [
  // Existing projects...
  {
    title: 'Your Project',
    description: 'Description...',
    tech: ['Tech1', 'Tech2'],
    link: '#',
    icon: '✨',
  },
];
```

---

### 6. Education Component

**File**: `src/components/Education.jsx`

**Purpose**: Display educational background

**Key Features**:
- Timeline-style cards
- Education details
- Highlight badges
- Statistics cards
- Accent left border

**Props**: None

**Education Entry Structure**:
```javascript
{
  degree: 'Bachelor of Technology',
  institution: 'University Name',
  duration: '2021 - 2025',
  details: 'CGPA: 8.5/10',
  highlights: ['Course1', 'Course2'],
}
```

---

### 7. Achievements Component

**File**: `src/components/Achievements.jsx`

**Purpose**: Display certifications and awards

**Key Features**:
- Achievement cards (2-column grid)
- Icon + content layout
- Date badges
- Statistics section
- Accent left border

**Props**: None

**Achievement Entry Structure**:
```javascript
{
  title: 'Certification Name',
  issuer: 'Issuing Organization',
  date: '2024',
  icon: '🏆',
  description: 'What you learned or achieved',
}
```

---

### 8. Contact Component

**File**: `src/components/Contact.jsx`

**Purpose**: Contact form and contact information

**Key Features**:
- Contact form with validation
- Submitted state feedback
- Contact info cards
- Social media links
- Email/phone shortcuts

**Props**: None

**State**:
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
});
const [submitted, setSubmitted] = useState(false);
```

**Contact Info Structure**:
```javascript
{
  icon: '📧',
  label: 'Email',
  value: 'your@email.com',
  link: 'mailto:your@email.com',
}
```

**Social Links Structure**:
```javascript
{
  icon: 'LinkedIn',
  url: 'https://linkedin.com/in/yourprofile',
  emoji: '💼',
}
```

---

### 9. Footer Component

**File**: `src/components/Footer.jsx`

**Purpose**: Footer section with links and info

**Key Features**:
- About blurb
- Quick navigation links
- Social media icons
- Copyright information
- Dark theme styling

**Props**: None

**Customization**:
```javascript
// Update year (auto-calculated)
const currentYear = new Date().getFullYear();

// Update sections
<h3>Your Section Title</h3>
<a href="#">Your Link</a>
```

---

## Component Extension Guide

### Creating a New Component

**1. Create File**:
```bash
src/components/NewComponent.jsx
```

**2. Basic Template**:
```jsx
import React from 'react';

export default function NewComponent() {
  return (
    <section id="new-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-beige-900 mb-4">
            Section Title
          </h2>
          <div className="w-16 h-1 bg-beige-700 mx-auto"></div>
        </div>

        {/* Your content here */}
      </div>
    </section>
  );
}
```

**3. Add to App.jsx**:
```jsx
import NewComponent from './components/NewComponent';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* ... other components ... */}
      <NewComponent />  {/* Add here */}
      <Footer />
    </div>
  );
}
```

### Converting Static Data to Props

**Before**:
```jsx
const skillCategories = [
  { category: 'Frontend', skills: [...] },
];
```

**After**:
```jsx
export default function Skills({ categories = defaultCategories }) {
  return (
    // Use this.props.categories
  );
}

const defaultCategories = [
  { category: 'Frontend', skills: [...] },
];
```

### Adding State Management

**Using useState**:
```jsx
import React, { useState } from 'react';

export default function NewComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? 'Close' : 'Open'}
    </button>
  );
}
```

### Adding Dynamic Content from API

**Example**:
```jsx
import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>{project.title}</div>
      ))}
    </div>
  );
}
```

---

## Common Patterns

### Reusable Card Component

**Create**: `src/components/Card.jsx`

```jsx
export default function Card({ title, description, icon, children, className = '' }) {
  return (
    <div className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all ${className}`}>
      {icon && <div className="text-4xl mb-3">{icon}</div>}
      {title && <h3 className="text-xl font-bold text-beige-900 mb-2">{title}</h3>}
      {description && <p className="text-beige-600">{description}</p>}
      {children}
    </div>
  );
}
```

**Usage**:
```jsx
<Card 
  icon="🎓" 
  title="Education"
  description="B.Tech Computer Science"
/>
```

### Reusable Badge Component

**Create**: `src/components/Badge.jsx`

```jsx
export default function Badge({ text, variant = 'primary' }) {
  const variants = {
    primary: 'bg-beige-100 text-beige-700',
    secondary: 'bg-beige-700 text-white',
    outline: 'border-2 border-beige-700 text-beige-700',
  };

  return (
    <span className={`px-4 py-2 rounded-full text-sm font-medium ${variants[variant]}`}>
      {text}
    </span>
  );
}
```

**Usage**:
```jsx
<Badge text="React" variant="primary" />
```

### Data-Driven Component

**Pattern**:
```jsx
const data = [
  { id: 1, title: 'Item 1', ... },
  { id: 2, title: 'Item 2', ... },
];

export default function Component() {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {item.title}
        </div>
      ))}
    </div>
  );
}
```

---

## Styling Patterns

### Section Pattern
```jsx
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-6xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### Grid Pattern
```jsx
{/* 1 col mobile, 2 cols tablet, 3 cols desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <div key={item.id}>{item.name}</div>
  ))}
</div>
```

### Title Pattern
```jsx
<div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-bold text-beige-900 mb-4">
    Section Title
  </h2>
  <div className="w-16 h-1 bg-beige-700 mx-auto"></div>
</div>
```

### Button Pattern
```jsx
{/* Primary */}
<button className="px-8 py-3 bg-beige-700 text-white rounded-lg hover:bg-beige-800 transition-colors">
  Primary
</button>

{/* Secondary */}
<button className="px-8 py-3 border-2 border-beige-700 text-beige-700 rounded-lg hover:bg-beige-50 transition-colors">
  Secondary
</button>
```

---

## Performance Optimization

### Lazy Loading Components

```jsx
import React, { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./Projects'));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Projects />
    </Suspense>
  );
}
```

### Memoization

```jsx
import React, { memo } from 'react';

const ProjectCard = memo(function ProjectCard({ project }) {
  return (
    <div>{project.title}</div>
  );
});

export default ProjectCard;
```

### Computed Values

```jsx
const expensiveCalculation = useMemo(() => {
  return items.reduce((acc, item) => acc + item.value, 0);
}, [items]);
```

---

## Testing Locally

### Development Workflow

1. **Start dev server**:
   ```bash
   npm run dev
   ```

2. **Edit component**:
   ```jsx
   // Make changes in editor
   ```

3. **Hot reload**:
   - Page auto-reloads in browser
   - Check console for errors

4. **Debug**:
   - Open DevTools (F12)
   - Inspect elements
   - Check console messages

---

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev)
- [React Hooks Reference](https://react.dev/reference/react)

---

## Summary

**Component Architecture**:
- 9 modular, reusable components
- Consistent styling patterns
- Easy to extend and customize
- Well-documented code

**Extending**:
- Add data to arrays
- Create new components
- Integrate APIs
- Add animations
- Deploy with confidence!

---

**Happy coding! Build something amazing! 🚀**
