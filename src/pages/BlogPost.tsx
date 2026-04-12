import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Ralph Studios`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", post.excerpt);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = post.excerpt;
        document.head.appendChild(meta);
      }
    }
    return () => {
      document.title = "Ralph Studios";
    };
  }, [post]);

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-primary hover:underline inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Simple markdown-like rendering for ## headings, ### subheadings, **bold**, and lists
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={i} className="font-display text-xl font-bold mt-8 mb-3 text-foreground">
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={i} className="font-display text-2xl font-bold mt-10 mb-4 text-foreground">
            {trimmed.replace("## ", "")}
          </h2>
        );
      }

      // Numbered or bulleted list
      const lines = trimmed.split("\n");
      if (lines.every((l) => /^(\d+\.\s|\-\s|\*\s)/.test(l.trim()))) {
        const isOrdered = /^\d+\./.test(lines[0].trim());
        const Tag = isOrdered ? "ol" : "ul";
        return (
          <Tag key={i} className={`${isOrdered ? "list-decimal" : "list-disc"} pl-6 space-y-2 mb-6 text-muted-foreground`}>
            {lines.map((line, j) => (
              <li key={j} className="leading-relaxed" dangerouslySetInnerHTML={{
                __html: line.replace(/^(\d+\.\s|\-\s|\*\s)/, "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>")
              }} />
            ))}
          </Tag>
        );
      }

      // Paragraph with bold support
      return (
        <p
          key={i}
          className="text-muted-foreground leading-relaxed mb-4"
          dangerouslySetInnerHTML={{
            __html: trimmed.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>")
          }}
        />
      );
    });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: post.image,
    author: {
      "@type": "Organization",
      name: "Ralph Studios",
    },
  };

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="section-padding">
        <div className="max-w-3xl mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary text-xs font-semibold tracking-wider uppercase">
              {post.category}
            </span>
            <span className="text-muted-foreground text-xs">{post.date}</span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            {post.title}
          </h1>

          <div className="aspect-video overflow-hidden rounded-sm mb-10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="prose-custom">{renderContent(post.content)}</div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
