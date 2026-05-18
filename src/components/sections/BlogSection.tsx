import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { getAllPosts } from "@/lib/blogUtils";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const BlogSection = () => {
  const posts = getAllPosts().slice(0, 3);

  return (
    <Section id="blog" className="bg-muted/30">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Latest <span className="gradient-text">Posts</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Writing about technical architecture, AI innovation, and lessons learned along the way.
          </p>
        </div>
        <Link 
          to="/all-posts" 
          className="group flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
        >
          Explore All Posts <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col glass-dark rounded-3xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500"
          >
            <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
              <img
                src={post.cover || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"}
                alt={post.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/10 transition-all duration-500" />
            </Link>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-primary" /> {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} className="text-primary" /> {post.readTime}
                </span>
              </div>

              <Link to={`/blog/${post.slug}`}>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
              </Link>

              <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed mb-6">
                {post.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-muted-foreground">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};
