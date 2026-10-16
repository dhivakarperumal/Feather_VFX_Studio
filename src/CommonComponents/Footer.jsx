import { FaFacebookF, FaTwitter, FaAngleRight, FaMapMarkerAlt, FaInstagram, FaEnvelope, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import PageContainer from "./PageContainer";
import { FaXTwitter } from "react-icons/fa6";
import { useStaggerReveal } from "../utils/useScrollReveal";

const Footer = () => {
  const columnsRef = useStaggerReveal(110);

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/reels" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
    { name: "Sitemap", path: "/sitemap" },
  ];

  const ourServices = [
    "Rotoscope",
    "Paint-Prep",
    "Cosmetic Fixes",
    "Matchmove",
    "Compositing",
  ];

  const studioAddress = "18/09, Valasaravakkam, Chennai - 600087, Tamil Nadu, India.";
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=18%2F09%2C%20Valasaravakkam%2C%20Chennai%20-%20600087%2C%20Tamil%20Nadu%2C%20India";

  return (
    <footer className="mt-auto border-t border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)]">
      <PageContainer className="py-16">
        {/* Stagger-revealed columns grid */}
        <div ref={columnsRef} className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-[1.15fr_0.65fr_0.8fr_1.1fr_1fr] lg:gap-10">
          
          {/* 1. Logo & Info */}
          <div className="stagger-child space-y-6">
            <div className="w-[220px] max-w-full">
              <img 
                src="/images/logo-b.png" 
                alt="Feather VFX Studio" 
                className="block h-auto w-full object-contain" 
              />
            </div>
            <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed text-justify">
              Creative visual effects and post-production services, crafted with care by Feather VFX Studio. Our team brings stories to life through meticulous artistry, technical expertise, and a passion for every frame.
            </p>
            <nav aria-label="Social media" className="flex items-center gap-3">
              <a href="https://www.facebook.com/people/Feather-VFX-Studio/100065280768853/#" target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--bg-primary)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)]">
                <FaFacebookF size={16} />
              </a>
              <a href="https://www.linkedin.com/company/feather-vfx-studio/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--bg-primary)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)]">
                <FaLinkedinIn size={16} />
              </a>
              <a href="https://x.com/feathervfx" target="_blank" rel="noreferrer" aria-label="X" className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--bg-primary)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)]">
                <FaXTwitter size={16} />
              </a>
            </nav>
          </div>

          {/* 2. Quick Links */}
          <div className="stagger-child">
            <h3 className="text-[17px] font-bold text-[var(--text-primary)] mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="flex items-center text-[var(--text-secondary)] text-[15px] hover:text-[var(--gold-bright)] transition-all group"
                  >
                    <FaAngleRight className="mr-2 text-[var(--gold-primary)] transition-transform group-hover:translate-x-1" size={14} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Our Services */}
          <div className="stagger-child">
            <h3 className="text-[17px] font-bold text-[var(--text-primary)] mb-6">Our Services</h3>
            <ul className="space-y-4">
              {ourServices.map((item, index) => (
                <li key={index}>
                  <span className="flex items-center text-[var(--text-secondary)] text-[15px]">
                    <FaAngleRight className="mr-2 text-[var(--gold-primary)]" size={14} />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Connect With Us */}
          <div className="stagger-child">
            <h3 className="text-[17px] font-bold text-[var(--text-primary)] mb-6">Connect With Us</h3>
            <div className="space-y-5">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[var(--bg-primary)] flex items-center justify-center mr-4 shrink-0">
                  <FaPhoneAlt className="text-[var(--gold-primary)] text-sm" />
                </div>
                <a href="tel:+447459467325" className="text-[var(--text-secondary)] text-[15px] hover:text-[var(--gold-bright)] transition-colors">
                  +44 74 5946 7325
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[var(--bg-primary)] flex items-center justify-center mr-4 shrink-0">
                  <FaEnvelope className="text-[var(--gold-primary)] text-sm" />
                </div>
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=info%40feathervfx.com&tf=cm" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] text-[15px] hover:text-[var(--gold-bright)] transition-colors">
                  info@feathervfx.com
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[var(--bg-primary)] flex items-center justify-center mr-4 shrink-0">
                  <FaEnvelope className="text-[var(--gold-primary)] text-sm" />
                </div>
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=enquiry%40feathervfx.com&tf=cm" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] text-[15px] hover:text-[var(--gold-bright)] transition-colors">
                  enquiry@feathervfx.com
                </a>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[var(--bg-primary)] flex items-center justify-center mr-4 shrink-0">
                  <FaMapMarkerAlt className="text-[var(--gold-primary)] text-sm" />
                </div>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">{studioAddress}</p>
              </div>
            </div>
          </div>

          {/* 5. Google Map */}
          <div className="stagger-child">
            <h3 className="text-[17px] font-bold text-[var(--text-primary)] mb-6">Google Map</h3>
            
            <div className="mb-8">
              <form
                action="mailto:enquiry@feathervfx.com"
                method="post"
                encType="text/plain"
                className="flex w-full"
              >
                <label className="sr-only" htmlFor="footer-newsletter-email">Your email address</label>
                <input
                  id="footer-newsletter-email"
                  name="Email"
                  type="email"
                  placeholder="Your email address"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-1 rounded-l-md border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--gold-primary)] focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn-shimmer shrink-0 rounded-r-md bg-[var(--gold-primary)] px-3 py-3 text-sm font-semibold text-[var(--bg-primary)] transition-colors hover:bg-[var(--gold-bright)]"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex flex-col items-start">
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-start gap-3 text-left text-[var(--text-secondary)] text-[15px] leading-relaxed transition-colors hover:text-[var(--gold-bright)]"
              >
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[var(--gold-primary)]" aria-hidden="true" />
                <span>{studioAddress}</span>
              </a>

              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-shimmer footer-map-button mt-3 inline-flex items-center gap-2 self-start rounded-md px-4 py-2 font-semibold transition-colors"
              >
                View on Google Maps <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

        </div>
      </PageContainer>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-[var(--border-color)] py-6 text-center text-[var(--text-secondary)] text-sm" data-aos="fade-up" data-aos-delay="100">
        <p>&copy; {new Date().getFullYear()} Feather VFX Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
