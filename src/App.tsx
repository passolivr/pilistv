import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Index from "./pages/Index";
import Shows from "./pages/Shows";
import LiveStream from "./pages/LiveStream";
import NotFound from "./pages/NotFound";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { Layout } from "@/components/layout/Layout";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Teaser from "./pages/Teaser";
import FontTest from "./pages/FontTest";
import FontPreloader from "@/components/FontPreloader";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const hasAccess = Cookies.get("pilistv_access") === "granted";

  if (!hasAccess) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      <ScrollToTop />
      {children}
      <CookieConsent />
    </Layout>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router>
          <FontPreloader />
          <TooltipProvider>
            <Routes>
              <Route path="/" element={<Teaser />} />
              <Route path="/font-test" element={<FontTest />} />
              <Route path="/fooldal" element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              } />
              <Route path="/musoraink" element={
                <ProtectedRoute>
                  <Shows />
                </ProtectedRoute>
              } />
              <Route path="/eloadas" element={
                <ProtectedRoute>
                  <LiveStream />
                </ProtectedRoute>
              } />
              <Route path="/adatvedelem" element={
                <ProtectedRoute>
                  <PrivacyPolicy />
                </ProtectedRoute>
              } />
              <Route path="/felhasznalasi-feltetelek" element={
                <ProtectedRoute>
                  <TermsOfService />
                </ProtectedRoute>
              } />
              <Route path="/cookie-szabalyzat" element={
                <ProtectedRoute>
                  <CookiePolicy />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
            <Sonner position="top-right" />
          </TooltipProvider>
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
