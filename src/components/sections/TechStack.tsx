import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

const IconRenderer = ({ iconName, className }: { iconName?: string; className?: string }) => {
  if (!iconName) return null;
  const Icon = (LucideIcons as any)[iconName];
  return Icon ? <Icon className={className} /> : null;
};

export const TechStack = () => {
  const { skills } = siteData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="space-y-12 w-full">
      {skills.map((category, categoryIdx) => (
        <div key={category.title} className="space-y-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIdx * 0.1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-white/10" />
            {category.title}
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3"
          >
            {category.skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                className="group flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:text-primary transition-all duration-300">
                  <IconRenderer iconName={skill.icon} className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                </div>
                
                <p className="text-[12px] font-medium text-white/60 group-hover:text-white transition-colors truncate">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};
