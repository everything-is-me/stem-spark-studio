import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Trophy, Users, Mail, CircuitBoard, Cpu } from "lucide-react";

// ========== TYPES ==========
interface NavItem {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
}

// ========== DATA ==========
const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "competitions", label: "Innovation Challenges", icon: Trophy },
  { id: "about", label: "About Us", icon: Users },
  { id: "contact", label: "Get in Touch", icon: Mail },
];

// ========== COMPONENTS ==========
interface NavButtonProps {
  item: NavItem;
  onClick: (id: string) => void;
  isMobile?: boolean;
  isScrolled: boolean;
  isActive: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ 
  item, 
  onClick, 
  isMobile = false, 
  isScrolled,
  isActive 
}) => {
  const Icon = item.icon;
  
  // Determine text color based on state
  let textColor = "";
  if (isMobile) {
    textColor = "text-foreground hover:text-primary";
  } else {
    if (isScrolled) {
      textColor = isActive ? "text-primary" : "text-foreground hover:text-primary";
    } else {
      textColor = isActive ? "text-primary" : "text-white hover:text-primary";
    }
  }

  return (
    <button
      onClick={() => onClick(item.id)}
      className={`
        flex items-center gap-2 transition-all duration-200 font-medium
        ${isMobile 
          ? `w-full text-left py-3 px-4 ${textColor} hover:bg-primary/5 rounded-lg` 
          : `${textColor} relative group`
        }
      `}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {item.label}
      {!isMobile && !isMobile && (
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      )}
      {!isMobile && isActive && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
      )}
    </button>
  );
};

interface MobileMenuProps {
  isOpen: boolean;
  items: NavItem[];
  onItemClick: (id: string) => void;
  onRegisterClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, items, onItemClick, onRegisterClick }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden animate-fade-in bg-card/95 backdrop-blur-sm rounded-2xl mt-2 p-4 shadow-xl border border-border/50">
      <div className="space-y-1">
        {items.map((item) => (
          <NavButton 
            key={item.id} 
            item={item} 
            onClick={onItemClick} 
            isMobile 
            isScrolled={true} // Mobile menu always has background
            isActive={false}
          />
        ))}
      </div>
      <div className="pt-4 mt-4 border-t border-border/50">
        <Button
          variant="default"
          className="w-full bg-primary hover:bg-primary-dark btn-hover-lift py-6 text-base"
          onClick={onRegisterClick}
        >
          <CircuitBoard className="w-5 h-5 mr-2" />
          Register for Competition
        </Button>
        <div className="text-xs text-muted-foreground text-center mt-3">
          Open to Indian students in Grades 6-12
        </div>
      </div>
    </div>
  );
};

// ========== MAIN COMPONENT ==========
const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = NAV_ITEMS.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
      setIsMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  const handleRegisterClick = () => {
    scrollToSection("contact");
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled 
          ? "bg-card/90 backdrop-blur-xl shadow-lg py-2" 
          : "bg-transparent py-4"
        }
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className={`
              w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300
              ${isScrolled 
                ? "bg-primary shadow-lg" 
                : "bg-white/20 backdrop-blur-sm group-hover:bg-primary"
              }
            `}>
              <Cpu className={`
                w-6 h-6 transition-colors duration-300
                ${isScrolled 
                  ? "text-white" 
                  : "text-white group-hover:text-white"
                }
              `} />
            </div>
            <div className="flex flex-col">
              <span className={`
                font-heading font-bold transition-all duration-300
                ${isScrolled 
                  ? "text-2xl text-foreground" 
                  : "text-2xl md:text-3xl text-white"
                }
              `}>
                Make India
              </span>
              <span className={`
                text-xs font-medium transition-all duration-300
                ${isScrolled 
                  ? "text-muted-foreground" 
                  : "text-white/80"
                }
              `}>
                Foundation
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.id} className="relative px-1">
                <NavButton 
                  item={item} 
                  onClick={scrollToSection} 
                  isScrolled={isScrolled}
                  isActive={activeSection === item.id}
                />
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className={`
                border-2 transition-all duration-300
                ${isScrolled 
                  ? "border-primary text-primary hover:bg-primary hover:text-white" 
                  : "border-white text-white hover:bg-white hover:text-slate-900"
                }
              `}
              onClick={() => scrollToSection("competitions")}
            >
              View Challenges
            </Button>
            <Button
              variant="default"
              className={`
                bg-primary hover:bg-primary-dark btn-hover-lift shadow-lg hover:shadow-xl transition-all
                ${!isScrolled ? "border-2 border-white" : ""}
              `}
              onClick={handleRegisterClick}
            >
              <Trophy className="w-4 h-4 mr-2" />
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`
              md:hidden transition-colors duration-300 p-2 rounded-lg
              ${isScrolled 
                ? "text-foreground hover:text-primary hover:bg-primary/5" 
                : "text-white hover:text-primary hover:bg-white/10"
              }
            `}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X size={28} className="animate-fade-in" />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          items={NAV_ITEMS}
          onItemClick={scrollToSection}
          onRegisterClick={handleRegisterClick}
        />
      </div>
    </nav>
  );
};

export default Navigation;