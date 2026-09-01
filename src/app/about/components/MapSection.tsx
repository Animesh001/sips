import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function MapSection() {
  return (
    <section className="section-pad px-4 sm:px-6 bg-white" id="location">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 space-y-4">
          <span className="section-label">Location</span>
          <h2 className="font-display text-section-title font-extrabold text-foreground">
            Find <span className="gradient-text">Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Address card */}
          <div className="space-y-5">
            <div className="bg-muted rounded-3xl p-7 border border-border">
              <h3 className="font-display font-bold text-lg text-foreground mb-5 flex items-center gap-2">
                <Icon name="MapPinIcon" size={20} className="text-primary" />
                Address
              </h3>
              <address className="not-italic space-y-3 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground text-base">
                  Siliguri Institute of Pharmaceutical Sciences
                </p>
                <p>Fulbari, Jotiyakali</p>
                <p>Near Sannyasikata High School</p>
                <p>Akalugach</p>
                <p>Rajganj, Jalpaiguri, West Bengal — Pin 735134</p>
              </address>
            </div>

            <div className="bg-muted rounded-3xl p-7 border border-border space-y-4">
              <h3 className="font-display font-bold text-base text-foreground flex items-center gap-2">
                <Icon name="PhoneIcon" size={18} className="text-primary" />
                Contact
              </h3>
              <div className="space-y-3 text-sm">
                <a href="tel:6296505232" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium">
                  <Icon name="PhoneIcon" size={14} className="text-muted-foreground" />
                  62965-05232
                </a>
                <a href="tel:9609908007" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium">
                  <Icon name="PhoneIcon" size={14} className="text-muted-foreground" />
                  9609908007
                </a>
                <a href="mailto:sips.siliguricampus@gmail.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium break-all">
                  <Icon name="EnvelopeIcon" size={14} className="text-muted-foreground" />
                  sips.siliguricampus@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Office Hours</p>
                <p className="text-sm text-foreground font-medium">Mon – Sat: 9:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="lg:col-span-2 map-container h-96 lg:h-[440px] shadow-purple-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.8!2d88.3953!3d26.7271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441b0f0000001%3A0x0!2sSiliguri+Institute+of+Pharmaceutical+Sciences%2C+Fulbari%2C+Jotiyakali%2C+Akalugach%2C+West+Bengal+735134!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SIPS Location Map — Fulbari, Jotiyakali, Akalugach, Siliguri, West Bengal"
            />
          </div>
        </div>
      </div>
    </section>
  );
}