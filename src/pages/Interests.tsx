import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Interests = () => {
  const { interests } = siteData;

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <Link 
              to="/" 
              className="group flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-mono uppercase tracking-widest">Back to Profile</span>
            </Link>
          </motion.div>

          <header className="space-y-4 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              The <span className="gradient-text">Curiosities.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A collection of things that fascinate me, inspire my work, and keep my mind engaged outside the terminal.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, idx) => (
              <motion.div
                key={interest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative glass-dark border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-primary/20 transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={interest.image} 
                    alt={interest.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {interest.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {interest.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Interests;
