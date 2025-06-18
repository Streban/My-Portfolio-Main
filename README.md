# 🚀 Mateen Qazi - Portfolio Website

A stunning, futuristic portfolio website showcasing my skills, experience, and projects as a Senior Software Engineer & MERN Stack Developer.

![Portfolio Preview](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.0-purple?style=for-the-badge&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-black?style=for-the-badge)

## ✨ Features

### 🎨 **Design & UI**
- **Futuristic Design**: Modern glassmorphism effects with cyan, pink, and purple color scheme
- **Responsive Layout**: Pixel-perfect across mobile, tablet, and desktop devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Elements**: Hover effects, scroll-triggered animations, and micro-interactions
- **Dark Theme**: Eye-friendly dark mode with glowing accents

### 📱 **Sections**
- **Hero Section**: Animated introduction with background effects and CTA buttons
- **About**: Professional bio with animated stats cards
- **Skills**: Interactive progress bars and technology grid
- **Projects**: Dynamic project cards with hover effects
- **Experience**: Timeline layout with work history
- **Contact**: Contact form and social media links

### 🛠 **Technical Features**
- **Performance Optimized**: Fast loading with Vite build tool
- **SEO Friendly**: Meta tags, structured data, and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels
- **Modern Stack**: React 18, TypeScript, and modern CSS
- **Deployment Ready**: Optimized for production deployment

## 🛠 Technologies Used

### **Frontend**
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons

### **Styling**
- **CSS3** - Custom CSS with CSS variables and utility classes
- **Glassmorphism** - Modern glass-like effects
- **Responsive Design** - Mobile-first approach
- **CSS Grid & Flexbox** - Modern layout techniques

### **Development Tools**
- **ESLint** - Code linting and formatting
- **Git** - Version control
- **npm** - Package management

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎯 Customization

### **Personal Information**
Update your personal details in the following components:
- `src/components/Hero.tsx` - Name, title, and description
- `src/components/About.tsx` - Bio and stats
- `src/components/Contact.tsx` - Contact information and social links

### **Projects**
Add your projects in `src/components/Projects.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description...',
    image: 'project-image-url',
    technologies: ['React', 'Node.js'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/yourusername/project'
  }
];
```

### **Experience**
Update work experience in `src/components/Experience.tsx`:
```typescript
const experiences = [
  {
    id: 1,
    title: 'Your Position',
    company: 'Company Name',
    location: 'Location',
    period: 'Duration',
    description: 'Role description...',
    technologies: ['Tech1', 'Tech2']
  }
];
```

### **Skills**
Modify skills in `src/components/Skills.tsx`:
```typescript
const skills = [
  { name: 'React', level: 90, color: '#61DAFB' },
  // Add more skills...
];
```

### **Styling**
Customize colors and styling in `src/App.css`:
```css
:root {
  --primary: #00d4ff;      /* Main brand color */
  --secondary: #ff006e;    /* Secondary color */
  --accent: #8338ec;       /* Accent color */
  --background: #0a0a0a;   /* Background color */
}
```

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### **Netlify**
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure custom domain if needed

### **GitHub Pages**
1. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About section
│   │   ├── Skills.tsx     # Skills section
│   │   ├── Projects.tsx   # Projects section
│   │   ├── Experience.tsx # Experience section
│   │   ├── Contact.tsx    # Contact section
│   │   └── Navbar.tsx     # Navigation
│   ├── App.tsx            # Main app component
│   ├── App.css            # Main styles
│   ├── index.css          # Global styles
│   └── main.tsx           # Entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

## 🎨 Design System

### **Color Palette**
- **Primary**: `#00d4ff` (Cyan)
- **Secondary**: `#ff006e` (Pink)
- **Accent**: `#8338ec` (Purple)
- **Background**: `#0a0a0a` (Dark)
- **Surface**: `#1a1a1a` (Card background)

### **Typography**
- **Primary Font**: Inter (Google Fonts)
- **Monospace Font**: JetBrains Mono
- **Responsive scaling** with clamp() functions

### **Animations**
- **Framer Motion** for smooth transitions
- **Scroll-triggered** animations
- **Hover effects** and micro-interactions
- **Loading states** and feedback

## 🔧 Performance Optimizations

- **Code splitting** with React.lazy()
- **Image optimization** with proper sizing
- **CSS optimization** with utility classes
- **Bundle optimization** with Vite
- **Lazy loading** for images and components

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: mateenqazi8@gmail.com
- **Phone**: +92 308 4806445
- **LinkedIn**: [Mateen Qazi](https://www.linkedin.com/in/mateen-qazi/)
- **Location**: Lahore, Pakistan

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Mateen Qazi](https://github.com/mateenqazi)
