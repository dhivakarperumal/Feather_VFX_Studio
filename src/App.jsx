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

const siteUrl = "https://feathervfx.com";
const homeSeo = {
  title: "Feather VFX | Roto, Paint & Matchmove Outsourcing",
  description:
    "Feather VFX is a reliable VFX outsourcing partner for film and television, providing roto, paint and prep, matchmove, compositing, and cosmetic VFX.",
};

const pageSeo = {
  "/about": {
    title: "About Feather VFX | VFX Outsourcing Studio",
    description:
      "Learn about Feather VFX, our visual effects team, production approach, and commitment to reliable VFX outsourcing.",
  },
  "/services": {
    title: "VFX Services | Roto, Paint, Matchmove & Compositing",
    description:
      "Explore Feather VFX services for film and television: rotoscoping, paint and prep, cosmetic VFX, matchmove, and compositing.",
  },
  "/projects": {
    title: "VFX Projects & Case Studies | Feather VFX",
    description:
      "View selected visual effects projects and see how Feather VFX supports film, television, and commercial productions.",
  },
  "/contact": {
    title: "Contact Feather VFX | Discuss Your VFX Project",
    description:
      "Contact Feather VFX to discuss your roto, paint, matchmove, compositing, or other visual effects requirements.",
  },
  "/careers": {
    title: "VFX Careers | Join Feather VFX",
    description:
      "Explore career opportunities at Feather VFX and learn about working with our visual effects team.",
  },
  "/blog": {
    title: "VFX Insights & Articles | Feather VFX",
    description:
      "Read Feather VFX articles about visual effects, compositing, production workflows, and the film industry.",
  },
  "/sitemap": {
    title: "Sitemap | Feather VFX",
    description:
      "Browse Feather VFX pages, visual effects services, and the regions where we serve clients.",
  },
  "/showreel": {
    title: "VFX Showreel | Feather VFX",
    description:
      "Watch the Feather VFX showreel featuring visual effects work for film, television, and other productions.",
  },
  "/work": {
    title: "VFX Work & Reels | Feather VFX",
    description:
      "Explore visual effects reels and selected work from Feather VFX.",
  },
};

const serviceAreas = [
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Netherlands",
  "Poland",
  "Czech Republic",
  "Ireland",
  "Belgium",
  "Sweden",
  "Hungary",
  "Portugal",
  "Austria",
  "Switzerland",
  "Slovakia",
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Feather VFX",
  url: siteUrl,
  logo: `${siteUrl}/images/logo-b.png`,
  email: "info@feathervfx.com",
  telephone: "+44 74 5946 7325",
  sameAs: [
    "https://www.facebook.com/people/Feather-VFX-Studio/100065280768853/",
    "https://www.linkedin.com/company/feather-vfx-studio/",
    "https://x.com/feathervfx",
  ],
  areaServed: serviceAreas.map((name) => ({ "@type": "Country", name })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Visual effects services",
    itemListElement: [
      "Rotoscoping",
      "Paint and prep",
      "Cosmetic VFX",
      "Matchmove",
      "Compositing",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};


function App() {
  const [loading] = useState(false);
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);
  const previousPathname = useRef(location.pathname);
  const currentSeo = pageSeo[location.pathname] || homeSeo;
  const canonicalUrl = `${siteUrl}${location.pathname === "/" ? "/" : location.pathname.replace(/\/+$/, "")}`;

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
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Feather VFX" />
        <meta property="og:title" content={currentSeo.title} />
        <meta property="og:description" content={currentSeo.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${siteUrl}/images/logo-b.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentSeo.title} />
        <meta name="twitter:description" content={currentSeo.description} />
        <meta name="twitter:image" content={`${siteUrl}/images/logo-b.png`} />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
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
