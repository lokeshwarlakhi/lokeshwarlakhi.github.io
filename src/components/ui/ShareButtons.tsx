import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Twitter, Linkedin, Link2, Share2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ShareButtonsProps {
  title: string;
  url?: string;
  className?: string;
}

/**
 * SHARE BUTTONS COMPONENT
 * -----------------------
 * Handles social sharing using the Native Web Share API (mobile) 
 * with graceful fallbacks to custom social links for desktop.
 */

export const ShareButtons = ({ title, url, className }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Share cancelled or failed:', err);
      }
    }
  };

  const socialPlatforms = [
    {
      name: 'Twitter',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/10',
    },
  ];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mr-2">Share</span>
      
      {socialPlatforms.map((platform) => (
        <a
          key={platform.name}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "p-3 rounded-xl glass-dark border border-white/5 transition-all duration-300",
            platform.color
          )}
          title={`Share on ${platform.name}`}
        >
          <platform.icon size={18} />
        </a>
      ))}

      <button
        onClick={handleCopyLink}
        className={cn(
          "p-3 rounded-xl glass-dark border border-white/5 transition-all duration-300 relative group",
          copied ? "text-green-500 bg-green-500/10 border-green-500/20" : "hover:text-primary hover:bg-primary/10 hover:border-primary/20"
        )}
        title="Copy Link"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              key="check"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <Check size={18} />
            </motion.div>
          ) : (
            <motion.div
              key="link"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <Link2 size={18} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Tooltip */}
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-[10px] font-bold uppercase rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
          {copied ? 'Copied!' : 'Copy Link'}
        </span>
      </button>

      {/* Native Share Button (Visible only on supported browsers, e.g., Mobile) */}
      {typeof navigator !== 'undefined' && !!navigator.share && (
        <button
          onClick={handleNativeShare}
          className="p-3 rounded-xl glass-dark border border-white/5 hover:text-primary hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 md:hidden"
          title="Share"
        >
          <Share2 size={18} />
        </button>
      )}
    </div>
  );
};
