import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", service: "", projectType: "", message: "", budget: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: form.name,
        email: form.email,
        service: form.service || null,
        project_type: form.projectType || null,
        message: form.message,
        budget: form.budget || null,
      });
      if (error) throw error;
      toast.success("Message sent! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", service: "", projectType: "", message: "", budget: "" });
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading label="Contact" title="Let's Work Together" description="Tell us about your project and we'll craft a custom proposal." />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info */}
            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email Us", value: "ralphstudio.org@gmail.com" },
                { icon: Clock, title: "Response Time", value: "Within 24 hours" },
                { icon: MapPin, title: "Location", value: "Worldwide (Remote Studio)" },
              ].map(({ icon: Icon, title, value }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm">{title}</p>
                    <p className="text-muted-foreground text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="lg:col-span-2 space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your Name"
                  className="bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Your Email"
                  className="bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary appearance-none"
                >
                  <option value="">Service Interested In</option>
                  <option>Book Cover Design</option>
                  <option>Video Trailer</option>
                  <option>3D Mockup</option>
                  <option>Book Visuals</option>
                  <option>2D/3D Animation</option>
                </select>
                <select
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  className="bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary appearance-none"
                >
                  <option value="">Project Type</option>
                  <option>Fiction</option>
                  <option>Non-Fiction</option>
                  <option>Other</option>
                </select>
              </div>
              <select
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary appearance-none"
              >
                <option value="">Budget Range (Optional)</option>
                <option>Under $500</option>
                <option>$500 - $1,000</option>
                <option>$1,000 - $2,500</option>
                <option>$2,500 - $5,000</option>
                <option>$5,000+</option>
              </select>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your project..."
                className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
              <button
                type="submit"
                disabled={submitting}
                className="bg-gradient-gold text-primary-foreground px-8 py-3.5 font-semibold rounded-sm tracking-wide hover:opacity-90 transition-opacity inline-flex items-center gap-2 disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Send Message"} <Send size={16} />
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
