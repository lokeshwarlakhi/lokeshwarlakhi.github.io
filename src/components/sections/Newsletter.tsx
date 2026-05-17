import React from 'react';
import { Section } from '@/components/ui/Section';
import { NewsletterForm } from '@/components/ui/NewsletterForm';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const Newsletter = () => {
  return (
    <Section id="newsletter" className="px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="relative glass-dark p-8 md:p-16 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
          {/* Cinematic Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Content Side */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest"
              >
                <Sparkles size={14} /> The Learning Loop
              </motion.div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                  Get high-signal <br />
                  <span className="gradient-text">GenAI insights</span>.
                </h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto lg:mx-0">
                  Join 1,000+ developers receiving curated updates on LLMs, AI agents, and technical architecture.
                </p>
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full lg:max-w-md">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-1 rounded-3xl bg-white/5 border border-white/5"
              >
                <div className="p-6 md:p-8 space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">Subscribe</h3>
                    <p className="text-xs text-muted-foreground">Join my circle for AI & Engineering insights.</p>
                  </div>
                  <NewsletterForm />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
