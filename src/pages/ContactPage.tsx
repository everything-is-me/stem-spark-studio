import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 pt-[72px] md:pt-[88px]">
        {/* Contact section will take up the main content area */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
