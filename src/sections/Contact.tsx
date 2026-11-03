import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, Linkedin, Github, FileDown, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Directs into mailto with prepopulated body & subject
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-background border-t border-charcoal-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="Get in Touch"
          title="Let's build something remarkable together."
          subtitle="Open to full-time roles, strategic consulting, frontend architecture discussions, or exciting new engineering ventures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-surface border border-charcoal-200/90 shadow-subtle p-6 sm:p-7 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-charcoal-900 tracking-tight">
                  Direct Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
                  Have a project or career opportunity in mind? Email is the fastest way to reach me directly.
                </p>
              </div>

              {/* Email item with copy button */}
              <div className="p-3.5 rounded-xl bg-charcoal-50 border border-charcoal-200/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-blue-50 text-accent-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-charcoal-500 uppercase">Email Address</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-charcoal-900 hover:text-accent-700 truncate block transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg border border-charcoal-300 bg-white text-charcoal-700 hover:bg-charcoal-100 hover:text-charcoal-900 transition-colors shrink-0 shadow-subtle"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location item */}
              <div className="p-3.5 rounded-xl bg-charcoal-50 border border-charcoal-200/80 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-charcoal-500 uppercase">Location</div>
                  <div className="text-sm font-semibold text-charcoal-900">
                    Kathmandu, Nepal <span className="text-xs font-normal text-charcoal-500">(UTC +05:45)</span>
                  </div>
                </div>
              </div>

              {/* Professional links */}
              <div className="pt-2 border-t border-charcoal-100 space-y-3">
                <div className="text-xs font-semibold text-charcoal-700">
                  Profiles & Resume
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-charcoal-200 bg-white hover:border-accent-400 hover:bg-accent-50/30 transition-all flex items-center justify-between text-xs font-semibold text-charcoal-800"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-accent-700" />
                      LinkedIn
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-charcoal-400" />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-charcoal-200 bg-white hover:border-charcoal-400 hover:bg-charcoal-100 transition-all flex items-center justify-between text-xs font-semibold text-charcoal-800"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-charcoal-800" />
                      GitHub
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-charcoal-400" />
                  </a>
                </div>

                <a
                  href={personalInfo.cvPath}
                  download="Asmita-Kafle-CV.pdf"
                  className="w-full p-3 rounded-xl border border-charcoal-300 bg-white hover:bg-charcoal-100 transition-all flex items-center justify-center gap-2 text-xs font-semibold text-charcoal-900 shadow-subtle"
                >
                  <FileDown className="w-4 h-4 text-charcoal-600" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-surface border border-charcoal-200/90 shadow-subtle p-6 sm:p-7">
              <h3 className="text-lg font-bold text-charcoal-900 tracking-tight mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 mb-6">
                Fill out the form below to immediately compose and send a message.
              </p>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Email client opened! If your client didn't launch automatically, please email <strong>{personalInfo.email}</strong>.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-charcoal-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-300 text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 transition-all bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-charcoal-700 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-300 text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 transition-all bg-background/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal-700 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Frontend Engineering Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-300 text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 transition-all bg-background/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your team, platform, or project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-300 text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 transition-all bg-background/50 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-charcoal-900 text-white font-medium text-sm hover:bg-accent-700 transition-all shadow-subtle hover:shadow"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

