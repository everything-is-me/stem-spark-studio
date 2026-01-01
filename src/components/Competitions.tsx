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
  Globe,
  Users,
  Trophy,
  Target,
  GraduationCap,
  BookOpen,
  Microscope,
  Code,
  Factory,
  Sparkles,
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
  buttonText: string;
}

// ========== DATA ==========
const COMPETITION_DATA: CompetitionDivision[] = [
  {
    id: "middle",
    title: "Junior Innovators (Middle School)",
    ageRange: "Grades 6-8 | Ages 11-14",
    categories: [
      {
        icon: CircuitBoard,
        title: "Young Electronics Wizards",
        description: "Create simple circuits and electronic gadgets using basic components.",
        color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
      },
      {
        icon: Smartphone,
        title: "Digital India Projects",
        description: "Build apps or devices that solve everyday problems in Indian communities.",
        color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      },
      {
        icon: Wind,
        title: "Eco Warriors",
        description: "Design solutions for waste management, water conservation, or pollution control.",
        color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
      },
      {
        icon: BookOpen,
        title: "Science Models & Exhibits",
        description: "Create working models that demonstrate scientific principles.",
        color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
      },
    ],
    keyDates: {
      registration: "Coming Soon",
      submission: "Coming Soon",
      finals: "Coming Soon",
    },
    buttonText: "Express Interest",
  },
  {
    id: "high",
    title: "Young Scientists (High School)",
    ageRange: "Grades 9-12 | Ages 14-18",
    categories: [
      {
        icon: Cpu,
        title: "Robotics & Automation",
        description: "Build robots and automated systems for Indian industry and agriculture.",
        color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
      },
      {
        icon: Zap,
        title: "Renewable Energy Solutions",
        description: "Design solar, wind, or hybrid systems for Indian villages and cities.",
        color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
      },
      {
        icon: Microscope,
        title: "Biotech & Healthcare",
        description: "Innovate in medical devices, diagnostics, or agricultural biotechnology.",
        color: "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400",
      },
      {
        icon: Code,
        title: "Software & AI Solutions",
        description: "Develop apps, algorithms, or AI tools addressing Indian challenges.",
        color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
      },
      {
        icon: Satellite,
        title: "Space & Drone Tech",
        description: "Create model satellites, drones, or remote sensing applications.",
        color: "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400",
      },
      {
        icon: Factory,
        title: "Make in India Products",
        description: "Design complete product prototypes that could be manufactured in India.",
        color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400",
      },
    ],
    keyDates: {
      registration: "Coming Soon",
      submission: "Coming Soon",
      finals: "Coming Soon",
    },
    buttonText: "Register Interest",
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
          <p><span className="font-semibold text-foreground">Project Submission:</span> {division.keyDates.submission}</p>
          <p><span className="font-semibold text-foreground">National Finals:</span> {division.keyDates.finals}</p>
        </InfoPanel>
        <InfoPanel icon={Award} title="Awards & Recognition">
          <p><span className="font-semibold text-foreground">🏆 National Winners:</span> Cash prizes + Incubation support</p>
          <p><span className="font-semibold text-foreground">🥈 State Level Awards:</span> Scholarships + STEM kits</p>
          <p><span className="font-semibold text-foreground">🥉 Special Category Awards:</span> Mentorship + Lab access</p>
          <p className="pt-2 text-primary font-medium">*Detailed prize structure announced in Phase 2</p>
        </InfoPanel>
      </div>
    </div>
  );
};

// Competition Flow Section
const CompetitionFlow = () => {
  const steps = [
    {
      number: "01",
      title: "Registration",
      description: "Register your school/team online through our portal",
      icon: Users,
    },
    {
      number: "02",
      title: "Project Development",
      description: "3-month period to develop your innovation with mentor support",
      icon: Brain,
    },
    {
      number: "03",
      title: "State-Level Competitions",
      description: "Present at your state/UT competition",
      icon: Target,
    },
    {
      number: "04",
      title: "National Finals",
      description: "Top projects compete at the national level",
      icon: Trophy,
    },
    {
      number: "05",
      title: "Awards & Incubation",
      description: "Winners receive prizes and startup support",
      icon: Sparkles,
    },
  ];

  return (
    <div className="mt-16 mb-16 fade-in-up">
      <h3 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
        Competition Journey
      </h3>
      <div className="relative">
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <div className={`flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-12'}`}>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-heading font-bold text-xl mb-3 text-foreground">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
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
            Make India Innovation Challenge 2024
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            India's premier innovation competition for school students, inspiring the next generation of creators and problem-solvers
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-transparent border border-primary text-primary px-4 py-2 rounded-full text-sm font-medium">
              <i className="w-4 h-4 inline mr-2">🇮🇳</i> 
              National Level Competition
            </div>
            <div className="bg-transparent border border-primary text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Trophy className="w-4 h-4 inline mr-2" />
              Cash Prizes + Incubation
            </div>
            <div className="bg-transparent border border-primary text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Users className="w-4 h-4 inline mr-2" />
              Team & Individual Projects
            </div>
          </div>
        </div>

        {COMPETITION_DATA.map((division) => (
          <CompetitionDivision key={division.id} division={division} />
        ))}

        <CompetitionFlow />

        {/* FAQ Section */}
        <div id="faq" className="mt-16 fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-heading font-bold text-foreground">
              Frequently Asked Questions
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border-border/50">
              <h4 className="font-heading font-bold text-lg mb-3 text-foreground">Who can participate?</h4>
              <p className="text-muted-foreground">Students from grades 6-12 across India. You can participate as an individual or in teams of up to 3 members.</p>
            </Card>
            
            <Card className="p-6 border-border/50">
              <h4 className="font-heading font-bold text-lg mb-3 text-foreground">Is there a registration fee?</h4>
              <p className="text-muted-foreground">Registration is completely free for all participants. We believe in removing barriers to innovation.</p>
            </Card>
            
            <Card className="p-6 border-border/50">
              <h4 className="font-heading font-bold text-lg mb-3 text-foreground">How will projects be judged?</h4>
              <p className="text-muted-foreground">Projects will be evaluated by industry experts and academicians based on innovation, impact, and implementation.</p>
            </Card>
            
            <Card className="p-6 border-border/50">
              <h4 className="font-heading font-bold text-lg mb-3 text-foreground">What support will be provided?</h4>
              <p className="text-muted-foreground">Mentorship sessions, online workshops, and access to our partner labs and makerspaces.</p>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Globe className="w-4 h-4 mr-2" />
              More Questions? Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitions;


// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Brain,
//   Cpu,
//   Leaf,
//   Dna,
//   BarChart3,
//   Rocket,
//   Calendar,
//   Award,
//   Cctv,
//   Wifi,
//   Smartphone,
//   Wind,
//   Satellite,
//   Zap,
//   Building,
//   CircuitBoard,
//   Shield,
//   Battery,
// } from "lucide-react";
// import { ComponentType, ReactNode } from "react";

// // ========== TYPES ==========
// interface CompetitionCategory {
//   icon: ComponentType<{ className?: string; strokeWidth?: number | string }>;
//   title: string;
//   description: string;
//   color: string;
// }

// interface CompetitionDivision {
//   id: "middle" | "high";
//   title: string;
//   ageRange: string;
//   categories: CompetitionCategory[];
//   keyDates: {
//     registration: string;
//     submission: string;
//     finals: string;
//   };
//   prizes: {
//     first: string;
//     second: string;
//     third: string;
//     extras?: string;
//   };
//   buttonText: string;
// }

// // ========== DATA ==========
// const COMPETITION_DATA: CompetitionDivision[] = [
//   {
//     id: "middle",
//     title: "Middle School Division",
//     ageRange: "Ages 11-14 years",
//     categories: [
//       {
//         icon: CircuitBoard,
//         title: "Basic Electronics & Circuits",
//         description: "Build simple electronic devices using Indian components.",
//         color: "bg-primary/10 text-primary",
//       },
//       {
//         icon: Cpu,
//         title: "Introductory Robotics",
//         description: "Create basic robots that can perform simple Indian context tasks.",
//         color: "bg-secondary/10 text-secondary",
//       },
//       {
//         icon: Wind,
//         title: "Environmental Tech",
//         description: "Design solutions for waste management, water conservation, or clean energy.",
//         color: "bg-accent/30 text-accent-dark",
//       },
//       {
//         icon: Smartphone,
//         title: "DIY Indian Tech",
//         description: "Build everyday useful devices with locally available materials.",
//         color: "bg-primary/10 text-primary",
//       },
//     ],
//     keyDates: {
//       registration: "August 1 - October 15",
//       submission: "December 31",
//       finals: "February 15",
//     },
//     prizes: {
//       first: "₹50,000 + STEM Kit",
//       second: "₹25,000 + Mentorship",
//       third: "₹10,000 + Workshop Invitation",
//     },
//     buttonText: "Register Now",
//   },
//   {
//     id: "high",
//     title: "High School Division",
//     ageRange: "Ages 14-18 years",
//     categories: [
//       {
//         icon: Cctv,
//         title: "Indian Hardware Challenge",
//         description: "Design and build electronic devices using Indian components and chips.",
//         color: "bg-primary/10 text-primary",
//       },
//       {
//         icon: Shield,
//         title: "Secure Communications",
//         description: "Create projects in data security, encryption, or local networks.",
//         color: "bg-secondary/10 text-secondary",
//       },
//       {
//         icon: Satellite,
//         title: "Space & Drone Tech",
//         description: "Build model satellites, drones, or remote sensing devices.",
//         color: "bg-accent/30 text-accent-dark",
//       },
//       {
//         icon: Zap,
//         title: "Renewable Energy Systems",
//         description: "Design solar, wind, or hybrid energy solutions for Indian villages.",
//         color: "bg-primary/10 text-primary",
//       },
//       {
//         icon: Building,
//         title: "Make in India Product",
//         description: "Create a complete product prototype that could be manufactured in India.",
//         color: "bg-secondary/10 text-secondary",
//       },
//       {
//         icon: Battery,
//         title: "Rare Earth & E-Waste",
//         description: "Develop solutions for recycling and recovering valuable materials from e-waste.",
//         color: "bg-accent/30 text-accent-dark",
//       },
//     ],
//     keyDates: {
//       registration: "August 1 - November 15",
//       submission: "January 31",
//       finals: "March 20",
//     },
//     prizes: {
//       first: "₹1,00,000 + Incubation Support",
//       second: "₹50,000 + Summer Internship",
//       third: "₹25,000 + Maker Lab Access",
//       extras: "Special Prize: 'Future Chip Designer' Award",
//     },
//     buttonText: "Apply Now",
//   },
// ];

// // ========== COMPONENTS ==========
// interface CategoryCardProps {
//   category: CompetitionCategory;
//   index: number;
// }

// const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
//   const Icon = category.icon;
//   return (
//     <Card
//       className="group p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-background fade-in-up hover:-translate-y-1"
//       style={{ animationDelay: `${index * 0.1}s` }}
//     >
//       <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
//         <Icon className="w-6 h-6" strokeWidth={2} />
//       </div>
//       <h4 className="font-heading font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
//         {category.title}
//       </h4>
//       <p className="text-sm text-muted-foreground leading-relaxed">
//         {category.description}
//       </p>
//     </Card>
//   );
// };

// interface InfoPanelProps {
//   icon: ComponentType<{ className?: string; strokeWidth?: number | string }>;
//   title: string;
//   children: ReactNode;
// }

// const InfoPanel: React.FC<InfoPanelProps> = ({ icon: Icon, title, children }) => (
//   <div className="bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-colors duration-300">
//     <Icon className="w-8 h-8 text-primary mb-3" strokeWidth={2} />
//     <h5 className="font-heading font-semibold text-foreground mb-3">{title}</h5>
//     <div className="text-sm text-muted-foreground space-y-1">{children}</div>
//   </div>
// );

// interface DivisionHeaderProps {
//   title: string;
//   ageRange: string;
//   buttonText: string;
//   onRegister: () => void;
// }

// const DivisionHeader: React.FC<DivisionHeaderProps> = ({ title, ageRange, buttonText, onRegister }) => (
//   <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
//     <div>
//       <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
//         {title}
//       </h3>
//       <p className="text-muted-foreground text-lg">{ageRange}</p>
//     </div>
//     <Button
//       className="bg-primary hover:bg-primary-dark btn-hover-lift px-8 py-6 text-base"
//       onClick={onRegister}
//       size="lg"
//     >
//       {buttonText}
//     </Button>
//   </div>
// );

// interface CompetitionDivisionProps {
//   division: CompetitionDivision;
// }

// const CompetitionDivision: React.FC<CompetitionDivisionProps> = ({ division }) => {
//   const handleRegister = () => {
//     const element = document.getElementById("contact");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const gridCols = division.id === "middle" 
//     ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" 
//     : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

//   return (
//     <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-lg fade-in-up mb-16 last:mb-0">
//       <DivisionHeader
//         title={division.title}
//         ageRange={division.ageRange}
//         buttonText={division.buttonText}
//         onRegister={handleRegister}
//       />

//       <div className={`grid ${gridCols} gap-6 mb-10`}>
//         {division.categories.map((category, index) => (
//           <CategoryCard key={category.title} category={category} index={index} />
//         ))}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <InfoPanel icon={Calendar} title="Key Dates">
//           <p><span className="font-semibold text-foreground">Registration:</span> {division.keyDates.registration}</p>
//           <p><span className="font-semibold text-foreground">Submission:</span> {division.keyDates.submission}</p>
//           <p><span className="font-semibold text-foreground">National Finals:</span> {division.keyDates.finals}</p>
//         </InfoPanel>
//         <InfoPanel icon={Award} title={division.id === "high" ? "Prizes & Mentorship" : "Prizes"}>
//           <p><span className="font-semibold text-foreground">1st Prize:</span> {division.prizes.first}</p>
//           <p><span className="font-semibold text-foreground">2nd Prize:</span> {division.prizes.second}</p>
//           <p><span className="font-semibold text-foreground">3rd Prize:</span> {division.prizes.third}</p>
//           {division.prizes.extras && (
//             <p className="pt-2 text-primary font-medium">{division.prizes.extras}</p>
//           )}
//         </InfoPanel>
//       </div>
//     </div>
//   );
// };

// // ========== MAIN COMPONENT ==========
// const Competitions: React.FC = () => {
//   return (
//     <section id="competitions" className="py-20 bg-background">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16 fade-in-up">
//           <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
//             Competition Divisions
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Choose your path to innovation and discovery for India's tech future
//           </p>
//           <div className="mt-8 flex flex-wrap justify-center gap-4">
//             <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
//               1000+ Student Innovators
//             </div>
//             <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
//               25+ States & UTs
//             </div>
//             <div className="bg-accent/30 text-accent-dark px-4 py-2 rounded-full text-sm font-medium">
//               ₹25 Lakh+ in Prizes
//             </div>
//           </div>
//         </div>

//         {COMPETITION_DATA.map((division) => (
//           <CompetitionDivision key={division.id} division={division} />
//         ))}

//         <div className="mt-16 text-center fade-in-up">
//           <p className="text-muted-foreground mb-4">
//             Need help choosing a category? Contact our student advisors!
//           </p>
//           <Button
//             variant="outline"
//             className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
//             onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//           >
//             <Brain className="w-4 h-4 mr-2" />
//             Get Guidance
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Competitions;