'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    board: '',
    percentage: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        if (data.error === 'BREVO_IP_BLOCKED') {
          throw new Error(
            `Email delivery is temporarily blocked by a security setting in Brevo. ` +
            `Please go to Brevo → Settings → Security → IP Authorization and DISABLE the feature completely (toggle it OFF). ` +
            `Blocked IP: ${data.blockedIp || 'unknown'}`
          );
        }
        throw new Error(data.error || 'Submission failed. Please try again.');
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inquiry-form" className="section-pad-lg px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 blob-primary opacity-8 pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 space-y-4">
          <span className="section-label">Apply Now</span>
          <h2 className="font-display text-section-title font-extrabold text-foreground">
            Submit Your <span className="gradient-text">Inquiry</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Fill in your details and our admissions team will contact you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-muted rounded-3xl p-7 border border-border space-y-5">
              <h3 className="font-display font-bold text-lg text-foreground">Contact Admissions</h3>
              <div className="space-y-4">
                <a href="tel:+917001000000" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <Icon name="PhoneIcon" size={16} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Phone</p>
                    <p className="text-sm font-bold text-foreground">+91 70010 00000</p>
                  </div>
                </a>
                <a href="mailto:admissions@sips.edu.in" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <Icon name="EnvelopeIcon" size={16} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Email</p>
                    <p className="text-sm font-bold text-foreground">admissions@sips.edu.in</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="MapPinIcon" size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Address</p>
                    <p className="text-sm font-bold text-foreground leading-snug">
                      Fulbari, Jotiyakali, Near Sannyasikata High School, Akalugach, Siliguri — 735134
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-3xl p-7 text-primary-foreground">
              <Icon name="ClockIcon" size={22} className="text-white/70 mb-3" />
              <h4 className="font-bold text-base mb-2">Office Hours</h4>
              <p className="text-sm text-white/80 leading-relaxed">
                Monday to Saturday<br />
                9:00 AM – 5:00 PM IST
              </p>
              <p className="text-xs text-white/60 mt-3">
                Walk-in visits are welcome during office hours.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-muted rounded-3xl p-12 border border-border text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon name="CheckCircleIcon" size={32} className="text-primary" variant="solid" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground">Inquiry Submitted!</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                  Thank you for your interest in SIPS. Our admissions team will contact you
                  within 24 working hours. You can also call us directly at +91 70010 00000.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-sm"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 border border-border shadow-purple-md space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-muted border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors min-h-[44px]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                      Phone Number <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-muted border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-muted border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors min-h-[44px]"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                      Board of Education <span className="text-accent">*</span>
                    </label>
                    <select
                      name="board"
                      required
                      value={form.board}
                      onChange={handleChange}
                      className="w-full bg-muted border border-border rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-accent transition-colors min-h-[44px] appearance-none"
                    >
                      <option value="">Select Board</option>
                      <option value="WBBSE">WBBSE (West Bengal)</option>
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                      <option value="Other">Other Recognized Board</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                      Class XII % (PCB/PCM) <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="percentage"
                      required
                      placeholder="e.g. 65%"
                      value={form.percentage}
                      onChange={handleChange}
                      className="w-full bg-muted border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    Message / Query
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Any specific questions about admissions, fees, or the programme..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-muted border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-4 text-sm" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit Inquiry'}
                  {!loading && <Icon name="PaperAirplaneIcon" size={16} />}
                </button>

                {error && (
                  <p className="text-center text-sm text-red-500">{error}</p>
                )}

                <p className="text-center text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by the SIPS admissions team.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}