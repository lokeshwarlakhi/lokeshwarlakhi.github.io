"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const { hero } = siteData;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium tracking-[0.2em] uppercase text-sm"
          >
            {hero.greeting} <span className="text-glow underline decoration-2 underline-offset-8 decoration-primary/50">{hero.name}</span>
          </motion.p>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.1]">
            {hero.title.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-[0.2em]">
                {word === "Systems" || word === "Intelligent" ? (
                  <span className="gradient-text">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {hero.description}
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-8"
          >
            <a 
              href={hero.ctaLink}
              className="inline-flex items-center justify-center rounded-full px-8 h-12 bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform"
            >
              {hero.ctaText}
            </a>
            <a 
              href={hero.secondaryCtaLink}
              className="inline-flex items-center justify-center rounded-full px-8 h-12 border border-white/10 hover:bg-white/5 font-bold hover:scale-105 transition-transform"
            >
              {hero.secondaryCtaText}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-muted-foreground hover:text-primary transition-colors"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};
