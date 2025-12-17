import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Cpu,
  Leaf,
  Dna,
  BarChart3,
  Rocket,
  Calendar,
  Award,
  Cctv,
  Wifi,
  Smartphone,
  Wind,
  Satellite,
  Zap,
  Building,
  CircuitBoard,
  Shield,
  Battery,
} from "lucide-react";
import { ComponentType, ReactNode } from "react";

// ========== TYPES ==========
interface CompetitionCategory {
  icon: ComponentType<{ className?: string; strokeWidth?: number | string }>;
  title: string;
  description: string;
  color: string;
}

interface CompetitionDivision {
  id: "middle" | "high";
  title: string;
  ageRange: string;
  categories: CompetitionCategory[];
  keyDates: {
    registration: string;
    submission: string;
    finals: string;
  };
  prizes: {
    first: string;
    second: string;
    third: string;
    extras?: string;
  };
  buttonText: string;
}

// ========== DATA ==========
const COMPETITION_DATA: CompetitionDivision[] = [
  {
    id: "middle",
    title: "Middle School Division",
    ageRange: "Ages 11-14 years",
    categories: [
      {
        icon: CircuitBoard,
        title: "Basic Electronics & Circuits",
        description: "Build simple electronic devices using Indian components.",
        color: "bg-primary/10 text-primary",
      },
      {
        icon: Cpu,
        title: "Introductory Robotics",
        description: "Create basic robots that can perform simple Indian context tasks.",
        color: "bg-secondary/10 text-secondary",
      },
      {
        icon: Wind,
        title: "Environmental Tech",
        description: "Design solutions for waste management, water conservation, or clean energy.",
        color: "bg-accent/30 text-accent-dark",
      },
      {
        icon: Smartphone,
        title: "DIY Indian Tech",
        description: "Build everyday useful devices with locally available materials.",
        color: "bg-primary/10 text-primary",
      },
    ],
    keyDates: {
      registration: "August 1 - October 15",
      submission: "December 31",
      finals: "February 15",
    },
    prizes: {
      first: "₹50,000 + STEM Kit",
      second: "₹25,000 + Mentorship",
      third: "₹10,000 + Workshop Invitation",
    },
    buttonText: "Register Now",
  },
  {
    id: "high",
    title: "High School Division",
    ageRange: "Ages 14-18 years",
    categories: [
      {
        icon: Cctv,
        title: "Indian Hardware Challenge",
        description: "Design and build electronic devices using Indian components and chips.",
        color: "bg-primary/10 text-primary",
      },
      {
        icon: Shield,
        title: "Secure Communications",
        description: "Create projects in data security, encryption, or local networks.",
        color: "bg-secondary/10 text-secondary",
      },
      {
        icon: Satellite,
        title: "Space & Drone Tech",
        description: "Build model satellites, drones, or remote sensing devices.",
        color: "bg-accent/30 text-accent-dark",
      },
      {
        icon: Zap,
        title: "Renewable Energy Systems",
        description: "Design solar, wind, or hybrid energy solutions for Indian villages.",
        color: "bg-primary/10 text-primary",
      },
      {
        icon: Building,
        title: "Make in India Product",
        description: "Create a complete product prototype that could be manufactured in India.",
        color: "bg-secondary/10 text-secondary",
      },
      {
        icon: Battery,
        title: "Rare Earth & E-Waste",
        description: "Develop solutions for recycling and recovering valuable materials from e-waste.",
        color: "bg-accent/30 text-accent-dark",
      },
    ],
    keyDates: {
      registration: "August 1 - November 15",
      submission: "January 31",
      finals: "March 20",
    },
    prizes: {
      first: "₹1,00,000 + Incubation Support",
      second: "₹50,000 + Summer Internship",
      third: "₹25,000 + Maker Lab Access",
      extras: "Special Prize: 'Future Chip Designer' Award",
    },
    buttonText: "Apply Now",
  },
];

// ========== COMPONENTS ==========
interface CategoryCardProps {
  category: CompetitionCategory;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  const Icon = category.icon;
  return (
    <Card
      className="group p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-background fade-in-up hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6" strokeWidth={2} />
      </div>
      <h4 className="font-heading font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
        {category.title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {category.description}
      </p>
    </Card>
  );
};

interface InfoPanelProps {
  icon: ComponentType<{ className?: string; strokeWidth?: number | string }>;
  title: string;
  children: ReactNode;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ icon: Icon, title, children }) => (
  <div className="bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-colors duration-300">
    <Icon className="w-8 h-8 text-primary mb-3" strokeWidth={2} />
    <h5 className="font-heading font-semibold text-foreground mb-3">{title}</h5>
    <div className="text-sm text-muted-foreground space-y-1">{children}</div>
  </div>
);

interface DivisionHeaderProps {
  title: string;
  ageRange: string;
  buttonText: string;
  onRegister: () => void;
}

const DivisionHeader: React.FC<DivisionHeaderProps> = ({ title, ageRange, buttonText, onRegister }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
    <div>
      <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-lg">{ageRange}</p>
    </div>
    <Button
      className="bg-primary hover:bg-primary-dark btn-hover-lift px-8 py-6 text-base"
      onClick={onRegister}
      size="lg"
    >
      {buttonText}
    </Button>
  </div>
);

interface CompetitionDivisionProps {
  division: CompetitionDivision;
}

const CompetitionDivision: React.FC<CompetitionDivisionProps> = ({ division }) => {
  const handleRegister = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const gridCols = division.id === "middle" 
    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" 
    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-lg fade-in-up mb-16 last:mb-0">
      <DivisionHeader
        title={division.title}
        ageRange={division.ageRange}
        buttonText={division.buttonText}
        onRegister={handleRegister}
      />

      <div className={`grid ${gridCols} gap-6 mb-10`}>
        {division.categories.map((category, index) => (
          <CategoryCard key={category.title} category={category} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InfoPanel icon={Calendar} title="Key Dates">
          <p><span className="font-semibold text-foreground">Registration:</span> {division.keyDates.registration}</p>
          <p><span className="font-semibold text-foreground">Submission:</span> {division.keyDates.submission}</p>
          <p><span className="font-semibold text-foreground">National Finals:</span> {division.keyDates.finals}</p>
        </InfoPanel>
        <InfoPanel icon={Award} title={division.id === "high" ? "Prizes & Mentorship" : "Prizes"}>
          <p><span className="font-semibold text-foreground">1st Prize:</span> {division.prizes.first}</p>
          <p><span className="font-semibold text-foreground">2nd Prize:</span> {division.prizes.second}</p>
          <p><span className="font-semibold text-foreground">3rd Prize:</span> {division.prizes.third}</p>
          {division.prizes.extras && (
            <p className="pt-2 text-primary font-medium">{division.prizes.extras}</p>
          )}
        </InfoPanel>
      </div>
    </div>
  );
};

// ========== MAIN COMPONENT ==========
const Competitions: React.FC = () => {
  return (
    <section id="competitions" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
            Competition Divisions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your path to innovation and discovery for India's tech future
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              1000+ Student Innovators
            </div>
            <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              25+ States & UTs
            </div>
            <div className="bg-accent/30 text-accent-dark px-4 py-2 rounded-full text-sm font-medium">
              ₹25 Lakh+ in Prizes
            </div>
          </div>
        </div>

        {COMPETITION_DATA.map((division) => (
          <CompetitionDivision key={division.id} division={division} />
        ))}

        <div className="mt-16 text-center fade-in-up">
          <p className="text-muted-foreground mb-4">
            Need help choosing a category? Contact our student advisors!
          </p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Brain className="w-4 h-4 mr-2" />
            Get Guidance
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Competitions;