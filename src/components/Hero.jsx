export default function Hero() {
  const stats = [
    { value: '500+', label: 'Units Delivered' },
    { value: '12', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section
      id="home"
      className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center"
    >
      <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
        <p className="font-display text-sage tracking-[0.3em] text-xs md:text-sm uppercase mb-5 font-semibold">
          JDM &middot; Euro &middot; SUVs
        </p>
        <h1 className="font-display font-bold text-5xl sm:text-6xl leading-[1.02] mb-6">
          Your Gateway to <span className="text-ocean">Premium</span> Global Imports.
        </h1>
        <p className="text-charcoal/70 max-w-md text-base md:text-lg mb-10">
          Meticulously sourced, expertly inspected, and delivered island-wide. YR
          Imports connects Caribbean drivers to the world's finest vehicles.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#showroom"
            className="bg-charcoal text-sand px-8 py-4 rounded-full font-display font-semibold tracking-wide hover:bg-ocean hover:text-white transition-colors duration-300 flex items-center gap-3"
          >
            Browse Showroom <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a
            href="https://wa.me/18765452126"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-display font-semibold tracking-wide border border-charcoal/20 hover:border-ocean hover:text-ocean transition-colors duration-300 flex items-center gap-3"
          >
            <i className="fa-brands fa-whatsapp"></i> Chat With Us
          </a>
        </div>

        <div className="flex gap-10 mt-14">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <p className="font-display font-bold text-3xl text-ocean">{stat.value}</p>
              <p className="text-xs text-charcoal/60 uppercase tracking-wide mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="hero-frame rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1400&auto=format&fit=crop"
            alt="Premium sedan coastal backdrop"
            className="w-full h-[480px] md:h-[560px] object-cover"
          />
        </div>
        <div className="absolute -bottom-8 -left-8 bg-noir2 rounded-2xl shadow-xl p-5 hidden sm:flex items-center gap-4 max-w-xs">
          <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center text-sage text-xl">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <div>
            <p className="font-display font-semibold text-sm">Auction Grade Verified</p>
            <p className="text-xs text-charcoal/60">Every import independently graded</p>
          </div>
        </div>
      </div>
    </section>
  );
}
