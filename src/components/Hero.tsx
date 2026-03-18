import { Button } from "@/components/ui/button";
import { Sparkles, Trophy, Cpu, CircuitBoard, Smartphone, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-primary/20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-bounce"></div>
        
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              <div className="fade-in-up">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  Building India's  Future
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
                  Young minds,{" "}
                  <span className="text-primary relative inline-block">
                    Local Ideas
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse">
                      <Sparkles className="absolute -top-4 -right-8 text-accent w-8 h-8 animate-pulse" />
                    </span>
                  </span>
                  <br />
                  Global Market
                </h1>
                
                <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-secondary mb-6">
                  Design. Build. Innovate for India and world.
                </h2>
              </div>

              <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
                <p className="text-xl text-slate-300 font-body mb-8 leading-relaxed">
                  India's premier youth innovation challenge for hardware, electronics, 
                  and deep-tech. Join thousands of students building products for 
                  India's tech sovereignty.
                </p>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4 fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-white btn-hover-lift text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  onClick={() => scrollToSection("competitions")}
                >
                  <CircuitBoard className="mr-2 h-5 w-5" />
                  View Innovation Challenges
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white btn-hover-lift text-lg px-8 py-6 rounded-2xl"
                  onClick={() => scrollToSection("contact")}
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  Register Now
                </Button>
              </div>

              {/* Quick Stats */}
              <div
                className="mt-12 grid grid-cols-3 gap-6 fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-primary" />
                    <div className="text-3xl font-bold text-white">1000+</div>
                  </div>
                  <div className="text-sm text-slate-300">Student Innovators</div>
                </div>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Cpu className="w-5 h-5 text-secondary" />
                    <div className="text-3xl font-bold text-white">25+</div>
                  </div>
                  <div className="text-sm text-slate-300">States & UTs</div>
                </div>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Smartphone className="w-5 h-5 text-accent" />
                    <div className="text-3xl font-bold text-white">₹25L+</div>
                  </div>
                  <div className="text-sm text-slate-300">In Prizes</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                {/* Floating elements */}
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/20 rounded-3xl rotate-12 animate-float"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/20 rounded-3xl -rotate-12 animate-float-delayed"></div>
                
                {/* Main card */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                      <Trophy className="w-4 h-4" />
                      Annual National Competition
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-4">
                      For Middle & High School Students
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { icon: CircuitBoard, text: "Hardware & Electronics", color: "text-primary" },
                      { icon: Smartphone, text: "Indian Product Design", color: "text-secondary" },
                      { icon: Cpu, text: "Secure Tech Development", color: "text-accent" },
                      { icon: Trophy, text: "Mentorship & Incubation", color: "text-primary" }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform ${item.color}`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <span className="text-white font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <p className="text-sm text-slate-300 text-center">
                      Supported by Indian tech leaders & industry mentors
                    </p>
                    <div className="flex justify-center gap-4 mt-4">
                      <div className="text-xs bg-white/10 text-white px-3 py-1 rounded-full">HCL</div>
                      <div className="text-xs bg-white/10 text-white px-3 py-1 rounded-full">TATA</div>
                      <div className="text-xs bg-white/10 text-white px-3 py-1 rounded-full">ISRO</div>
                      <div className="text-xs bg-white/10 text-white px-3 py-1 rounded-full">DRDO</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll to next section"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </button>

      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;