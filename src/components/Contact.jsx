import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  ExternalLink,
  Sparkles,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate professional message dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[400px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Let's <span className="text-gradient-purple">Connect</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in hiring or discussing frontend development opportunities? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-[#0F111C]/90 border border-white/[0.08] hover:border-purple-500/35 rounded-2xl p-5 sm:p-6 transition-all duration-300 group shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-purple-500/15 text-purple-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="block text-sm sm:text-base font-bold text-white hover:text-purple-300 transition-colors mt-0.5 break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-purple-600/20 border border-white/[0.08] text-slate-400 hover:text-purple-300 transition-colors relative"
                  title="Copy Email"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedType === 'email' && (
                <div className="text-[11px] font-mono text-emerald-400 mt-2 text-right">
                  Email copied to clipboard!
                </div>
              )}
            </div>

            {/* Phone Card */}
            <div className="bg-[#0F111C]/90 border border-white/[0.08] hover:border-purple-500/35 rounded-2xl p-5 sm:p-6 transition-all duration-300 group shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-indigo-500/15 text-indigo-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Phone / WhatsApp</span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="block text-sm sm:text-base font-bold text-white hover:text-indigo-300 transition-colors mt-0.5 font-mono"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <a
                    href={`https://wa.me/91${personalInfo.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-emerald-600/20 border border-white/[0.08] text-slate-400 hover:text-emerald-400 transition-colors"
                    title="Message on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-purple-600/20 border border-white/[0.08] text-slate-400 hover:text-purple-300 transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
              {copiedType === 'phone' && (
                <div className="text-[11px] font-mono text-emerald-400 mt-2 text-right">
                  Phone number copied to clipboard!
                </div>
              )}
            </div>

            {/* LinkedIn Card */}
            <div className="bg-[#0F111C]/90 border border-white/[0.08] hover:border-purple-500/35 rounded-2xl p-5 sm:p-6 transition-all duration-300 group shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-500/15 text-blue-400 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">LinkedIn Profile</span>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm sm:text-base font-bold text-white hover:text-blue-300 transition-colors mt-0.5"
                    >
                      {personalInfo.linkedinDisplay}
                    </a>
                  </div>
                </div>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-blue-600/20 border border-white/[0.08] text-slate-400 hover:text-blue-300 transition-colors"
                  title="Open LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location & Current Workplace Info */}
            <div className="bg-[#0F111C]/60 border border-white/[0.06] rounded-2xl p-4 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-400" />
                Calicut, Kerala, India
              </span>
              <span className="text-purple-300">
                Bridgeon Solutions LLP
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#0F111C]/90 border border-white/[0.09] rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Feel free to send a message regarding full-time opportunities, internship projects, or frontend discussions.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Thank You for Reaching Out!</h4>
                <p className="text-xs text-slate-300">
                  Your message has been noted. Safa Yasmin will respond to your inquiry via <span className="text-emerald-300">{personalInfo.email}</span> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#080A10] border border-white/[0.08] focus:border-purple-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#080A10] border border-white/[0.08] focus:border-purple-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Frontend Developer Role / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#080A10] border border-white/[0.08] focus:border-purple-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello Safa, I came across your portfolio and would love to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#080A10] border border-white/[0.08] focus:border-purple-500 rounded-xl p-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-600/25 transition-all duration-200 hover:shadow-purple-600/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Safa</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
