import { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import TopHeader from "./CommonComponents/TopHeader";
import Navbar from "./CommonComponents/Navbar";
import Footer from "./CommonComponents/Footer";


import ScrollToTop from "./CommonComponents/ScrollToTop";
import FloatingSupport from "./CommonComponents/FloatingSupport";
import Loader from "./CommonComponents/Loader";



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
    <section className="relative min-h-screen flex flex-col">
      {isNavigating && <div className="route-progress-bar" aria-hidden="true" />}
      <TopHeader />
      <Navbar />
      <div className="print:hidden">
        <ScrollToTop />
      </div>
   
      <main key={`page-${location.pathname}`} className="page-transition flex-1">
        <Outlet />
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
  );
}

export default App;
