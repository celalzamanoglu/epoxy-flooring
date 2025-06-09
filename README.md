# Ugur Epoxy Flooring - Landing Page

A modern, responsive landing page for Ugur Epoxy Flooring company built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Smooth Scrolling**: Implemented using Lenis for buttery-smooth scroll experience
- **Animated Sections**: Beautiful scroll-triggered animations using Framer Motion
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Modern UI/UX**: Gradient backgrounds, glass morphism effects, and contemporary design
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter Cards
- **Performance Focused**: Optimized for Core Web Vitals and fast loading times
- **Accessibility**: WCAG compliant with proper focus states and semantic HTML

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Smooth Scrolling**: Lenis
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page component
└── components/
    ├── SmoothScrollProvider.tsx  # Lenis smooth scroll setup
    ├── HeroSection.tsx          # Hero section with navigation
    ├── AboutSection.tsx         # About company section
    ├── ServicesSection.tsx      # Services offered section
    ├── GallerySection.tsx       # Portfolio gallery section
    ├── TestimonialsSection.tsx  # Customer testimonials
    └── ContactSection.tsx       # Contact form and info
```

## 🎨 Design Features

### Hero Section

- Full-screen hero with gradient background
- Smooth fade-in animations
- Call-to-action buttons with hover effects
- Animated scroll indicator

### About Section

- Statistics cards with animated counters
- Feature list with icons
- Staggered animations for content reveal

### Services Section

- 6 service cards with hover animations
- Glass morphism effect
- SVG background patterns

### Gallery Section

- Interactive project showcase
- Modal overlay for project details
- Hover effects and smooth transitions

### Testimonials Section

- Customer review cards
- Star ratings
- Quote icons and styling

### Contact Section

- Functional contact form
- Contact information cards
- Gradient backgrounds and animations

## 🚦 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ugur-epoxy-flooring
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Performance Optimizations

- Lazy loading for animations
- Optimized images and assets
- Minimal JavaScript bundle
- CSS-in-JS for critical styles
- Proper semantic HTML structure

## 🔧 Customization

### Colors

Primary colors can be modified in `tailwind.config.js`:

- Blue: `#3b82f6`
- Purple: `#8b5cf6`
- Cyan: `#06b6d4`

### Animations

Animation settings can be adjusted in component files:

- Duration
- Easing functions
- Trigger points
- Stagger delays

### Content

All content can be easily modified by editing the respective component files:

- Company information in `AboutSection.tsx`
- Services in `ServicesSection.tsx`
- Testimonials in `TestimonialsSection.tsx`
- Contact details in `ContactSection.tsx`

## 📧 Contact Form Integration

The contact form is ready for integration with:

- Email services (SendGrid, Mailgun)
- CRM systems (HubSpot, Salesforce)
- Custom backend APIs

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags optimization
- Open Graph tags
- Twitter Cards
- Schema markup ready
- Sitemap friendly URLs

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=out
```

### Custom Server

```bash
npm run build
npm start
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support or questions about this project, please contact:

- Email: support@ugurepoxyfloor.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ by the Ugur Epoxy Flooring team
