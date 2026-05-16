import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { sendEmail } from '@/lib/email';
import { cn } from '@/lib/utils';

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'loading') return;

    const formData = new FormData(e.currentTarget);
    const data = {
      from_name: formData.get('name') as string,
      from_email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      timestamp: new Date().toLocaleString(),
    };

    // Simple validation
    if (!data.from_name || !data.from_email || !data.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      setStatus('loading');
      await sendEmail(data);
      setStatus('success');
      formRef.current?.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <div className="relative">
      <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Name *</label>
            <input 
              name="name"
              type="text" 
              required
              disabled={status === 'loading'}
              className="w-full h-14 px-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all placeholder:text-muted-foreground/30 disabled:opacity-50"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Email *</label>
            <input 
              name="email"
              type="email" 
              required
              disabled={status === 'loading'}
              className="w-full h-14 px-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all placeholder:text-muted-foreground/30 disabled:opacity-50"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Subject</label>
          <input 
            name="subject"
            type="text" 
            disabled={status === 'loading'}
            className="w-full h-14 px-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all placeholder:text-muted-foreground/30 disabled:opacity-50"
            placeholder="Project Collaboration"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Message *</label>
          <textarea 
            name="message"
            required
            disabled={status === 'loading'}
            className="w-full h-40 p-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all resize-none placeholder:text-muted-foreground/30 disabled:opacity-50"
            placeholder="How can I help you?"
          />
        </div>

        <button 
          type="submit"
          disabled={status === 'loading'}
          className={cn(
            "w-full h-16 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 relative overflow-hidden group",
            status === 'loading' ? "bg-primary/50 cursor-not-allowed" : "bg-primary text-primary-foreground hover:scale-[1.02] active:scale-[0.98]"
          )}
        >
          <AnimatePresence mode="wait">
            {status === 'loading' ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2"
              >
                Sending... <Loader2 size={20} className="animate-spin" />
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2"
              >
                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Feedback Messages */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-sm"
            >
              <CheckCircle2 size={18} />
              <span>Message sent successfully! I'll get back to you soon.</span>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
            >
              <AlertCircle size={18} />
              <span>{errorMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};
