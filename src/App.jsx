import { Suspense, useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import TopHeader from "./CommonComponents/TopHeader";
import Navbar from "./CommonComponents/Navbar";
import Footer from "./CommonComponents/Footer";


import ScrollToTop from "./CommonComponents/ScrollToTop";
import FloatingSupport from "./CommonComponents/FloatingSupport";
import Loader from "./CommonComponents/Loader";

const homeTitle = "Feather VFX Studio - Best VFX Outsourcing Company in India USA UK - VFX ...";
const pageTitles = {
  "/about": "About Us - Feather VFX",
  "/services": "Services - Feather VFX",
  "/projects": "Projects - Feather VFX",
  "/contact": "Contact Us - Feather VFX",
  "/careers": "Careers - Feather VFX",
  "/blog": "Blog - Feather VFX",
  "/sitemap": "Sitemap - Feather VFX",
  "/showreel": "Showreel - Feather VFX",
  "/work": "Our Work - Feather VFX",
};



function App() {
  const [loading] = useState(false);
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);
  const previousPathname = useRef(location.pathname);

  useEffect(() => {
    if (previousPathname.current === location.pathname) {
      return undefined;
    }

    previousPathname.current = location.pathname;
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>{pageTitles[location.pathname] || homeTitle}</title>
      </Helmet>
      <section className="relative min-h-screen flex flex-col">
        {isNavigating && <div className="route-progress-bar" aria-hidden="true" />}
        <TopHeader />
        <Navbar />
        <div className="print:hidden">
          <ScrollToTop />
        </div>

        <main key={`page-${location.pathname}`} className="page-transition flex-1">
          <Suspense
            fallback={
              <div
                className="flex min-h-[45vh] items-center justify-center text-sm text-[var(--text-secondary)]"
                role="status"
              >
                Loading page…
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
        <FloatingSupport />
        <Toaster
          position="top-right"
          reverseOrder={false}
          containerStyle={{ zIndex: 999999 }}
          toastOptions={{
            style: {
              zIndex: 999999,
            },
          }}
        />
        <Footer key={`footer-${location.pathname}`} />
      </section>
    </>
  );
}

export default App;
