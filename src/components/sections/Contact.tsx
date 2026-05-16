import { Section } from "@/components/ui/Section";
import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { Mail, MapPin, Calendar, Send, Code2, AtSign, User } from "lucide-react";

const BrandIcons: any = {
  Github: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  Pinterest: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.621 0 12-5.378 12-12S18.638 0 12.017 0z"/>
    </svg>
  )
};

export const Contact = () => {
  const { contact, socials } = siteData;

  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Let's craft something <span className="gradient-text animate-glow">exceptional</span>.
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              I'm always open to discussing technical architecture, creative ideas, or potential collaborations.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                <p className="text-lg font-bold text-white">{contact.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                <p className="text-lg font-bold text-white">{contact.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Availability</p>
                <p className="text-lg font-bold text-white">{contact.availability}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {socials.map((social) => {
              const IconComp = BrandIcons[social.icon] || BrandIcons.Github;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl glass-dark border border-white/5 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-3 group"
                >
                  <IconComp />
                  <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{social.platform}</span>
                </a>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-dark p-10 rounded-[2.5rem] border border-white/5 relative shadow-2xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Name</label>
                <input 
                  type="text" 
                  className="w-full h-14 px-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all placeholder:text-muted-foreground/30"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full h-14 px-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all placeholder:text-muted-foreground/30"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Message</label>
              <textarea 
                className="w-full h-40 p-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all resize-none placeholder:text-muted-foreground/30"
                placeholder="How can I help you?"
              />
            </div>

            <button className="w-full h-16 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-3">
              Send Message <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};
