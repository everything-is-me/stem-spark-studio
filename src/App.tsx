import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Competitions from "./pages/Competitions";
import CompetitionCategories from "./pages/CompetitionCategories";
import CompetitionRules from "./pages/CompetitionRules";
import CompetitionFAQ from "./pages/CompetitionFAQ";
import FindFair from "./pages/FindFair";
import Guidelines from "./pages/Guidelines";
import ARISE from "./pages/ARISE";
import IGNITE from "./pages/IGNITE";
import Awards from "./pages/Awards";
import ProjectDatabase from "./pages/ProjectDatabase";
import Ample from "./pages/ample";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { Smartphone } from "lucide-react";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/competitions/categories" element={<CompetitionCategories />} />
          <Route path="/competitions/rules" element={<CompetitionRules />} />
          <Route path="/competitions/faq" element={<CompetitionFAQ />} />
          <Route path="/competitions/find-fair" element={<FindFair />} />
          <Route path="/competitions/guidelines" element={<Guidelines />} />
          <Route path="/competitions/arise" element={<ARISE />} />
          <Route path="/competitions/ignite" element={<IGNITE />} />
          <Route path="/competitions/awards" element={<Awards />} />
          <Route path="/competitions/projects" element={<ProjectDatabase />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

