import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CompetitionSection from "@/components/CompetitionSection";
import InnovatorJourney from "@/components/InnovatorJourney";
import TrendingNews from "@/components/TrendingNews";
import ScienceSimplified from "@/components/ScienceSimplified";

const Index = () => {
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

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Mission />
      <CompetitionSection />
      <InnovatorJourney />
      <TrendingNews />
      <ScienceSimplified />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
