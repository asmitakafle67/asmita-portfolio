import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, MapPin, Linkedin, Github, FileDown } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';
import { MediumIcon } from '../components/Icons';

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
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-surface/40 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="06 / INITIATE CONTACT"
          title="Let's build something remarkable together."
          subtitle="Open to frontend engineering roles, component architecture consulting, and high-impact digital initiatives."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 h-full flex flex-col"
          >
            <div className="rounded-3xl bg-surface border border-hairline shadow-subtle p-6 sm:p-8 space-y-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-ink tracking-tight">
                  Direct Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-graphite mt-1">
                  Looking to hire a Frontend Developer or collaborate on a project? Reach out directly.
                </p>
              </div>

              {/* Email item with copy button */}
              <div className="p-4 rounded-2xl bg-paper border border-hairline flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-surface border border-hairline text-accent shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-faint uppercase tracking-wider">Email Address</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-ink hover:text-accent truncate block transition-colors font-mono"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl border border-hairline bg-surface text-graphite hover:text-ink hover:border-ink transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-2xl bg-paper border border-hairline flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-surface border border-hairline text-accent shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-faint uppercase tracking-wider">Location</div>
                  <div className="text-sm font-semibold text-ink">
                    Kathmandu, Nepal <span className="text-xs font-mono font-normal text-faint">(UTC +05:45)</span>
                  </div>
                </div>
              </div>

              {/* Profiles including Medium */}
              <div className="pt-2 border-t border-hairline space-y-3">
                <div className="text-xs font-mono font-semibold text-graphite uppercase tracking-wider">
                  Profiles & Resume
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={personalInfo.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl border border-hairline bg-paper hover:border-accent hover:scale-[1.03] transition-all flex flex-col items-center justify-center text-center text-xs font-semibold text-ink gap-1.5"
                    title="Medium Profile"
                  >
                    <MediumIcon className="w-4 h-4 text-accent" />
                    <span>Medium</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl border border-hairline bg-paper hover:border-accent hover:scale-[1.03] transition-all flex flex-col items-center justify-center text-center text-xs font-semibold text-ink gap-1.5"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4 text-accent" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl border border-hairline bg-paper hover:border-accent hover:scale-[1.03] transition-all flex flex-col items-center justify-center text-center text-xs font-semibold text-ink gap-1.5"
                    title="GitHub Profile"
                  >
                    <Github className="w-4 h-4 text-ink" />
                    <span>GitHub</span>
                  </a>
                </div>

                <a
                  href={personalInfo.cvPath}
                  download="Asmita-Kafle-CV.pdf"
                  className="w-full p-3.5 rounded-2xl border border-hairline bg-paper hover:border-ink hover:text-ink transition-all flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.08em] text-graphite shadow-subtle hover:scale-[1.01]"
                >
                  <FileDown className="w-4 h-4 text-accent" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 h-full flex flex-col"
          >
            <div className="rounded-3xl bg-surface border border-hairline shadow-subtle p-6 sm:p-8 h-full flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-ink tracking-tight mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-graphite mb-6">
                  Fill out the form below to immediately compose and send a message.
                </p>

                {formSubmitted && (
                  <div className="mb-6 p-4 rounded-2xl bg-accent/10 border border-accent/25 text-xs font-mono text-accent flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Email client opened! If your client didn't launch automatically, please email <strong>{personalInfo.email}</strong>.</span>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-graphite mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-hairline text-sm text-ink placeholder:text-faint focus:outline-none focus:border-accent transition-all bg-paper"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-graphite mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-hairline text-sm text-ink placeholder:text-faint focus:outline-none focus:border-accent transition-all bg-paper"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-graphite mb-1.5">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Frontend Engineering Role / Dashboard Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-hairline text-sm text-ink placeholder:text-faint focus:outline-none focus:border-accent transition-all bg-paper"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-graphite mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your team, platform, or project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-hairline text-sm text-ink placeholder:text-faint focus:outline-none focus:border-accent transition-all bg-paper resize-y"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="pill font-mono text-[11px] uppercase tracking-[0.12em] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Send className="w-3.5 h-3.5 text-accent" />
                    <span>Send Message via Email</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
