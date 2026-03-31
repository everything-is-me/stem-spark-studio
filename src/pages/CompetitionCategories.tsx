import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Bug, Users, Beaker, Heart, Activity, Dna, Atom, Database, Globe, 
  Cpu, Zap, Wrench, Leaf, Layers, Calculator, Microscope, Rocket, 
  Bot, Terminal, Pill, Search, Target, Sprout, ArrowRight
} from "lucide-react";

// ========== TYPES ==========
interface CategoryProps {
  code: string;
  title: string;
  description: string;
  subcategories: string[];
  icon: React.ElementType;
  color: string;
}

// ========== DATA ==========
const CATEGORIES: CategoryProps[] = [
  {
    code: "ANIM",
    title: "Animal Sciences",
    description: "Investigate animal life, behavior, physiology, ecology, or interactions with the environment. Build solutions or conduct research that protects, monitors, or better understands animal life.",
    subcategories: ["Animal Behavior", "Cellular Studies", "Development", "Ecology", "Genetics", "Nutrition & Growth", "Physiology", "Systematics & Evolution"],
    icon: Bug,
    color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
  },
  {
    code: "BEHA",
    title: "Behavioural & Social Sciences",
    description: "Study human thought, behavior, and society. Build tools or systems that address real social, psychological, or community challenges.",
    subcategories: ["Clinical & Developmental Psychology", "Cognitive Psychology", "Neuroscience", "Physiological Psychology", "Sociology & Social Psychology"],
    icon: Users,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    code: "BCHM",
    title: "Biochemistry",
    description: "Explore the chemical processes of living organisms — from metabolism to disease — and develop applications from those findings.",
    subcategories: ["Analytical Biochemistry", "General Biochemistry", "Medicinal Biochemistry", "Structural Biochemistry"],
    icon: Beaker,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
  },
  {
    code: "BMED",
    title: "Biomedical & Health Sciences",
    description: "Focus on human health — diagnosing, preventing, or treating disease through research, data, or prototype health tools.",
    subcategories: ["Cell, Organ & Systems Physiology", "Genetics & Molecular Biology of Disease", "Immunology", "Nutrition & Natural Products", "Pathophysiology"],
    icon: Heart,
    color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
  },
  {
    code: "ENBM",
    title: "Biomedical Engineering",
    description: "Apply engineering to solve medical problems — from wearable health devices and diagnostic tools to assistive technologies.",
    subcategories: ["Biomaterials & Regenerative Medicine", "Biomechanics", "Biomedical Devices", "Biomedical Sensors & Imaging", "Cell & Tissue Engineering", "Synthetic Biology"],
    icon: Activity,
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"
  },
  {
    code: "CELL",
    title: "Cellular & Molecular Biology",
    description: "Investigate life at its smallest scale — understanding how cells work, communicate, and respond to real-world problems.",
    subcategories: ["Cell Physiology", "Cellular Immunology", "Genetics", "Molecular Biology", "Neurobiology"],
    icon: Dna,
    color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400"
  },
  {
    code: "CHEM",
    title: "Chemistry",
    description: "Explore the composition, structure, and reactions of matter to develop chemical solutions for everyday challenges.",
    subcategories: ["Analytical Chemistry", "Computational Chemistry", "Environmental Chemistry", "Inorganic Chemistry", "Materials Chemistry", "Organic Chemistry", "Physical Chemistry"],
    icon: Atom,
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
  },
  {
    code: "CBIO",
    title: "Computational Biology & Bioinfo",
    description: "Use code, data, and mathematical models to decode biological systems — from disease modeling to genomics.",
    subcategories: ["Computational Biomodeling", "Computational Epidemiology", "Computational Evolutionary Biology", "Computational Neuroscience", "Computational Pharmacology", "Genomics"],
    icon: Database,
    color: "bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-900/30 dark:text-fuchsia-400"
  },
  {
    code: "EAEV",
    title: "Earth & Env. Sciences ",
    description: "Study our planet's systems — atmosphere, climate, ecosystems, soil — and build solutions to protect nature.",
    subcategories: ["Atmospheric Science", "Climate Science", "Environmental Effects on Ecosystems", "Geosciences", "Water Science"],
    icon: Globe,
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
  },
  {
    code: "EBED",
    title: "Embedded Systems & IoT",
    description: "Design electronic systems — circuits, microcontrollers, sensors — that solve real problems in homes or cities.",
    subcategories: ["Circuits", "Internet of Things", "Microcontrollers", "Networking & Data Communications", "Optics", "Sensors", "Signal Processing"],
    icon: Cpu,
    color: "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400"
  },
  {
    code: "EGSD",
    title: "Energy: Materials & Design",
    description: "Tackle energy challenges — generating, storing, or optimising energy through innovative sustainable processes.",
    subcategories: ["Biological Processes & Design", "Solar Processes & Design", "Energy Storage", "Wind & Water Power Generation", "Hydrogen Generation & Storage", "Thermal Generation", "Triboelectricity & Electrolysis"],
    icon: Zap,
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
  },
  {
    code: "ENMC",
    title: "Engineering Mechanics",
    description: "Apply principles of mechanical, civil, aerospace, or structural engineering to build systems that solve physical challenges.",
    subcategories: ["Aerospace & Aeronautical Engineering", "Civil Engineering", "Computational Mechanics", "Control Theory", "Ground Vehicle Systems", "Industrial Engineering", "Mechanical Engineering", "Naval Systems"],
    icon: Wrench,
    color: "bg-slate-100 text-slate-600 dark:bg-slate-900/30 dark:text-slate-400"
  },
  {
    code: "ENEV",
    title: "Environmental Engineering",
    description: "Engineer solutions to pressing environmental problems — clean water, waste management, pollution control.",
    subcategories: ["Bioremediation", "Land Reclamation", "Pollution Control", "Recycling & Waste Management", "Water Resources Management"],
    icon: Leaf,
    color: "bg-lime-100 text-lime-600 dark:bg-lime-900/30 dark:text-lime-400"
  },
  {
    code: "MATS",
    title: "Materials Science",
    description: "Design, test, or develop new materials — from nanomaterials and composites to smart polymers.",
    subcategories: ["Biomaterials", "Ceramics & Glasses", "Composite Materials", "Computation & Theory", "Electronic, Optical & Magnetic Materials", "Nanomaterials", "Polymers"],
    icon: Layers,
    color: "bg-stone-100 text-stone-600 dark:bg-stone-900/30 dark:text-stone-400"
  },
  {
    code: "MATH",
    title: "Mathematics",
    description: "Use the power of numbers, patterns, and logic to model, solve, or explain real-world problems.",
    subcategories: ["Algebra", "Analysis", "Combinatorics, Graph Theory & Game Theory", "Geometry & Topology", "Number Theory", "Probability & Statistics"],
    icon: Calculator,
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
  },
  {
    code: "MCRO",
    title: "Microbiology",
    description: "Study microorganisms — bacteria, viruses, fungi — and develop applications in health, agriculture, or tech.",
    subcategories: ["Antimicrobials & Antibiotics", "Applied Microbiology", "Bacteriology", "Environmental Microbiology", "Microbial Genetics", "Virology"],
    icon: Microscope,
    color: "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400"
  },
  {
    code: "PHYS",
    title: "Physics & Astronomy",
    description: "Investigate the fundamental laws of the universe — from quantum mechanics to space science.",
    subcategories: ["Atomic, Molecular & Optical Physics", "Astronomy & Cosmology", "Biological Physics", "Condensed Matter & Materials", "Mechanics", "Nuclear & Particle Physics", "Theoretical, Computational & Quantum Physics"],
    icon: Rocket,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    code: "PLNT",
    title: "Plant Sciences",
    description: "Study plants — their growth, genetics, ecology, and diseases — and develop innovations in agriculture.",
    subcategories: ["Agriculture & Agronomy", "Ecology", "Genetics & Breeding", "Growth & Development", "Pathology", "Plant Physiology", "Systematics & Evolution"],
    icon: Sprout,
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
  },
  {
    code: "ROBO",
    title: "Robotics & AI",
    description: "Design and build robots or autonomous systems using sensors, AI, and mechanical design.",
    subcategories: ["Biomechanics", "Cognitive Systems", "Control Theory", "Machine Learning", "Robot Kinematics"],
    icon: Bot,
    color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
  },
  {
    code: "SOFT",
    title: "Systems Software",
    description: "Build apps, platforms, algorithms, or digital tools that solve real problems through software.",
    subcategories: ["Algorithms", "Cybersecurity", "Databases", "Human/Machine Interface", "Languages & Operating Systems", "Mobile Apps", "Online Learning"],
    icon: Terminal,
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
  },
  {
    code: "TMED",
    title: "Translational Medical Science",
    description: "Take medical discoveries from research to real-world application to improve healthcare outcomes.",
    subcategories: ["Disease Detection & Diagnosis", "Disease Prevention", "Disease Treatment & Therapies", "Drug Identification & Testing", "Pre-Clinical Studies"],
    icon: Pill,
    color: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"
  }
];

// ========== MAIN COMPONENT ==========
const CompetitionCategories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryProps | null>(null);

  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return CATEGORIES;
    return CATEGORIES.filter((category) => 
      category.title.toLowerCase().includes(query) ||
      category.code.toLowerCase().includes(query) ||
      category.description.toLowerCase().includes(query) ||
      category.subcategories.some(sub => sub.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <main className="flex-1 w-full pb-20">
        {/* Modern Hero Section */}
        <section className="relative overflow-hidden bg-primary/5 py-16 sm:py-24 mb-12 border-b border-primary/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 text-sm px-4 py-1">21 Categories</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Find Your Passion
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Explore 21 major categories and countless sub-tracks. Filter below to find exactly where your project belongs!
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              </div>
              <Input
                type="text"
                className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-primary/20 focus-visible:ring-primary focus-visible:border-primary shadow-lg bg-background/80 backdrop-blur-sm"
                placeholder="Search for subjects, topics, or codes (e.g. 'Robotics' or 'ANIM')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No categories found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms.</p>
              <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card 
                    key={category.code} 
                    className="group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 border-border/50 bg-card overflow-hidden flex flex-col cursor-pointer"
                    onClick={() => setSelectedCategory(category)}
                  >
                    <CardHeader className="pb-3 flex flex-row items-start justify-between space-y-0 relative">
                      <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" strokeWidth={2} />
                      </div>
                      <Badge variant="outline" className="font-mono bg-background text-primary border-primary/20">
                        {category.code}
                      </Badge>
                    </CardHeader>
                    <CardContent className="flex-1 pb-4">
                      <CardTitle className="text-xl mb-2 leading-tight group-hover:text-primary transition-colors">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3 text-sm">
                        {category.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="pt-0 pb-4 flex flex-col items-start gap-3">
                      <div className="flex flex-wrap gap-1 w-full">
                        {category.subcategories.slice(0, 2).map((sub, i) => (
                          <span key={i} className="text-[10px] uppercase tracking-wider font-semibold bg-muted text-muted-foreground px-2 py-0.5 rounded-sm line-clamp-1 max-w-full">
                            {sub}
                          </span>
                        ))}
                        {category.subcategories.length > 2 && (
                          <span className="text-[10px] uppercase tracking-wider font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-sm">
                            +{category.subcategories.length - 2} more
                          </span>
                        )}
                      </div>
                      <div className="w-full flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                        View Tracks <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </section>

        {/* Detailed Modal */}
        <Dialog open={!!selectedCategory} onOpenChange={(open) => !open && setSelectedCategory(null)}>
          <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
            {selectedCategory && (
              <>
                <div className={`p-6 pb-8 ${selectedCategory.color} border-b`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/50 dark:bg-black/20 rounded-xl backdrop-blur-sm">
                      <selectedCategory.icon className="w-8 h-8" strokeWidth={2} />
                    </div>
                    <Badge variant="outline" className="font-mono text-base bg-background/80 backdrop-blur-sm border-current">
                      {selectedCategory.code}
                    </Badge>
                  </div>
                  <DialogTitle className="text-3xl font-extrabold mb-2 text-current">
                    {selectedCategory.title}
                  </DialogTitle>
                  <DialogDescription className="text-current opacity-90 text-base leading-relaxed">
                    {selectedCategory.description}
                  </DialogDescription>
                </div>
                
                <div className="p-6 bg-background">
                  <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wide mb-4">
                    Available Subcategories ({selectedCategory.subcategories.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {selectedCategory.subcategories.map((sub, i) => (
                      <div key={i} className="flex items-start bg-muted/40 p-3 rounded-lg border border-border/50">
                        <Target className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{sub}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary/5 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-primary/10">
                    <div>
                      <h4 className="font-bold text-primary">Found your track?</h4>
                      <p className="text-sm text-primary/80">If unsure, our Scientific Review Committee will help categorise your project.</p>
                    </div>
                    <Button className="w-full sm:w-auto flex-shrink-0" onClick={() => setSelectedCategory(null)}>
                      Got it
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  );
};

export default CompetitionCategories;