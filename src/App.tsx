
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookRoom from "./pages/BookRoom";
import ActiveRooms from "./pages/ActiveRooms";
import HowItWorks from "./pages/HowItWorks";
import Conference from "./pages/Conference";
import VideoQuality from "./pages/VideoQuality";
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
          <Route path="/book" element={<BookRoom />} />
          <Route path="/active" element={<ActiveRooms />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/video-quality" element={<VideoQuality />} />
          <Route path="/conference/:roomId" element={<Conference />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;