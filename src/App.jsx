import { useState, useEffect, useLayoutEffect, useRef } from "react";
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
  const pageRef = useRef(null);

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;

    let isCancelled = false;
    let revertAnimations = () => {};

    const initializeAnimations = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (isCancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      const motionQuery = gsap.matchMedia(page);
      motionQuery.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray("[data-scroll-reveal]", page).forEach((element) => {
          gsap.fromTo(element, { autoAlpha: 0, y: 24 }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              once: true,
            },
          });
        });

        gsap.utils.toArray("[data-parallax]", page).forEach((element) => {
          gsap.to(element, {
            yPercent: -5,
            ease: "none",
            scrollTrigger: {
              trigger: element.closest("section") || element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

        const heroCopy = page.querySelector("[data-hero-copy]");
        if (heroCopy) {
          gsap.fromTo(
            heroCopy,
            { autoAlpha: 0, y: 22, rotateX: -6, transformPerspective: 900 },
            { autoAlpha: 1, y: 0, rotateX: 0, duration: 1, ease: "power3.out", delay: 0.15 },
          );
        }
      });
      revertAnimations = () => motionQuery.revert();
    };

    initializeAnimations();
    return () => {
      isCancelled = true;
      revertAnimations();
    };
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
   
      <main ref={pageRef} key={`page-${location.pathname}`} className="page-transition flex-1">
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
