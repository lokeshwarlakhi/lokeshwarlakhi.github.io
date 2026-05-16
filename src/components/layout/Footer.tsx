import { siteData } from "@/data/siteData";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tighter gradient-text">
            {siteData.hero.name.toUpperCase()}
          </span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} — Built with technical precision.
          </p>
        </div>

        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link to="/experience" className="hover:text-primary transition-colors">Experience</Link>
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
        </div>
        
        <div className="text-sm text-muted-foreground/50 italic text-center md:text-right">
          Built with ❤️, ☕, and a questionable amount of Google searches. <br />
          Designed by {siteData.hero.name}
        </div>
      </div>
      
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  );
};
