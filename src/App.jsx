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
    accent: 'sage',
    highlights: ['User journeys', 'Responsive flows', 'Interface design', 'Experience strategy'],
  },
  {
    title: 'Logo & Brand Identity',
    description: 'Premium brand identities that help businesses look memorable, consistent, and credible across every touchpoint.',
    tags: ['Logo Design', 'Brand Kit', 'Identity', 'Visual Style'],
    accent: 'terracotta',
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
    accent: 'sage',
    highlights: ['Map visibility', 'Profile optimization', 'Local ranking', 'Trust-building content'],
  },
  {
    title: 'Landing Pages & Optimization',
    description: 'Focused landing pages and optimization improvements that increase clarity, engagement, and higher-value conversions.',
    tags: ['Landing Pages', 'Optimization', 'Conversion', 'Funnels'],
    accent: 'terracotta',
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
    name: 'The Little Hands School',
    type: 'Educational Institution Website',
    detail: 'A welcoming school experience for admissions, academics, and trust.',
    accent: 'sage',
    category: 'Website Design',
    liveUrl: 'https://littlehands.vercel.app/',
    image: thelittlehands,
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
    quote: 'Zaighum delivered a website that feels premium and performs even better. Our conversions jumped within weeks.',
    author: 'Maya Ali',
    role: 'Founder, Asteria Studio',
  },
  {
    quote: 'The app development and design work were exceptional. It felt strategic, not just visual. Everything was thought through.',
    author: 'Usman Farooq',
    role: 'Director, Northpeak',
  },
  {
    quote: 'Our SEO and web presence finally made sense. The project looked beautiful and brought in the right traffic.',
    author: 'Hira Saleem',
    role: 'Owner, Bloom Agency',
  },
  {
    quote: 'He translated a messy idea into a polished digital experience that feels effortless to use. The process was smooth, fast, and highly strategic.',
    author: 'Ayesha Rahman',
    role: 'Marketing Lead, Velora',
  },
  {
    quote: 'The work was a huge upgrade from our old stack. Not only did it look better, but it made our team significantly more efficient.',
    author: 'Sami Khan',
    role: 'Operations Manager, Nexa',
  },
  {
    quote: 'Every detail was considered, from structure and UX to performance and positioning. It felt like working with a senior partner, not just a freelancer.',
    author: 'Rameen Tariq',
    role: 'Co-founder, Savoir Labs',
  },
  {
    quote: 'Our launch was cleaner and faster than expected. We received better engagement immediately and the brand finally felt aligned with the quality of our service.',
    author: 'Adil Malik',
    role: 'CEO, Northwood',
  },
]

const clients = ['Asteria', 'Northpeak', 'Bloom', 'Savoir Labs', 'Velora', 'Nexa']

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Featured Projects', href: '#featured-projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Why Choose Me', href: '#why-choose-me' },
  { label: 'Contact', href: '#contact' },
]

const whatsappNumber = '13854268090'
const whatsappDisplayNumber = '+1 (385) 426-8090'

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

function App() {
  const bookRef = useRef(null)
  const projectsRef = useRef(null)
  const serviceCarouselRef = useRef(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0, hovered: false })
  const [bookOpen, setBookOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All projects')
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
        <section className="hero section-frame" id="home">
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
              I design <span className="gradient-text">high-impact digital experiences</span> that look premium and perform.
            </h1>
            <p className="intro-text">
              I build websites, apps, and brand systems that help businesses stand out online, attract the right audience, and turn attention into measurable growth.
            </p>

            <div className="cta-row">
              <a className="primary-button" href="#work">
                View projects
              </a>
              <a className="secondary-button" href="#contact">
                Start a project
              </a>
            </div>

            <div className="metrics-row" aria-label="Stats overview">
              {metrics.map((item) => (
                <AnimatedMetric key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
              ))}
            </div>
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
        </section>

        <section 
          className="book-story section-frame" 
          ref={bookRef} 
          id="why-choose-me"
          onMouseEnter={() => setBookOpen(true)}
          onMouseLeave={() => setBookOpen(false)}
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
        </section>

        <section className="services section-frame" id="services">
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
                <motion.article key={service.title} className={`service-card ${service.accent}`} {...fadeInUp}>
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
        </section>

        {/* Tech stack section hidden for now */}

        <section className="projects section-frame" ref={projectsRef} id="featured-projects">
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
        </section>

        {/* Graphic design section hidden for now */}

        <section className="clients section-frame">
          <motion.div className="section-heading" {...fadeInUp}>
            <p className="section-label">Happy clients</p>
            <h2>Trusted by businesses that wanted more than a template.</h2>
          </motion.div>

          <div className="client-marquee-wrap" aria-label="Client logos and names">
            <div className="client-marquee-track">
              {[...clients, ...clients, ...clients].map((client, index) => (
                <motion.div
                  key={`${client}-${index}`}
                  className="client-pill"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  whileHover={{ y: -4, scale: 1.02, boxShadow: '0 18px 32px rgba(60, 46, 38, 0.1)' }}
                >
                  {client}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials section-frame" id="testimonials">
          <motion.div className="section-heading" {...fadeInUp}>
            <p className="section-label">Testimonials</p>
            <h2>Clients remember the quality, clarity, and confidence.</h2>
          </motion.div>

          <div className="testimonial-marquee-wrap" aria-label="Client testimonials">
            <div className="testimonial-scroller">
              {[...testimonials, ...testimonials].map((item, index) => (
                <motion.blockquote
                  key={`${item.author}-${index}`}
                  className="quote-card"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="quote-topline">
                    <span className="quote-mark">“</span>
                    <span className="quote-stars">★★★★★</span>
                  </div>
                  <p>{item.quote}</p>
                  <footer>
                    <strong>{item.author}</strong>
                    <span>{item.role}</span>
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-wrap section-frame" id="contact">
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

              <a
                className="whatsapp-glass-link"
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi, let\'s discuss my project.')}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <span className="whatsapp-icon" aria-hidden="true">✆</span>
                <span className="whatsapp-text-wrap">
                  <span className="whatsapp-label">Let&apos;s discuss on WhatsApp</span>
                  <span className="whatsapp-number">{whatsappDisplayNumber}</span>
                </span>
              </a>

              <button type="submit" className="primary-button form-button">
                Send inquiry
              </button>
            </form>
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <p>Zaighum — Web developer, SEO specialist, app builder, and designer</p>
      </footer>
      </div>
    </>
  )
}

export default App