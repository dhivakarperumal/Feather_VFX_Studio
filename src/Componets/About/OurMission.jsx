import { ArrowUpRight, ChartNoAxesCombined, Leaf, Lightbulb, UsersRound } from 'lucide-react';

const missionCards = [
  {
    title: 'Growth',
    description: 'Personal & professional growth for every team member.',
    Icon: ChartNoAxesCombined,
  },
  {
    title: 'Collaboration',
    description: 'A creative and supportive environment.',
    Icon: UsersRound,
  },
  {
    title: 'Innovation',
    description: 'Providing solutions that fill the digital divide.',
    Icon: Lightbulb,
  },
  {
    title: 'Sustainability',
    description: 'Committed to a better and brighter future.',
    Icon: Leaf,
  },
];

const OurMission = () => (
  <section className="relative isolate overflow-hidden border-y border-[#d6a65d]/25 bg-[#060b0d] px-[6%] py-10 text-white sm:px-[5%] sm:py-12 lg:px-[3%] lg:py-14">
    <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(214,166,93,0.14),transparent_25%),linear-gradient(90deg,rgba(4,10,13,0.96),rgba(4,10,13,0.82)_50%,rgba(4,10,13,0.96))]" aria-hidden="true" />
    <div className="absolute inset-0 -z-10 opacity-35" style={{ backgroundImage: "url('/images/whyusbg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />

    <div className="mx-auto max-w-[1500px]">
      <div data-aos="fade-up" data-aos-offset="60" className="flex items-center justify-center">
        <div className="flex items-center gap-3">
          <span className="inline-block h-px w-12 bg-[#d6a65d]" aria-hidden="true" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d6a65d]">
            Our Mission
          </span>
        </div>
      </div>

      <h2 data-aos="fade-up" data-aos-delay="80" data-aos-offset="60" className="mt-4 text-center font-serif text-2xl font-bold uppercase leading-[0.96] tracking-[-0.04em] text-white sm:text-[1.875rem] lg:text-[2.5rem]">
        Our <span className="text-[#d6a65d]">Mission</span>
      </h2>

      <div className="mt-10 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-aos="fade-right" data-aos-offset="60" className="relative min-h-[360px] overflow-hidden rounded-[18px] border border-[#d6a65d]/35 bg-[#0b1114] lg:min-h-[420px]">
          <img
            src="/images/heroimages/Dragon%20Over%20the%20Sunset%20Kingdom.png"
            alt="Creative studio team at work"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b0f]/70 via-[#050b0f]/10 to-transparent" aria-hidden="true" />
        </div>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-offset="60" className="space-y-6 text-[15px] leading-[1.9] text-white/75 sm:text-base">
          <p>
            Our highly efficient, multidisciplinary entrepreneurial professionals are critical to our business. It allows Feather VFX Studio to advance as a successful, benchmark business firm focusing on VFX activities and also development focusing mainly in USA, Canada, UK, European Countries and Asia Pacific. With our value-added services, best suited service packages, highly capable capabilities and our market experience, we stand unique among other competitors in this category.
          </p>
          <p>
            This allows Feather VFX Studio to switch from a successful business standard to one of the big VFX operations such as Rotoscopy, Paint, Compositing, Matchmove and Animation.
          </p>
          <p>
            Feather VFX Studio encourages personal and professional growth, consumer orientation, collaboration and creativity without losing sight of our dedication to sustainability. At the same time, by providing solutions that can fill the digital divide, we provide our clients with technical innovation and social and human advances.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {missionCards.map(({ title, description, Icon }, index) => (
          <article key={title} data-aos="zoom-in" data-aos-delay={index * 80} data-aos-offset="60" className="group relative overflow-hidden border border-[#d6a65d]/30 bg-[#0b1114]/80 p-5 shadow-[0_0_18px_rgba(214,166,93,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d6a65d]/60 hover:shadow-[0_0_26px_rgba(214,166,93,0.12)]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6a65d]/80 bg-[#121d20] text-[#d6a65d]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="text-[#d6a65d] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold uppercase tracking-[0.08em] text-[#d6a65d]">
              {title}
            </h3>
            <p className="mt-3 max-w-[25ch] text-sm leading-relaxed text-white/70">
              {description}
            </p>
            <div className="mt-5 h-px w-10 bg-[#d6a65d]" aria-hidden="true" />
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default OurMission;
