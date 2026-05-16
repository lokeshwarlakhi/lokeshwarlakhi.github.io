import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalRecs = () => {
  const { recommendations } = siteData;

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
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
              The <span className="gradient-text">Shelf.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A non-categorized, flowing grid of things I recommend. Movies, books, tools, and inspirations—all living together on one shelf.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {recommendations.map((rec, idx) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-500"
              >
                <div className="aspect-[2/3] overflow-hidden">
                  <img 
                    src={rec.image} 
                    alt={rec.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4 glass-dark px-3 py-1 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-primary">
                      {rec.type}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {rec.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-xs line-clamp-3">
                    {rec.description}
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

export default DigitalRecs;
