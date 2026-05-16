import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Leo = () => {
  const { leo } = siteData;

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
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

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl"
            >
              <img 
                src={leo.image} 
                alt="Leo" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-40" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                  Leo<span className="text-primary">.</span>
                </h1>
                <p className="text-primary font-mono text-xs uppercase tracking-[0.3em]">
                  The Supervisor
                </p>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                {leo.description}
              </p>

              <div className="pt-8 border-t border-white/5">
                <p className="text-sm text-white/40 italic font-serif">
                  "Sometimes, the best debugging strategy is a long walk and a head pat."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Leo;
