import { Link } from "react-router-dom";

const PageHeader = ({
  title,
  background = "/images/heroimages/3.png",
  eyebrow = "Feather VFX Studio",
  description,
  align = "center",
  showBreadcrumb = true,
  className = "",
  children,
}) => {
  const isLeftAligned = align === "left";

  return (
    <div
      className={`relative isolate flex min-h-[380px] w-full items-center overflow-hidden border-b border-[var(--border-color)] text-[var(--text-primary)] ${className}`}
    >
      <img
        src={background}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div
        className={`absolute inset-0 -z-10 ${
          isLeftAligned
            ? "bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/75 to-[var(--bg-primary)]/10"
            : "bg-black/50"
        }`}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--bg-primary)]/65 via-transparent to-[var(--bg-primary)]/20"
        aria-hidden="true"
      />
      <div
        className={`mx-auto w-full max-w-[1700px] px-[6%] py-12 sm:px-[5%] lg:px-[3%] ${
          isLeftAligned ? "text-left" : "text-center"
        }`}
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <div className={isLeftAligned ? "max-w-2xl" : "mx-auto max-w-4xl"}>
          {eyebrow && (
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--gold-primary)] sm:text-xs">
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-3xl font-bold uppercase leading-[1.02] sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              {description}
            </p>
          )}
          {showBreadcrumb && (
            <nav aria-label="Breadcrumb" className={`mt-4 flex items-center gap-2 text-xs text-white/75 sm:text-sm ${isLeftAligned ? "justify-start" : "justify-center"}`}>
              <Link to="/" className="transition-colors hover:text-[var(--gold-primary)]">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-white">
                {typeof title === "string" ? title : eyebrow}
              </span>
            </nav>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;