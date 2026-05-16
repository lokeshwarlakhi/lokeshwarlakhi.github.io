import { SiteData } from '@/types';

export const siteData: SiteData = {
  metadata: {
    title: 'Lokeswar | Gen AI Engineer',
    description: 'AI/ML Engineer specializing in Generative AI, LLMs, and scalable RAG pipelines.',
    keywords: ['Python', 'GenAI', 'LLM', 'RAG', 'Azure OpenAI', 'LangChain'],
    ogImage: '/imgs/l.lokeswar.rao.jpeg',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Lokeswar',
    title: 'Architecting Intelligent Systems',
    description: 'I am an AI/ML Engineer specializing in Generative AI and Large Language Models. I build scalable orchestration systems, RAG pipelines, and enterprise-grade AI solutions.',
    ctaText: 'View Projects',
    ctaLink: '#projects',
    secondaryCtaText: 'Download Resume',
    secondaryCtaLink: '#contact',
  },
  about: {
    title: 'The Profile',
    subtitle: 'Engineer. Researcher. Innovator.',
    shortIntro: 'I specialize in Generative AI and Large Language Models, focusing on building scalable orchestration systems and enterprise-grade AI solutions.',
    wittyText: 'Architecting the future, one prompt at a time — and probably consuming a questionable amount of coffee in the process.',
    personalityText: 'Outside engineering, I spend most of my time with my buddy Leo, exploring my interests, and curating my digital recs.',
    photo: '/imgs/l.lokeswar.rao.jpeg',
  },
  skills: [
    {
      title: 'GenAI & LLM Ecosystem',
      skills: [
        { name: 'Azure OpenAI', icon: 'Cpu' },
        { name: 'LangChain', icon: 'Link' },
        { name: 'Ollama', icon: 'Terminal' },
        { name: 'HuggingFace', icon: 'Brain' },
        { name: 'RAG Pipelines', icon: 'Database' },
        { name: 'AI Agents', icon: 'Bot' },
        { name: 'Prompt Engineering', icon: 'Zap' },
        { name: 'MCP (Model Context Protocol)', icon: 'Share2' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Python', icon: 'Code2' },
        { name: 'PyTorch', icon: 'Activity' },
        { name: 'TensorFlow', icon: 'Grid' },
        { name: 'Pinecone', icon: 'Triangle' },
        { name: 'ChromaDB', icon: 'Layers' },
        { name: 'Vector Search', icon: 'Search' }
      ]
    },
    {
      title: 'Backend & Engineering',
      skills: [
        { name: 'FastAPI', icon: 'Zap' },
        { name: 'C# / .NET', icon: 'Monitor' },
        { name: 'Node.js', icon: 'Box' },
        { name: 'REST APIs', icon: 'Globe' },
        { name: 'Microservices', icon: 'Server' }
      ]
    },
    {
      title: 'DevOps & Workflow',
      skills: [
        { name: 'Docker', icon: 'Container' },
        { name: 'Git', icon: 'GitBranch' },
        { name: 'Linux', icon: 'Layout' },
        { name: 'Jupyter', icon: 'FileCode' },
        { name: 'VS Code', icon: 'Code' },
        { name: 'CI/CD', icon: 'RefreshCw' }
      ]
    }
  ],
  projects: [
    {
      id: 'youtube-rag',
      title: 'YouTube RAG Chat',
      description: 'A context-aware semantic search pipeline for video transcripts. Built with LangChain, Pinecone, and OpenAI.',
      thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
      tags: ['Python', 'GenAI', 'RAG'],
      githubUrl: 'https://github.com/lokeshwarlakhi/RAG-Chat-with-YouTube',
      demoUrl: '#',
      isFeatured: true,
    },
    {
      id: 'expreme',
      title: 'Expreme',
      description: 'A real-time facial expression-based music assistant using computer vision and deep learning.',
      thumbnail: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800',
      tags: ['Deep Learning', 'OpenCV', 'Python'],
      githubUrl: 'https://github.com/lokeshwarlakhi/Expreme_Music_Assistant',
      demoUrl: '#',
      isFeatured: true,
    },
    {
      id: 'ai-portfolio',
      title: 'AI Portfolio',
      description: 'A premium, cinematic personal brand website showcasing futuristic design and motion effects.',
      thumbnail: 'https://images.unsplash.com/photo-1635332396677-4c263e723967?auto=format&fit=crop&q=80&w=800',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      githubUrl: '#',
      demoUrl: '#',
      isFeatured: true,
    }
  ],
  experience: [
    {
      id: 'acc-1',
      company: 'Accenture',
      role: 'AI/ML Engineer Analyst',
      period: 'March 2026 — Present',
      description: [
        'Building advanced AI solutions and scalable orchestration systems using GenAI and LLMs.',
        'Collaborating with cross-functional teams to deliver enterprise-grade AI applications.'
      ],
      technologies: ['GenAI', 'LLMs', 'Python', 'Azure']
    },
    {
      id: 'acc-2',
      company: 'Accenture',
      role: 'AI/ML Engineer Associate',
      period: 'July 2024 — Feb 2026',
      description: [
        'Focused on RAG pipelines, enterprise-grade AI applications, and Python-based development.',
        'Implemented optimized search strategies using vector databases.'
      ],
      technologies: ['RAG', 'Python', 'Pinecone', 'Azure OpenAI']
    },
    {
      id: 'uptrain',
      company: 'Uptrain',
      role: 'ML Engineer Intern',
      period: 'March 2023 — May 2023',
      description: [
        'Worked on machine learning models and research-oriented AI tasks.',
        'Explored model evaluation metrics for high-accuracy systems.'
      ],
      technologies: ['ML', 'Research', 'Python']
    }
  ],
  beyondTheCode: [
    {
      id: 'btc-1',
      title: 'The Witty Quote',
      content: 'Built with ❤️, ☕, and a questionable amount of Google searches.',
      category: 'philosophy'
    },
    {
      id: 'btc-2',
      title: 'RAG Optimization',
      content: 'Optimization is not just about speed; it is about the precision of information retrieval in an era of noise.',
      category: 'thought'
    },
    {
      id: 'btc-3',
      title: 'The Gen AI Era',
      content: 'Generative AI is not just a tool; it is a new paradigm for human-computer collaboration.',
      category: 'idea'
    }
  ],
  blogPreviews: [
    {
      id: 'blog-1',
      title: 'Rise of small Language Models',
      excerpt: 'Exploring why SLMs are becoming crucial for edge computing and privacy-first AI.',
      date: 'May 2026',
      readTime: '6 min read',
      slug: 'rise-of-slms'
    }
  ],
  contact: {
    email: 'lokeshwarlakhi@gmail.com',
    location: 'Remote / India',
    availability: 'Open for selective collaborations'
  },
  socials: [
    { platform: 'GitHub', url: 'https://github.com/lokeshwarlakhi', icon: 'Github' },
    { platform: 'Twitter', url: 'https://twitter.com/loxlakhineni', icon: 'Twitter' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/lokeshwarlakhi/', icon: 'Linkedin' },
    { platform: 'Pinterest', url: 'https://in.pinterest.com/lokeshlakhii/picture-this/', icon: 'Pinterest' }
  ],
  leo: {
    image: '/imgs/leo/leo-1.jpg',
    description: 'Leo is more than just a pet; he is my constant companion and the official AI model supervisor. Whether we are on a long walk or I am deep in a coding session, he is always there to remind me of the importance of balance and a well-timed head pat.'
  },
  interests: [
    { id: 'photography', name: 'iPhone Photography', description: 'Capturing the world through an iPhone. currently  with my iphone 14 pro max.', image: '/imgs/interests/photography.jpeg' },
    { id: 'football', name: 'Football', description: 'A passionate follower of the EPL game.', image: '/imgs/interests/football.jpeg' },
    { id: 'chess', name: 'Chess', description: 'The ultimate battle of logic and foresight. I find peace in the silent, intense calculation of the 64 squares.', image: '/imgs/interests/chess.jpeg' },
    { id: 'hiking', name: 'Hiking', description: 'Seeking perspective among the peaks. There is nothing like the clarity that comes from a long ascent into nature.', image: '/imgs/interests/hiking.jpg' },
    { id: 'tech-culture', name: 'Tech Culture', description: 'Observing the evolution of tools, the aesthetics of clean code, and the philosophy of modern engineering.', image: '/imgs/interests/tech.jpeg' },
    { id: 'ai', name: 'Artificial Intelligence', description: 'Beyond engineering, I am fascinated by the quest for AGI and the profound impact of machine intelligence on humanity.', image: '/imgs/interests/ai.jpeg' },
    { id: 'philosophy', name: 'Philosophy', description: 'Exploring existentialism and the nature of reality through classical and modern texts.', image: '/imgs/interests/philosophy.jpeg' },
    { id: 'anime', name: 'Anime', description: 'Appreciating the boundary-pushing storytelling, art direction, and emotional depth of modern Japanese animation.', image: '/imgs/interests/anime.jpeg' },
    { id: 'films', name: 'Watching Films', description: 'A lover of cinematic storytelling, particularly science fiction and psychological thrillers that challenge our perception.', image: '/imgs/interests/movies.jpeg' }
  ],
  recommendations: [
    { id: 'rec-1', title: 'Interstellar', description: 'A masterpiece of science fiction that explores the depths of human emotion and the vastness of space.', type: 'movie', image: '/imgs/movies/interstellar.jpeg' },
    { id: 'rec-2', title: 'Death Note', description: 'A gripping psychological thriller that poses profound questions about justice and morality.', type: 'anime', image: '/imgs/anime/death-note.jpeg' },
    { id: 'rec-3', title: 'Inception', description: 'A mind-bending journey into the world of dreams and the architecture of the mind.', type: 'movie', image: '/imgs/movies/inception.jpeg' },
    { id: 'rec-4', title: 'Suits', description: 'A high-stakes legal drama that balances sharp wit with intense power dynamics.', type: 'series', image: '/imgs/series/suits.jpeg' },
    { id: 'rec-5', title: 'Attack On Titan', description: 'A dark, complex narrative that delves into the darkest corners of the human psyche.', type: 'anime', image: '/imgs/anime/attack-on-titan.jpeg' },
    { id: 'rec-6', title: 'Better Call Saul', description: 'The evolution of a small-time lawyer into the iconic Saul Goodman, told with masterful precision.', type: 'series', image: '/imgs/series/better-call-saul.jpeg' },
    { id: 'rec-7', title: 'Stranger Things', description: 'A nostalgic journey into the supernatural mysteries of Hawkins, Indiana.', type: 'series', image: '/imgs/series/stranger-things.jpeg' },
    { id: 'rec-8', title: 'F1', description: 'A high-octane cinematic journey into the world of Formula 1, capturing the relentless pursuit of speed, precision, and the human spirit on the edge.', type: 'movie', image: '/imgs/movies/f1.jpeg' },
    { id: 'rec-9', title: 'Prakhar Gupta Experience', description: 'Deep, unfiltered conversations exploring the complexities of the human experience.', type: 'podcast', image: '/imgs/gallery/pgx.png' },
    { id: 'rec-10', title: 'The Holy Geeta', description: 'An profound exploration of the Bhagavad Gita by Swamy Chinmayananda, offering timeless wisdom.', type: 'book', image: '/imgs/gallery/holy-geeta.jpeg' },
    { id: 'rec-11', title: 'Breaking Bad', description: 'A masterful exploration of morality and causality, following the descent of a chemistry teacher into the dark world of a drug kingpin.', type: 'series', image: '/imgs/series/breaking-bad.jpeg' }
  ],
  thanksPage: {
    heading: "You're in.",
    subtext: "Now go confirm your email before the internet thinks you're a bot.",
    wittyNote: "Sometimes the confirmation email hides in spam. A little social anxiety, perhaps.",
    memeImage: "/imgs/gallery/thanks_meme.gif",
    buttons: [
      { text: "Back Home", link: "/", variant: "primary" },
      { text: "Explore Blogs", link: "/blog", variant: "secondary" }
    ]
  }
};
