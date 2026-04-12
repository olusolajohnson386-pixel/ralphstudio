import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/lib/data";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Ralph Studios – Design Tips & Industry Insights";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Design tips, industry news, and behind-the-scenes looks at our creative process for book covers and visuals.");
    }
    return () => { document.title = "Ralph Studios"; };
  }, []);

  return (
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
              >
                <Link to={`/blog/${post.slug}`} className="block bg-card border border-border rounded-sm overflow-hidden group cursor-pointer">
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
                    <span className="inline-block mt-4 text-primary text-sm font-semibold tracking-wide">Read More →</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
