import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Play, Box, Image, Sparkles, ArrowRight, Star, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { portfolioItems, services, testimonials, blogPosts } from "@/lib/data";
import heroImage from "@/assets/hero-books.jpg";

const iconMap: Record<string, React.ElementType> = { BookOpen, Play, Box, Image, Sparkles };

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Ralph Studios book cover designs" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        <div className="relative container-wide pt-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-body text-sm font-semibold tracking-[0.3em] uppercase"
            >
              Book Design Studio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-4 leading-[1.1]"
            >
              We Design
              <br />
              <span className="text-gradient-gold">Covers That</span>
              <br />
              Sell Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg"
            >
              Book covers, video trailers, 3D mockups, and animations that captivate readers before they turn the first page.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/portfolio"
                className="bg-gradient-gold text-primary-foreground px-8 py-3.5 font-semibold rounded-sm tracking-wide hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                View Portfolio <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="border border-primary text-primary px-8 py-3.5 font-semibold rounded-sm tracking-wide hover:bg-primary/10 transition-colors"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <SectionHeading label="What We Do" title="Creative Services" description="From concept to completion, we bring your book's visual identity to life." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, i) => {
              const Icon = iconMap[service.icon] || Sparkles;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-secondary/50 border border-border rounded-sm p-8 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
              View All Services <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading label="Portfolio" title="Featured Work" description="A selection of our finest book cover designs and visual projects." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.slice(0, 6).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-sm bg-card border border-border"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-primary text-xs font-semibold tracking-wider uppercase">{item.category}</span>
                    <h3 className="font-display text-lg font-semibold mt-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.client}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://drive.google.com/drive/folders/19Mv-PbDYc8oiQbqCsEWceOZlBaAPXa5V"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-gold text-primary-foreground px-8 py-3.5 font-semibold rounded-sm tracking-wide hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              View Full Portfolio <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <SectionHeading label="Testimonials" title="What Our Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(0, 4).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary/30 border border-border rounded-sm p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 text-sm leading-relaxed italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-display font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading label="Blog" title="Latest Insights" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-sm overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-primary text-xs font-semibold tracking-wider uppercase">{post.category}</span>
                    <span className="text-muted-foreground text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-display font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
              Read More Articles <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to <span className="text-gradient-gold">Transform</span> Your Book?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Let's create a cover that captures your story's essence and turns heads on any bookshelf.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-gold text-primary-foreground px-8 py-3.5 font-semibold rounded-sm tracking-wide hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Start Your Project <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
