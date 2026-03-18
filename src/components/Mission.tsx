import {
  CircuitBoard,
  Shield,
  Cpu,
  Smartphone,
  Zap,
  Users,
  Target,
  Heart,
  Wrench,
  Battery,
  Satellite,
  Globe
} from "lucide-react";

// ========== TYPES ==========
interface CoreValue {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
  title: string;
  description: string;
  color: string;
  delay: string;
}

// ========== DATA ==========
const CORE_VALUES: CoreValue[] = [
  {
    icon: CircuitBoard,
    title: "Design & Make in India",
    description: "We champion end-to-end innovation — from chip design to finished product. Not just assembly, but true Indian IP creation.",
    color: "bg-primary/10 text-primary",
    delay: "0s"
  },
  {
    icon: Shield,
    title: "Security by Design",
    description: "We promote hardware and software with data privacy at its core. Building trust through secure, backdoor-free technology.",
    color: "bg-secondary/10 text-secondary",
    delay: "0.1s"
  },
  {
    icon: Cpu,
    title: "Hardware First",
    description: "In a software-dominated world, we focus on physical innovation. Chips, devices, and products you can touch and feel.",
    color: "bg-accent/20 text-accent-dark",
    delay: "0.2s"
  },
  {
    icon: Smartphone,
    title: "Indian Phone Vision",
    description: "Inspiring students to build the next 'India Phone' — secure, repairable, and designed for Indian conditions.",
    color: "bg-primary/10 text-primary",
    delay: "0.3s"
  },
  {
    icon: Zap,
    title: "Energy Independence",
    description: "Creating solutions for India's energy needs — from village-level solar to EV technology and battery innovation.",
    color: "bg-secondary/10 text-secondary",
    delay: "0.4s"
  },
  {
    icon: Battery,
    title: "Circular Economy",
    description: "Transforming e-waste into rare earth resources. Teaching students to build sustainable, repairable technology.",
    color: "bg-accent/20 text-accent-dark",
    delay: "0.5s"
  },
  {
    icon: Satellite,
    title: "Space & Drone Tech",
    description: "Democratizing access to space and drone technology for Indian students. Building for both security and development.",
    color: "bg-primary/10 text-primary",
    delay: "0s"
  },
  {
    icon: Users,
    title: "Mentorship Ecosystem",
    description: "Connecting students with Indian tech veterans — from semiconductor designers to product managers.",
    color: "bg-secondary/10 text-secondary",
    delay: "0.1s"
  }
];

// ========== COMPONENTS ==========
interface ValueCardProps {
  value: CoreValue;
}

const ValueCard: React.FC<ValueCardProps> = ({ value }) => {
  const Icon = value.icon;

  return (
    <div
      className={`
        group bg-background rounded-3xl p-8 border border-border/50
        hover:shadow-xl hover:-translate-y-2 transition-all duration-300
        hover:border-primary/30 fade-in-up
      `}
      style={{ animationDelay: value.delay }}
    >
      <div className={`
        w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mb-6
        group-hover:scale-110 transition-transform duration-300
      `}>
        <Icon className="w-8 h-8" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {value.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {value.description}
      </p>
    </div>
  );
};

// ========== MAIN COMPONENT ==========
const Mission = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Our Why
          </div>

          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
            Building India's Future
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Today, 90% of India's electronics and chips are imported. We're building a movement of
            young creators who will change this reality — designing and making technology for India, in India.
          </p>

          <div className="inline-flex items-center gap-4 p-4 bg-background/50 rounded-2xl border border-border/50">
            <Heart className="w-6 h-6 text-primary" />
            <span className="font-heading font-semibold text-foreground">
              Transforming India from a services-led economy to a product nation.
            </span>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {CORE_VALUES.map((value, index) => (
            <ValueCard key={index} value={value} />
          ))}
        </div>

        {/* Quote Section */}
        <div className="max-w-3xl mx-auto mt-20 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl border border-primary/20 fade-in-up">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <div>
              <blockquote className="text-xl italic text-muted-foreground mb-4 leading-relaxed">
                "We must move from screwdriver assembly to designing and making in India. This isn't just
                about manufacturing — it's about creating Indian intellectual property for the world."
              </blockquote>
              <div className="font-heading font-semibold text-foreground">
                — Inspired by Dr. Ajay Chowdhury's vision for Indian tech sovereignty
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
          <div className="text-center p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/50 transition-colors duration-300">
            <div className="text-4xl font-heading font-bold text-primary mb-2">5000+</div>
            <div className="font-medium text-foreground mb-2">Students Trained</div>
            <p className="text-sm text-muted-foreground">In hardware design & innovation</p>
          </div>
          <div className="text-center p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/50 transition-colors duration-300">
            <div className="text-4xl font-heading font-bold text-primary mb-2">200+</div>
            <div className="font-medium text-foreground mb-2">Prototypes Built</div>
            <p className="text-sm text-muted-foreground">Student projects turned into real products</p>
          </div>
          <div className="text-center p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/50 transition-colors duration-300">
            <div className="text-4xl font-heading font-bold text-primary mb-2">85%</div>
            <div className="font-medium text-foreground mb-2">Continue in Tech</div>
            <p className="text-sm text-muted-foreground">Pursue STEM careers after participation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;