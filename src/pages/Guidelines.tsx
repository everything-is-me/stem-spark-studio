import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  FileText,
  Download,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Target,
  Users,
  Clock,
  Award,
  Lightbulb
} from "lucide-react";

const Guidelines = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const guidelines = [
    {
      title: "Project Requirements",
      icon: <Target className="w-5 h-5" />,
      content: [
        "Projects must demonstrate original research or innovative solutions",
        "All work must be completed by the student(s) with appropriate adult guidance",
        "Projects should address real-world problems or scientific questions",
        "Research must follow ethical guidelines and safety protocols",
        "Documentation must be complete and well-organized"
      ]
    },
    {
      title: "Safety Guidelines",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: [
        "All projects must comply with ISEF safety rules and regulations",
        "Hazardous materials require pre-approval and special handling",
        "Electrical projects must follow proper wiring and safety standards",
        "Biological materials must be handled according to biosafety protocols",
        "Adult supervision required for potentially dangerous procedures"
      ]
    },
    {
      title: "Display Requirements",
      icon: <BookOpen className="w-5 h-5" />,
      content: [
        "Display boards must be 36\" x 48\" (91 cm x 122 cm) or smaller",
        "All text must be readable from 3 feet (1 meter) away",
        "Projects must fit within the designated display space",
        "No live animals, hazardous materials, or perishable items allowed",
        "Electrical outlets may not be available - plan accordingly"
      ]
    },
    {
      title: "Presentation Guidelines",
      icon: <Users className="w-5 h-5" />,
      content: [
        "Students must be prepared to explain their project to judges",
        "Presentations should be clear, concise, and engaging",
        "Visual aids and demonstrations are encouraged",
        "Time limits will be strictly enforced",
        "Professional conduct and respect for judges is required"
      ]
    },
    {
      title: "Research Ethics",
      icon: <CheckCircle className="w-5 h-5" />,
      content: [
        "All research involving human subjects requires IRB approval",
        "Animal research must follow humane treatment guidelines",
        "Intellectual property and plagiarism rules must be followed",
        "Data collection and analysis must be scientifically sound",
        "Proper citation of sources is mandatory"
      ]
    }
  ];

  const resources = [
    {
      title: "ISEF Rules & Guidelines",
      description: "Complete official rules for the International Science and Engineering Fair",
      downloadUrl: "#",
      fileSize: "2.4 MB"
    },
    {
      title: "Project Display Template",
      description: "Standard template for creating your project display board",
      downloadUrl: "#",
      fileSize: "1.8 MB"
    },
    {
      title: "Research Planning Guide",
      description: "Step-by-step guide for planning and conducting scientific research",
      downloadUrl: "#",
      fileSize: "3.2 MB"
    },
    {
      title: "Safety Checklist",
      description: "Comprehensive safety checklist for all project types",
      downloadUrl: "#",
      fileSize: "956 KB"
    },
    {
      title: "Abstract Writing Guide",
      description: "Guidelines for writing clear and effective project abstracts",
      downloadUrl: "#",
      fileSize: "1.1 MB"
    },
    {
      title: "Presentation Tips",
      description: "Tips and techniques for effective project presentations",
      downloadUrl: "#",
      fileSize: "2.1 MB"
    }
  ];

  const timeline = [
    {
      phase: "Research & Planning",
      duration: "2-3 months",
      activities: [
        "Select research topic and formulate hypothesis",
        "Review literature and gather background information",
        "Plan experimental procedures and methodology",
        "Obtain necessary approvals (IRB, SRC, etc.)",
        "Begin data collection and experimentation"
      ]
    },
    {
      phase: "Data Collection & Analysis",
      duration: "1-2 months",
      activities: [
        "Conduct experiments and collect data",
        "Document procedures and observations",
        "Analyze data using appropriate statistical methods",
        "Draw conclusions based on results",
        "Prepare data visualizations and charts"
      ]
    },
    {
      phase: "Project Documentation",
      duration: "2-3 weeks",
      activities: [
        "Write research paper and abstract",
        "Create display board and visual materials",
        "Prepare presentation materials",
        "Practice presentation delivery",
        "Complete all required forms and documentation"
      ]
    },
    {
      phase: "Competition Preparation",
      duration: "1 week",
      activities: [
        "Review all rules and guidelines",
        "Pack project materials safely",
        "Practice presentation with time limits",
        "Prepare responses to potential questions",
        "Arrive early and set up display properly"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Guidelines & Resources
            </div>

            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
              Competition{" "}
              <span className="text-primary">Guidelines</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Everything you need to know to prepare a winning science fair project.
              From research ethics to display requirements, we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                Download All Resources
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6">
                <BookOpen className="w-5 h-5 mr-2" />
                View Rules
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Accordion */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Key Guidelines
              </h2>
              <p className="text-muted-foreground">
                Essential requirements and best practices for participating in STEM Spark competitions
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {guidelines.map((guideline, index) => (
                <AccordionItem
                  key={index}
                  value={`guideline-${index}`}
                  className="border border-border rounded-lg px-6 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="text-primary">{guideline.icon}</div>
                      <span className="text-lg font-heading font-semibold">{guideline.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <ul className="space-y-2">
                      {guideline.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Project Timeline
              </h2>
              <p className="text-muted-foreground">
                A typical timeline for completing a science fair project from start to finish
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {timeline.map((phase, index) => (
                <Card key={index} className="p-6 border-border/50 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground">{phase.phase}</h3>
                      <p className="text-sm text-primary font-medium">{phase.duration}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Downloadable Resources
              </h2>
              <p className="text-muted-foreground">
                Essential documents, templates, and guides to help you succeed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="p-6 border-border/50 hover:border-primary/50 transition-colors fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-foreground mb-1">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
                      <p className="text-xs text-muted-foreground">{resource.fileSize}</p>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Lightbulb className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Need Additional Help?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Our team of experienced mentors and educators is here to support you throughout your project journey.
              Get personalized guidance and expert advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-6">
                <Users className="w-5 h-5 mr-2" />
                Contact Mentors
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                <Award className="w-5 h-5 mr-2" />
                View Past Winners
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guidelines;