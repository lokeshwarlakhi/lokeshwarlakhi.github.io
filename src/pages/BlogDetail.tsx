import { useParams, Link, Navigate } from "react-router-dom";
import { getPostBySlug } from "@/lib/blogUtils";
import ReactMarkdown from "react-markdown";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import { ShareButtons } from "@/components/ui/ShareButtons";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return <Navigate to="/" />;
  }

  return (
    <main className="min-h-screen bg-background pb-32">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-6 md:px-12 pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-16">
            <Link 
              to="/all-posts" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
              Back to All Posts
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-primary font-bold mb-8">
                <span className="flex items-center gap-2">
                  <Calendar size={14} /> {post.date}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="flex items-center gap-2">
                  <Clock size={14} /> {post.readTime}
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold text-white mb-10 leading-[1.05] tracking-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-3 mb-10">
                {post.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground">
                    <Tag size={12} className="text-primary" /> {tag}
                  </span>
                ))}
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground/80 font-medium leading-relaxed max-w-3xl">
                {post.description}
              </p>
            </motion.div>
          </header>

          {/* Hero Image */}
          {post.cover && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="aspect-video rounded-[2.5rem] overflow-hidden border border-white/5 mb-20 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <img 
                src={post.cover} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}

          {/* Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-16">
            <article className="prose prose-invert prose-primary max-w-none 
              prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-code:text-primary prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-pre:shadow-2xl
              prose-strong:text-white prose-img:rounded-3xl prose-blockquote:border-primary/50
              prose-blockquote:text-white prose-blockquote:italic prose-blockquote:bg-primary/5 prose-blockquote:py-2
            ">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>

            {/* Sidebar / TOC placeholder */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-12">
                <div className="space-y-4">
                  <ShareButtons title={post.title} />
                </div>

                <div className="p-8 rounded-[2rem] glass-dark border border-white/5 space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Newsletter</h4>
                    <p className="text-xs text-muted-foreground">Join my circle for AI & Engineering insights.</p>
                  </div>
                  <NewsletterForm />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
