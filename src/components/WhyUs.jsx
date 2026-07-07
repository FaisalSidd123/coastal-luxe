export default function WhyUs() {
  const points = [
    {
      icon: 'fa-magnifying-glass-chart',
      title: 'Quality Assurance',
      description:
        'Every vehicle undergoes a rigorous multi-point inspection before purchase, ensuring only the finest units make it into our showroom.',
      delay: '.05s',
    },
    {
      icon: 'fa-award',
      title: 'Auction Grading',
      description:
        "We only source vehicles carrying verified auction sheets and industry-recognized grading, so you know exactly what you're buying.",
      delay: '.2s',
    },
    {
      icon: 'fa-file-circle-check',
      title: 'Seamless Clearance',
      description:
        'Our team manages the full customs and clearance process, so your import arrives ready to drive — no paperwork headaches.',
      delay: '.35s',
    },
  ];

  return (
    <section id="why" className="relative py-24 bg-noir2 border-y border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="font-display text-sage tracking-[0.3em] text-xs uppercase mb-3 font-semibold">
            The Difference
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl">Why YR Imports</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="text-center md:text-left fade-in-up"
              style={{ animationDelay: point.delay }}
            >
              <div className="w-14 h-14 rounded-full bg-sage/15 text-sage flex items-center justify-center text-2xl mb-6 mx-auto md:mx-0">
                <i className={`fa-solid ${point.icon}`}></i>
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">{point.title}</h3>
              <p className="text-charcoal/65 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
