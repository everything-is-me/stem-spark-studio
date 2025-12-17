import { Target, Heart, Zap, Users, GraduationCap, TrendingUp } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
import { ReactNode } from "react";

// ========== TYPES ==========
interface ValueCardProps {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
  title: string;
  description: string;
  color: string;
  delay: string;
}

interface ImpactStatProps {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
  value: string;
  label: string;
  description: string;
}

// ========== COMPONENTS ==========
const ValueCard: React.FC<ValueCardProps> = ({ icon: Icon, title, description, color, delay }) => (
  <div 
    className="text-center p-8 bg-background rounded-3xl shadow-sm fade-in-up border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    style={{ animationDelay: delay }}
  >
    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110`}>
      <Icon className="w-8 h-8" strokeWidth={1.5} />
    </div>
    <h4 className="font-heading font-bold text-xl text-foreground mb-3">{title}</h4>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const ImpactStat: React.FC<ImpactStatProps> = ({ icon: Icon, value, label, description }) => (
  <div className="text-center p-6 bg-card rounded-2xl border border-border/30">
    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
      <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
    </div>
    <div className="text-3xl font-heading font-bold text-foreground mb-1">{value}</div>
    <div className="text-sm font-semibold text-primary mb-2">{label}</div>
    <p className="text-xs text-muted-foreground">{description}</p>
  </div>
);

// ========== DATA ==========
const VALUES: ValueCardProps[] = [
  {
    icon: Target,
    title: "Our Vision",
    description: "An India where every young person designs and builds technology — transforming from tech consumers to creators for our nation's sovereignty.",
    color: "bg-primary/10 text-primary",
    delay: "0s"
  },
  {
    icon: Heart,
    title: "Our Mission",
    description: "To ignite India's next generation of hardware innovators and product creators through hands-on learning, competitions, and real-world problem-solving.",
    color: "bg-secondary/10 text-secondary",
    delay: "0.1s"
  },
  {
    icon: Zap,
    title: "Our Core Belief",
    description: "India must become a product nation. The change begins in classrooms, maker spaces, and young minds building for India's tech independence.",
    color: "bg-accent/20 text-accent-dark",
    delay: "0.2s"
  }
];

const IMPACT_STATS: ImpactStatProps[] = [
  {
    icon: Users,
    value: "5,000+",
    label: "Students Trained",
    description: "In hardware design & innovation"
  },
  {
    icon: GraduationCap,
    value: "85%",
    label: "Pursue STEM",
    description: "Of participants continue in tech fields"
  },
  {
    icon: TrendingUp,
    value: "200+",
    label: "Prototypes Built",
    description: "Student projects turned into real products"
  }
];

// ========== MAIN COMPONENT ==========
const About = () => {
  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
            About Make India Foundation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building India's tech future, one young innovator at a time
          </p>
        </div>

        {/* Team & Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="fade-in-up">
            <img
              src={teamPhoto}
              alt="Make India Foundation team with student innovators"
              className="rounded-3xl shadow-xl w-full h-auto object-cover hover:shadow-2xl transition-shadow duration-500"
            />
          </div>

          <div className="space-y-6 fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Story
            </div>
            <h3 className="text-3xl font-heading font-bold text-foreground">
              Who We Are
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Make India Foundation is a non-profit educational initiative founded by Indian tech leaders, 
              educators, and policymakers — including pioneers like Dr. Ajay Chowdhury — to address India's 
              critical need for homegrown hardware talent and tech sovereignty.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Inspired by the vision of transforming India from a services-led economy to a product nation, 
              we've created India's premier youth innovation challenge focused on hardware, electronics, and 
              deep-tech solutions for Indian problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our competitions bridge the gap between classroom learning and real-world impact, connecting 
              students with mentors from India's leading tech companies, research institutions, and startups.
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {IMPACT_STATS.map((stat, index) => (
                <ImpactStat key={index} {...stat} />
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-3">
              Why We Exist
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              In a world where 90% of India's electronics and chips are imported, we believe the 
              solution starts with inspiring our youth to become creators, not just consumers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {VALUES.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>

        {/* Inspired By Section */}
        <div className="bg-background rounded-3xl p-8 md:p-12 border border-border/50 shadow-sm fade-in-up">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-accent-dark" strokeWidth={1.5} />
            </div>
            <blockquote className="text-xl italic text-muted-foreground mb-6 leading-relaxed">
              "We must move from services to products. From screwdriver assembly to designing and 
              making in India. This change must start with our youth — in schools, in maker spaces, 
              in young minds dreaming of building India's tech future."
            </blockquote>
            <div className="font-heading font-semibold text-foreground">
              — Dr. Ajay Chowdhury, Co-founder HCL & Chairman, National Quantum Mission
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              From the NI Podcast conversation on India's tech sovereignty
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;