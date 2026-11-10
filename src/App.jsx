import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import pp1 from './assets/pp1.png'
import './App.css'

const metrics = [
  { value: 7, suffix: '+', label: 'Years building digital products' },
  { value: 55, suffix: '+', label: 'Projects delivered to clients' },
  { value: 96, suffix: '%', label: 'Clients who come back for more' },
]

const services = [
  {
    title: 'Website & Software Development',
    description: 'Custom websites and software products built for business growth, quality performance, and digital scalability.',
    tags: ['Web Apps', 'Software', 'Custom Build', 'Scalable Systems'],
    accent: 'dark',
    highlights: ['Business websites', 'Custom software solutions', 'Responsive architecture', 'Performance-focused builds'],
  },
  {
    title: 'WordPress & E-commerce',
    description: 'Flexible WordPress websites and e-commerce experiences designed to convert traffic into leads and sales.',
    tags: ['WordPress', 'WooCommerce', 'Online Stores', 'CMS'],
    accent: 'sand',
    highlights: ['WordPress builds', 'E-commerce storefronts', 'Product pages', 'Conversion-focused UX'],
  },
  {
    title: 'UI/UX Design (Web & Mobile)',
    description: 'Clean, intuitive interfaces for web and mobile products that prioritize user flow, clarity, and trust.',
    tags: ['UX Strategy', 'Wireframes', 'Mobile Design', 'System Design'],
    accent: 'dark',
    highlights: ['User journeys', 'Responsive flows', 'Interface design', 'Experience strategy'],
  },
  {
    title: 'Logo & Brand Identity',
    description: 'Premium brand identities that help businesses look memorable, consistent, and credible across every touchpoint.',
    tags: ['Logo Design', 'Brand Kit', 'Identity', 'Visual Style'],
    accent: 'sand',
    highlights: ['Logo concepts', 'Brand systems', 'Typography direction', 'Visual consistency'],
  },
  {
    title: 'Graphic Design & Marketing',
    description: 'Campaign visuals, promotional graphics, and digital assets designed to support reach, awareness, and conversions.',
    tags: ['Marketing Design', 'Social Creative', 'Campaigns', 'Digital Assets'],
    accent: 'dark',
    highlights: ['Social graphics', 'Campaign assets', 'Marketing creatives', 'Brand promotions'],
  },
  {
    title: 'SEO & Google Ranking',
    description: 'Search engine optimization strategies built to improve visibility, content relevance, and long-term organic growth.',
    tags: ['SEO', 'Ranking', 'Content', 'Search Growth'],
    accent: 'sand',
    highlights: ['Keyword strategy', 'Technical SEO', 'On-page optimization', 'Ranking improvements'],
  },
  {
    title: 'Local SEO & Google Business Profile',
    description: 'Local growth systems for businesses that want more visibility in their area and stronger trust from local audiences.',
    tags: ['Local SEO', 'Google Profile', 'Maps', 'Local Reach'],
    accent: 'dark',
    highlights: ['Map visibility', 'Profile optimization', 'Local ranking', 'Trust-building content'],
  },
  {
    title: 'Landing Pages & Optimization',
    description: 'Focused landing pages and optimization improvements that increase clarity, engagement, and higher-value conversions.',
    tags: ['Landing Pages', 'Optimization', 'Conversion', 'Funnels'],
    accent: 'sand',
    highlights: ['Landing page design', 'Conversion tweaks', 'Performance reviews', 'Sales-focused messaging'],
  },
]

const techStack = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'Firebase',
  'Tailwind CSS',
  'Framer Motion',
  'HTML5',
  'CSS3',
  'PHP',
  'Python',
  'UI/UX',
  'Figma',
]

import toptierweb from './assets/toptierweb.png'
import thelittlehands from './assets/thelittlehands.png'
import saecweb from './assets/saecweb.png'
import emyweb from './assets/emyweb.png'
import aurum from './assets/aurum.png'
import glenweb from './assets/glenweb.png'
import cavient1 from './assets/cavient1.png'
import { image } from 'framer-motion/client'

const projectFilters = ['All projects', 'UI/UX', 'Website Design', 'WordPress', 'Logo & Branding', 'Graphic Design']

const projects = [
  {
    name: 'Top Tier Property',
    type: 'Real Estate Business Website',
    detail: 'Premium property listings and a refined real-estate experience.',
    accent: 'terracotta',
    category: 'Website Design',
    liveUrl: 'https://toptierproperty-sohb.vercel.app/',
    image: toptierweb,
  },
  {
    name: 'SAEC Construction',
    type: 'Construction website',
    detail: 'Construction services and completed work presented with clarity.',
    accent: 'gold',
    category: 'Website Design',
    liveUrl: 'https://bootstap-construction-website.vercel.app/',
    image: saecweb,
  },
  {
    name: 'EMY Healthcare',
    type: 'Healthcare website',
    detail: 'Accessible healthcare messaging with a cleaner, more trustworthy UX.',
    accent: 'stone',
    category: 'UI/UX',
    liveUrl: 'https://cor-health.vercel.app/',
    image: emyweb,
  },
  {
    name: 'Aurum E-commerce',
    type: 'E-commerce Website',
    detail: 'A clean storefront designed to showcase products with ease.',
    accent: 'terracotta',
    category: 'WordPress',
    liveUrl: 'https://aurum-comprehensive-web-project.vercel.app/',
    image: aurum,
  },
  {
    name: 'Glen Island Dentistry',
    type: 'Dental Clinic Website',
    detail: 'A polished dental site built for treatment clarity and appointments.',
    accent: 'sage',
    category: 'WordPress',
    liveUrl: 'https://dentistone.vercel.app/',
    image: glenweb,
  },
  {
    name: 'Cavient Healthcare',
    type: 'Healthcare Website',
    detail: 'Healthcare solutions presented with a strong, modern corporate feel.',
    accent: 'gold',
    category: 'UI/UX',
    liveUrl: 'https://cavient.vercel.app/',
    image: cavient1,
  },
  {
    name: 'Fri Kings Fast Food',
    type: 'Restaurant Website',
    detail: 'A bold restaurant brand experience built around menu discovery.',
    accent: 'stone',
    category: 'Graphic Design',
    liveUrl: 'https://fri-kings-fast-food-web.vercel.app/',
    image: emyweb,
  },
  {
    name: 'Northoak Brand System',
    type: 'Logo & Branding',
    detail: 'A premium identity crafted to sharpen recognition and positioning.',
    accent: 'terracotta',
    category: 'Logo & Branding',
    liveUrl: '#contact',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Velora Campaign Suite',
    type: 'Graphic Design',
    detail: 'Creative campaign visuals made for clicks, recall, and conversion.',
    accent: 'sage',
    category: 'Graphic Design',
    liveUrl: '#contact',
    image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80',
  },
]

const designShowcase = [
  {
    title: 'Brand Identity',
    category: 'Packaging / Print',
    note: 'Minimal brand world with elevated color and typography.',
    tone: 'warm',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Campaign Art',
    category: 'Social / Digital',
    note: 'High-contrast visual templates built to increase click-through and recall.',
    tone: 'earth',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Landing Page System',
    category: 'UX / Web',
    note: 'Designed to balance clarity, mood, and conversion moments.',
    tone: 'forest',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
  },
]

const testimonials = [
  {
    quote: 'Zaighum helped us completely rethink our digital presence. The new site feels premium, clearer, and far more conversion-focused from the first visit onward.',
    author: 'Kelly',
    company: 'Asteria',
    role: 'Client',
    logoSvg: '<svg viewBox="0 0 180 72" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Asteria logo"><defs><linearGradient id="asteriaGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#b9f5c8"/><stop offset="100%" stop-color="#88c89f"/></linearGradient></defs><rect width="180" height="72" rx="16" fill="#0f1714"/><circle cx="38" cy="36" r="20" fill="url(#asteriaGrad)" opacity="0.95"/><path d="M29 46 L38 22 L47 46 Z" fill="#0f1714"/><path d="M20 48 H56 L41 20 L34 20 Z" fill="#0f1714" opacity="0.2"/><path d="M69 49 L88 23 L107 49" stroke="#dff9e7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M77 39 H98" stroke="#dff9e7" stroke-width="5" stroke-linecap="round"/><path d="M124 25 H153 C160 25 165 30 165 37 C165 46 158 51 149 51 H131 C124 51 119 46 119 39 C119 30 124 25 131 25 Z" fill="url(#asteriaGrad)" opacity="0.9"/><path d="M129 32 H152 V48 H129 Z" fill="#0f1714" opacity="0.2"/></svg>',
    glow: 'rgba(231, 154, 107, 0.5)',
    halo: 'rgba(255, 247, 241, 0.68)',
  },
  {
    quote: 'The app development and design work were exceptional. It felt strategic, not just visual. Everything was thought through.',
    author: 'Usman Farooq',
    company: 'Northpeak',
    role: 'Director',
    logoSvg: '<svg viewBox="0 0 180 72" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Northpeak logo"><rect width="180" height="72" rx="16" fill="#0f1714"/><path d="M24 52 V20 L42 52 L60 20 V52" stroke="#8fd3ff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M79 20 H103 V52 H79" stroke="#8fd3ff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M115 32 L135 20 L155 32 V52 H115 Z" fill="#8fd3ff" opacity="0.9"/><path d="M123 44 H146" stroke="#0f1714" stroke-width="4" stroke-linecap="round"/></svg>',
    glow: 'rgba(124, 180, 220, 0.5)',
    halo: 'rgba(239, 247, 255, 0.7)',
  },
  {
    quote: 'Our SEO and web presence finally made sense. The project looked beautiful and brought in the right traffic.',
    author: 'Hira Saleem',
    company: 'Bloom Agency',
    role: 'Owner',
    logoSvg: '<svg viewBox="0 0 180 72" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bloom logo"><rect width="180" height="72" rx="16" fill="#0f1714"/><path d="M28 48 C45 15 67 15 84 38 C92 48 102 54 112 54 C120 54 128 51 135 45 C147 34 157 25 164 24 C154 41 146 51 129 58 C118 63 102 64 87 61 C67 57 52 52 28 48 Z" fill="#dff7a3"/><path d="M40 46 C60 24 83 24 96 44 C69 52 53 53 40 46 Z" fill="#0f1714" opacity="0.15"/><circle cx="35" cy="35" r="6" fill="#dff7a3"/><path d="M120 26 L152 26 L136 49" stroke="#dff7a3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
    glow: 'rgba(170, 201, 120, 0.48)',
    halo: 'rgba(245, 250, 239, 0.68)',
  },
  {
    quote: 'He translated a messy idea into a polished digital experience that feels effortless to use. The process was smooth, fast, and highly strategic.',
    author: 'Ayesha Rahman',
    company: 'Velora',
    role: 'Marketing Lead',
    logoSvg: '<svg viewBox="0 0 180 72" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Velora logo"><rect width="180" height="72" rx="16" fill="#0f1714"/><path d="M26 48 L52 20 L72 47 L92 20 L118 48" stroke="#ffb3c2" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M126 22 H154 V50 H126" stroke="#ffb3c2" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M132 22 L154 50" stroke="#ffb3c2" stroke-width="6" stroke-linecap="round"/></svg>',
    glow: 'rgba(196, 112, 124, 0.46)',
    halo: 'rgba(255, 242, 244, 0.7)',
  },
  {
    quote: 'The work was a huge upgrade from our old stack. Not only did it look better, but it made our team significantly more efficient.',
    author: 'Sami Khan',
    company: 'Nexa',
    role: 'Operations Manager',
    logoSvg: '<svg viewBox="0 0 180 72" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nexa logo"><rect width="180" height="72" rx="16" fill="#0f1714"/><circle cx="42" cy="36" r="18" fill="none" stroke="#d6c3ff" stroke-width="6"/><path d="M42 18 V54 M24 36 H60" stroke="#d6c3ff" stroke-width="6" stroke-linecap="round"/><path d="M92 22 H150 C158 22 164 28 164 36 C164 44 158 50 150 50 H92 L103 36 L92 22 Z" fill="#d6c3ff" opacity="0.9"/><path d="M104 29 H146" stroke="#0f1714" stroke-width="4" stroke-linecap="round"/></svg>',
    glow: 'rgba(176, 143, 220, 0.44)',
    halo: 'rgba(248, 243, 255, 0.7)',
  },
]

const clients = ['Asteria', 'Northpeak', 'Bloom', 'Savoir Labs', 'Velora', 'Nexa']

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Why Choose Me', href: '#why-choose-me' },
  { label: 'Services', href: '#services' },
  { label: 'Featured Projects', href: '#featured-projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const whatsappNumber = '13854268090'
const whatsappDisplayNumber = '(385) 426-8090'

const contactInfo = [
  {
    label: 'Email',
    value: 'hello@zaighumali.com',
    href: 'mailto:hello@zaighumali.com',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: 'easeOut' },
}

const openWhatsAppChat = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, let's discuss my project.")}`
  const popup = window.open(
    whatsappUrl,
    'WhatsAppChat',
    'width=420,height=680,scrollbars=yes,resizable=no,toolbar=no,menubar=no,location=no,status=no'
  )

  if (popup) {
    popup.focus()
  } else {
    window.location.href = whatsappUrl
  }
}

function AnimatedMetric({ value, suffix, label }) {
  const [count, setCount] = useState(0)
  const metricRef = useRef(null)

  useEffect(() => {
    const node = metricRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        let animationFrameId = null
        const duration = 1400
        const startTime = performance.now()

        const updateCount = (timestamp) => {
          const progress = Math.min((timestamp - startTime) / duration, 1)
          const easedProgress = 1 - Math.pow(1 - progress, 4)
          setCount(Math.round(value * easedProgress))

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(updateCount)
          }
        }

        animationFrameId = requestAnimationFrame(updateCount)
        observer.disconnect()

        return () => {
          if (animationFrameId) cancelAnimationFrame(animationFrameId)
        }
      },
      { threshold: 0.45 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [value])

  return (
    <div className="metric-card" ref={metricRef}>
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  )
}

function TestimonialStack({ items }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const activeItem = items[activeIndex]
  const counter = `${String(activeIndex + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`

  const updateIndex = (direction) => {
    setActiveIndex((prev) => (prev + direction + items.length) % items.length)
  }

  useEffect(() => {
    if (isPaused) return

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [isPaused, items.length])

  return (
    <div
      className="testimonial-split"
      style={{
        '--ambient-glow': activeItem.glow,
        '--ambient-halo': activeItem.halo,
      }}
    >
      <div className="testimonial-split-intro">
        <div className="testimonial-badge-row">
          <span className="testimonial-badge-rail" aria-hidden="true" />
          <span className="testimonial-badge-label">CLIENT TESTIMONIALS</span>
        </div>

        <h2>What our clients say.</h2>

        <div className="testimonial-controls-row">
          <span className="testimonial-counter">{counter}</span>

          <div className="testimonial-control-group" aria-label="Testimonial controls">
            <button type="button" className="testimonial-control-btn" aria-label="Previous testimonial" onClick={() => updateIndex(-1)}>
              ←
            </button>
            <button type="button" className="testimonial-control-btn" aria-label="Next testimonial" onClick={() => updateIndex(1)}>
              →
            </button>
            <button
              type="button"
              className="testimonial-control-btn testimonial-pause-btn"
              aria-label={isPaused ? 'Resume testimonial rotation' : 'Pause testimonial rotation'}
              onClick={() => setIsPaused((paused) => !paused)}
            >
              {isPaused ? '▶' : '❚❚'}
            </button>
          </div>
        </div>
      </div>

      <div className="testimonial-split-panel">
        <div className="testimonial-company-name-wrap">
          <div
            className="testimonial-company-logo"
            dangerouslySetInnerHTML={{ __html: activeItem.logoSvg }}
          />
        </div>

        <blockquote className="testimonial-quote">
          “{activeItem.quote}”
        </blockquote>

        <div className="testimonial-footer-meta">
          <span>{activeItem.author}, {activeItem.role}</span>
        </div>

        <div className="testimonial-pagination" aria-label="Testimonial pagination">
          {items.map((item, index) => (
            <button
              key={`${item.author}-${item.company}`}
              type="button"
              className={index === activeIndex ? 'active' : ''}
              aria-label={`Show testimonial ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function App() {
  const bookRef = useRef(null)
  const projectsRef = useRef(null)
  const serviceCarouselRef = useRef(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0, hovered: false })
  const [bookOpen, setBookOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All projects')
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    details: '',
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (formStatus.type) {
      setFormStatus({ type: '', message: '' })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const payload = {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      details: formData.details,
      _subject: 'New project inquiry from Zaigham portfolio',
      _captcha: 'false',
      _template: 'table',
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/hello@zaighumali.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setFormData({ name: '', email: '', service: '', details: '' })
      setFormStatus({ type: 'success', message: 'Thanks! Your inquiry has been sent successfully.' })
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'There was a problem sending the form. Please email hello@zaighumali.com directly.',
      })
    }
  }

  useEffect(() => {
    const updateCursor = (event) => {
      setCursor((prev) => ({ ...prev, x: event.clientX, y: event.clientY }))
    }

    const setHoverState = (target) => {
      const interactive = target?.closest(
        'a, button, input, textarea, select, .project-card, .service-card, .design-card, .client-pill, .stack-pill, .book-scene',
      )
      setCursor((prev) => ({ ...prev, hovered: Boolean(interactive) }))
    }

    window.addEventListener('pointermove', updateCursor)
    document.addEventListener('mouseover', (event) => setHoverState(event.target))
    document.addEventListener('mouseout', (event) => {
      if (!event.relatedTarget || !event.relatedTarget.closest) {
        setCursor((prev) => ({ ...prev, hovered: false }))
      }
    })

    return () => {
      window.removeEventListener('pointermove', updateCursor)
      document.removeEventListener('mouseover', setHoverState)
      document.removeEventListener('mouseout', (event) => {
        if (!event.relatedTarget || !event.relatedTarget.closest) {
          setCursor((prev) => ({ ...prev, hovered: false }))
        }
      })
    }
  }, [])

  const scrollServices = (direction) => {
    const container = serviceCarouselRef.current
    if (!container) return

    const firstCard = container.querySelector('.service-card')
    const gap = 22
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width + gap : 320

    container.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth',
    })
  }

  const handleWhatsAppToggle = () => {
    setIsWhatsAppOpen((prev) => !prev)
  }

  const handleWhatsAppContinue = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, let's discuss my project.")}`
    window.location.href = whatsappUrl
  }

  // Hover-controlled animations for the book scene
  const coverRotation = bookOpen ? -140 : 0
  const leftPageRotation = 0
  const rightPageRotation = 0
  const bookReveal = bookOpen ? 1 : 0.8
  const copyY = bookOpen ? 0 : 20
  const visibleProjects = selectedCategory === 'All projects'
    ? projects
    : projects.filter((project) => project.category === selectedCategory)

  return (
    <>
      <motion.div
        className={`custom-cursor ${cursor.hovered ? 'hovered' : ''}`}
        animate={{ x: cursor.x - 18, y: cursor.y - 18 }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.3 }}
      />
      <motion.div
        className={`custom-cursor-dot ${cursor.hovered ? 'hovered' : ''}`}
        animate={{ x: cursor.x - 4, y: cursor.y - 4 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.4 }}
      />

      <div className="portfolio-shell">
      <div className={`nav-backdrop ${isMenuOpen ? 'open' : ''}`} aria-hidden="true" />
      <header className="topbar">
        <div className="brand-mark">Z</div>

        <button
          type="button"
          className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta desktop-cta" href="#contact">
          Start a project
        </a>
      </header>

      <main>
        <motion.section
          className="hero section-frame"
          id="home"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="hero-intro-badges" aria-label="Specialties">
              <span className="hero-chip">UI/UX</span>
              <span className="hero-chip">Brand Design</span>
              <span className="hero-chip">SEO Growth</span>
            </div>

            <p className="eyebrow">Full-stack digital partner for growing brands</p>
            <h1>
              I turn <span className="gradient-text">ideas</span> into <span className="gradient-text">digital experiences</span> that stand out.
            </h1>
            <p className="intro-text">
              I design and develop modern websites and applications that combine bold visuals, seamless experiences, and smart functionality to help brands grow online.
            </p>

            <div className="cta-row">
              <a className="primary-button" href="#featured-projects">
                View projects
              </a>
              <a className="secondary-button" href="#contact">
                Book a call
              </a>
            </div>

            <div className="metrics-row" aria-label="Stats overview">
              {metrics.map((item) => (
                <AnimatedMetric key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
              ))}
            </div>

            <a className="hero-scroll" href="#about" aria-label="Scroll to next section">
              <span className="hero-scroll-label">Scroll</span>
              <span className="hero-scroll-icon">↓</span>
            </a>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.12 }}
          >
            <div className="hero-visual-scene">
              <div className="orb orb-one" />
              <div className="orb orb-two" />

              <motion.div
                className="float-card float-card-one"
                animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span>Brand systems</span>
                <strong>Strategy + polish</strong>
              </motion.div>

              <motion.div
                className="float-card float-card-two"
                animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span>Live growth</span>
                <strong>SEO + conversion</strong>
              </motion.div>

              <div className="portrait-panel">
                <div className="portrait-glow" />
                <div className="portrait-card">
                  <div className="mini-tag">Zaighum Ali</div>
                  <div className="portrait-frame">
                    <div className="portrait-shape">
                      <img src={pp1} alt="Zaigham portrait" className="portrait-image" />
                    </div>
                  </div>
                  <div className="portrait-details">
                    <div>
                      <span>Specialty</span>
                      <strong>Web + Growth</strong>
                    </div>
                    <div>
                      <span>Delivery</span>
                      <strong>Worldwide</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="business-friction section-frame"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="business-friction-inner">
            <div className="business-friction-media">
              <div className="business-friction-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaborating around a table"
                />
              </div>
            </div>

            <div className="business-friction-copy">
              <h2>Struggling with an outdated website, missed leads, or clunky member portals?</h2>
              <p>
                Too many organisations waste time and money tangled in tech that just doesn’t work. We’ve seen it all—sites that don’t work on mobile, clunky member logins that leave users frustrated and teams left scrambling to manage systems that weren’t built with their mission in mind.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="book-story section-frame" 
          ref={bookRef} 
          id="why-choose-me"
          onMouseEnter={() => setBookOpen(true)}
          onMouseLeave={() => setBookOpen(false)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div id="about" aria-hidden="true" />
          <motion.p className="section-label" {...fadeInUp}>Why clients choose me</motion.p>
          <div className="book-scene">
            <div className="book-stage">
              <motion.div
                className={`book-cover ${bookOpen ? 'open' : ''}`}
                animate={{ rotateY: coverRotation }}
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="book-cover-inner">
                  <span className="cover-kicker">Digital craft</span>
                  <h3>Zaighum</h3>
                  <p>Strategy, design, development, and growth in one partner.</p>
                </div>
              </motion.div>

              <motion.div
                className={`page page-left ${bookOpen ? 'open' : ''}`}
                animate={{ rotateY: leftPageRotation }}
                transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.05 }}
              >
                <div className="page-shell">
                  <span>Research</span>
                  <p>Understand the brand and market.</p>
                </div>
              </motion.div>

              <motion.div
                className={`page page-right ${bookOpen ? 'open' : ''}`}
                animate={{ rotateY: rightPageRotation }}
                transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.05 }}
              >
                <div className="page-shell">
                  <span>Launch</span>
                  <p>Ship the experience with momentum.</p>
                </div>
              </motion.div>

              <motion.div className="book-spine" animate={{ opacity: bookReveal }} />
            </div>

            <motion.div className="book-copy" animate={{ opacity: bookReveal, y: copyY }} transition={{ duration: 0.4 }}>
              <p className="eyebrow">How I work</p>
              <h2>Every project is built to look elevated and perform smarter.</h2>
              <p>
                I combine structure, creativity, and technical execution. That means better UX, stronger SEO, cleaner code, and a digital presence that feels premium from the first glance to the final conversion.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="services section-frame" id="services" initial={false} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
          <motion.div className="section-heading" {...fadeInUp}>
            <p className="section-label">Services</p>
            <h2>Design, development, and growth under one roof.</h2>
          </motion.div>

          <div className="service-slider-shell">
            <div className="service-slider-controls">
              <button type="button" className="service-slider-button" aria-label="Scroll services left" onClick={() => scrollServices(-1)}>
                ←
              </button>
              <button type="button" className="service-slider-button" aria-label="Scroll services right" onClick={() => scrollServices(1)}>
                →
              </button>
            </div>

            <div className="service-grid" ref={serviceCarouselRef}>
              {services.map((service) => (
                <motion.article key={service.title} className={`service-card ${service.accent}`} initial={false} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                  <div className="service-card-inner">
                    <div className="service-card-face service-card-front">
                      <div className="service-topline">
                        <span className="service-index">0{services.indexOf(service) + 1}</span>
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <div className="tag-row">
                        {service.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="service-card-face service-card-back">
                      <div className="service-topline">
                        <span className="service-index">What’s included</span>
                      </div>
                      <h3>{service.title}</h3>
                      <ul className="service-back-list">
                        {service.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Tech stack section hidden for now */}

        <motion.section className="projects section-frame" ref={projectsRef} id="featured-projects" initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <motion.div className="section-heading" {...fadeInUp}>
            <p className="section-label">Selected projects</p>
            <h2>Recent work built for clarity, trust, and growth.</h2>
          </motion.div>

          <div className="project-filter-bar" aria-label="Project categories">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`project-filter ${selectedCategory === filter ? 'active' : ''}`}
                onClick={() => setSelectedCategory(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="project-sticky-wrap">
            <div className="project-slider-shell">
              {visibleProjects.length === 0 ? (
                <div className="project-empty-state">No projects match this category yet.</div>
              ) : (
                <div className="project-slider-track">
                  {visibleProjects.map((project) => (
                    <article key={project.name} className={`project-card ${project.accent}`}>
                      <div className="project-visual">
                        <img className="project-image" src={project.image} alt={project.name} />
                      </div>
                      <div className="project-copy">
                        <span className="project-type-tag">{project.type}</span>
                        <h3>{project.name}</h3>
                        <p>{project.detail}</p>
                        <div className="project-meta">
                          <a
                            href={project.liveUrl}
                            target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
                            rel={project.liveUrl.startsWith('http') ? 'noreferrer' : undefined}
                          >
                            View Project
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.section>

        {/* Graphic design section hidden for now */}

        <motion.section className="testimonials section-frame" id="testimonials" initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <motion.div className="section-heading" {...fadeInUp}>
            <p className="section-label">Testimonials</p>
            <h2>Words that feel as premium as the work behind them.</h2>
          </motion.div>

          <TestimonialStack items={testimonials} />
        </motion.section>

        <motion.section className="contact-wrap section-frame" id="contact" initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <motion.div className="contact-box" {...fadeInUp}>
            <div className="contact-copy">
              <p className="section-label">Book a project</p>
              <h2>Let’s build something memorable.</h2>
              <p className="contact-intro">
                Whether you need a sharper brand, a conversion-focused website, or a product that scales, I’m ready to help shape the next step.
              </p>

              <div className="contact-detail-stack">
                {contactInfo.map((item) => (
                  <a key={item.label} href={item.href} className="contact-tile" target={item.label === 'WhatsApp' ? '_blank' : undefined} rel={item.label === 'WhatsApp' ? 'noreferrer' : undefined}>
                    <span>{item.label}</span>
                    <strong>
                      {item.icon ? (
                        <>
                          <span className="contact-icon" aria-hidden="true">{item.icon}</span>
                          {item.value}
                        </>
                      ) : (
                        item.value
                      )}
                    </strong>
                  </a>
                ))}
              </div>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </label>
              </div>

              <label>
                Service
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Web Development</option>
                  <option>SEO Services</option>
                  <option>App Development</option>
                  <option>Graphic Design</option>
                </select>
              </label>

              <label>
                Project details
                <textarea
                  rows="4"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell me about your website, app, brand, or SEO goals..."
                  required
                />
              </label>

              {formStatus.message && (
                <div className={`form-status ${formStatus.type}`} role="status" aria-live="polite">
                  {formStatus.message}
                </div>
              )}

              <div className="contact-quick-actions">
                <a
                  className="whatsapp-glass-link"
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi, let\'s discuss my project.')}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  <span className="whatsapp-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.05 0C5.47 0 .1 5.37.1 12.03c0 2.12.55 4.19 1.6 6.02L0 24l6.1-1.6a11.95 11.95 0 0 0 5.95 1.83h.01c6.58 0 11.94-5.37 11.94-12.03 0-3.2-1.25-6.23-3.49-8.72Zm-8.47 18.4h-.01a9.94 9.94 0 0 1-5.08-1.39l-.36-.22-3.62.95 1-3.53-.24-.36A9.87 9.87 0 0 1 2.21 12c0-5.48 4.46-9.95 9.96-9.95 2.66 0 5.16 1.04 7.04 2.92a9.96 9.96 0 0 1 2.91 7.03c0 5.48-4.46 9.95-9.96 9.95Zm5.47-7.44c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.17.05-.33-.02-.47-.08-.15-.67-1.62-.91-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.08-.8.38-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.05 2.85 1.2 3.05.15.2 2.07 3.17 5.02 4.45.7.3 1.25.48 1.68.62.71.22 1.35.19 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35Z" fill="currentColor"/>
                    </svg>
                  </span>
                  <span className="whatsapp-text-wrap">
                    <span className="whatsapp-label">Let&apos;s discuss on WhatsApp</span>
                    <span className="whatsapp-number">{whatsappDisplayNumber}</span>
                  </span>
                </a>

                <a
                  className="call-glass-link"
                  href={`tel:${whatsappNumber}`}
                  aria-label="Call now"
                >
                  <span className="call-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M6.6 10.8c1.4 2.7 3.7 4.9 6.4 6.3l2.1-2.1c.3-.3.8-.4 1.2-.3 1.3.4 2.7.6 4.1.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.4.2 2.8.6 4.1.1.4 0 .9-.3 1.2L6.6 10.8Z" fill="currentColor"/>
                    </svg>
                  </span>
                  <span className="call-text-wrap">
                    <span className="call-label">Call now</span>
                    <span className="call-number">{whatsappDisplayNumber}</span>
                  </span>
                </a>
              </div>

              <button type="submit" className="primary-button form-button">
                Send inquiry
              </button>
            </form>
          </motion.div>
        </motion.section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p>© 2026 Zaighum Ali. All rights reserved.</p>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#services">Services</a>
            <a href="#featured-projects">Projects</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>

      <div className={`floating-whatsapp-panel ${isWhatsAppOpen ? 'open' : ''}`}>
        <div className="floating-whatsapp-header">
          <div className="floating-whatsapp-status">
            <span className="floating-whatsapp-dot" />
            WhatsApp
          </div>
          <button
            type="button"
            className="floating-whatsapp-close"
            onClick={() => setIsWhatsAppOpen(false)}
            aria-label="Close WhatsApp chat"
          >
            ×
          </button>
        </div>

        <div className="floating-whatsapp-body">
          <div className="floating-whatsapp-bubble-message">
            Hi! I’m available for new projects and quick chats.
          </div>
          <div className="floating-whatsapp-bubble-message user-message">
            I’d like to discuss my project.
          </div>
        </div>

        <button type="button" className="floating-whatsapp-cta" onClick={handleWhatsAppContinue}>
          Continue on WhatsApp
        </button>
      </div>

      <button
        type="button"
        className="floating-whatsapp"
        onClick={handleWhatsAppToggle}
        aria-label="Chat on WhatsApp"
      >
        <span className="floating-whatsapp-bubble" aria-hidden="true">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M20.52 3.48A11.82 11.82 0 0 0 12.05 0C5.47 0 .1 5.37.1 12.03c0 2.12.55 4.19 1.6 6.02L0 24l6.1-1.6a11.95 11.95 0 0 0 5.95 1.83h.01c6.58 0 11.94-5.37 11.94-12.03 0-3.2-1.25-6.23-3.49-8.72Zm-8.47 18.4h-.01a9.94 9.94 0 0 1-5.08-1.39l-.36-.22-3.62.95 1-3.53-.24-.36A9.87 9.87 0 0 1 2.21 12c0-5.48 4.46-9.95 9.96-9.95 2.66 0 5.16 1.04 7.04 2.92a9.96 9.96 0 0 1 2.91 7.03c0 5.48-4.46 9.95-9.96 9.95Zm5.47-7.44c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.17.05-.33-.02-.47-.08-.15-.67-1.62-.91-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.08-.8.38-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.05 2.85 1.2 3.05.15.2 2.07 3.17 5.02 4.45.7.3 1.25.48 1.68.62.71.22 1.35.19 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35Z" fill="currentColor"/>
          </svg>
        </span>
      </button>
      </div>
    </>
  )
}

export default App