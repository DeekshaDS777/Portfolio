# Deeksha's Portfolio Website

A modern, fully responsive portfolio website built with React and Tailwind CSS. Perfect for showcasing projects, skills, and achievements for campus placements.

## 🎨 Features

### Responsive Design
- **Mobile First**: Fully responsive design that works seamlessly on all devices
- **Responsive Components**: Adaptive layouts for mobile, tablet, and desktop
- **Touch-Friendly Navigation**: Mobile navigation menu for easy access

### Component Sections
1. **Navbar** - Fixed navigation with smooth scrolling and mobile menu
2. **Hero Section** - Impressive landing section with profile placeholder and CTA buttons
3. **About** - Personal introduction with key highlights
4. **Skills** - Categorized skills with proficiency levels
5. **Projects** - Showcase of featured projects with tech stack
6. **Education** - Academic background with highlights
7. **Achievements & Certifications** - Recognition and awards display
8. **Contact** - Contact form and multiple contact methods
9. **Footer** - Social links and quick navigation

### Design Elements
- Clean, modern aesthetic with soft beige/neutral color palette
- Smooth animations and hover effects
- Large, bold typography for strong visual hierarchy
- Rounded borders and minimal elegant UI
- Card-based modern design layout
- Gradient backgrounds for visual interest

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.2.3
- **Styling**: Tailwind CSS 3.4.3
- **CSS Processing**: PostCSS 8.4.38
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/deeksha-portfolio.git
   cd deeksha-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The portfolio will reload automatically when you make changes

## 📝 Customization

### Update Personal Information

1. **Navbar** - Edit [src/components/Navbar.jsx](src/components/Navbar.jsx)
   - Update navigation links
   - Change logo/brand name

2. **Hero Section** - Edit [src/components/Hero.jsx](src/components/Hero.jsx)
   - Update introductory text
   - Customize CTA button links
   - Replace profile image placeholder with actual image

3. **About Section** - Edit [src/components/About.jsx](src/components/About.jsx)
   - Update personal description
   - Modify achievement highlights

4. **Skills Section** - Edit [src/components/Skills.jsx](src/components/Skills.jsx)
   - Add/remove skill categories
   - Update proficiency levels (0-100)

5. **Projects Section** - Edit [src/components/Projects.jsx](src/components/Projects.jsx)
   - Replace project names and descriptions
   - Update tech stacks
   - Add project links

6. **Education Section** - Edit [src/components/Education.jsx](src/components/Education.jsx)
   - Add your educational qualifications
   - Update institutional details
   - Modify CGPA and achievements

7. **Achievements Section** - Edit [src/components/Achievements.jsx](src/components/Achievements.jsx)
   - Add your certifications
   - Update achievement dates
   - Modify achievement descriptions

8. **Contact Section** - Edit [src/components/Contact.jsx](src/components/Contact.jsx)
   - Update contact information
   - Add social media links
   - Configure form submission endpoint

9. **Footer** - Edit [src/components/Footer.jsx](src/components/Footer.jsx)
   - Update footer links
   - Add social media handles

### Replace Profile Image

1. Add your image to `src/assets/` folder
2. In [src/components/Hero.jsx](src/components/Hero.jsx), replace the emoji placeholder:
   ```jsx
   {/* Change this */}
   <div className="text-6xl">📸</div>
   
   {/* To this */}
   <img src="/path-to-your-image.jpg" alt="Profile" className="w-full h-full object-cover rounded-3xl" />
   ```

### Update Colors

The color scheme uses a custom beige palette defined in [tailwind.config.js](tailwind.config.js):

```javascript
colors: {
  beige: {
    50: '#faf8f3',   // lightest
    100: '#f5f1e8',
    200: '#ede6da',
    // ... more colors
    900: '#4a4540',  // darkest
  },
}
```

To change the color scheme:
1. Update color values in `tailwind.config.js`
2. Update class references in components (e.g., `bg-beige-700` → `bg-your-color-700`)

## 🏗️ Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Vite and configure build settings
   - Your site will be live instantly!

### Deploy to Netlify

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Drag and drop the `dist/` folder to Netlify**
   - Or connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages

1. **Add deploy script to package.json**
   ```json
   "deploy": "gh-pages -d dist"
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## 📱 Responsive Breakpoints

The portfolio uses Tailwind CSS breakpoints:
- **Mobile**: < 640px (`sm:`)
- **Tablet**: ≥ 768px (`md:`)
- **Desktop**: ≥ 1024px (`lg:`)

## 🔍 SEO Optimization

To improve SEO:

1. Update `index.html` title and meta tags
2. Add meta descriptions in each component
3. Use semantic HTML elements
4. Add alt text to images
5. Ensure proper heading hierarchy
6. Optimize image sizes

## ⚡ Performance Tips

1. **Optimize Images**
   - Use Next.js Image component or similar
   - Compress images before adding to portfolio
   - Use modern image formats (WebP)

2. **Code Splitting**
   - Vite automatically code-splits components
   - Consider lazy loading for off-screen components

3. **Minimize Dependencies**
   - Keep dependencies minimal for faster builds
   - Use CSS utilities instead of extra libraries

## 🚨 Accessibility

The portfolio follows accessibility best practices:
- Semantic HTML structure
- Proper heading hierarchy
- Color contrast compliance
- Keyboard navigation support
- ARIA labels where needed

## 📚 Project Structure

```
deeksha-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 💡 Best Practices

1. **Keep Content Updated** - Regularly update projects, skills, and achievements
2. **Maintain Personal Brand** - Use consistent styling and messaging
3. **Mobile First** - Test on mobile devices first during development
4. **Fast Load Times** - Optimize images and assets
5. **Clear CTAs** - Make contact and project links prominent
6. **Professional Links** - Ensure all social and project links are active

## 🤝 Contribution

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them back!

## 📄 License

This project is open source and available for personal use.

## 💬 Support

For issues or questions:
1. Check the documentation
2. Review the component code
3. Reach out via contact form on the portfolio

## 🎯 Next Steps

1. Replace placeholder content with your actual information
2. Add your profile image
3. Update all links to your social media and projects
4. Test responsiveness on multiple devices
5. Deploy to your preferred hosting platform
6. Monitor and maintain the portfolio regularly

---

**Made with ❤️ using React and Tailwind CSS**
