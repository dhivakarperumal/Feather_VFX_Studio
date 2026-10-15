import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import PageContainer from './PageContainer';

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/people/Feather-VFX-Studio/100065280768853/#', Icon: FaFacebookF },
  // { name: 'Instagram', href: 'https://www.instagram.com/', Icon: FaInstagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/feather-vfx-studio/', Icon: FaLinkedinIn },
  { name: 'Twitter', href: 'https://x.com/feathervfx', Icon: FaXTwitter },
];

const TopHeader = () => (
  <div className="hidden min-h-[42px] shrink-0 border-b border-[var(--border-color)] bg-[var(--bg-secondary)] py-2 text-[var(--text-primary)] md:block">
    <PageContainer className="grid min-h-[26px] grid-cols-[1fr_auto] items-center gap-4 sm:gap-6 lg:grid-cols-[1fr_auto_1fr]">
      <div className="flex min-w-0 items-center gap-4 text-[10px] sm:gap-7 sm:text-xs">
        <a
          href="tel:+447459467325"
          className="flex shrink-0 items-center gap-2 whitespace-nowrap transition-opacity hover:opacity-70"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--gold-primary)] text-[var(--bg-primary)]">
            <FaPhoneAlt aria-hidden="true" />
          </span>
          <span>+44 74 5946 7325</span>
        </a>
        <a
          href="mailto:info@feathervfx.com"
          className="flex min-w-0 items-center gap-2 whitespace-nowrap transition-opacity hover:opacity-70"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--gold-primary)] text-[var(--bg-primary)]">
            <FaEnvelope aria-hidden="true" />
          </span>
          <span>info@feathervfx.com</span>
        </a>
      </div>

      <p className="hidden whitespace-nowrap text-center text-xs font-medium tracking-[0.16em] text-[var(--text-secondary)] lg:block">
        FEATHER VFX STUDIO
      </p>

      <nav aria-label="Social media" className="flex shrink-0 items-center justify-self-end gap-3 sm:gap-4">
        {socialLinks.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold-primary)] text-[var(--bg-primary)] transition-colors hover:bg-[var(--gold-bright)]"
          >
            <Icon aria-hidden="true" className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>
        ))}
      </nav>
    </PageContainer>
  </div>
);

export default TopHeader;
