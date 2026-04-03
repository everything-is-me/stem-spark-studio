import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Clock, MessageSquare, User, BookOpen, Users } from "lucide-react";

// ========== TYPES ==========
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  school: string;
  grade: string;
  category: string;
  message: string;
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
  title: string;
  details: string[];
  color: string;
  action?: {
    text: string;
    href: string;
  };
}

// ========== DATA ==========
const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    title: "Email",
    details: [
      "students@makeindiafoundation.org",
      "schools@makeindiafoundation.org",
      "mentors@makeindiafoundation.org"
    ],
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Phone,
    title: "Phone & WhatsApp",
    details: [
      "1800-MAKE-INDIA (Toll Free)",
      "+91-9876543210 (WhatsApp for Students)",
      "+91-9876543211 (Schools Helpline)"
    ],
    color: "bg-secondary/10 text-secondary",
    action: {
      text: "Chat with us on WhatsApp",
      href: "https://wa.me/919876543210"
    }
  },
  {
    icon: MapPin,
    title: "Regional Centers",
    details: [
      "Delhi (Headquarters)",
      "Bengaluru (Tech Hub)",
      "Mumbai | Hyderabad",
      "Pune | Chennai | Kolkata"
    ],
    color: "bg-accent/20 text-accent-dark"
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: [
      "Monday - Saturday: 9:00 AM - 6:00 PM IST",
      "Sunday: 10:00 AM - 2:00 PM IST",
      "24/7 WhatsApp Support for Students"
    ],
    color: "bg-primary/10 text-primary"
  }
];

const INTEREST_CATEGORIES = [
  "Middle School Competition",
  "High School Competition",
  "Start a School Club",
  "Teacher/Coordinator Training",
  "Become a Mentor",
  "Corporate Partnership",
  "Hardware Donations",
  "Other"
];

// ========== VALIDATION ==========
const validateForm = (formData: ContactFormData): string[] => {
  const errors: string[] = [];

  if (!formData.name.trim()) errors.push("Name is required");

  if (!formData.email.trim()) {
    errors.push("Email is required");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push("Invalid email format");
  }

  if (formData.phone && !/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
    errors.push("Invalid phone number");
  }

  if (!formData.category) errors.push("Please select an interest category");

  if (!formData.message.trim()) errors.push("Message is required");

  return errors;
};

// ========== COMPONENTS ==========
interface ContactInfoCardProps {
  info: ContactInfo;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ info }) => {
  const Icon = info.icon;
  return (
    <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start space-x-4">
        <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
            {info.title}
          </h4>
          <div className="space-y-1">
            {info.details.map((detail, index) => (
              <p key={index} className="text-muted-foreground text-justify">
                {detail}
              </p>
            ))}
          </div>
          {info.action && (
            <Button
              variant="ghost"
              className="mt-4 text-primary hover:text-primary-dark hover:bg-primary/10 p-0 h-auto"
              asChild
            >
              <a href={info.action.href} target="_blank" rel="noopener noreferrer">
                {info.action.text} →
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

// ========== MAIN COMPONENT ==========
const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    school: "",
    grade: "",
    category: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm(formData);
    if (errors.length > 0) {
      toast({
        title: "Please fix the following errors:",
        description: errors.join(", "),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "🎉 Message Sent Successfully!",
      description: "Our student coordinator will contact you within 24 hours. Check your email for competition guidelines.",
      duration: 5000,
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      school: "",
      grade: "",
      category: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-64 -translate-x-64"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4" style={{ textShadow: '2px 2px 0px rgba(80, 20, 100, 0.4)' }}>
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to innovate for India? Questions about the competition? We're here to help!
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <Users className="w-4 h-4" /> For Students
            </div>
            <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> For Schools
            </div>
            <div className="bg-accent/20 text-accent-dark px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> For Mentors
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-xl border-border bg-card"
                    placeholder="Aarav Sharma"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    <Mail className="inline w-4 h-4 mr-2" />
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-xl border-border bg-card"
                    placeholder="aarav@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    <Phone className="inline w-4 h-4 mr-2" />
                    WhatsApp Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-xl border-border bg-card"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="grade" className="block text-sm font-medium text-foreground mb-2">
                    School Grade
                  </label>
                  <Input
                    id="grade"
                    name="grade"
                    type="text"
                    value={formData.grade}
                    onChange={handleChange}
                    className="rounded-xl border-border bg-card"
                    placeholder="Grade 9 / Class XI"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="school" className="block text-sm font-medium text-foreground mb-2">
                  School Name
                </label>
                <Input
                  id="school"
                  name="school"
                  type="text"
                  value={formData.school}
                  onChange={handleChange}
                  className="rounded-xl border-border bg-card"
                  placeholder="Delhi Public School"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
                  What are you interested in?
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select an option</option>
                  {INTEREST_CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="rounded-xl border-border bg-card min-h-[120px]"
                  placeholder="Tell us about your project idea, questions about the competition, or how we can help you innovate for India..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark btn-hover-lift text-lg py-6 rounded-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending...
                  </>
                ) : (
                  "Send Message & Get Competition Guide"
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to receive competition updates and resources.
                We respect your privacy.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Quick Connect
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {CONTACT_INFO.map((info, index) => (
                  <ContactInfoCard key={index} info={info} />
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <h4 className="font-heading font-semibold text-lg text-foreground mb-4">
                Student Support
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Get free project ideas and technical guidance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Access to online workshops and maker resources
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Connect with mentors from Indian tech companies
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Hardware kits available for underprivileged students
                </li>
              </ul>
            </div>

            <div className="text-center p-6 bg-primary/5 rounded-2xl border border-primary/20">
              <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                Join Our Student Community
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with 5000+ young innovators across India
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" size="sm" className="border-primary text-primary">
                  WhatsApp Group
                </Button>
                <Button variant="outline" size="sm" className="border-secondary text-secondary">
                  Discord Server
                </Button>
                <Button variant="outline" size="sm" className="border-accent text-accent-dark">
                  Telegram Channel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;