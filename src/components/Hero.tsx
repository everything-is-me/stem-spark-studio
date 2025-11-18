import { Button } from "@/components/ui/button";
import { Sparkles, Trophy } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(231, 212, 197, 0.9), rgba(231, 212, 197, 0.85)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight mb-6">
              Igniting Young Minds Through{" "}
              <span className="text-primary relative inline-block">
                STEM
                <Sparkles className="absolute -top-4 -right-8 text-accent w-8 h-8 animate-pulse" />
              </span>
            </h1>
          </div>

          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl sm:text-2xl text-muted-foreground font-body mb-8">
              Annual Competition for Middle & High School Students
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground btn-hover-lift text-lg px-8 py-6 rounded-2xl"
              onClick={() => scrollToSection("competitions")}
            >
              <Trophy className="mr-2 h-5 w-5" />
              View Competitions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground btn-hover-lift text-lg px-8 py-6 rounded-2xl"
              onClick={() => scrollToSection("contact")}
            >
              Register Now
            </Button>
          </div>

          <div
            className="mt-12 flex flex-wrap justify-center gap-8 fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$50K</div>
              <div className="text-sm text-muted-foreground">In Prizes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
