import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  CircuitBoard,
  Cpu,
  Trophy,
  Users
} from "lucide-react";
import { Button } from "./ui/button";

// ========== TYPES ==========
interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
  label: string;
  href: string;
  color: string;
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
  text: string;
  href?: string;
}

// ========== DATA ==========
const QUICK_LINKS: FooterLink[] = [
  { label: "Home", href: "#home" },
  { label: "Innovation Challenges", href: "#competitions" },
  { label: "About Us", href: "#about" },
  { label: "Get in Touch", href: "#contact" },
  { label: "Student Projects Gallery", href: "#gallery" },
  { label: "Mentor Program", href: "#mentors" },
];

const RESOURCES: FooterLink[] = [
  { label: "Competition Guidelines", href: "#guidelines" },
  { label: "Project Ideas & Resources", href: "#resources" },
  { label: "Maker Kits & Hardware", href: "#kits" },
  { label: "Student Success Stories", href: "#stories" },
  { label: "Teacher Toolkit", href: "#teachers" },
  { label: "Research Papers", href: "#research" },
];

const SUPPORT: FooterLink[] = [
  { label: "FAQ & Help Center", href: "#faq" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Participation", href: "#terms" },
  { label: "Code of Conduct", href: "#conduct" },
  { label: "Contact Support", href: "#support" },
  { label: "Report an Issue", href: "#report" },
];

const SOCIAL_LINKS: SocialLink[] = [
  { icon: Instagram, label: "Instagram", href: "#", color: "hover:bg-pink-500 hover:text-white" },
  { icon: Youtube, label: "YouTube", href: "#", color: "hover:bg-red-600 hover:text-white" },
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-blue-700 hover:text-white" },
  { icon: Twitter, label: "Twitter", href: "#", color: "hover:bg-sky-500 hover:text-white" },
  { icon: Facebook, label: "Facebook", href: "#", color: "hover:bg-blue-600 hover:text-white" },
  { icon: MessageCircle, label: "WhatsApp Channel", href: "#", color: "hover:bg-green-500 hover:text-white" },
];

const CONTACT_INFO: ContactInfo[] = [
  { icon: Mail, text: "students@makeindiafoundation.org", href: "mailto:students@makeindiafoundation.org" },
  { icon: Phone, text: "1800-MAKE-INDIA (Toll Free)", href: "tel:18006253463" },
  { icon: MapPin, text: "Delhi | Bengaluru | Mumbai | Hyderabad", href: "#" },
];

const PARTNER_LOGOS = [
  "HCL", "TATA", "ISRO", "DRDO", "AICTE", "NITI Aayog"
];

// ========== COMPONENTS ==========
interface LinkColumnProps {
  title: string;
  links: FooterLink[];
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
}

const LinkColumn: React.FC<LinkColumnProps> = ({ title, links, icon: Icon }) => (
  <div>
    <div className="flex items-center gap-2 mb-4">
      {Icon && <Icon className="w-5 h-5 text-primary" />}
      <h4 className="font-heading font-bold text-lg text-foreground">{title}</h4>
    </div>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialButton: React.FC<{ social: SocialLink }> = ({ social }) => {
  const Icon = social.icon;
  return (
    <a
      href={social.href}
      className={`
        w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center
        text-primary hover:scale-110 transition-all duration-200
        ${social.color}
      `}
      aria-label={social.label}
      title={social.label}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
};

const ContactItem: React.FC<{ info: ContactInfo }> = ({ info }) => {
  const Icon = info.icon;
  const content = (
    <div className="flex items-start gap-3">
      <Icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
      <span className="text-muted-foreground hover:text-primary transition-colors">
        {info.text}
      </span>
    </div>
  );

  if (info.href) {
    return (
      <a href={info.href} className="block hover:translate-x-1 transition-transform duration-200">
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
};

// ========== MAIN COMPONENT ==========
const Footer = () => {
  return (
    <footer className="bg-card pt-16 pb-8 border-t border-border/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                <CircuitBoard className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-3xl font-heading font-bold text-foreground">
                  Make India
                </span>
                <span className="block text-sm font-medium text-primary">
                  Foundation
                </span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-lg leading-relaxed">
              Empowering India's next generation of hardware innovators and product creators. 
              We're building a movement of young minds who design, build, and innovate for 
              India's tech sovereignty. From chips to complete products, we're creating 
              the builders of tomorrow.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {CONTACT_INFO.map((info, index) => (
                <ContactItem key={index} info={info} />
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h5 className="font-medium text-foreground mb-3">Join Our Community</h5>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <SocialButton key={social.label} social={social} />
                ))}
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <LinkColumn 
              title="Quick Links" 
              links={QUICK_LINKS} 
              icon={Cpu}
            />
            <LinkColumn 
              title="Resources" 
              links={RESOURCES} 
              icon={Trophy}
            />
            <LinkColumn 
              title="Support" 
              links={SUPPORT} 
              icon={Users}
            />
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-12 pt-8 border-t border-border/30">
          <h5 className="text-center font-medium text-foreground mb-6">
            Supported by India's Leading Tech Organizations
          </h5>
          <div className="flex flex-wrap justify-center gap-6">
            {PARTNER_LOGOS.map((logo) => (
              <div 
                key={logo}
                className="px-5 py-2 bg-white/5 rounded-lg border border-border/30 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h5 className="font-heading font-bold text-lg text-foreground mb-2">
                Stay Updated with Innovation Challenges
              </h5>
              <p className="text-sm text-muted-foreground">
                Get project ideas, competition updates, and resources delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary-dark">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                &copy; 2025 Make India Foundation. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Empowering young Indians to build India's tech future.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#accessibility" className="hover:text-primary transition-colors">
                Accessibility
              </a>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>100% Made in India Initiative</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;