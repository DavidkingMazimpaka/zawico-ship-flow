// React Query and React Router setup
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// UI Components
import { Toaster } from "@/components/UI/toaster.tsx";
import { Toaster as Sonner } from "@/components/UI/sonner.tsx";
import { TooltipProvider } from "@/components/UI/tooltip.tsx";

// Pages
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
