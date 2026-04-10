import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Play, Box, Image, Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { services, faqs } from "@/lib/data";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = { BookOpen, Play, Box, Image, Sparkles };

const Services = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-primary font-body text-sm font-semibold tracking-[0.3em] uppercase">Our Services</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
              Everything Your Book <span className="text-gradient-gold">Needs to Shine</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              From stunning covers to cinematic trailers, we offer a complete suite of visual services designed to make your book impossible to ignore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="space-y-16">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Sparkles;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-start gap-8 ${!isEven ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <Link
                      to="/contact"
                      className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Contact for Quote <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading label="FAQ" title="Frequently Asked Questions" />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-border rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/30 transition-colors"
                >
                  <span className="font-display font-semibold text-sm">{faq.q}</span>
                  <ChevronDown size={18} className={`text-muted-foreground transition-transform flex-shrink-0 ml-4 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Ready to <span className="text-gradient-gold">Get Started?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">Tell us about your project and we'll create a custom plan.</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-3.5 font-semibold rounded-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Get a Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
