export interface HeroSection {
  greeting: string;
  name: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface AboutSection {
  title: string;
  subtitle: string;
  shortIntro: string;
  wittyText: string;
  personalityText: string;
  photo: string;
}

export interface Interest {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  image: string;
  type: 'movie' | 'anime' | 'book' | 'youtube' | 'tool' | 'podcast' | 'website' | 'creator' | 'series' | 'sports' | 'documentary';
  link?: string;
}

export interface LeoData {
  image: string;
  description: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  isFeatured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface BeyondTheCodeItem {
  id: string;
  title: string;
  content: string;
  category: 'philosophy' | 'hobby' | 'book' | 'thought' | 'interest' | 'idea';
  icon?: string;
}

export interface BlogPreview {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactDetails {
  email: string;
  location: string;
  availability: string;
}

export interface ThanksPage {
  heading: string;
  subtext: string;
  wittyNote: string;
  memeImage: string;
  buttons: {
    text: string;
    link: string;
    variant: 'primary' | 'secondary';
  }[];
}

export interface SiteData {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
  hero: HeroSection;
  about: AboutSection;
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  contact: ContactDetails;
  socials: SocialLink[];
  leo: LeoData;
  interests: Interest[];
  recommendations: Recommendation[];
  thanksPage?: ThanksPage;
}
