import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ label, title, description, align = "center" }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className={`mb-12 md:mb-16 ${align === "center" ? "text-center max-w-2xl mx-auto" : ""}`}
  >
    {label && (
      <span className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase block mb-3">
        {label}
      </span>
    )}
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{title}</h2>
    {description && (
      <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
