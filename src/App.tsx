import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import IndustryPage from "./components/IndustryPage";
import { Privacy, Imprint } from "./components/Legal";
import ErrorBoundary from "./components/ErrorBoundary";
import { LocaleProvider } from "./i18n/LocaleContext";
import "./App.css";

// Scroll to top on route change; honour in-page hash anchors.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

function Shell() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />
      <ErrorBoundary>
        <Routes>
          {/* English (no prefix) */}
          <Route path="/" element={<HomePage />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/imprint" element={<Imprint />} />
          {/* Locale-prefixed (de, es) */}
          <Route path="/:locale" element={<HomePage />} />
          <Route path="/:locale/industries/:slug" element={<IndustryPage />} />
          <Route path="/:locale/privacy" element={<Privacy />} />
          <Route path="/:locale/imprint" element={<Imprint />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename={basename}>
      <LocaleProvider>
        <Shell />
      </LocaleProvider>
    </BrowserRouter>
  );
}

export default App;
