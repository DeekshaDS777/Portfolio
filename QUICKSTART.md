# 🚀 Quick Start Guide

## Installation & Setup (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The portfolio will open at `http://localhost:5173`

---

## 📝 Quick Customization Checklist

### Essential Updates (Do These First!)

- [ ] **Update Hero Section**
  - [ ] Change name from "Deeksha" to your name
  - [ ] Update intro text in [src/components/Hero.jsx](src/components/Hero.jsx)
  - [ ] Replace profile image placeholder with your photo

- [ ] **Update Education**
  - [ ] Add your degree and university in [src/components/Education.jsx](src/components/Education.jsx)
  - [ ] Update CGPA/grades
  - [ ] Add relevant coursework

- [ ] **Update Skills**
  - [ ] Add your technical skills in [src/components/Skills.jsx](src/components/Skills.jsx)
  - [ ] Update proficiency percentages
  - [ ] Modify skill categories if needed

- [ ] **Update Projects**
  - [ ] Add your actual projects in [src/components/Projects.jsx](src/components/Projects.jsx)
  - [ ] Include project descriptions and tech stacks
  - [ ] Add links to GitHub repos or hosted projects

- [ ] **Update Contact**
  - [ ] Add your email in [src/components/Contact.jsx](src/components/Contact.jsx)
  - [ ] Add phone number
  - [ ] Update social media links

### Additional Customizations

- [ ] Update achievements and certifications
- [ ] Modify about section content
- [ ] Update footer information
- [ ] Customize color scheme if desired
- [ ] Add favicon
- [ ] Update page title in index.html

---

## 🎨 How to Customize Each Section

### Hero Section
**File**: `src/components/Hero.jsx`

```jsx
// Change this
<h1 className="text-5xl md:text-6xl font-bold text-beige-900 mb-6 leading-tight">
  Hi, I'm <span className="text-beige-700">Deeksha</span>
</h1>

// To your name
<h1 className="text-5xl md:text-6xl font-bold text-beige-900 mb-6 leading-tight">
  Hi, I'm <span className="text-beige-700">Your Name</span>
</h1>
```

### Add Profile Image
**File**: `src/components/Hero.jsx`

Replace the emoji placeholder:
```jsx
{/* Old */}
<div className="text-6xl">📸</div>

{/* New - Add your image */}
<img 
  src="/your-profile-photo.jpg" 
  alt="Your Profile" 
  className="w-full h-full object-cover rounded-3xl" 
/>
```

### Update Skills
**File**: `src/components/Skills.jsx`

```jsx
const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Your', 'Skills', 'Here'],
  },
  // Add more categories...
];
```

### Add Projects
**File**: `src/components/Projects.jsx`

```jsx
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    tech: ['React', 'MongoDB'],
    link: 'https://link-to-project.com',
    icon: '🚀',
  },
  // Add more projects...
];
```

---

## 🌐 Deployment

### Option 1: Vercel (Recommended - 2 minutes)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your GitHub repo
4. Click "Deploy" - Done! ✅

### Option 2: Netlify
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist/` folder
4. Your site is live! ✅

### Option 3: GitHub Pages
1. Run `npm run build`
2. Commit and push to GitHub
3. Enable GitHub Pages in repository settings
4. Your site will be available at `username.github.io` ✅

---

## 📱 Testing Responsive Design

1. **Desktop**: Full-width layout (1024px+)
2. **Tablet**: Medium layout (768-1023px)  
3. **Mobile**: Stacked layout (<768px)

Test by:
- Resizing browser window
- Using Chrome DevTools (F12 → Device toolbar)
- Testing on actual devices

---

## 🔗 Key Files to Edit

| Section | File | What to Change |
|---------|------|----------------|
| Name & Intro | `src/components/Hero.jsx` | Heading, description |
| About | `src/components/About.jsx` | Bio and highlights |
| Skills | `src/components/Skills.jsx` | Skills and proficiency |
| Projects | `src/components/Projects.jsx` | Projects and links |
| Education | `src/components/Education.jsx` | Degree details |
| Achievements | `src/components/Achievements.jsx` | Certifications |
| Contact | `src/components/Contact.jsx` | Email, phone, socials |
| Colors | `tailwind.config.js` | Color values |

---

## 💡 Pro Tips

1. **Smooth Development**
   - Keep `npm run dev` running while editing
   - Changes hot-reload automatically

2. **SEO Ready**
   - Update title in `index.html`
   - Fill in all content fields
   - Use descriptive project names

3. **Performance**
   - Compress images before adding
   - Keep animations subtle
   - Test on slow networks

4. **Professional Touch**
   - Use high-quality profile photo
   - Proofread all text
   - Keep links updated
   - Use professional email

---

## ❓ Common Issues

### Changes not appearing?
- Save the file
- Check browser DevTools console for errors
- Restart dev server: Stop (Ctrl+C) and run `npm run dev` again

### Build fails?
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then reinstall
- Check for syntax errors in your edits

### Deployment issues?
- Ensure all build completes: `npm run build`
- Check that `dist/` folder is created
- Verify all dependencies are in `package.json`

---

## 📞 Now You're Ready!

1. ✅ Install and run locally
2. ✅ Update your content
3. ✅ Test on all devices
4. ✅ Deploy to the web
5. ✅ Share with recruiters!

Good luck with your portfolio! 🎉

---

**Need help?** Check the full [README.md](./README.md) for detailed documentation.
