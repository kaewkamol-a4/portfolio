'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

/* ─── REVEAL HOOK ─── */
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ─── NAVBAR ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 5vw', background: scrolled ? 'rgba(8,8,8,0.88)' : 'transparent', backdropFilter: scrolled ? 'blur(16px)' : 'none', borderBottom: scrolled ? '1px solid rgba(198,255,0,0.08)' : 'none', transition: '0.35s ease' }}>
      <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.6rem', color: '#c6ff00', letterSpacing: '0.12em' }}>KAN.</span>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {['Work', 'About', 'Skills', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="nav-link" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.55)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', transition: '0.25s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#c6ff00')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
          >{item}</a>
        ))}
      </div>
    </nav>
  )
}

/* ─── SECTION HEADER ─── */
function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="reveal" style={{ background: '#0d0d0d', padding: '8rem 5vw', textAlign: 'center' }}>
      <h2 dangerouslySetInnerHTML={{ __html: title }} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(5rem,14vw,14rem)', lineHeight: 0.88, color: '#c6ff00', marginBottom: '1rem' }} />
      <p style={{ maxWidth: '720px', margin: '0 auto', color: 'rgba(255,255,255,0.4)', lineHeight: 1.9, fontSize: '1rem' }}>{subtitle}</p>
    </section>
  )
}

/* ─── PHONE MOCKUP ─── */
function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ width: '200px', aspectRatio: '9/19', position: 'relative', borderRadius: '30px', overflow: 'hidden', background: '#111', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.55)', flexShrink: 0, transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 32px 80px rgba(0,0,0,0.7)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.55)' }}
    >
      <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
    </div>
  )
}

/* ─── MAIN SCREENS ─── */
function MainScreens({ screens }: { screens: string[] }) {
  return (
    <div className="reveal" style={{ background: '#0d0d0d', borderRadius: '36px', padding: '4rem' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem', marginBottom: '3rem' }}>
        <span style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>Main</span>
        <span style={{ fontSize: '1.9rem', fontFamily: "'Dancing Script',cursive", color: '#c6ff00' }}>Screens</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        {screens.map((src, i) => (
          <div key={src} className="stagger" style={{ animationDelay: `${i * 0.06}s` }}>
            <PhoneMockup src={src} alt="screen" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── FEATURE LIST ─── */
function FeatureList({ items, tags }: { items: { icon: string; title: string; desc: string }[]; tags: string[] }) {
  return (
    <div style={{ background: '#f7f4ed', padding: '5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h3 style={{ fontSize: '2.3rem', fontWeight: 800, marginBottom: '2rem', color: '#0d0d0d' }}>Key Features</h3>
      {items.map(item => (
        <div key={item.title} style={{ display: 'flex', gap: '1rem', marginBottom: '1.8rem' }}>
          <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
          <div>
            <p style={{ fontWeight: 700, marginBottom: '0.35rem', fontSize: '1rem', color: '#0d0d0d' }}>{item.title}</p>
            <p style={{ color: '#666', lineHeight: 1.8 }}>{item.desc}</p>
          </div>
        </div>
      ))}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
        {tags.map(tag => <span key={tag} style={{ padding: '0.45rem 1rem', border: '1px solid rgba(0,0,0,0.1)', fontSize: '0.72rem', color: '#666', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#0d0d0d'; e.currentTarget.style.color = '#c6ff00'; e.currentTarget.style.borderColor = '#c6ff00' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#666'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)' }}
        >{tag}</span>)}
      </div>
    </div>
  )
}

/* ─── PROJECT INTRO ─── */
function ProjectIntro({ num, title, subtitle, desc, note }: { num: string; title: string; subtitle: string; desc: string; note?: string }) {
  return (
    <div className="reveal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '6rem', marginBottom: '6rem', textAlign: 'center' }}>
      <div style={{ flex: 1, minWidth: '320px', maxWidth: '650px' }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#c6ff00', marginBottom: '1rem' }}>{num}</p>
        <h2 style={{ fontSize: 'clamp(4rem,8vw,7rem)', lineHeight: 0.9, fontWeight: 800, marginBottom: '1rem', color: '#0d0d0d' }}>
          {title.split(' ')[0]}<span style={{ fontFamily: "'Dancing Script',cursive", color: '#777', marginLeft: '0.5rem' }}>{title.split(' ').slice(1).join(' ')}</span>
        </h2>
        <p style={{ color: '#888', lineHeight: 1.8, fontStyle: 'italic' }}>{subtitle}</p>
      </div>
      <div style={{ flex: 1, minWidth: '320px', maxWidth: '560px', textAlign: 'left' }}>
        <p style={{ fontSize: '1rem', lineHeight: 2, color: '#444' }}>{desc}</p>
        {note && <p style={{ marginTop: '1.4rem', color: '#888', lineHeight: 1.9, fontSize: '0.88rem', fontStyle: 'italic' }}>{note}</p>}
      </div>
    </div>
  )
}

/* ─── FEATURED PHONE ─── */
function FeaturedPhone({ src, alt, bg }: { src: string; alt: string; bg: string }) {
  return (
    <div style={{ background: bg, minHeight: '760px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4rem' }}>
      <div style={{ width: '340px', aspectRatio: '9/19', position: 'relative', borderRadius: '38px', overflow: 'hidden', boxShadow: '0 40px 90px rgba(0,0,0,0.6)', transition: 'transform 0.4s ease, box-shadow 0.4s ease' }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03) translateY(-8px)'; e.currentTarget.style.boxShadow = '0 60px 120px rgba(0,0,0,0.8)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 40px 90px rgba(0,0,0,0.6)' }}
      >
        <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
      </div>
    </div>
  )
}

/* ─── BROCHURE SLIDESHOW ─── */
function BrochureSlideshow() {
  const [current, setCurrent] = useState(0)
  const pages = [
    { src: '/bannerbrochoure/gvk.png', label: 'Cover' },
    { src: '/bannerbrochoure/เอา2.png', label: 'Door Collection' },
    { src: '/bannerbrochoure/PRODUCTS & SERVICES (3).png', label: 'Products & Services' },
    { src: '/bannerbrochoure/เอา 3.png', label: 'Frame & Architrave' },
    { src: '/bannerbrochoure/เอา4.png', label: 'Fittings' },
  ]
  const prev = () => setCurrent(i => (i - 1 + pages.length) % pages.length)
  const next = () => setCurrent(i => (i + 1) % pages.length)
  const btnStyle = (side: 'left' | 'right'): React.CSSProperties => ({
    position: 'absolute', [side]: '-24px', top: '50%', transform: 'translateY(-50%)',
    width: '48px', height: '48px', borderRadius: '50%',
    background: '#0d0d0d', border: '1px solid rgba(198,255,0,0.3)',
    color: '#c6ff00', fontSize: '1.2rem', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.2s',
  })
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.35)', transition: 'transform 0.3s ease' }}>
        <Image src={pages[current].src} alt={pages[current].label} fill style={{ objectFit: 'cover', transition: 'opacity 0.4s ease' }} />
      </div>
      <button onClick={prev} style={btnStyle('left')}
        onMouseEnter={e => { e.currentTarget.style.background = '#c6ff00'; e.currentTarget.style.color = '#0d0d0d' }}
        onMouseLeave={e => { e.currentTarget.style.background = '#0d0d0d'; e.currentTarget.style.color = '#c6ff00' }}
      >←</button>
      <button onClick={next} style={btnStyle('right')}
        onMouseEnter={e => { e.currentTarget.style.background = '#c6ff00'; e.currentTarget.style.color = '#0d0d0d' }}
        onMouseLeave={e => { e.currentTarget.style.background = '#0d0d0d'; e.currentTarget.style.color = '#c6ff00' }}
      >→</button>
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem' }}>
          {pages[current].label} · {current + 1} / {pages.length}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
          {pages.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? '24px' : '8px', height: '8px', borderRadius: '4px', background: i === current ? '#c6ff00' : 'rgba(0,0,0,0.2)', border: 'none', cursor: 'pointer', transition: '0.3s', padding: 0 }} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── PAGE ─── */
export default function Page() {
  useReveal()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dancing+Script:wght@700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{background:#0d0d0d;font-family:'Plus Jakarta Sans',sans-serif;overflow-x:hidden;color:#0d0d0d}
        ::selection{background:#c6ff00;color:#000}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-thumb{background:#c6ff00;border-radius:2px}

        /* SCROLL REVEAL */
        .reveal{
          opacity:0;
          transform:translateY(48px);
          transition:opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1);
        }
        .reveal.visible{
          opacity:1;
          transform:translateY(0);
        }

        /* STAGGER CHILDREN */
        .stagger{
          opacity:0;
          transform:translateY(32px);
          animation:none;
        }
        .reveal.visible .stagger{
          animation:fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes fadeUp{
          to{opacity:1;transform:translateY(0)}
        }

        /* HERO GLOW PULSE */
        @keyframes glowPulse{
          0%,100%{text-shadow:0 0 0 rgba(198,255,0,0)}
          50%{text-shadow:0 0 80px rgba(198,255,0,0.25),0 0 160px rgba(198,255,0,0.1)}
        }
        .hero-title{animation:glowPulse 5s ease-in-out infinite}

        /* HERO FADE IN FROM BOTTOM */
        @keyframes heroIn{
          from{opacity:0;transform:translateY(60px)}
          to{opacity:1;transform:translateY(0)}
        }
        .hero-content{animation:heroIn 1s cubic-bezier(0.16,1,0.3,1) 0.2s both}

        /* NAV UNDERLINE */
        .nav-link{position:relative}
        .nav-link::after{
          content:'';
          position:absolute;
          bottom:-2px;left:0;
          width:0;height:1px;
          background:#c6ff00;
          transition:width 0.25s ease;
        }
        .nav-link:hover::after{width:100%}

        /* CARD HOVER */
        .card-hover{
          transition:transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease;
          cursor:pointer;
        }
        .card-hover:hover{
          transform:translateY(-8px);
          box-shadow:0 32px 80px rgba(0,0,0,0.2);
        }

        /* SECTION HEADER SLIDE UP */
        .reveal h2{
          transition:opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s;
          opacity:0;
          transform:translateY(30px);
        }
        .reveal.visible h2{opacity:1;transform:translateY(0)}
      `}</style>
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section style={{ minHeight: '100vh', background: 'linear-gradient(to bottom,#0d0d0d,#111)', display: 'flex', alignItems: 'flex-end', padding: '0 5vw 5rem', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-200px', right: '-150px', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(198,255,0,0.18), transparent 70%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
        <div className="hero-content" style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', position: 'relative', zIndex: 2, color: '#fff' }}>
          <p style={{ color: 'rgba(255,255,255,0.28)', letterSpacing: '0.35em', textTransform: 'uppercase', fontSize: '0.72rem', marginBottom: '2rem' }}>Graphic Design &amp; UI/UX Portfolio — 2026</p>
          <div style={{ position: 'relative' }}>
            <h1 className="hero-title" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(7rem,18vw,19rem)', lineHeight: 0.82 }}>
              Port<span style={{ color: '#c6ff00' }}>f</span>olio
            </h1>
            <span style={{ position: 'absolute', right: 0, bottom: '1rem', fontFamily: "'Dancing Script',cursive", color: '#c6ff00', fontSize: 'clamp(2rem,5vw,5rem)' }}>Kan Kaewkamol</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '2rem', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {[{ l: 'Specialization', v: 'UX/UI · Graphic · Frontend' }, { l: 'Education', v: 'B.Sc. Computer Science · GPA 3.30' }, { l: 'Location', v: 'Pathum Thani, Thailand' }, { l: 'Status', v: '🟢 Open to work' }].map(item => (
              <div key={item.l}>
                <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.45rem' }}>{item.l}</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="reveal" style={{ background: '#f0ece4', padding: '9rem 5vw' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(360px,1fr))', gap: '6rem', alignItems: 'center' }}>
          <div>
            <span style={{ fontFamily: "'Dancing Script',cursive", fontSize: '1.8rem', color: '#aaa', display: 'block', marginBottom: '0.25rem' }}>About me</span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 'clamp(4rem,7vw,7rem)', lineHeight: 0.95, marginBottom: '2rem' }}>Hello!</h2>
            <p style={{ fontWeight: 700, marginBottom: '1.2rem', fontSize: '1.1rem' }}>I am Kan Kaewkamol.</p>
            <p style={{ fontSize: '1rem', lineHeight: 1.95, color: '#444', textAlign: 'justify' }}>Computer Science graduate (2nd Class Honours, GPA 3.30) from Maejo University with a passion for creating user-centered digital experiences. My work spans UX/UI design, graphic design, chatbot conversational UI, and AI-assisted content production. I thrive at the intersection of design and technology — building things that look great and actually work.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#c8c4bc', borderRadius: '24px', overflow: 'hidden' }}>
            {[{ n: '3.30', l: 'GPA · 2nd Honours' }, { n: '3+', l: 'Core Disciplines' }, { n: '10+', l: 'Projects Shipped' }, { n: '100%', l: 'On-Time Delivery' }].map(s => (
              <div key={s.l} className="card-hover" style={{ background: '#0d0d0d', padding: '3rem 2.5rem' }}>
                <p style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '4rem', color: '#c6ff00', lineHeight: 1, marginBottom: '0.5rem' }}>{s.n}</p>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UI/UX */}
      <SectionHeader title="UI / UX" subtitle="Modern interface design projects for mobile applications, fintech systems, and digital experiences." />

      {/* 01 — GASH */}
      <section id="work" style={{ background: '#f0ece4', width: '100%' }}>
        <div style={{ width: '100%', padding: '6rem 5vw' }}>
          <ProjectIntro num="01 — UI / UX DESIGN" title="App Design" subtitle="Client: GASH — Gold-Backed Digital Asset Platform · Protoss Technology Co., Ltd."
            desc="GASH is a gold-backed digital asset trading platform designed with a modern and intuitive mobile-first user experience. Complete user flows were designed from wireframe to high-fidelity prototype using Figma and Flutterflow."
            note="Realtime Charts · PromptPay Integration · DCA Flow · KYC Verification" />
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))', overflow: 'hidden', borderRadius: '36px', marginBottom: '2rem', background: '#d5d0c7' }}>
            <FeaturedPhone src="/Gash/login.png" alt="GASH Login" bg="#12141f" />
            <FeatureList items={[
              { icon: '🔐', title: 'Authentication', desc: 'Clean login & register experience with email/password.' },
              { icon: '📈', title: 'Realtime Dashboard', desc: 'Modern financial data visualization with live charts.' },
              { icon: '💸', title: 'Trading Flow', desc: 'Fast buy/sell interaction design with DCA support.' },
              { icon: '🏦', title: 'Withdraw System', desc: 'PromptPay integrated transaction flow.' },
              { icon: '🪪', title: 'KYC Verification', desc: 'Identity verification flow for compliance.' },
            ]} tags={['Figma', 'Flutterflow', 'UI Design', 'Wireframe', 'Prototype', 'Fintech']} />
          </div>
          <MainScreens screens={['/Gash/login.png', '/Gash/regis.png', '/Gash/home.jpg', '/Gash/buy.jpg', '/Gash/sell.jpg', '/Gash/withdraw.jpg', '/Gash/topup.jpg', '/Gash/myaccount.jpg', '/Gash/askKYC.png', '/Gash/KYC5.png', '/Gash/transfergash.jpg', '/Gash/transfergold.jpg']} />
        </div>
      </section>

      {/* 03 — NI THAN */}
      <section style={{ background: '#f0ece4', width: '100%' }}>
        <div style={{ width: '100%', padding: '6rem 5vw' }}>
          <ProjectIntro num="03 — UX/UI DESIGN · UNIVERSITY PROJECT" title="Ni Than" subtitle="Book Discovery & E-Commerce App · Maejo University · Senior Project"
            desc="Ni Than is a book discovery and online bookstore application designed as a senior university project. Covers the full UX process — from user research and wireframing to high-fidelity prototype — with a warm, editorial visual identity inspired by library aesthetics."
            note="User Flow · Wireframe · Hi-Fi Prototype · Splash · Discovery · Home · Details · Cart · Profile" />
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))', overflow: 'hidden', borderRadius: '36px', marginBottom: '2rem', background: '#d5d0c7' }}>
            <FeaturedPhone src="/Nithan/SpashScreen.png" alt="Ni Than Splash" bg="#2a1f14" />
            <FeatureList items={[
              { icon: '📚', title: 'Book Discovery', desc: 'Browse and discover new books with editorial-style layout.' },
              { icon: '🔔', title: 'Notifications', desc: 'New arrivals, hot deals, and personalized recommendations.' },
              { icon: '🛒', title: 'Shopping Cart', desc: 'Add to bag, wishlist, and multi-payment checkout flow.' },
              { icon: '⭐', title: 'Ratings & Reviews', desc: 'Detailed book info with composition, rating tabs.' },
              { icon: '👤', title: 'User Profile', desc: 'Order history, shipping, personal info management.' },
            ]} tags={['Figma', 'UX Research', 'Wireframe', 'Hi-Fi Prototype', 'Mobile UI', 'University Project']} />
          </div>
          <MainScreens screens={['/Nithan/SpashScreen.png', '/Nithan/Discovery.png', '/Nithan/Home.png', '/Nithan/Home-1.png', '/Nithan/Welcome.png', '/Nithan/Login.png', '/Nithan/Login-1.png', '/Nithan/Details.png', '/Nithan/Details-1.png', '/Nithan/Details-2.png', '/Nithan/Details-3.png', '/Nithan/Profile.png', '/Nithan/Profile-1.png', '/Nithan/Notification.png']} />
        </div>
      </section>

      {/* MOBILE APP */}
      <SectionHeader title="Mobile App" subtitle="Independently designed and developed mobile applications — from concept to commercial release." />

      {/* 02 — CLOTHES ME UP */}
      <section style={{ background: '#f0ece4', width: '100%' }}>
        <div style={{ width: '100%', padding: '6rem 5vw' }}>
          <ProjectIntro num="02 — MOBILE APP DESIGN" title="App Design" subtitle="Clothes Me Up — Retail POS & Inventory Management · Published Commercially"
            desc="Clothes Me Up is a mobile POS and inventory management system for small clothing retailers. Independently designed and developed from scratch — published commercially with real paying users."
            note="QR Code POS · Sales Dashboard · Payment Split · Transaction History · Multi-Admin" />
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))', overflow: 'hidden', borderRadius: '36px', marginBottom: '2rem', background: '#d5d0c7' }}>
            <FeaturedPhone src="/clothesmeupimg/preview (10).webp" alt="Clothes Me Up" bg="#111" />
            <FeatureList items={[
              { icon: '🛍️', title: 'POS Selling', desc: 'Add items by number code, set discount, one-tap checkout.' },
              { icon: '📊', title: 'Sales Dashboard', desc: 'Daily/weekly/monthly/yearly report with bar chart.' },
              { icon: '📷', title: 'QR Code Scan', desc: 'Scan QR to add products instantly, demo mode included.' },
              { icon: '💳', title: 'Payment Methods', desc: 'Cash and transfer split payment, auto-recorded.' },
              { icon: '📋', title: 'Transaction History', desc: 'Filter by date, admin account, and payment type.' },
              { icon: '👥', title: 'Multi-Admin', desc: 'Add/remove staff accounts with role-based access.' },
            ]} tags={['React Native', 'Mobile UI', 'UX Design', 'POS System', 'Published', 'Commercial']} />
          </div>
          <MainScreens screens={['/clothesmeupimg/preview (10).webp', '/clothesmeupimg/preview.webp', '/clothesmeupimg/preview (2).webp', '/clothesmeupimg/preview (3).webp', '/clothesmeupimg/preview (4).webp', '/clothesmeupimg/preview (5).webp', '/clothesmeupimg/preview (6).webp', '/clothesmeupimg/preview (7).webp', '/clothesmeupimg/preview (8).webp', '/clothesmeupimg/preview (9).webp']} />
        </div>
      </section>

      {/* GRAPHIC DESIGN */}
      <SectionHeader title="Graphic Design" subtitle="Ad creatives and visual design for real client campaigns." />

      {/* 04 — MSM */}
      <section style={{ background: '#f0ece4', width: '100%' }}>
        <div style={{ width: '100%', padding: '6rem 5vw' }}>
          <ProjectIntro num="04 — AD CREATIVE DESIGN" title="Ad Creatives" subtitle="Menopause Sleep Method — Facebook & Instagram Static Ads · Client: Julian"
            desc="Designed a series of static ad creatives for the Menopause Sleep Method campaign. Focused on emotional copywriting, clean visual hierarchy, and conversion-optimized layout."
            note="Platform: Facebook & Instagram · Style: Minimalist, emotive · Tool: Canva" />
          <div className="reveal" style={{ background: '#0d0d0d', borderRadius: '36px', padding: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem', marginBottom: '3rem' }}>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>Ad</span>
              <span style={{ fontSize: '1.9rem', fontFamily: "'Dancing Script',cursive", color: '#c6ff00' }}>Creatives</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem' }}>
              {['/MSM/1.png', '/MSM/2.png', '/MSM/3.png', '/MSM/4.png', '/MSM/5.png'].map((src, i) => (
                <div key={src} className="stagger card-hover" style={{ animationDelay: `${i * 0.1}s`, position: 'relative', aspectRatio: '1/1', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
                  <Image src={src} alt="MSM Ad" fill style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOTION */}
      <SectionHeader title="Motion" subtitle="AI-assisted motion and video ad production for social media platforms." />

      {/* 05 — DOCTOR GOMBO */}
      <section style={{ background: '#f0ece4', width: '100%' }}>
        <div style={{ width: '100%', padding: '6rem 5vw' }}>
          <ProjectIntro num="05 — MOTION DESIGN" title="Doctor Gombo" subtitle="AI Animated Ad Series · Grok + ElevenLabs + CapCut"
            desc="Produced an AI-assisted animated ad series featuring Doctor Gombo — a Pixar-style green doctor character. Generated video with Grok, voiceover with ElevenLabs, and assembled in CapCut with SRT subtitles and color transitions."
            note="Tools: Grok · ElevenLabs · CapCut · Midjourney · Platform: TikTok / YouTube Shorts" />
          <div className="reveal" style={{ background: '#0d0d0d', borderRadius: '36px', padding: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem', marginBottom: '3rem' }}>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>Motion</span>
              <span style={{ fontSize: '1.9rem', fontFamily: "'Dancing Script',cursive", color: '#c6ff00' }}>Reel</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              {[
                'https://www.youtube.com/embed/8enLIA2P39Q',
                'https://www.youtube.com/embed/FmLBHDT0s7I',
                'https://www.youtube.com/embed/xSjUlfTlcaU',
              ].map((src, i) => (
                <div key={src} className="stagger card-hover" style={{ animationDelay: `${i * 0.15}s`, borderRadius: '20px', overflow: 'hidden', width: '300px', aspectRatio: '9/16', flexShrink: 0 }}>
                  <iframe src={src} style={{ width: '100%', height: '100%', border: 'none' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL & CHATBOT */}
      <SectionHeader title="Social &amp; Chatbot" subtitle="Visual content systems for social media and conversational UI for LINE OA platforms." />

      <section style={{ background: '#f0ece4', width: '100%' }}>
        <div style={{ width: '100%', padding: '6rem 5vw', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))', gap: '2rem' }}>
          <div className="reveal card-hover" style={{ borderRadius: '36px', overflow: 'hidden', background: '#d5d0c7' }}>
            <div style={{ background: '#12041f', minHeight: '420px', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ position: 'relative' }}><Image src="/daomrityu/richmenu.png" alt="Rich Menu" fill style={{ objectFit: 'cover' }} /></div>
              <div style={{ position: 'relative' }}><Image src="/daomrityu/chat.jpg" alt="Chat" fill style={{ objectFit: 'cover' }} /></div>
            </div>
            <div style={{ background: '#f7f4ed', padding: '3rem' }}>
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#c6ff00', marginBottom: '0.75rem' }}>06 — CONVERSATIONAL UI</p>
              <h3 style={{ fontWeight: 800, fontSize: '1.8rem', lineHeight: 1.1, marginBottom: '0.5rem' }}>DaoMrityu LINE OA</h3>
              <p style={{ color: '#888', fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '1.25rem' }}>Astrology Brand · Dark Mystic · Deployed &amp; Live</p>
              <p style={{ color: '#555', lineHeight: 1.85, fontSize: '0.95rem', marginBottom: '1.5rem' }}>Designed and built a complete LINE OA chatbot for the DaoMrityu astrology brand — featuring a zodiac Rich Menu, automated horoscope delivery, wallpaper ordering system, and LINE Shopping integration. Live with real users.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['LINE OA', 'Rich Menu', 'Chatbot UX', 'Node.js', 'Render.com', 'LINE Shopping'].map(t => (
                  <span key={t} style={{ padding: '0.4rem 0.9rem', border: '1px solid rgba(0,0,0,0.1)', fontSize: '0.72rem', color: '#666' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal card-hover" style={{ borderRadius: '36px', overflow: 'hidden', background: '#d5d0c7' }}>
            <div style={{ background: '#1a1500', minHeight: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', backgroundImage: 'linear-gradient(rgba(198,255,0,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(198,255,0,0.025) 1px,transparent 1px)', backgroundSize: '40px 40px' }}>
              <span style={{ fontSize: '3.5rem' }}>🎬</span>
            </div>
            <div style={{ background: '#f7f4ed', padding: '3rem' }}>
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#c6ff00', marginBottom: '0.75rem' }}>07 — SOCIAL MEDIA DESIGN</p>
              <h3 style={{ fontWeight: 800, fontSize: '1.8rem', lineHeight: 1.1, marginBottom: '0.5rem' }}>AI Content Channels</h3>
              <p style={{ color: '#888', fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '1.25rem' }}>Mutalu · MonkAI · HTA · TikTok &amp; YouTube</p>
              <p style={{ color: '#555', lineHeight: 1.85, fontSize: '0.95rem', marginBottom: '1.5rem' }}>Produced and managed visual identity and content design across multiple AI-assisted channels. Created thumbnails, motion content, and consistent design systems using Midjourney, Canva, and CapCut.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Canva', 'Midjourney', 'CapCut', 'Motion', 'Visual Identity'].map(t => (
                  <span key={t} style={{ padding: '0.4rem 0.9rem', border: '1px solid rgba(0,0,0,0.1)', fontSize: '0.72rem', color: '#666' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINT DESIGN */}
      <SectionHeader title="Print Design" subtitle="High-quality print design deliverables for offline brand communication." />

      {/* 08 — BANNER */}
      <section style={{ background: '#f0ece4', width: '100%' }}>
        <div style={{ width: '100%', padding: '6rem 5vw' }}>
          <div className="reveal card-hover" style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))', borderRadius: '36px', overflow: 'hidden', background: '#d5d0c7' }}>
            <div style={{ position: 'relative', minHeight: '480px', background: '#101820' }}>
              <Image src="/bannerbrochoure/GashXRedbullBanner.png" alt="Gash x Red Bull Banner" fill style={{ objectFit: 'contain', padding: '2rem' }} />
            </div>
            <div style={{ background: '#f7f4ed', padding: '5rem' }}>
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#c6ff00', marginBottom: '1rem' }}>08 — PRINT DESIGN</p>
              <h3 style={{ fontWeight: 800, fontSize: '2.5rem', lineHeight: 1, marginBottom: '0.75rem' }}>GASH × Red Bull Banner</h3>
              <p style={{ color: '#888', fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Event Banner · Brand Collaboration</p>
              <p style={{ color: '#555', lineHeight: 1.9, fontSize: '0.97rem', marginBottom: '2rem' }}>Designed an event banner for the GASH × Red Bull collaboration. Created a dynamic layout balancing Red Bull's energetic identity with GASH's premium positioning, using bold typography and vibrant colors.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Banner Design', 'Print Layout', 'Brand Collaboration', 'Typography'].map(t => (
                  <span key={t} style={{ padding: '0.4rem 0.9rem', border: '1px solid rgba(0,0,0,0.1)', fontSize: '0.72rem', color: '#666' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 09 — ACC BROCHURE */}
      <section style={{ background: '#f0ece4', width: '100%' }}>
        <div style={{ width: '100%', padding: '6rem 5vw' }}>
          <div className="reveal card-hover" style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))', borderRadius: '36px', overflow: 'hidden', background: '#d5d0c7', alignItems: 'center' }}>
            <div style={{ background: '#101820', padding: '5rem 4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '700px' }}>
              <BrochureSlideshow />
            </div>
            <div style={{ background: '#f7f4ed', padding: '5rem' }}>
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#c6ff00', marginBottom: '1rem' }}>09 — PRINT DESIGN</p>
              <h3 style={{ fontWeight: 800, fontSize: '2.5rem', lineHeight: 1, marginBottom: '0.75rem', color: '#0d0d0d' }}>ACC ALL Co., Ltd.</h3>
              <p style={{ color: '#888', fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '1.5rem' }}>4-Page Premium Brochure · Door Products, Nonthaburi</p>
              <p style={{ color: '#555', lineHeight: 1.9, fontSize: '0.97rem', marginBottom: '2rem' }}>Designed a premium product brochure for ACC ALL Co., Ltd., a door manufacturer based in Nonthaburi. Covers door collection catalog, product specifications, technical structure, and frame/fitting details. Delivered as a self-contained HTML/CSS file.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Brochure Design', 'Print Layout', 'HTML/CSS', 'Product Catalog', 'Typography'].map(t => (
                  <span key={t} style={{ padding: '0.4rem 0.9rem', border: '1px solid rgba(0,0,0,0.1)', fontSize: '0.72rem', color: '#666' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="reveal" style={{ background: '#0d0d0d', padding: '9rem 5vw', color: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '5rem' }}>
            <span style={{ fontFamily: "'Dancing Script',cursive", fontSize: '1.8rem', color: 'rgba(255,255,255,0.2)' }}>What I work with</span>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(4rem,9vw,9rem)', color: '#fff', lineHeight: 0.9 }}>Skills &amp; Tools</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1px', background: 'rgba(255,255,255,0.07)', borderRadius: '28px', overflow: 'hidden' }}>
            {[
              { title: 'Design', skills: ['Figma', 'Flutterflow', 'Canva', 'Wireframing', 'Prototyping', 'Interaction Design'] },
              { title: 'Development', skills: ['HTML / CSS', 'JavaScript', 'React.js', 'Node.js', 'LINE OA API', 'REST API'] },
              { title: 'AI & Content', skills: ['Midjourney', 'Grok', 'ElevenLabs', 'CapCut', 'Claude', 'ChatGPT'] },
            ].map(g => (
              <div key={g.title} style={{ background: '#0d0d0d', padding: '3.5rem' }}>
                <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '3rem', color: '#c6ff00', marginBottom: '2rem' }}>{g.title}</h3>
                {g.skills.map(s => (
                  <div key={s} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#c6ff00')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  >
                    {s} <span style={{ color: '#c6ff00' }}>↗</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="reveal" style={{ background: '#0d0d0d', padding: '10rem 5vw', textAlign: 'center', borderTop: '1px solid rgba(198,255,0,0.08)', position: 'relative', overflow: 'hidden', color: '#fff' }}>
        <div style={{ position: 'absolute', bottom: '-200px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(198,255,0,0.12), transparent 70%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <span style={{ fontFamily: "'Dancing Script',cursive", fontSize: '1.8rem', color: '#c6ff00', display: 'block', marginBottom: '0.5rem' }}>Let&apos;s Work Together</span>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(4rem,12vw,12rem)', color: '#fff', lineHeight: 0.86, marginBottom: '3rem' }}>Thanks For<br />Scrolling!</h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.4)', marginBottom: '4rem', lineHeight: 1.9 }}>Open to opportunities in UX/UI Design, Graphic Design, and Frontend Development.</p>
          <div style={{ maxWidth: '520px', margin: '0 auto 4rem' }}>
            {[
              { l: 'Email', v: 'kankaewkamol.a4@gmail.com', href: 'mailto:kankaewkamol.a4@gmail.com' },
              { l: 'Phone', v: '097-048-6576', href: 'tel:0970486576' },
              { l: 'Location', v: 'Pathum Thani, Thailand', href: undefined },
            ].map(item => (
              <div key={item.l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>{item.l}</span>
                {item.href ? <a href={item.href} style={{ fontSize: '0.95rem', color: '#c6ff00', textDecoration: 'none' }}>{item.v}</a>
                  : <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)' }}>{item.v}</span>}
              </div>
            ))}
          </div>
          <a href="mailto:kankaewkamol.a4@gmail.com" style={{ display: 'inline-block', padding: '1.2rem 3.5rem', background: '#c6ff00', color: '#0d0d0d', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: '4px', transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(198,255,0,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Get in Touch ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#080808', borderTop: '1px solid rgba(198,255,0,0.08)', padding: '1.75rem 5vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: '#fff' }}>
        <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.2rem', color: '#c6ff00', letterSpacing: '0.12em' }}>KAN KAEWKAMOL</span>
        <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>UX/UI Designer · Developer · Thailand © 2026</p>
      </footer>
    </>
  )
}