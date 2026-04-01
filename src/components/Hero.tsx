import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero/hero1.png";
import hero2 from "@/assets/hero/hero2.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: hero1,
      title: "Young minds,",
      subtitle: "Local Ideas",
      highlight: "Global Market",
      description: "India's premier youth innovation challenge in STEM",
      align: "left"
    },
    {
      image: hero2,
      title: "Design. Build.",
      subtitle: "Innovate.",
      highlight: "Share.",
      description: "Join thousands of students building products for India's tech sovereignty",
      align: "left"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Hero slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-6xl mx-auto h-full flex items-center">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${slide.align === "left" ? "left-0 text-left" : "right-0 text-right"}`}
              >
                <div
                  className={`max-w-2xl ${
                    slide.align === "left" ? "pl-8 lg:pl-16" : "pr-8 lg:pr-16"
                  }`}
                >
                  {/* Animated Title */}
                  <div
                    className="animate-fade-in-up"
                    style={{
                      animation:
                        index === currentSlide
                          ? "fadeInUp 0.8s ease-out 0.1s forwards"
                          : "none",
                      opacity: index === currentSlide ? 1 : 0
                    }}
                  >
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-2 drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#F7941E] leading-tight mb-2 drop-shadow-lg">
                      {slide.subtitle}
                    </h2>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6 drop-shadow-lg">
                      {slide.highlight}
                    </h2>
                  </div>

                  {/* Animated Description */}
                  <div
                    style={{
                      animation:
                        index === currentSlide
                          ? "fadeInUp 0.8s ease-out 0.3s forwards"
                          : "none",
                      opacity: index === currentSlide ? 1 : 0
                    }}
                  >
                    <p className="text-xl sm:text-2xl text-white/90 font-body mb-8 leading-relaxed drop-shadow-lg">
                      {slide.description}
                    </p>
                  </div>

                  {/* Animated CTA Buttons */}
                  <div
                    className="flex gap-4 flex-wrap"
                    style={{
                      animation:
                        index === currentSlide
                          ? "fadeInUp 0.8s ease-out 0.5s forwards"
                          : "none",
                      opacity: index === currentSlide ? 1 : 0
                    }}
                  >
                    {/* <button
                      onClick={() => scrollToSection("competitions")}
                      className="bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      View Challenges
                    </button> */}
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 border border-white/50"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-6">
        {/* Slide Indicators */}
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Controls */}
        <div className="flex gap-2 bg-white/10 backdrop-blur-sm rounded-full p-2">
          <button
            onClick={prevSlide}
            className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors z-20"
        aria-label="Scroll to next section"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </button>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;