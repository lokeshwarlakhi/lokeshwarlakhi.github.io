import { motion } from "framer-motion";
import { getAllPosts, BlogPost } from "@/lib/blogUtils";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Search, Tag as TagIcon } from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

const BlogCard = ({ post, index, featured = false }: { post: BlogPost, index: number, featured?: boolean }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "group relative flex flex-col glass-dark rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500",
        featured ? "md:flex-row md:col-span-2 lg:col-span-3 h-auto md:h-[400px]" : ""
      )}
    >
      <Link 
        to={`/blog/${post.slug}`} 
        className={cn(
          "block relative overflow-hidden",
          featured ? "w-full md:w-1/2 h-[250px] md:h-full" : "aspect-[16/10]"
        )}
      >
        <img
          src={post.cover || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"}
          alt={post.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-background/40 group-hover:bg-background/10 transition-all duration-500" />
      </Link>

      <div className={cn(
        "p-8 md:p-10 flex flex-col justify-center",
        featured ? "w-full md:w-1/2" : ""
      )}>
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5 font-bold text-primary">
            {featured && <span className="px-2 py-0.5 rounded bg-primary/10 mr-2">Featured</span>}
            <Calendar size={12} /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} /> {post.readTime}
          </span>
        </div>

        <Link to={`/blog/${post.slug}`}>
          <h3 className={cn(
            "font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight tracking-tight",
            featured ? "text-3xl md:text-5xl" : "text-2xl"
          )}>
            {post.title}
          </h3>
        </Link>

        <p className="text-muted-foreground text-sm md:text-base line-clamp-3 leading-relaxed mb-8">
          {post.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
              #{tag}
            </span>
          ))}
        </div>

        <Link 
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors group/btn"
        >
          Read Article <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
};

export default function BlogArchive() {
  const allPosts = getAllPosts();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
  }, [allPosts]);

  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [allPosts, searchQuery, selectedTag]);

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <header className="max-w-4xl mb-20 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6">
              <span className="gradient-text">All Posts</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Thoughts on AI architecture, engineering precision, and the future of intelligent systems.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all placeholder:text-muted-foreground/30 text-white"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 items-center">
              <button
                onClick={() => setSelectedTag(null)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                  selectedTag === null ? "bg-primary text-primary-foreground" : "bg-white/5 text-muted-foreground hover:bg-white/10"
                )}
              >
                All
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                    selectedTag === tag ? "bg-primary text-primary-foreground" : "bg-white/5 text-muted-foreground hover:bg-white/10"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Blog Feed */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {featuredPost && <BlogCard post={featuredPost} index={0} featured={true} />}
            {otherPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index + 1} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 space-y-6">
            <div className="inline-flex p-6 rounded-full bg-white/5 text-muted-foreground mb-4">
              <Search size={48} />
            </div>
            <h3 className="text-2xl font-bold text-white">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter to find what you're looking for.</p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedTag(null); }}
              className="text-primary font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
