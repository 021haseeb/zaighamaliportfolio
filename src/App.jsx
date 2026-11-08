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
    title: 'Web Development',
    description: 'Modern, conversion-focused websites and web apps built in React, Next.js, Node.js, MongoDB, and full-stack stack combinations.',
    tags: ['MERN Stack', 'Next.js', 'React', 'Laravel', 'Node.js'],
    accent: 'dark',
    highlights: ['Custom web apps', 'Conversion-first UX', 'Performance optimization', 'Scalable architecture'],
  },
  {
    title: 'SEO Services',
    description: 'Technical SEO, ranking strategy, content optimization, and local search growth that help your brand get discovered and trusted.',
    tags: ['On-page SEO', 'Technical SEO', 'Keyword Research', 'Local SEO'],
    accent: 'sand',
    highlights: ['Keyword strategy', 'Technical audits', 'Content structure', 'Local visibility growth'],
  },
  {
    title: 'App Development',
    description: 'Mobile and web app experiences engineered for usability, speed, performance, and business goals across devices.',
    tags: ['React Native', 'Flutter', 'PWAs', 'API Integration'],
    accent: 'sage',
    highlights: ['Mobile-first flows', 'API integrations', 'Smooth product logic', 'Cross-device testing'],
  },
  {
    title: 'Graphic Design',
    description: 'Brand identity, social creatives, packaging concepts, landing page visuals, and marketing design that feel premium and memorable.',
    tags: ['Branding', 'Social Media', 'Packaging', 'Marketing Design'],
    accent: 'terracotta',
    highlights: ['Brand systems', 'Campaign visuals', 'Landing page design', 'Packaging concepts'],
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

const projects = [
  {
    name: 'Top Tier Property',
    type: 'Real Estate Business Website',
    detail: 'A modern real estate website designed to showcase premium property listings, highlight property details.',
    accent: 'terracotta',
    liveUrl: 'https://toptierproperty-sohb.vercel.app/',
    image: toptierweb,
  },
  {
    name: 'The Little Hands School',
    type: 'Educational Institution Website',
    detail: 'A modern school website showcasing academics, facilities, and admissions.',
    accent: 'sage',
    liveUrl: 'https://littlehands.vercel.app/',
    image: thelittlehands,
  },
  {
    name: 'SAEC Construction',
    type: 'Construction website',
    detail: 'A professional website showcasing construction services and completed projects.',
    accent: 'gold',
    liveUrl: 'https://bootstap-construction-website.vercel.app/',
    image: saecweb,
  },
  {
    name: 'EMY Healthcare',
    type: 'Healthcare website',
    detail: 'Responsive healthcare site with clearer service messaging, patient trust, and accessibility-driven UX.',
    accent: 'stone',
    liveUrl: 'https://cor-health.vercel.app/',
    image: emyweb,
  },
  {
    name: 'Aurum E-commerce',
    type: 'E-commerce Website',
    detail: 'A modern online store featuring product showcases and a seamless shopping experience.',
    accent: 'terracotta',
    liveUrl: 'https://aurum-comprehensive-web-project.vercel.app/',
    image: aurum,
  },
  {
    name: 'Glen Island Dentistry',
    type: 'Dental Clinic Website',
    detail: 'A professional dental website showcasing treatments, services, and appointment booking.',
    accent: 'sage',
    liveUrl: 'https://dentistone.vercel.app/',
    image: glenweb,
  },
  {
    name: 'Cavient Healthcare',
    type: 'Healthcare Website',
    detail: 'A modern corporate website showcasing healthcare services and solutions.',
    accent: 'gold',
    liveUrl: 'https://cavient.vercel.app/',
    image: cavient1,
  },
  {
    name: 'Fri Kings Fast Food',
    type: 'Restaurant Website',
    detail: 'A modern fast-food website showcasing menu items and food offerings.',
    accent: 'stone',
    liveUrl: 'https://fri-kings-fast-food-web.vercel.app/',
    image: emyweb,
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
    quote: 'Zaigham delivered a website that feels premium and performs even better. Our conversions jumped within weeks.',
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
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const whatsappNumber = '923021444269'

const contactInfo = [
  {
    label: 'Email',
    value: 'hello@zaighamstudio.com',
    href: 'mailto:hello@zaighamstudio.com',
  },
  {
    label: 'Phone',
    value: '+92 302 1444269',
    href: 'tel:+923021444269',
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
  const [cursor, setCursor] = useState({ x: 0, y: 0, hovered: false })
  const [bookOpen, setBookOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    details: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const message = [
      'New project inquiry',
      `Name: ${formData.name || 'Not provided'}`,
      `Email: ${formData.email || 'Not provided'}`,
      `Service: ${formData.service || 'Not provided'}`,
      `Project details: ${formData.details || 'Not provided'}`,
    ].join('\n')

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setFormData({ name: '', email: '', service: '', details: '' })
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

  const { scrollYProgress: projectProgress } = useScroll({
    target: projectsRef,
    offset: ['start start', 'end end'],
  })

  // Hover-controlled animations for the book scene
  const coverRotation = bookOpen ? -140 : 0
  const leftPageRotation = 0
  const rightPageRotation = 0
  const bookReveal = bookOpen ? 1 : 0.8
  const copyY = bookOpen ? 0 : 20
  const projectTrackX = useTransform(projectProgress, [0, 1], ['0%', '-72%'])

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
          Book a call
        </a>
      </header>

      <main>
        <section className="hero section-frame">
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
              <a className="secondary-button" href="#services">
                Services
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
                  <div className="mini-tag">Zaigham Ali</div>
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
          id="process"
          onMouseEnter={() => setBookOpen(true)}
          onMouseLeave={() => setBookOpen(false)}
        >
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
                  <h3>Zaigham</h3>
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

          <div className="service-grid">
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
        </section>

        <section className="stack section-frame">
          <motion.div className="section-heading" {...fadeInUp}>
            <p className="section-label">Tech stack</p>
            <h2>Tools and technologies I use to build high-quality experiences.</h2>
          </motion.div>

          <div className="stack-grid">
            {techStack.map((item) => (
              <motion.span key={item} className="stack-pill" {...fadeInUp}>
                {item}
              </motion.span>
            ))}
          </div>
        </section>

        <section className="projects section-frame" ref={projectsRef} id="work">
          <motion.div className="section-heading" {...fadeInUp}>
            <p className="section-label">Selected projects</p>
            <h2>Recent work built for clarity, trust, and growth.</h2>
          </motion.div>

          <div className="project-sticky-wrap">
            <div className="project-slider-shell">
              <motion.div className="project-slider-track" style={{ x: projectTrackX }}>
                {[...projects, ...projects].map((project, index) => (
                  <article key={`${project.name}-${index}`} className={`project-card ${project.accent}`}>
                    <div className="project-visual">
                      <img className="project-image" src={project.image} alt={project.name} />
                    </div>
                    <div className="project-copy">
                      <span>{project.type}</span>
                      <h3>{project.name}</h3>
                      <p>{project.detail}</p>
                      <div className="project-meta">
                        <strong>{project.result}</strong>
                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                          Live
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="design-showcase section-frame">
          <motion.div className="section-heading" {...fadeInUp}>
            <p className="section-label">Graphic design</p>
            <h2>Brand visuals and campaign identities that give businesses a recognizable voice.</h2>
          </motion.div>

          <div className="design-grid">
            {designShowcase.map((item) => (
              <motion.article key={item.title} className={`design-card ${item.tone}`} {...fadeInUp}>
                <div className="design-visual">
                  <img src={item.image} alt={item.title} className="design-image" />
                  <div className="design-shape one" />
                  <div className="design-shape two" />
                  <div className="design-shape three" />
                </div>
                <div className="design-copy">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

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

        <section className="testimonials section-frame">
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
                  <a key={item.label} href={item.href} className="contact-tile">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
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

              <button type="submit" className="primary-button form-button">
                Send inquiry
              </button>
            </form>
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <p>Zaigham — Web developer, SEO specialist, app builder, and designer</p>
      </footer>
      </div>
    </>
  )
}

export default App