import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  Heart,
  Atom,
  Mountain,
  Sun,
  Beaker,
  Bug,
  Wrench,
  Radio,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  X,
} from "lucide-react";
import { ComponentType, ReactNode, useState } from "react";

// ========== TYPES ==========
interface Subcategory {
  icon: ComponentType<{ className?: string; strokeWidth?: number | string }>;
  title: string;
  code: string;
  description: string;
  color: string;
}

interface CompetitionCategory {
  id: string;
  title: string;
  focus: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number | string }>;
  subcategories: Subcategory[];
  keyDates: {
    registration: string;
    submission: string;
    finals: string;
  };
}

interface RegistrationModalState {
  isOpen: boolean;
  categoryId: string;
  categoryTitle: string;
  subcategoryCode?: string;
  subcategoryTitle?: string;
}

// ========== DATA ==========
const COMPETITION_DATA: CompetitionCategory[] = [
  {
    id: "life-sciences",
    title: "Life Sciences & Biology",
    focus: "Living organisms, health, plants, microbes, and biology research.",
    icon: Dna,
    subcategories: [
      {
        icon: Bug,
        code: "ANIM",
        title: "Animal Sciences",
        description: "Research and innovation in animal behavior, physiology, and conservation.",
        color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
      },
      {
        icon: Leaf,
        code: "PLNT",
        title: "Plant Sciences",
        description: "Plant biology, agriculture enhancement, and botanical innovations.",
        color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
      },
      {
        icon: Microscope,
        code: "MCRO",
        title: "Microbiology",
        description: "Study of microorganisms and their applications in biotechnology.",
        color: "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400",
      },
      {
        icon: Dna,
        code: "CELL",
        title: "Cellular and Molecular Biology",
        description: "Cell structure, genetics, and molecular mechanisms of life.",
        color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400",
      },
      {
        icon: Beaker,
        code: "BCHM",
        title: "Biochemistry",
        description: "Chemical processes and reactions in living organisms.",
        color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
      },
      {
        icon: Heart,
        code: "BMED",
        title: "Biomedical and Health Sciences",
        description: "Medical innovations, healthcare solutions, and health technology.",
        color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
      },
    ],
    keyDates: {
      registration: "Coming Soon",
      submission: "Coming Soon",
      finals: "Coming Soon",
    },
  },
  {
    id: "physical-sciences",
    title: "Physical Sciences",
    focus: "Fundamental sciences like matter, energy, and natural laws.",
    icon: Atom,
    subcategories: [
      {
        icon: Atom,
        code: "PHYS",
        title: "Physics and Astronomy",
        description: "Fundamental physics, particle physics, cosmology, and space science.",
        color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      },
      {
        icon: Beaker,
        code: "CHEM",
        title: "Chemistry",
        description: "Chemical reactions, materials, and advanced chemistry applications.",
        color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
      },
      {
        icon: Building,
        code: "MATS",
        title: "Materials Science",
        description: "Discovery and engineering of new materials with novel properties.",
        color: "bg-slate-100 text-slate-600 dark:bg-slate-900/30 dark:text-slate-400",
      },
      {
        icon: Brain,
        code: "MATH",
        title: "Mathematics",
        description: "Pure and applied mathematics, computational mathematics, and modeling.",
        color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
      },
    ],
    keyDates: {
      registration: "Coming Soon",
      submission: "Coming Soon",
      finals: "Coming Soon",
    },
  },
  {
    id: "earth-environmental",
    title: "Earth & Environmental Sciences",
    focus: "Very relevant for India's climate, agriculture, and sustainability.",
    icon: Mountain,
    subcategories: [
      {
        icon: Mountain,
        code: "EAEV",
        title: "Earth and Environmental Sciences",
        description: "Geology, environmental systems, climate, and sustainable ecosystems.",
        color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
      },
      {
        icon: Wind,
        code: "ENEV",
        title: "Environmental Engineering",
        description: "Water treatment, air quality, waste management, and environmental solutions.",
        color: "bg-lime-100 text-lime-600 dark:bg-lime-900/30 dark:text-lime-400",
      },
      {
        icon: Sun,
        code: "EGSD",
        title: "Energy: Sustainable Materials and Design",
        description: "Renewable energy, sustainable design, and green technologies.",
        color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
      },
    ],
    keyDates: {
      registration: "Coming Soon",
      submission: "Coming Soon",
      finals: "Coming Soon",
    },
  },
  {
    id: "computer-science",
    title: "Computer Science & Technology",
    focus: "For modern tech-focused student projects.",
    icon: Code,
    subcategories: [
      {
        icon: Code,
        code: "SFTD",
        title: "Software Design",
        description: "Web development, mobile apps, software architecture, and system design.",
        color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
      },
      {
        icon: Dna,
        code: "CBIO",
        title: "Computational Biology and Bioinformatics",
        description: "Computational methods for biological data analysis and bioinformatics.",
        color: "bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-900/30 dark:text-fuchsia-400",
      },
    ],
    keyDates: {
      registration: "Coming Soon",
      submission: "Coming Soon",
      finals: "Coming Soon",
    },
  },
  {
    id: "engineering-robotics",
    title: "Engineering & Robotics",
    focus: "Hands-on engineering and innovation.",
    icon: Cpu,
    subcategories: [
      {
        icon: Cpu,
        code: "ROBO",
        title: "Robotics and Intelligent Machines",
        description: "Robot design, automation, autonomous systems, and AI-driven machines.",
        color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
      },
      {
        icon: CircuitBoard,
        code: "EBED",
        title: "Embedded Systems",
        description: "Microcontrollers, IoT devices, hardware integration, and automation.",
        color: "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400",
      },
      {
        icon: Heart,
        code: "ENBM",
        title: "Biomedical Engineering",
        description: "Medical devices, prosthetics, diagnostic tools, and health technology.",
        color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
      },
    ],
    keyDates: {
      registration: "Coming Soon",
      submission: "Coming Soon",
      finals: "Coming Soon",
    },
  },
  {
    id: "social-behavioral",
    title: "Social & Behavioral Sciences",
    focus: "Human behavior and society studies.",
    icon: Users,
    subcategories: [
      {
        icon: Users,
        code: "BEHA",
        title: "Behavioral and Social Sciences",
        description: "Psychology, sociology, anthropology, economics, and social innovation.",
        color: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
      },
    ],
    keyDates: {
      registration: "Coming Soon",
      submission: "Coming Soon",
      finals: "Coming Soon",
    },
  },
];

// ========== COMPONENTS ==========

// Registration Modal Component
interface RegistrationFormProps {
  isOpen: boolean;
  categoryId: string;
  categoryTitle: string;
  subcategoryCode?: string;
  subcategoryTitle?: string;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationFormProps> = ({
  isOpen,
  categoryTitle,
  subcategoryTitle,
  subcategoryCode,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    grade: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Registration submitted:", {
      ...formData,
      category: categoryTitle,
      subcategory: subcategoryTitle || "General",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Register for {subcategoryTitle ? `${subcategoryTitle} (${subcategoryCode})` : categoryTitle}</DialogTitle>
          <DialogDescription>
            Fill in your details to express interest in this {subcategoryTitle ? "track" : "category"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">School Name</label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your school name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Grade</label>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select your grade</option>
              <option value="6">Grade 6</option>
              <option value="7">Grade 7</option>
              <option value="8">Grade 8</option>
              <option value="9">Grade 9</option>
              <option value="10">Grade 10</option>
              <option value="11">Grade 11</option>
              <option value="12">Grade 12</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary-dark"
            >
              Submit Registration
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// Subcategory Card Component
interface SubcategoryCardProps {
  subcategory: Subcategory;
  index: number;
  onRegister: () => void;
}

const SubcategoryCard: React.FC<SubcategoryCardProps> = ({ subcategory, index, onRegister }) => {
  const Icon = subcategory.icon;
  return (
    <Card
      className="group p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-background fade-in-up hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl ${subcategory.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6" strokeWidth={2} />
        </div>
        <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2.5 py-1.5 rounded-md">
          {subcategory.code}
        </span>
      </div>
      <h4 className="font-heading font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
        {subcategory.title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {subcategory.description}
      </p>
      <Button
        size="sm"
        variant="outline"
        onClick={onRegister}
        className="w-full text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
      >
        Register for this Track
      </Button>
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

// Accordion Trigger Component
interface CategoryTriggerProps {
  category: CompetitionCategory;
}

const CategoryTrigger: React.FC<CategoryTriggerProps> = ({ category }) => {
  const Icon = category.icon;
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0">
        <Icon className="w-6 h-6" strokeWidth={2} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-heading font-bold text-foreground leading-tight">
          {category.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
          {category.focus}
        </p>
      </div>
      <ChevronDown className="h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300" />
    </div>
  );
};

// Category Content Component
interface CategoryContentProps {
  category: CompetitionCategory;
  onRegisterCategory: () => void;
  onRegisterSubcategory: (subcategory: Subcategory) => void;
}

const CategoryContent: React.FC<CategoryContentProps> = ({
  category,
  onRegisterCategory,
  onRegisterSubcategory,
}) => {
  return (
    <div className="pt-6 space-y-6">
      {/* Category Registration Button */}
      <div className="flex gap-4 mb-6">
        <Button
          onClick={onRegisterCategory}
          className="flex-1 bg-primary hover:bg-primary-dark"
        >
          Express Interest in {category.title}
        </Button>
      </div>

      {/* Subcategories Grid */}
      <div>
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
          Available Tracks
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.subcategories.map((subcategory, index) => (
            <SubcategoryCard
              key={subcategory.code}
              subcategory={subcategory}
              index={index}
              onRegister={() => onRegisterSubcategory(subcategory)}
            />
          ))}
        </div>
      </div>

      {/* Key Dates */}
      <div className="pt-6 border-t border-border/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InfoPanel icon={Calendar} title="Key Dates">
            <p>
              <span className="font-semibold text-foreground">Registration:</span>{" "}
              {category.keyDates.registration}
            </p>
            <p>
              <span className="font-semibold text-foreground">Submission:</span>{" "}
              {category.keyDates.submission}
            </p>
            <p>
              <span className="font-semibold text-foreground">Finals:</span>{" "}
              {category.keyDates.finals}
            </p>
          </InfoPanel>
          <InfoPanel icon={Award} title="Awards & Recognition">
            <p>
              <span className="font-semibold text-foreground">🏆 National Winners:</span> Cash
              prizes + Incubation
            </p>
            <p>
              <span className="font-semibold text-foreground">🥈 State Level:</span> Scholarships
              + STEM kits
            </p>
            <p>
              <span className="font-semibold text-foreground">🥉 Special Awards:</span> Mentorship
              + Lab access
            </p>
          </InfoPanel>
        </div>
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
  const [registrationModal, setRegistrationModal] = useState<RegistrationModalState>({
    isOpen: false,
    categoryId: "",
    categoryTitle: "",
  });

  const handleRegisterCategory = (category: CompetitionCategory) => {
    setRegistrationModal({
      isOpen: true,
      categoryId: category.id,
      categoryTitle: category.title,
      subcategoryCode: undefined,
      subcategoryTitle: undefined,
    });
  };

  const handleRegisterSubcategory = (category: CompetitionCategory, subcategory: Subcategory) => {
    setRegistrationModal({
      isOpen: true,
      categoryId: category.id,
      categoryTitle: category.title,
      subcategoryCode: subcategory.code,
      subcategoryTitle: subcategory.title,
    });
  };

  const closeModal = () => {
    setRegistrationModal({
      isOpen: false,
      categoryId: "",
      categoryTitle: "",
    });
  };

  return (
    <section id="competitions" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4" style={{ textShadow: '2px 2px 0px rgba(80, 20, 100, 0.4)' }}>
            MIF Science and Engineering Fair
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            6 major scientific and engineering disciplines with 20+ specialized tracks for students grades 6-12
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-transparent border border-primary text-primary px-4 py-2 rounded-full text-sm font-medium">
              <i className="w-4 h-4 inline mr-2">🇮🇳</i>
              National Level
            </div>
            <div className="bg-transparent border border-primary text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Trophy className="w-4 h-4 inline mr-2" />
              Cash Prizes + Incubation
            </div>
            <div className="bg-transparent border border-primary text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Users className="w-4 h-4 inline mr-2" />
              20+ Tracks
            </div>
          </div>
        </div>

        {/* Accordion Categories */}
        <div className="max-w-4xl mx-auto mb-20">
          <Accordion type="single" collapsible className="space-y-3 fade-in-up">
            {COMPETITION_DATA.map((category, index) => (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="border border-border/50 rounded-lg hover:border-primary/50 transition-colors duration-300 overflow-hidden bg-card shadow-sm hover:shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-primary/5 transition-colors">
                  <CategoryTrigger category={category} />
                </AccordionTrigger>
                <AccordionContent className="px-6 py-6 bg-background/50">
                  <CategoryContent
                    category={category}
                    onRegisterCategory={() => handleRegisterCategory(category)}
                    onRegisterSubcategory={(subcategory) =>
                      handleRegisterSubcategory(category, subcategory)
                    }
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Competition Flow Section */}
        <CompetitionFlow />

        {/* FAQ Section */}
        <div id="faq" className="mt-20 fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-heading font-bold text-foreground">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 border-border/50">
              <h4 className="font-heading font-bold text-lg mb-3 text-foreground">Who can participate?</h4>
              <p className="text-muted-foreground">Students from grades 6-12 across India. Participate as an individual or in teams of up to 3 members.</p>
            </Card>

            <Card className="p-6 border-border/50">
              <h4 className="font-heading font-bold text-lg mb-3 text-foreground">Is there a registration fee?</h4>
              <p className="text-muted-foreground">Registration is completely free for all participants. We believe in removing barriers to innovation.</p>
            </Card>

            <Card className="p-6 border-border/50">
              <h4 className="font-heading font-bold text-lg mb-3 text-foreground">How will projects be judged?</h4>
              <p className="text-muted-foreground">Evaluated by industry experts based on innovation, impact, feasibility, and implementation quality.</p>
            </Card>

            <Card className="p-6 border-border/50">
              <h4 className="font-heading font-bold text-lg mb-3 text-foreground">What support is provided?</h4>
              <p className="text-muted-foreground">Mentorship sessions, online workshops, and access to partner labs and makerspaces.</p>
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

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={registrationModal.isOpen}
        categoryId={registrationModal.categoryId}
        categoryTitle={registrationModal.categoryTitle}
        subcategoryCode={registrationModal.subcategoryCode}
        subcategoryTitle={registrationModal.subcategoryTitle}
        onClose={closeModal}
      />
    </section>
  );
};

export default Competitions;
