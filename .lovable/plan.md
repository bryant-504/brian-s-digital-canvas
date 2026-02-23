

# Brian Wasike — Portfolio Website

## Design Direction
- **Dark mode default** with an electric blue accent color
- Clean, minimal, tech-focused aesthetic inspired by the reference image's bold layout (large name, role badges, CTA buttons, circular photo area with icon navigation)
- Glassmorphism cards and subtle gradient backgrounds
- Clean typography with strong visual hierarchy
- No unnecessary animations — only smooth scroll and subtle hover effects

---

## Sections & Features

### 1. Sticky Navigation Bar
- Logo/name on the left, section links on the right
- Mobile hamburger menu
- Smooth scroll to sections on click
- Semi-transparent glassmorphism background

### 2. Hero Section
- Bold layout inspired by the reference: name prominently displayed, role badges (IT Student | Web Developer | Graphic Designer)
- Headline: "Redefining How Business Gets Done."
- Two CTA buttons: **View Projects** and **Contact Me**
- Social links row (GitHub, LinkedIn, Email icons)
- Placeholder circle for a profile photo (user can add their own later)

### 3. About Me
- Short professional bio emphasizing problem-solving, system thinking, and clean design
- Mentions web development, system management, and graphic design experience
- Clean two-column layout (text + decorative element)

### 4. Skills Section
- Categorized into Frontend, Backend, Database, Tools, Other
- Displayed as modern pill/tag badges grouped by category — clean and professional
- No pie charts or cheesy progress bars

### 5. Projects Section
- Grid of 4–6 project cards
- Each card: image preview placeholder, title, short description, tech stack tags, Live Demo button, GitHub button
- Glassmorphism card style with subtle hover lift effect

### 6. Experience Section
- Timeline or card layout
- Freelance Web Designer (2 years) and Computer Expert / IT Support
- Focus on measurable impact and key responsibilities

### 7. Contact Section
- Contact form: Name, Email, Message fields
- Clear CTA heading
- Form uses react-hook-form + zod validation
- Toast notification on submit (ready for email integration later)

### 8. Footer
- Social links, copyright, quick nav links
- Clean and minimal

---

## Technical Details
- Single-page React app with smooth scroll navigation
- Mobile-first responsive design using Tailwind CSS
- Dark theme set as default via CSS variables
- Clean file structure: each section as its own component
- SEO-optimized meta tags in index.html
- No backend needed — contact form is frontend-ready (can integrate email service later)
- Ready for Vercel/Netlify deployment as-is

