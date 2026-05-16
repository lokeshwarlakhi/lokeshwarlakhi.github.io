import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * NEWSLETTER SYSTEM (PRODUCTION READY)
 * ------------------------------------
 * A robust subscription form using the Buttondown "New Tab" method.
 * This is the most reliable approach for static sites, bypassing 
 * cross-origin (CORS) and security header restrictions (X-Frame-Options).
 */

const BUTTONDOWN_USERNAME = import.meta.env.VITE_BUTTONDOWN_USERNAME || '';

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    // Basic validation before submission
    if (status === 'loading' || !email) {
      e.preventDefault();
      return;
    }

    if (!BUTTONDOWN_USERNAME) {
      e.preventDefault();
      setStatus('error');
      setMessage("Newsletter not configured.");
      return;
    }

    // Trigger loading state while browser handles the new tab POST
    setStatus('loading');
    
    // Smooth transition to success state
    setTimeout(() => {
      setStatus('success');
      setMessage("Welcome! Please check your inbox to confirm.");
      
      // Clear field after a delay to ensure submission is finished
      setTimeout(() => {
        setEmail('');
        setStatus('idle');
        setMessage('');
      }, 5000);
    }, 1000);
  };

  return (
    <div className="w-full">
      <form
        action={`https://buttondown.email/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`}
        method="POST"
        target="_blank"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input type="hidden" name="embed" value="1" />
        
        {/* Email Input Group */}
        <div className="relative group">
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors pointer-events-none">
            <Mail size={20} />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // Note: Keep enabled during submit so browser includes it in the POST
            className={cn(
              "w-full h-16 pl-14 pr-6 rounded-2xl bg-white/5 border border-white/10 outline-none transition-all text-base",
              "focus:border-primary/50 focus:bg-white/[0.08] focus:ring-4 focus:ring-primary/5 placeholder:text-muted-foreground/30",
              status === 'success' && "border-green-500/50 bg-green-500/5",
              status === 'error' && "border-red-500/50 bg-red-500/5"
            )}
            required
          />
        </div>

        {/* Subscribe Button */}
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={cn(
            "w-full h-16 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-3 shrink-0 relative overflow-hidden group",
            status === 'success' 
              ? "bg-green-500 text-white cursor-default" 
              : "bg-primary text-primary-foreground hover:brightness-110 active:scale-[0.98]"
          )}
        >
          {status === 'loading' ? (
            <div className="flex items-center gap-2">
              <Loader2 size={18} className="animate-spin" />
              <span>Joining...</span>
            </div>
          ) : status === 'success' ? (
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} />
              <span>Joined!</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span>Subscribe</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          )}
        </button>

        {/* Status Messages */}
        <AnimatePresence mode="wait">
          {message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={cn(
                "text-center text-xs font-medium px-2 py-1 rounded-lg",
                status === 'success' ? "text-green-500 bg-green-500/5" : "text-red-500 bg-red-500/5"
              )}
            >
              {message}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};
