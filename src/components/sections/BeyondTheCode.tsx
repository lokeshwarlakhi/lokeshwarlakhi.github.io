import { Section } from "@/components/ui/Section";
import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { Book, Coffee, Camera, Lightbulb, Zap, Quote } from "lucide-react";

const iconMap: any = {
  philosophy: Quote,
  hobby: Coffee,
  book: Book,
  thought: Zap,
  interest: Camera,
  idea: Lightbulb,
};

export const BeyondTheCode = () => {
  return (
    <Section id="beyond-the-code">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Beyond the <span className="gradient-text">Code</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A collection of thoughts, interests, and philosophies that shape who I am.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {siteData.beyondTheCode.map((item, index) => {
          const Icon = iconMap[item.category] || Zap;
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid p-8 rounded-3xl glass-dark border border-white/5 hover:border-primary/20 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Icon size={20} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                  {item.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed italic">
                "{item.content}"
              </p>
              
              <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-primary/20 to-transparent" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
