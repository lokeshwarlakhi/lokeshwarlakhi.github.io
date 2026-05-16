import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteData } from '@/data/siteData';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function Thanks() {
  const data = siteData.thanksPage;

  if (!data) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden bg-[#030303]">
      {/* Cinematic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-2xl w-full text-center space-y-10 relative z-10">
        {/* Heading Section */}
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
          >
            {data.heading}
          </motion.h1>
        </div>

        {/* Meme Section - Now right below heading */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="py-4"
        >
          <div className="relative group max-w-[280px] md:max-w-xs mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/0 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <img 
              src={data.memeImage} 
              alt="Thanks Meme" 
              className="relative rounded-[2rem] border border-white/10 shadow-2xl transition-all duration-700 w-full"
            />
          </div>
        </motion.div>

        {/* Subtext Section */}
        <div className="space-y-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed"
          >
            {data.subtext}
          </motion.p>

          {/* Witty Note */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 inline-block"
          >
            <p className="text-xs md:text-sm text-primary/80 font-mono italic">
              "{data.wittyNote}"
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            {data.buttons.map((btn, idx) => (
              <Link
                key={idx}
                to={btn.link}
                className={`
                  px-8 py-4 rounded-2xl font-bold text-sm transition-all flex items-center gap-2
                  ${btn.variant === 'primary' 
                    ? 'bg-primary text-primary-foreground hover:scale-105 active:scale-95' 
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}
                `}
              >
                {btn.text === "Back Home" ? <ArrowLeft size={18} /> : <BookOpen size={18} />}
                {btn.text}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
