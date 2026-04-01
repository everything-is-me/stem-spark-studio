import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Trophy, Users, Mail, CircuitBoard, Cpu, ChevronDown } from "lucide-react";
import { useRegistration } from "@/context/RegistrationContext";

// ========== TYPES ==========
interface NavItem {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
  href?: string;
  children?: NavItem[];
}

// ========== DATA ==========
const NAV_ITEMS: NavItem[] = [
  // { id: "home", label: "Home", icon: Home, href: "/" },
  {
    id: "competitions",
    label: "Competitions",
    icon: Trophy,
    children: [
      { id: "competitions-guidelines", label: "Guidelines and Rules", href: "/competitions/guidelines" },
      { id: "competitions-arise", label: "ARISE", href: "/competitions/arise" },
      { id: "competitions-ignite", label: "IGNITE", href: "/competitions/ignite" },
      { id: "competitions-categories", label: "Categories and Sub-Categories", href: "/competitions/categories" },
      { id: "competitions-awards", label: "Awards MIF", href: "/competitions/awards" },
    ]
  },
  { id: "about", label: "About Us", icon: Users, href: "/about" },
  { id: "contact", label: "Get in Touch", icon: Mail, href: "/contact" },
];

// ========== COMPONENTS ==========
interface NavButtonProps {
  item: NavItem;
  isMobile?: boolean;
  isScrolled: boolean;
  isActive: boolean;
  onDropdownToggle?: (id: string) => void;
  isDropdownOpen?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({
  item,
  isMobile = false,
  isScrolled,
  isActive,
  onDropdownToggle,
  isDropdownOpen = false
}) => {
  const Icon = item.icon;
  const hasChildren = item.children && item.children.length > 0;

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

  const buttonContent = (
    <>
      {Icon && <Icon className="w-4 h-4" />}
      {item.label}
      {hasChildren && <ChevronDown className={`w-3 h-3 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />}
      {!isMobile && !hasChildren && (
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      )}
      {!isMobile && !hasChildren && isActive && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
      )}
    </>
  );

  if (hasChildren) {
    return (
      <div className="relative">
        <button
          onClick={() => onDropdownToggle?.(item.id)}
          className={`
            flex items-center gap-2 transition-all duration-200 font-medium relative group
            ${isMobile
              ? `w-full text-left py-3 px-4 ${textColor} hover:bg-primary/5 rounded-lg`
              : `${textColor}`
            }
          `}
        >
          {buttonContent}
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className={`
            absolute top-full left-0 mt-2 min-w-[200px] bg-card/95 backdrop-blur-sm rounded-lg shadow-xl border border-border/50 py-2
            ${isMobile ? 'relative top-0 mt-1 bg-card rounded-lg' : ''}
          `}>
            {item.children?.map((child) => (
              <Link
                key={child.id}
                to={child.href || '#'}
                className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.href || '#'}
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
      {!isMobile && (
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      )}
      {!isMobile && isActive && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
      )}
    </Link>
  );
};

interface MobileMenuProps {
  isOpen: boolean;
  items: NavItem[];
  onRegisterClick: () => void;
  openDropdowns: string[];
  onDropdownToggle: (id: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, items, onRegisterClick, openDropdowns, onDropdownToggle }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden animate-fade-in bg-card/95 backdrop-blur-sm rounded-2xl mt-2 p-4 shadow-xl border border-border/50">
      <div className="space-y-1">
        {items.map((item) => (
          <div key={item.id}>
            <NavButton
              item={item}
              isMobile
              isScrolled={true}
              isActive={false}
              onDropdownToggle={onDropdownToggle}
              isDropdownOpen={openDropdowns.includes(item.id)}
            />
            {item.children && openDropdowns.includes(item.id) && (
              <div className="ml-6 mt-1 space-y-1">
                {item.children.map((child) => (
                  <Link
                    key={child.id}
                    to={child.href || '#'}
                    className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (id: string) => {
    setOpenDropdowns(prev =>
      prev.includes(id)
        ? prev.filter(dropdownId => dropdownId !== id)
        : [...prev, id]
    );
  };

  const { openModal } = useRegistration();

  const handleRegisterClick = () => {
    openModal("general");
  };

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href.startsWith('/#')) {
      return location.pathname === '/' && location.hash === href.substring(1);
    }
    return location.pathname === href;
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
          <Link
            to="/"
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className={`
              w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300
              ${isScrolled 
                ? "bg-primary shadow-lg" 
                : "bg-white/20 backdrop-blur-sm group-hover:bg-primary"
              }
            `}>
              <img 
                src="/logo.png" 
                alt="Make India Foundation Logo" 
                className="w-10 h-10 rounded-2xl object-cover"
              />
              {/* <Cpu className={`
                w-6 h-6 transition-colors duration-300
                ${isScrolled 
                  ? "text-white" 
                  : "text-white group-hover:text-white"
                }
              `} /> */}
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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.id} className="relative px-1">
                <NavButton
                  item={item}
                  isScrolled={isScrolled}
                  isActive={isActive(item.href)}
                  onDropdownToggle={handleDropdownToggle}
                  isDropdownOpen={openDropdowns.includes(item.id)}
                />
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <Link to="/competitions">
              <Button
                variant="outline"
                className={`
                  border-2 transition-all duration-300 bg-[#50146466] btn-hover-lift
                  ${isScrolled
                    ? "border-[#50146466] text-white hover:bg-primary hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-slate-900"
                  }
                `}
              >
                View Challenges
              </Button>
            </Link> */}
            <Button
              variant="default"
              className={`
                bg-[#F7941E] hover:bg-primary-dark btn-hover-lift shadow-lg hover:shadow-xl transition-all
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
          onRegisterClick={handleRegisterClick}
          openDropdowns={openDropdowns}
          onDropdownToggle={handleDropdownToggle}
        />
      </div>
    </nav>
  );
};

export default Navigation;