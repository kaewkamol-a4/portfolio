'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

/* ═══════════════════════════════════════
   NAVBAR
═══════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.2rem 5vw',
      background: scrolled ? 'rgba(8,8,8,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(198,255,0,0.08)' : 'none',
      transition: '0.35s ease',
    }}>
      <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.6rem', color: '#c6ff00', letterSpacing: '0.12em' }}>KAN.</span>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {['Work', 'About', 'Skills', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.55)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', transition: '0.25s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#c6ff00')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
          >{item}</a>
        ))}
      </div>
    </nav>
  )
}

/* ═══════════════════════════════════════
   SECTION HEADER
═══════════════════════════════════════ */
function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section style={{ background: '#0d0d0d', padding: '8rem 5vw', textAlign: 'center' }}>
      <h2 dangerouslySetInnerHTML={{ __html: title }} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(5rem,14vw,14rem)', lineHeight: 0.88, color: '#c6ff00', marginBottom: '1rem' }} />
      <p style={{ maxWidth: '720px', margin: '0 auto', color: 'rgba(255,255,255,0.4)', lineHeight: 1.9, fontSize: '1rem' }}>{subtitle}</p>
    </section>
  )
}

/* ═══════════════════════════════════════
   PHONE MOCKUP
═══════════════════════════════════════ */
function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ width: '200px', aspectRatio: '9/19', position: 'relative', borderRadius: '30px', overflow: 'hidden', background: '#111', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.55)' }}>
      <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
    </div>
  )
}

/* ═══════════════════════════════════════
   MAIN SCREENS GRID
═══════════════════════════════════════ */
function MainScreens({ screens }: { screens: string[] }) {
  return (
    <div style={{ background: '#0d0d0d', borderRadius: '36px', padding: '4rem' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem', marginBottom: '3rem' }}>
        <span style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>Main</span>
        <span style={{ fontSize: '1.9rem', fontFamily: "'Dancing Script',cursive", color: '#c6ff00' }}>Screens</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        {screens.map(src => <PhoneMockup key={src} src={src} alt="screen" />)}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════
   FEATURE LIST
═══════════════════════════════════════ */
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
        {tags.map(tag => (
          <span key={tag} style={{ padding: '0.45rem 1rem', border: '1px solid rgba(0,0,0,0.1)', fontSize: '0.72rem', color: '#666' }}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════
   PROJECT INTRO
═══════════════════════════════════════ */
function ProjectIntro({ num, title, subtitle, desc, note }: {
  num: string; title: string; subtitle: string; desc: string; note?: string
}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '6rem', marginBottom: '6rem', textAlign: 'center' }}>
      <div style={{ flex: 1, minWidth: '320px', maxWidth: '650px' }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#c6ff00', marginBottom: '1rem' }}>{num}</p>
        <h2 style={{ fontSize: 'clamp(4rem,8vw,7rem)', lineHeight: 0.9, fontWeight: 800, marginBottom: '1rem', color: '#0d0d0d' }}>
          {title.split(' ')[0]}<span style={{ fontFamily: "'Dancing Script',cursive", color: '#777', marginLeft: '0.5rem' }}>{title.split(' ').slice(1).join(' ')}</span>
        </h2>
        <p style={{ color: '#888', lineHeight: 1.8, fontStyle: 'italic' }}>{subtitle}</p>
      </div>
      <div style={{ flex: 1, minWidth: '320px', maxWidth: '560px' }}>
        <p style={{ fontSize: '1rem', lineHeight: 2, color: '#444' }}>{desc}</p>
        {note && <p style={{ marginTop: '1.4rem', color: '#888', lineHeight: 1.9, fontSize: '0.88rem', fontStyle: 'italic' }}>{note}</p>}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════
   PLACEHOLDER CARD
═══════════════════════════════════════ */
function PlaceholderCard({ icon, label, src, bg = '#1a1a2e' }: { icon: string; label?: string; src?: string; bg?: string }) {
  if (src) {
    return (
      <div style={{ background: bg, minHeight: '400px', position: 'relative' }}>
        <Image src={src} alt={label || 'Image'} fill style={{ objectFit: 'cover' }} />
      </div>
    )
  }
  return (
    <div style={{ background: bg, minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', backgroundImage: 'linear-gradient(rgba(198,255,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,0,0.025) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      <span style={{ fontSize: '3rem' }}>{icon}</span>
      {label && <span style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(198,255,0,0.35)', border: '1px dashed rgba(198,255,0,0.2)', padding: '8px 16px' }}>{label}</span>}
    </div>
  )
}
// ─────────────────────────────────────────────
// function BrochureSlideshow 
// ─────────────────────────────────────────────


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

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto' }}>

      {/* Main image */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '3/4',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
      }}>
        <Image
          src={pages[current].src}
          alt={pages[current].label}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Arrow buttons */}
      <button
        onClick={prev}
        style={{
          position: 'absolute', left: '-24px', top: '50%', transform: 'translateY(-50%)',
          width: '48px', height: '48px', borderRadius: '50%',
          background: '#0d0d0d', border: '1px solid rgba(198,255,0,0.3)',
          color: '#c6ff00', fontSize: '1.2rem', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: '0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = '#c6ff00', e.currentTarget.style.color = '#0d0d0d')}
        onMouseLeave={e => (e.currentTarget.style.background = '#0d0d0d', e.currentTarget.style.color = '#c6ff00')}
      >←</button>

      <button
        onClick={next}
        style={{
          position: 'absolute', right: '-24px', top: '50%', transform: 'translateY(-50%)',
          width: '48px', height: '48px', borderRadius: '50%',
          background: '#0d0d0d', border: '1px solid rgba(198,255,0,0.3)',
          color: '#c6ff00', fontSize: '1.2rem', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: '0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = '#c6ff00', e.currentTarget.style.color = '#0d0d0d')}
        onMouseLeave={e => (e.currentTarget.style.background = '#0d0d0d', e.currentTarget.style.color = '#c6ff00')}
      >→</button>

      {/* Page label + dots */}
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem' }}>
          {pages[current].label} · {current + 1} / {pages.length}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === current ? '#c6ff00' : 'rgba(0,0,0,0.2)',
                border: 'none', cursor: 'pointer',
                transition: '0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════
   PAGE
═══════════════════════════════════════ */
export default function Page() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dancing+Script:wght@700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{background:#0d0d0d;font-family:'Plus Jakarta Sans',sans-serif;overflow-x:hidden;color:#0d0d0d}
        ::selection{background:#c6ff00;color:#000}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-thumb{background:#c6ff00}
      `}</style>

      <Navbar />

      {/* ═══ HERO ═══ */}
      <section style={{ minHeight: '100vh', background: 'linear-gradient(to bottom,#0d0d0d,#111)', display: 'flex', alignItems: 'flex-end', padding: '0 5vw 5rem', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-200px', right: '-150px', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(198,255,0,0.18), transparent 70%)', filter: 'blur(20px)' }} />
        <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', position: 'relative', zIndex: 2, color: '#fff' }}>
          <p style={{ color: 'rgba(255,255,255,0.28)', letterSpacing: '0.35em', textTransform: 'uppercase', fontSize: '0.72rem', marginBottom: '2rem' }}>
            Graphic Design &amp; UI/UX Portfolio — 2026
          </p>
          <div style={{ position: 'relative' }}>
            <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(7rem,18vw,19rem)', lineHeight: 0.82, color: '#fff' }}>
              Port<span style={{ color: '#c6ff00' }}>f</span>olio
            </h1>
            <span style={{ position: 'absolute', right: 0, bottom: '1rem', fontFamily: "'Dancing Script',cursive", color: '#c6ff00', fontSize: 'clamp(2rem,5vw,5rem)' }}>Kan Kaewkamol</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '2rem', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {[
              { l: 'Specialization', v: 'UX/UI · Graphic · Frontend' },
              { l: 'Education', v: 'B.Sc. Computer Science · GPA 3.30' },
              { l: 'Location', v: 'Pathum Thani, Thailand' },
              { l: 'Status', v: '🟢 Open to work' },
            ].map(item => (
              <div key={item.l}>
                <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.45rem' }}>{item.l}</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" style={{ background: '#f0ece4', padding: '9rem 5vw' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(360px,1fr))', gap: '6rem', alignItems: 'center' }}>
          <div>
            <span style={{ fontFamily: "'Dancing Script',cursive", fontSize: '1.8rem', color: '#aaa', display: 'block', marginBottom: '0.25rem' }}>About me</span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 'clamp(4rem,7vw,7rem)', lineHeight: 0.95, marginBottom: '2rem' }}>Hello!</h2>
            <p style={{ fontWeight: 700, marginBottom: '1.2rem', fontSize: '1.1rem' }}>I am Kan Kaewkamol.</p>
            <p style={{ fontSize: '1rem', lineHeight: 1.95, color: '#444', textAlign: 'justify' }}>
              Computer Science graduate (2nd Class Honours, GPA 3.30) from Maejo University with a passion for creating user-centered digital experiences. My work spans UX/UI design, graphic design, chatbot conversational UI, and AI-assisted content production. I thrive at the intersection of design and technology — building things that look great and actually work.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#c8c4bc', borderRadius: '24px', overflow: 'hidden' }}>
            {[{ n: '3.30', l: 'GPA · 2nd Honours' }, { n: '3+', l: 'CORE DISCIPLINES' }, { n: '10+', l: 'Projects shipped' }, { n: '100%+', l: 'ON-TIME DELIVERY' }].map(s => (
              <div key={s.l} style={{ background: '#0d0d0d', padding: '3rem 2.5rem' }}>
                <p style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '4rem', color: '#c6ff00', lineHeight: 1, marginBottom: '0.5rem' }}>{s.n}</p>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ UI/UX HEADER ═══ */}
      <SectionHeader title="UI / UX" subtitle="Modern interface design projects for mobile applications, fintech systems, and digital experiences." />

      {/* ═══ GASH ═══ */}
      <section id="work" style={{ background: '#f0ece4', width: '100%' }}>
        <div style={{ width: '100%', padding: '6rem 5vw' }}>
          <ProjectIntro
            num="01 — UI / UX DESIGN"
            title="App Design"
            subtitle="Client: GASH — Gold-Backed Digital Asset Platform · Protoss Technology Co., Ltd."
            desc="GASH is a gold-backed digital asset trading platform designed with a modern and intuitive mobile-first user experience. Complete user flows were designed from wireframe to high-fidelity prototype using Figma and Flutterflow."
            note="Key Features · Realtime Charts · PromptPay Integration · DCA Flow · KYC Verification"
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))', overflow: 'hidden', borderRadius: '36px', marginBottom: '2rem', background: '#d5d0c7' }}>
            <div style={{ background: '#12141f', minHeight: '760px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4rem' }}>
              <div style={{ width: '340px', aspectRatio: '9/19', position: 'relative', borderRadius: '38px', overflow: 'hidden', boxShadow: '0 40px 90px rgba(0,0,0,0.6)' }}>
                <Image src="/Gash/login.png" alt="GASH Login" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <FeatureList
              items={[
                { icon: '🔐', title: 'Authentication', desc: 'Clean login & register experience with email/password.' },
                { icon: '📈', title: 'Realtime Dashboard', desc: 'Modern financial data visualization with live charts.' },
                { icon: '💸', title: 'Trading Flow', desc: 'Fast buy/sell interaction design with DCA support.' },
                { icon: '🏦', title: 'Withdraw System', desc: 'PromptPay integrated transaction flow.' },
                { icon: '🪪', title: 'KYC Verification', desc: 'Identity verification flow for compliance.' },
              ]}
              tags={['Figma', 'Flutterflow', 'UI Design', 'Wireframe', 'Prototype', 'Fintech']}
            />
          </div>
          <MainScreens screens={[
            '/Gash/login.png',
            '/Gash/regis.png',
            '/Gash/home.jpg',
            '/Gash/buy.jpg',
            '/Gash/sell.jpg',
            '/Gash/withdraw.jpg',
            '/Gash/topup.jpg',
            '/Gash/myaccount.jpg',
            '/Gash/askKYC.png',
            '/Gash/KYC5.png',
            '/Gash/transfergash.jpg',
            '/Gash/transfergold.jpg',

          ]} />
        </div>
      </section>

      {/* ═══ MOBILE APP HEADER ═══ */}
      <SectionHeader title="Mobile App" subtitle="Independently designed and developed mobile applications — from concept to commercial release." />

      {/* ═══ CLOTHES ME UP ═══ */}
      <section style={{ background: '#f0ece4', width: '100%' }}>
        <div style={{ width: '100%', padding: '6rem 5vw' }}>
          <ProjectIntro
            num="02 — MOBILE APP DESIGN"
            title="App Design"
            subtitle="Clothes Me Up — Retail POS & Inventory Management · Published Commercially"
            desc="Clothes Me Up is a mobile POS and inventory management system for small clothing retailers. Independently designed and developed from scratch — published commercially with real paying users."
            note="Key Features · QR Code POS · Sales Dashboard · Payment Split · Transaction History · Multi-Admin"
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))', overflow: 'hidden', borderRadius: '36px', marginBottom: '2rem', background: '#d5d0c7' }}>
            <div style={{ background: '#111', minHeight: '760px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4rem' }}>
              <div style={{ width: '340px', aspectRatio: '9/19', position: 'relative', borderRadius: '38px', overflow: 'hidden', boxShadow: '0 40px 90px rgba(0,0,0,0.6)' }}>
                <Image src="/clothesmeupimg/preview (10).webp" alt="Clothes Me Up Login" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <FeatureList
              items={[
                { icon: '🛍️', title: 'POS Selling', desc: 'Add items by number code, set discount, one-tap checkout.' },
                { icon: '📊', title: 'Sales Dashboard', desc: 'Daily/weekly/monthly/yearly report with bar chart.' },
                { icon: '📷', title: 'QR Code Scan', desc: 'Scan QR to add products instantly, test scan demo mode.' },
                { icon: '💳', title: 'Payment Methods', desc: 'Cash and transfer split payment, auto-recorded.' },
                { icon: '📋', title: 'Transaction History', desc: 'Filter by date, admin account, and payment type.' },
                { icon: '👥', title: 'Multi-Admin', desc: 'Add/remove staff accounts with role-based access.' },
              ]}
              tags={['React Native', 'Mobile UI', 'UX Design', 'POS System', 'Published', 'Commercial']}
            />
          </div>
          <MainScreens screens={[
            "/clothesmeupimg/preview (10).webp",
            "/clothesmeupimg/preview.webp",
            "/clothesmeupimg/preview (2).webp",
            "/clothesmeupimg/preview (3).webp",
            "/clothesmeupimg/preview (4).webp",
            "/clothesmeupimg/preview (5).webp",
            "/clothesmeupimg/preview (6).webp",
            "/clothesmeupimg/preview (7).webp",
            "/clothesmeupimg/preview (8).webp",
            "/clothesmeupimg/preview (9).webp",
          ]} />
        </div>
      </section>

      {/* ═══ SOCIAL MEDIA HEADER ═══ */}
      <SectionHeader title="Social &amp; Chatbot" subtitle="Visual content systems for social media and conversational UI for LINE OA platforms." />

      {/* ═══ LINE OA + AI CONTENT ═══ */}
      <section style={{ background: '#f0ece4', width: '100%' }}>
        <div style={{ width: '100%', padding: '6rem 5vw', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))', gap: '2rem' }}>
          {[
            { num: '03 — CONVERSATIONAL UI', title: 'DaoMrityu LINE OA', subtitle: 'Astrology Brand · Chatbot System', desc: 'Designed the complete conversational UX for a deployed LINE OA chatbot — covering intent routing, Rich Menu UI, automated FAQ flows, and order management. Built and maintained the live system on Render.com.', tags: ['LINE OA', 'Rich Menu', 'Chatbot UI', 'Node.js', 'Render.com'], icon: '🔮', bg: '#1a0a2e' },
            { num: '04 — SOCIAL MEDIA DESIGN', title: 'AI Content Channels', subtitle: 'Mutalu · MonkAI · HTA · TikTok & YouTube', desc: 'Produced and managed visual identity and content design across multiple AI-assisted channels. Created thumbnails, motion content, and consistent design systems using Midjourney, Canva, and CapCut.', tags: ['Canva', 'Midjourney', 'CapCut', 'Motion', 'Visual Identity'], icon: '🎬', bg: '#1a1500' },
          ].map(p => (
            <div key={p.num} style={{ borderRadius: '36px', overflow: 'hidden', background: '#d5d0c7' }}>
              <div style={{ background: p.bg, minHeight: '360px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', backgroundImage: 'linear-gradient(rgba(198,255,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,0,0.025) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                <span style={{ fontSize: '3.5rem' }}>{p.icon}</span>
                {/*<span style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(198,255,0,0.4)', border: '1px dashed rgba(198,255,0,0.25)', padding: '8px 16px' }}></span>*/}
              </div>
              <div style={{ background: '#f7f4ed', padding: '3rem' }}>
                <p style={{ fontSize: '0.72rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#c6ff00', marginBottom: '0.75rem' }}>{p.num}</p>
                <h3 style={{ fontWeight: 800, fontSize: '1.8rem', lineHeight: 1.1, marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ color: '#888', fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '1.25rem' }}>{p.subtitle}</p>
                <p style={{ color: '#555', lineHeight: 1.85, fontSize: '0.95rem', marginBottom: '1.5rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {p.tags.map(t => <span key={t} style={{ padding: '0.4rem 0.9rem', border: '1px solid rgba(0,0,0,0.1)', fontSize: '0.72rem', color: '#666' }}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PRINT HEADER ═══ */}
      <SectionHeader title="Print Design" subtitle="High-quality print design deliverables for offline brand communication." />

      {/* ═══ Banner Design ═══ */}
      <section style={{ background: '#f0ece4', width: '100%' }}>
        <div style={{ width: '100%', padding: '6rem 5vw' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))', borderRadius: '36px', overflow: 'hidden', background: '#d5d0c7' }}>
            <div style={{ position: 'relative', minHeight: '480px', background: '#101820' }}>
              <Image
                src="/bannerbrochoure/GashXRedbullBanner.png"
                alt="Gash x Red Bull Banner"
                fill
                style={{ objectFit: 'contain', padding: '2rem' }}
              />
            </div>
            <div style={{ background: '#f7f4ed', padding: '5rem' }}>
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#c6ff00', marginBottom: '1rem' }}>05 — PRINT DESIGN</p>
              <h3 style={{ fontWeight: 800, fontSize: '2.5rem', lineHeight: 1, marginBottom: '0.75rem' }}>Gash X Red Bull Banner</h3>
              <p style={{ color: '#888', fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Gash x Red Bull Banner</p>
              <p style={{ color: '#555', lineHeight: 1.9, fontSize: '0.97rem', marginBottom: '2rem' }}>
                Red Bull wanted a modern, eye-catching banner to promote their collaboration with Gash. I created a dynamic layout that balances Red Bull’s energetic identity with Gash’s premium positioning, using bold typography and vibrant colors.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Brochure', 'Print Design', 'HTML/CSS', 'Layout', 'Product Design'].map(t => (
                  <span key={t} style={{ padding: '0.4rem 0.9rem', border: '1px solid rgba(0,0,0,0.1)', fontSize: '0.72rem', color: '#666' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ACC BROCHURE ═══ */}
      <section style={{ background: '#f0ece4', width: '100%' }}>
        <div style={{ width: '100%', padding: '6rem 5vw' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))', borderRadius: '36px', overflow: 'hidden', background: '#d5d0c7', alignItems: 'center' }}>

            {/* Slideshow */}
            <div style={{ background: '#101820', padding: '5rem 4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '700px' }}>
              <BrochureSlideshow />
            </div>

            {/* Info */}
            <div style={{ background: '#f7f4ed', padding: '5rem' }}>
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#c6ff00', marginBottom: '1rem' }}>05 — PRINT DESIGN</p>
              <h3 style={{ fontWeight: 800, fontSize: '2.5rem', lineHeight: 1, marginBottom: '0.75rem', color: '#0d0d0d' }}>ACC ALL Co., Ltd.</h3>
              <p style={{ color: '#888', fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '1.5rem' }}>4-Page Premium Brochure · Door Products, Nonthaburi</p>
              <p style={{ color: '#555', lineHeight: 1.9, fontSize: '0.97rem', marginBottom: '2rem' }}>
                Designed a 4-page premium product brochure for ACC ALL Co., Ltd., a door manufacturer based in Nonthaburi. Covers door collection catalog, product specifications, technical structure, and frame/fitting details. Delivered as a self-contained HTML/CSS file.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Brochure Design', 'Print Layout', 'HTML/CSS', 'Product Catalog', 'Typography'].map(t => (
                  <span key={t} style={{ padding: '0.4rem 0.9rem', border: '1px solid rgba(0,0,0,0.1)', fontSize: '0.72rem', color: '#666' }}>{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ SKILLS ═══ */}
      <section id="skills" style={{ background: '#0d0d0d', padding: '9rem 5vw', color: '#fff' }}>
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
                  <div key={s} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>
                    {s} <span style={{ color: '#c6ff00' }}>↗</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" style={{ background: '#0d0d0d', padding: '10rem 5vw', textAlign: 'center', borderTop: '1px solid rgba(198,255,0,0.08)', position: 'relative', overflow: 'hidden', color: '#fff' }}>
        <div style={{ position: 'absolute', bottom: '-200px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(198,255,0,0.12), transparent 70%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <span style={{ fontFamily: "'Dancing Script',cursive", fontSize: '1.8rem', color: '#c6ff00', display: 'block', marginBottom: '0.5rem' }}>Let&apos;s Work Together</span>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(4rem,12vw,12rem)', color: '#fff', lineHeight: 0.86, marginBottom: '3rem' }}>
            Thanks For<br />Scrolling!
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.4)', marginBottom: '4rem', lineHeight: 1.9 }}>
            Open to opportunities in UX/UI Design, Graphic Design, and Frontend Development.
          </p>
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
          <a href="mailto:kankaewkamol.a4@gmail.com" style={{ display: 'inline-block', padding: '1.2rem 3.5rem', background: '#c6ff00', color: '#0d0d0d', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: '4px' }}>
            Get in Touch ↗
          </a>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background: '#080808', borderTop: '1px solid rgba(198,255,0,0.08)', padding: '1.75rem 5vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: '#fff' }}>
        <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.2rem', color: '#c6ff00', letterSpacing: '0.12em' }}>KAN KAEWKAMOL</span>
        <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>UX/UI Designer · Developer · Thailand © 2026</p>
      </footer>
    </>
  )
}