import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import "./FloatingSupport.css";

const FloatingSupport = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { pathname, hash } = useLocation();
  const currentRoute = hash?.startsWith("#") ? hash.slice(1) : pathname;

  const isAdmin = currentRoute === "/admin" || currentRoute.startsWith("/admin/");
  const isEmployee =
    currentRoute === "/employee" ||
    currentRoute.startsWith("/employee/") ||
    currentRoute === "/trainee" ||
    currentRoute.startsWith("/trainee/");

  // User UI pages: any page outside /admin and /employee panels (even if an admin/employee is logged in browsing the site)
  const isUserUIPage = !isAdmin && !isEmployee;

  // WhatsApp, email, and scroll-to-top are shown on public pages.
  const showUserUIWidgets = isUserUIPage;

  // Scroll detection for Scroll-to-Top button
  const checkScroll = useCallback(() => {
    const windowScroll =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    setShowScrollTop(windowScroll > 80);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkScroll, { capture: true, passive: true });
    document.addEventListener("scroll", checkScroll, { capture: true, passive: true });
    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll, { capture: true });
      document.removeEventListener("scroll", checkScroll, { capture: true });
    };
  }, [checkScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showUserUIWidgets) {
    return null;
  }

  const whatsappNumber = "+91 84380 18090"; // Company WhatsApp number (+91 95972 93504)

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Q-Techx Solutions, I need some help!")}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Floating button container – fixed to bottom right */}
      <div className="floating-support-container">
        {/* WhatsApp button - visible on all user UI pages */}
        {showUserUIWidgets && (
          <div
            className="support-item whatsapp"
            onClick={handleWhatsApp}
            title="WhatsApp (+91 84380 18090)"
          >
            <FaWhatsapp size={26} />
            <span className="tooltip">🟢 WhatsApp (+91 84380 18090)</span>
          </div>
        )}

        {/* Email button - visible on all user UI pages */}
        {showUserUIWidgets && (
          <a
            className="support-item email"
            href="/contact#contact-form"
            title="Contact us: info@feathervfx.com"
            aria-label="Contact us by email at info@feathervfx.com"
          >
            <Mail size={22} />
            <span className="tooltip">Contact us · info@feathervfx.com</span>
          </a>
        )}

        {/* ScrollNavigator (Scroll-To-Top) button - placed below the Call button */}
        {showUserUIWidgets && showScrollTop && (
          <div
            className="support-item scroll-top"
            onClick={scrollToTop}
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={24} strokeWidth={3} />
            <span className="tooltip">⬆ Scroll to Top</span>
          </div>
        )}

      </div>
    </>
  );
};

export default FloatingSupport;
