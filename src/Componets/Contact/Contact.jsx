import { useState } from 'react';
import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaGlobe,
  FaHeadphones,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaQuestionCircle,
  FaShieldAlt,
  FaUpload,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { FaClapperboard, FaFilm, FaHandshake, FaXTwitter } from 'react-icons/fa6';
import { sendEmailJsForm } from '../../utils/emailJs';
import PageHeader from '../../CommonComponents/PageHeader';

const indiaAddress =
  '18/09, Valasaravakkam, Chennai - 600087, Tamil Nadu, India.';
const ukAddress = '35, Balfour Road, Ilford, Essex IG1 4HP, GB.';
const ukPhoneNumber = '+44 74 5946 7325';
const phoneNumber = '+91 86746 85645';
const infoEmail = 'info@feathervfx.com';
const enquiryEmail = 'enquiry@feathervfx.com';
const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(indiaAddress)}&output=embed`;

const enquiryTypes = [
  { title: 'Film & Series', description: 'VFX and post-production support', value: 'Film & Series', Icon: FaClapperboard },
  { title: 'Commercial Projects', description: 'Brand content and advertising visuals', value: 'Commercial', Icon: FaFilm },
  { title: 'Partnerships', description: 'Collaboration and business opportunities', value: 'Partnership', Icon: FaHandshake },
  { title: 'General Enquiries', description: "Have a question? We're here to help", value: 'General enquiry', Icon: FaQuestionCircle },
];

const faqs = [
  {
    question: 'What types of projects do you work on?',
    answer:
      'We support film and series, commercials, branded content, and creative productions with visual effects and post-production.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. We collaborate with teams in India and around the world, working remotely to fit your production pipeline.',
  },
  {
    question: 'What information do you need to provide a quote?',
    answer:
      'A short brief, shot count or duration, delivery format, schedule, and any reference material help us prepare an accurate estimate.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timing depends on the scope and complexity of the work. Share your deadline and requirements and we can discuss a realistic schedule.',
  },
  {
    question: 'Is my project information confidential?',
    answer:
      'We treat project details and materials with care. Let us know if your production requires a confidentiality agreement before sharing files.',
  },
  {
    question: 'Do you offer end-to-end production services?',
    answer:
      'We provide visual effects and post-production services, and can collaborate with your team throughout the project pipeline.',
  },
];

const Contact = () => {
  const [projectType, setProjectType] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileError, setFileError] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleFilesChange = (event) => {
    const files = Array.from(event.target.files || []);
    const totalSize = files.reduce((size, file) => size + file.size, 0);

    if (totalSize > 20 * 1024 * 1024) {
      setSelectedFiles([]);
      setFileError('Please choose reference files with a combined size under 20 MB.');
      event.target.value = '';
      return;
    }

    setSelectedFiles(files);
    setFileError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (fileError || isSending) return;

    const form = event.currentTarget;
    setIsSending(true);
    setFormStatus(null);

    try {
      await sendEmailJsForm(form, 'contact');
      form.reset();
      setProjectType('');
      setSelectedFiles([]);
      setFormStatus({ type: 'success', message: 'Thanks for reaching out. Your enquiry was sent successfully.' });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'We could not send your enquiry. Please try again.',
      });
    } finally {
      setIsSending(false);
    }
  };

  const selectEnquiryType = (value) => {
    setProjectType(value);
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <PageHeader
        eyebrow="Contact us"
        title={
          <>
            Let&apos;s create
            <br />
            something
            <br />
            <span className="text-[var(--gold-primary)]">extraordinary</span>
          </>
        }
        description="Have a project in mind? We'd love to hear from you. Get in touch and let's bring your vision to life."
        background="/images/heroimages/Dragon%20Over%20the%20Sunset%20Kingdom.png"
        align="left"
        showBreadcrumb={false}
      >
        <div className="mt-6 flex flex-wrap gap-x-7 gap-y-4 text-xs">
          <div className="flex items-center gap-2.5">
            <FaHeadphones className="text-lg text-[var(--gold-primary)]" aria-hidden="true" />
            <span><strong className="block font-semibold">Quick response</strong><span className="text-white/65">Within 24 hours</span></span>
          </div>
          <div className="flex items-center gap-2.5">
            <FaShieldAlt className="text-lg text-[var(--gold-primary)]" aria-hidden="true" />
            <span><strong className="block font-semibold">Confidential</strong><span className="text-white/65">Project details stay safe</span></span>
          </div>
          <div className="flex items-center gap-2.5">
            <FaGlobe className="text-lg text-[var(--gold-primary)]" aria-hidden="true" />
            <span><strong className="block font-semibold">Global collaboration</strong><span className="text-white/65">Work from anywhere</span></span>
          </div>
        </div>
      </PageHeader>

      <section className="border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
        <div className="mx-auto grid max-w-[1700px] gap-8 px-[5%] py-8 sm:px-[5%] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-[4%] xl:px-[3%]">
          <div id="contact-form" className="border border-[var(--border-color)] bg-[var(--bg-primary)] p-5 sm:p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-primary)]">Send us a message</p>
            <h2 className="mt-1 font-serif text-2xl font-bold uppercase leading-tight sm:text-3xl">
              Start your <span className="text-[var(--gold-primary)]">project today</span>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              Tell us about your project, and our team will get back to you shortly with the best solutions for your needs.
            </p>

            <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="sr-only" htmlFor="contact-name">Your name</label>
                <input id="contact-name" name="name" autoComplete="name" required placeholder="Your Name *" className="contact-field" />
                <label className="sr-only" htmlFor="contact-email">Your email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="Your Email *" className="contact-field" />
                <label className="sr-only" htmlFor="contact-phone">Phone number</label>
                <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Phone Number" className="contact-field" />
                <label className="sr-only" htmlFor="contact-company">Company or studio</label>
                <input id="contact-company" name="company" autoComplete="organization" placeholder="Company / Studio" className="contact-field" />
              </div>
              <label className="sr-only" htmlFor="contact-project-type">Project type</label>
              <select
                id="contact-project-type"
                name="project_type"
                value={projectType}
                onChange={(event) => setProjectType(event.target.value)}
                className="contact-field"
              >
                <option value="">Project Type</option>
                <option>Film &amp; Series</option>
                <option>Commercial</option>
                <option>Partnership</option>
                <option>General enquiry</option>
                <option>VFX &amp; CGI</option>
                <option>Compositing</option>
                <option>Rotoscope / Paint-Prep</option>
              </select>
              <label className="sr-only" htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                required
                maxLength={150}
                placeholder="Subject *"
                className="contact-field"
              />
              <label className="sr-only" htmlFor="contact-message">Tell us about your project</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows="4"
                placeholder="Tell us about your project *"
                className="contact-field resize-y"
              />

              <label className="flex min-h-[66px] cursor-pointer items-center justify-center gap-3 border border-dashed border-[var(--border-color)] px-4 py-3 text-center transition-colors hover:border-[var(--gold-primary)]">
                <FaUpload className="shrink-0 text-lg text-[var(--gold-primary)]" aria-hidden="true" />
                <span className="text-xs">
                  <span className="block font-semibold">Upload reference files (optional)</span>
                  <span className="mt-1 block text-[10px] text-[var(--text-secondary)]">Images, videos, scripts, or concept art (max 20 MB total)</span>
                  {selectedFiles.length > 0 && (
                    <span className="mt-1 block text-[var(--gold-primary)]">{selectedFiles.length} file(s) selected</span>
                  )}
                </span>
                <input
                  type="file"
                  name="reference_files"
                  multiple
                  accept="image/*,video/*,.pdf,.txt,.doc,.docx"
                  onChange={handleFilesChange}
                  className="sr-only"
                />
              </label>
              {fileError && <p role="alert" className="text-xs text-red-400">{fileError}</p>}
              <p className="text-[10px] leading-relaxed text-[var(--text-secondary)]">
                Your message and selected reference files will be sent through EmailJS.
              </p>
              {formStatus && (
                <p role={formStatus.type === 'error' ? 'alert' : 'status'} className={`text-xs ${formStatus.type === 'error' ? 'text-red-400' : 'text-[var(--gold-primary)]'}`}>
                  {formStatus.message}
                </p>
              )}
              <button
                type="submit"
                disabled={isSending || Boolean(fileError)}
                className="inline-flex items-center gap-3 bg-[var(--gold-primary)] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--bg-primary)] transition-colors hover:bg-[var(--gold-bright)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? 'Sending...' : 'Send message'} {!isSending && <FaArrowRight aria-hidden="true" />}
              </button>
            </form>
          </div>

          <div className="py-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-primary)]">Our studio</p>
            <h2 className="mt-1 font-serif text-2xl font-bold uppercase sm:text-3xl">Get in touch</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
              Visit our studio, call us or drop us an email. We&apos;re always open to new ideas, collaborations and exciting projects.
            </p>

            <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_0.95fr]">
              <div className="space-y-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(indiaAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-3 text-sm transition-colors hover:text-[var(--gold-bright)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)]/50 text-[var(--gold-primary)]"><FaMapMarkerAlt aria-hidden="true" /></span>
                  <span>
                    <strong className="block font-semibold text-[var(--gold-primary)]">India · Production Facility</strong>
                    <span className="mt-1 block leading-relaxed text-[var(--text-secondary)]">{indiaAddress}</span>
                  </span>
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ukAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-3 text-sm transition-colors hover:text-[var(--gold-bright)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)]/50 text-[var(--gold-primary)]"><FaMapMarkerAlt aria-hidden="true" /></span>
                  <span>
                    <strong className="block font-semibold text-[var(--gold-primary)]">UK · Representation</strong>
                    <span className="mt-1 block leading-relaxed text-[var(--text-secondary)]">{ukAddress}</span>
                    <span className="mt-1 block text-[var(--text-secondary)]">{ukPhoneNumber}</span>
                  </span>
                </a>
                <a href="tel:+918674685645" className="flex gap-3 text-sm transition-colors hover:text-[var(--gold-bright)]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)]/50 text-[var(--gold-primary)]"><FaPhoneAlt aria-hidden="true" /></span>
                  <span><strong className="block font-semibold text-[var(--gold-primary)]">Call us</strong><span className="mt-1 block text-[var(--text-secondary)]">{phoneNumber}</span><span className="mt-1 block text-xs text-[var(--text-secondary)]">Mon - Sat · 10:00 AM - 7:00 PM</span></span>
                </a>
                <div className="flex gap-3 text-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)]/50 text-[var(--gold-primary)]"><FaEnvelope aria-hidden="true" /></span>
                  <span>
                    <strong className="block font-semibold text-[var(--gold-primary)]">Email us</strong>
                    <a href={`mailto:${infoEmail}`} className="mt-1 block text-[var(--text-secondary)] transition-colors hover:text-[var(--gold-bright)]">{infoEmail}</a>
                    <a href={`mailto:${enquiryEmail}`} className="mt-1 block text-[var(--text-secondary)] transition-colors hover:text-[var(--gold-bright)]">{enquiryEmail}</a>
                    <span className="mt-1 block text-xs text-[var(--text-secondary)]">We usually respond within 24 hours</span>
                  </span>
                </div>
                <div className="flex gap-3 text-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)]/50 text-[var(--gold-primary)]"><FaGlobe aria-hidden="true" /></span>
                  <span><strong className="block font-semibold text-[var(--gold-primary)]">Work with us</strong><span className="mt-1 block text-[var(--text-secondary)]">India | Remote | Worldwide</span></span>
                </div>
                <div className="mt-6 flex flex-col px-1.5 items-start gap-3">
                  <h2 className="whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.2em]">Follow us</h2>
                  <div className="flex flex-nowrap items-center gap-2 sm:gap-3">
                    {[
                      ['Instagram', 'https://www.instagram.com/', FaInstagram],
                      ['YouTube', 'https://www.youtube.com/', FaYoutube],
                      ['LinkedIn', 'https://www.linkedin.com/', FaLinkedinIn],
                      ['X', 'https://x.com/', FaXTwitter],
                      ['Facebook', 'https://www.facebook.com/', FaFacebookF],
                    ].map(([name, href, Icon]) => (
                      <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-primary)] transition-colors hover:border-[var(--gold-primary)] hover:text-[var(--gold-primary)]">
                        <Icon aria-hidden="true" className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-[320px] overflow-hidden border border-[var(--border-color)] sm:h-[400px] lg:h-[460px]">
                <iframe
                  title={`Map showing Feather VFX Studio at ${indiaAddress}`}
                  src={mapUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>


          </div>
        </div>
      </section>

      <section className="grid border-b border-[var(--border-color)] lg:min-h-[190px] lg:grid-cols-2">
        <div className="relative min-h-[190px] overflow-hidden">
          <img src="/images/heroimages/2.png" alt="Film production scene at sunset" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/25 to-[var(--bg-primary)]/70" />
        </div>
        <div className="flex items-center bg-[var(--bg-secondary)] px-[7%] py-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-primary)]">Collaborate with us</p>
            <h2 className="mt-1 font-serif text-3xl font-bold uppercase leading-[1.05] sm:text-4xl">
              Turning ideas
              <br />
              into <span className="text-[var(--gold-primary)]">visual reality</span>
            </h2>
            <p className="mt-2 max-w-lg text-sm text-[var(--text-secondary)]">
              Whether it&apos;s a film, series, commercial or an immersive experience, we&apos;re here to create impactful visuals together.
            </p>
            <a href="#contact-form" className="mt-4 inline-flex items-center gap-3 border border-[var(--gold-primary)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--gold-primary)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)]">
              Let&apos;s talk <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
        <div className="mx-auto grid max-w-[1700px] gap-8 px-[6%] py-10 sm:px-[5%] lg:grid-cols-[1.2fr_0.9fr] lg:gap-12 lg:px-[4%] xl:px-[3%]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-primary)]">Quick enquiry</p>
            <h2 className="mt-1 font-serif text-2xl font-bold uppercase sm:text-3xl">How can we help?</h2>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">Choose a category to get in touch with the right team.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {enquiryTypes.map(({ title, description, value, Icon }) => (
                <button
                  key={title}
                  type="button"
                  onClick={() => selectEnquiryType(value)}
                  className="group flex min-h-[76px] items-center gap-3 border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3 text-left transition-colors hover:border-[var(--gold-primary)]"
                >
                  <Icon className="shrink-0 text-2xl text-[var(--gold-primary)]" aria-hidden="true" />
                  <span className="min-w-0 flex-1"><strong className="block text-xs">{title}</strong><span className="mt-1 block text-[10px] text-[var(--text-secondary)]">{description}</span></span>
                  <FaArrowRight className="shrink-0 text-xs text-[var(--gold-primary)] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-primary)]">Frequently asked questions</p>
            <h2 className="mt-1 font-serif text-2xl font-bold uppercase sm:text-3xl">Quick <span className="text-[var(--gold-primary)]">answers</span></h2>
            <div className="mt-4 divide-y divide-[var(--border-color)] border-y border-[var(--border-color)]">
              {faqs.map(({ question, answer }) => (
                <details key={question} className="group py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xs font-medium marker:hidden">
                    {question}
                    <span className="text-lg leading-none text-[var(--gold-primary)] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-2xl pt-2 text-xs leading-relaxed text-[var(--text-secondary)]">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-b border-[var(--border-color)]">
        <img src="/images/heroimages/Dragon%20Over%20the%20Sunset%20Kingdom.png" alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_56%]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--bg-primary)]/95 via-[var(--bg-primary)]/75 to-[var(--bg-primary)]/25" />
        <div className="mx-auto flex max-w-[1700px] flex-col justify-between gap-6 px-[6%] py-8 sm:px-[5%] md:flex-row md:items-center lg:px-[3%]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Ready to create something extraordinary?</p>
            <h2 className="mt-1 font-serif text-2xl font-bold uppercase sm:text-3xl">Let&apos;s bring your vision to life.</h2>
            <a href="#contact-form" className="mt-4 inline-flex items-center gap-3 bg-[var(--gold-primary)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--bg-primary)] transition-colors hover:bg-[var(--gold-bright)]">
              Start a conversation <FaArrowRight aria-hidden="true" />
            </a>
          </div>
          <ul className="grid gap-2 text-xs sm:grid-cols-2 md:grid-cols-1">
            {['Creative expertise', 'Global collaboration', 'Reliable delivery', 'Long-term partnership'].map((benefit) => (
              <li key={benefit} className="flex items-center gap-2"><FaCheckCircle className="text-[var(--gold-primary)]" aria-hidden="true" />{benefit}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
