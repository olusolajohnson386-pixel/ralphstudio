import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Lightbulb, Brush } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  { icon: Lightbulb, title: "Discovery", desc: "We learn about your book, audience, and vision through a detailed brief." },
  { icon: Eye, title: "Concept", desc: "We develop 2-3 unique design concepts based on your brief and genre research." },
  { icon: Brush, title: "Refinement", desc: "Your chosen concept is polished through collaborative feedback rounds." },
  { icon: Target, title: "Delivery", desc: "Final files delivered in all required formats, print-ready and digital-optimized." },
];

const About = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="section-padding">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <span className="text-primary font-body text-sm font-semibold tracking-[0.3em] uppercase">About Us</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Crafting Visual Stories <span className="text-gradient-gold">Since Day One</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Ralph Studios is a creative design studio specializing in book cover design, video trailers, 3D mockups, and animation. We believe every book deserves a cover that does justice to the story within — a visual promise that draws readers in and refuses to let go.
          </p>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Founded by passionate designers and storytellers, we bring a cinematic sensibility to every project, blending artistry with market awareness to create covers that are both beautiful and commercially effective.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission */}
    <section className="section-padding bg-card">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Our <span className="text-gradient-gold">Mission</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            To elevate the visual standard of book publishing by creating designs that are not just covers, but experiences. We want every author — from indie self-publishers to major publishing houses — to have access to world-class visual storytelling.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-6">
          {[
            { num: "200+", label: "Books Designed" },
            { num: "50+", label: "Happy Clients" },
            { num: "15+", label: "Awards Won" },
            { num: "100%", label: "Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="bg-secondary/50 border border-border rounded-sm p-6 text-center">
              <p className="font-display text-3xl font-bold text-gradient-gold">{stat.num}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Creative Process */}
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading label="How We Work" title="Our Creative Process" description="A structured approach that ensures every project meets the highest standards." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-card border border-border rounded-sm p-8 text-center"
            >
              <span className="absolute top-4 right-4 font-display text-4xl font-bold text-primary/10">0{i + 1}</span>
              <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-5">
                <step.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-card">
      <div className="container-narrow text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Let's <span className="text-gradient-gold">Create Together</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">Ready to bring your book's vision to life?</p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-3.5 font-semibold rounded-sm tracking-wide hover:opacity-90 transition-opacity"
        >
          Start a Project <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </div>
);

export default About;
