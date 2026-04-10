import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/lib/data";

const Blog = () => (
  <div className="pt-20">
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading label="Blog" title="Insights & Inspiration" description="Design tips, industry news, and behind-the-scenes looks at our creative process." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-sm overflow-hidden group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-primary text-xs font-semibold tracking-wider uppercase">{post.category}</span>
                  <span className="text-muted-foreground text-xs">{post.date}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
