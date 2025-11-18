import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, Leaf, Dna, BarChart3, Rocket, Calendar, Award } from "lucide-react";

const Competitions = () => {
  const middleSchool = [
    {
      icon: Leaf,
      title: "Environmental Science",
      description: "Explore ecology, sustainability, and conservation through hands-on projects.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Cpu,
      title: "Basic Robotics",
      description: "Build and program simple robots while learning fundamental engineering principles.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Brain,
      title: "Math Challenges",
      description: "Solve creative problems and puzzles that develop mathematical thinking.",
      color: "bg-accent/30 text-accent-dark",
    },
  ];

  const highSchool = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Develop intelligent systems and explore the future of technology.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Rocket,
      title: "Engineering Design",
      description: "Create innovative solutions to real-world engineering challenges.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Dna,
      title: "Biotechnology",
      description: "Explore the intersection of biology and technology in modern research.",
      color: "bg-accent/30 text-accent-dark",
    },
    {
      icon: BarChart3,
      title: "Data Science",
      description: "Analyze complex datasets and uncover meaningful insights.",
      color: "bg-primary/10 text-primary",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="competitions" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
            Competition Divisions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your path to innovation and discovery
          </p>
        </div>

        {/* Middle School Division */}
        <div className="mb-20">
          <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-lg fade-in-up">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                  Middle School Division
                </h3>
                <p className="text-muted-foreground">Ages 11-14 years</p>
              </div>
              <Button
                className="bg-primary hover:bg-primary-dark btn-hover-lift"
                onClick={scrollToContact}
              >
                Register Now
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {middleSchool.map((category, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-background fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h4 className="font-heading font-bold text-lg mb-2 text-foreground">
                    {category.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-background rounded-2xl p-6 border border-border/50">
                <Calendar className="w-8 h-8 text-primary mb-3" />
                <h5 className="font-heading font-semibold text-foreground mb-2">Key Dates</h5>
                <p className="text-sm text-muted-foreground">
                  Registration: Sept 1 - Oct 31<br />
                  Submission Deadline: March 15<br />
                  Finals: April 20
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6 border border-border/50">
                <Award className="w-8 h-8 text-primary mb-3" />
                <h5 className="font-heading font-semibold text-foreground mb-2">Prizes</h5>
                <p className="text-sm text-muted-foreground">
                  1st Place: $2,000 + Trophy<br />
                  2nd Place: $1,000 + Medal<br />
                  3rd Place: $500 + Medal
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* High School Division */}
        <div>
          <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-lg fade-in-up">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                  High School Division
                </h3>
                <p className="text-muted-foreground">Ages 14-18 years</p>
              </div>
              <Button
                className="bg-primary hover:bg-primary-dark btn-hover-lift"
                onClick={scrollToContact}
              >
                Register Now
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {highSchool.map((category, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-background fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h4 className="font-heading font-bold text-lg mb-2 text-foreground">
                    {category.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-background rounded-2xl p-6 border border-border/50">
                <Calendar className="w-8 h-8 text-primary mb-3" />
                <h5 className="font-heading font-semibold text-foreground mb-2">Key Dates</h5>
                <p className="text-sm text-muted-foreground">
                  Registration: Sept 1 - Nov 15<br />
                  Submission Deadline: March 30<br />
                  Finals: May 5
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6 border border-border/50">
                <Award className="w-8 h-8 text-primary mb-3" />
                <h5 className="font-heading font-semibold text-foreground mb-2">Prizes & Mentorship</h5>
                <p className="text-sm text-muted-foreground">
                  1st Place: $5,000 + Internship<br />
                  2nd Place: $3,000 + Mentorship<br />
                  3rd Place: $1,500 + Mentorship
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitions;
