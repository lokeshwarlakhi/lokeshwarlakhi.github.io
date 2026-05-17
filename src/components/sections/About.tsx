import { Section } from "@/components/ui/Section";
import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

// --- TECH ICON COMPONENT ---
export const TechIcon = ({ name, iconName, className }: { name: string; iconName?: string; className?: string }) => {
  // Mapping for names that don't match simpleicons slugs
  const slugMap: Record<string, string> = {
    "Azure OpenAI": "microsoftazure",
    "LangChain": "langchain",
    "Ollama": "ollama",
    "HuggingFace": "huggingface",
    "RAG Pipelines": "databricks",
    "Python": "python",
    "PyTorch": "pytorch",
    "TensorFlow": "tensorflow",
    "ChromaDB": "mongodb",
    "FastAPI": "fastapi",
    "C# / .NET": "dotnet",
    "Docker": "docker",
    "Git": "git",
    "Linux": "linux",
    "VS Code": "visualstudiocode",
    "Jupyter": "jupyter",
    "Vector Search": "googlecloud",
    "REST APIs": "postman",
    "Microservices": "kubernetes",
    "CI/CD": "githubactions"
  };

  if (name === "Pinecone") {
    return (
      <img 
        src="https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/VectorStore/Pinecone/pinecone.svg" 
        alt={name}
        className={cn("object-contain w-full h-full", className)}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    );
  }

  const slug = slugMap[name] || name.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  // For specialized/non-brand icons, we can still fallback to Lucide
  const isBrand = !!slugMap[name] || [
    "python", "pytorch", "tensorflow", "fastapi", "docker", "git", "linux", "azure"
  ].includes(slug);

  if (isBrand) {
    return (
      <img 
        src={`https://cdn.simpleicons.org/${slug}`} 
        alt={name}
        className={cn("object-contain w-full h-full", className)}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    );
  }

  const Icon = iconName ? (Icons as any)[iconName] : null;
  return Icon ? <Icon className={className} /> : <Icons.Code className={className} />;
};

export const About = () => {
  const { about, skills } = siteData;

  // Function to render text with clickable links
  const renderInteractiveText = (text: string) => {
    const parts = [
      { text: "my buddy Leo", link: "/leo" },
      { text: "my interests", link: "/interests" },
      { text: "my digital recs", link: "/recs" },
    ];

    let result: (string | JSX.Element)[] = [text];

    parts.forEach(({ text: partText, link }) => {
      const newResult: (string | JSX.Element)[] = [];
      result.forEach((item) => {
        if (typeof item === "string") {
          const split = item.split(partText);
          split.forEach((s, i) => {
            newResult.push(s);
            if (i < split.length - 1) {
              newResult.push(
                <Link
                  key={partText}
                  to={link}
                  className="text-primary font-bold decoration-primary/30 underline-offset-4 underline hover:decoration-primary transition-all mx-1"
                >
                  {partText}
                </Link>
              );
            }
          });
        } else {
          newResult.push(item);
        }
      });
      result = newResult;
    });

    return result;
  };

  return (
    <Section id="about" className="relative overflow-hidden py-32">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* --- HEADER --- */}
        <div className="text-center mb-24 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl font-medium tracking-tight max-w-3xl mx-auto"
          >
            {about.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* --- LEFT COLUMN: JOURNEY --- */}
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="space-y-12">
                <div className="flex flex-col items-center mb-12">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-[3rem] overflow-hidden border border-white/10 relative group">
                      <img
                        src={about.photo}
                        alt="Profile"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                    </div>

                    {/* Based in India Badge */}
                    <div className="absolute -bottom-3 -right-3 glass-dark px-4 py-2 rounded-xl border border-white/10 shadow-2xl z-20">
                      <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Based in India 🇮🇳</p>
                    </div>

                    {/* Subtle outer glow */}
                    <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p className="text-white/80 font-medium">{about.shortIntro}</p>
                  <p>{renderInteractiveText(about.personalityText)}</p>
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="text-xs uppercase tracking-[0.4em] text-white/30 font-bold">Core Technologies</h4>
                <div className="grid grid-cols-4 gap-4">
                  {skills[0].skills.slice(0, 4).map((skill) => (
                    <div key={skill.name} className="glass-dark p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-3 group hover:border-primary/30 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] flex items-center justify-center border border-white/10 text-zinc-900 group-hover:text-primary transition-colors shadow-sm">
                        <TechIcon name={skill.name} iconName={skill.icon} className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-white/40 group-hover:text-white transition-colors">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: SKILLS & EXPERTISE --- */}
          <div className="space-y-12">
            <h3 className="text-2xl font-bold tracking-tight text-white/90">Skills & Expertise</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((category) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all relative overflow-hidden group h-full"
                >
                  {/* Subtle card glow */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <h4 className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {category.title.split(' & ')[0]}
                  </h4>

                  <ul className="space-y-4">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="flex items-center gap-3 text-sm text-white/60 group-hover:text-white/90 transition-colors">
                        <TechIcon name={skill.name} iconName={skill.icon} className="w-3.5 h-3.5" />
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};
