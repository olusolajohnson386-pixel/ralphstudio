import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-2xl font-bold tracking-wider">
              <span className="text-gradient-gold">RALPH</span>
              <span className="text-foreground ml-1">STUDIOS</span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Crafting visual stories that captivate readers before they turn the first page.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://x.com/Ralphvisual"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                aria-label="Follow us on X"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold tracking-wider uppercase text-primary mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["About", "Services", "Portfolio", "Blog", "Contact"].map((item) => (
                <Link key={item} to={`/${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold tracking-wider uppercase text-primary mb-6">Services</h4>
            <div className="flex flex-col gap-3">
              {["Book Cover Design", "Video Trailers", "3D Mockups", "Book Visuals", "2D/3D Animation"].map((item) => (
                <span key={item} className="text-sm text-muted-foreground">{item}</span>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-sm font-semibold tracking-wider uppercase text-primary mb-6">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">Get design tips and studio news delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-secondary border border-border rounded-sm px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-gradient-gold text-primary-foreground px-4 py-2 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Ralph Studios. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
