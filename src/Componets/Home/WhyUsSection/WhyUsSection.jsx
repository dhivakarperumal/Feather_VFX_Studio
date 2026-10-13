import { ArrowRight, BadgeDollarSign, CirclePlay, Headphones } from 'lucide-react';

const features = [
  {
    icon: CirclePlay,
    title: 'HIGH QUALITY WORK',
    text:
      'Our mission is to provide facilities of high quality. The works are as special as you, leaving no information unattended, so you can be confident of your brand commitment and focus on what’s important, i.e., taking your business up to the next level.',
  },
  {
    icon: Headphones,
    title: 'ONLINE SUPPORT 24/7',
    text:
      'We’ve supported a large section of customers from around the world with great customer experiences. We understand the ever changing nature and stresses involved in the schedule or production and we are open for 24/7 to offer Quick turnaround.',
  },
  {
    icon: BadgeDollarSign,
    title: 'COST - EFFECTIVE RATES',
    text:
      'Myths can be broken; yes you heard correctly, we are cost-effective! Best competitive costs inside your budget restrain. Beyond any doubt you’ll feel this.',
  },
];

const WhyUsSection = () => {
  return (
    <section className="bg-[#f5f5f5] px-[6%] py-20 text-[#10171b] sm:px-[5%] lg:px-[3%] lg:py-24">
      <div className="mx-auto max-w-[1700px]">
        <p className="text-center text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#3aa9d8] sm:text-xs">
          We offer smooth VFX services with the right amount of passion and innovation, with no compromise in quality.
        </p>

        <h2 className="mt-8 text-center text-[2.5rem] font-bold uppercase leading-[0.98] tracking-[-0.06em] text-[#10171b] sm:text-[3.2rem] lg:text-[4.2rem]">
          Feather makes you feel more proud of your business.
        </h2>

        <div className="mx-auto mt-10 max-w-[1300px] text-center text-[1.02rem] leading-[1.8] text-[#4b5358] sm:text-lg">
          Feather is committed to loftier professional standards for your sensitive Data &amp; Information security. We respect and honor the trusting nature inherent in a professional relationship and in all respects and at all times remain rooted therein. The clear mechanisms of privacy are continually updated and restructured to ensure that they fully support the changing business climate and standards.We are not only renowned for our quality of work, but also for maintaining the trust of our customers coupled with business interests and that is what we want to be.
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group flex flex-col items-center text-center">
              <div className="relative flex h-[170px] w-[220px] items-center justify-center">
                <div className="absolute inset-x-8 bottom-5 top-3 rotate-[-6deg] rounded-[18px] border border-[#e5e7ea] bg-[#f0f0f0] shadow-[0_12px_24px_rgba(16,23,27,0.04)]" />
                <div className="relative flex h-[118px] w-[118px] items-center justify-center rounded-full border-[3px] border-[#1fa8de] bg-[#f4fbff] text-[#1fa8de] shadow-[inset_0_0_0_8px_rgba(31,168,222,0.08)]">
                  <Icon className="h-12 w-12 stroke-[2.2]" aria-hidden="true" />
                </div>
              </div>

              <h3 className="mt-6 text-[1.05rem] font-black uppercase tracking-[0.06em] text-[#1a1d23] sm:text-[1.25rem]">
                {title}
              </h3>

              <p className="mt-5 max-w-[360px] text-[0.96rem] leading-[1.9] text-[#49555b]">
                {text}
              </p>

              <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#dfeaf0] bg-white text-[#1fa8de] shadow-sm transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
