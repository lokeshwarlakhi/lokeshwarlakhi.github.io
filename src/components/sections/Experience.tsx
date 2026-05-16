import { Section } from "@/components/ui/Section";
import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <Section id="experience">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A timeline of my professional journey and the impact I've made.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-white/10 to-transparent -translate-x-1/2 hidden md:block" />
        
        <div className="space-y-12">
          {siteData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center justify-between ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 hidden md:block" />
              
              <div className="w-full md:w-[45%] glass-dark p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-300 shadow-xl">
                <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-muted-foreground font-medium mb-4">{exp.company}</p>
                
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Spacer for MD screens */}
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
