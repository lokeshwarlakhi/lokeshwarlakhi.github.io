import emailjs from '@emailjs/browser';

/**
 * EMAILJS CONFIGURATION GUIDE
 * --------------------------
 * 1. Create an account at https://www.emailjs.com/
 * 2. Add a Email Service (e.g., Gmail)
 * 3. Create an Email Template
 * 4. Get your Public Key, Service ID, and Template ID from the dashboard
 * 5. Add these keys to your .env file
 */

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export interface EmailData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export const sendEmail = async (data: EmailData) => {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error('EmailJS keys are missing. Please check your .env file.');
    throw new Error('Email service is not configured.');
  }

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      data as any,
      PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};
