import { Section } from "@/components/ui/Section";
import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col glass-dark rounded-3xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-background/60 group-hover:bg-background/20 transition-all duration-500" />
        
        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Code2 size={20} />
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <Section id="projects" className="bg-muted/30">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A selection of works where technical precision meets artistic intent.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteData.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a 
          href="https://github.com/lokeshwarlakhi" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          View all on GitHub <ExternalLink size={14} />
        </a>
      </div>
    </Section>
  );
};
