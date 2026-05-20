export type Project = {
  id: string
  category: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  images: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'gash-app',
    category: 'UI/UX Design',
    title: 'GASH Application',
    subtitle: 'Fintech Platform — Protoss Technology Co., Ltd.',
    description:
      'Designed full application screen flows for GASH — a fintech platform — from wireframe through high-fidelity prototype. Delivered UI screens, email notification templates, and graphic banners using Figma and Flutterflow.',
    tags: ['Figma', 'Flutterflow', 'Wireframe', 'Prototype', 'UI Design'],
    images: ['/projects/gash-1.jpg', '/projects/gash-2.jpg'],
    featured: true,
  },
  {
    id: 'clothes-me-up',
    category: 'Mobile App Design',
    title: 'Clothes Me Up',
    subtitle: 'Fashion Mobile Application — Published & Sold',
    description:
      'Independently designed and developed a fashion/outfit mobile application — from concept through to commercial release. Managed UI design, user flow architecture, and app store listing end-to-end.',
    tags: ['Mobile UI', 'React Native', 'User Flow', 'Published App'],
    images: ['/projects/clothes-1.jpg'],
    featured: true,
  },
  {
    id: 'daomrityu-lineoa',
    category: 'Conversational UI',
    title: 'DaoMrityu LINE OA',
    subtitle: 'Astrology Brand Chatbot System',
    description:
      'Designed the complete conversational UX for a deployed LINE OA chatbot — covering intent routing, Rich Menu UI, automated FAQ flows, and order management. Built and maintained the live system on Render.com.',
    tags: ['LINE OA', 'Conversational UI', 'Rich Menu', 'Node.js'],
    images: ['/projects/lineoa-1.jpg'],
  },
  {
    id: 'ai-content',
    category: 'Social Media Design',
    title: 'AI Content Channels',
    subtitle: 'Mutalu · MonkAI · HTA — TikTok & YouTube',
    description:
      'Produced and managed visual identity and content design across multiple AI-assisted channels. Created thumbnails, motion content, and consistent design systems using Midjourney, Canva, and CapCut.',
    tags: ['Canva', 'Midjourney', 'CapCut', 'Motion', 'Visual Identity'],
    images: ['/projects/content-1.jpg', '/projects/content-2.jpg'],
  },
  {
    id: 'acc-brochure',
    category: 'Print Design',
    title: 'ACC ALL Co., Ltd.',
    subtitle: '4-Page Premium Brochure — Door Products',
    description:
      'Designed a 4-page premium product brochure for ACC ALL Co., Ltd., a door manufacturer based in Nonthaburi. Delivered as a self-contained HTML/CSS file with embedded images.',
    tags: ['Brochure', 'Print Design', 'HTML/CSS', 'Layout'],
    images: ['/projects/brochure-1.jpg'],
  },
]

export const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'ui-ux', label: 'UI / UX' },
  { id: 'social', label: 'Social Media' },
  { id: 'print', label: 'Print Design' },
  { id: 'branding', label: 'Branding' },
]