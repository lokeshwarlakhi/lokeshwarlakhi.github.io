// Custom lightweight frontmatter parser for browser compatibility
const parseFrontmatter = (content: string) => {
  const frontmatterRegex = /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return { data: {}, content };
  
  const yamlBlock = match[1];
  const body = match[2];
  const data: any = {};
  
  yamlBlock.split('\n').forEach(line => {
    const [key, ...value] = line.split(':');
    if (key && value.length) {
      const val = value.join(':').trim();
      // Basic YAML parsing (strings, arrays)
      if (val.startsWith('[') && val.endsWith(']')) {
        data[key.trim()] = val.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
      } else {
        data[key.trim()] = val.replace(/^["']|["']$/g, '');
      }
    }
  });
  
  return { data, content: body };
};

// Use Vite's glob import to get all markdown files in the src/blogs directory
const blogFiles = import.meta.glob('../blogs/*.md', { as: 'raw', eager: true });

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  cover?: string;
  content: string;
  readTime: string;
}

export const getAllPosts = (): BlogPost[] => {
  const posts = Object.entries(blogFiles).map(([filepath, content]) => {
    const slug = filepath.replace('../blogs/', '').replace('.md', '');
    const { data, content: body } = parseFrontmatter(content as string);
    
    // Estimate read time
    const wordsPerMinute = 200;
    const noOfWords = body.split(/\s/g).length;
    const minutes = Math.ceil(noOfWords / wordsPerMinute);
    const readTime = `${minutes} min read`;

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      description: data.description || '',
      tags: data.tags || [],
      cover: data.cover,
      content: body,
      readTime,
    } as BlogPost;
  });

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return getAllPosts().find((post) => post.slug === slug);
};
