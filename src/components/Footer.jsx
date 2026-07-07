export default function Footer() {
  const handleLinkClick = () => {
    // Scroll handling is natural with CSS scroll-behavior
  };

  return (
    <footer id="contact" className="relative pt-24 pb-10 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-20">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <svg width="52" height="52" viewBox="0 0 100 100" className="shrink-0">
              <circle cx="50" cy="50" r="48" fill="#0A0A0A" />
              <circle cx="50" cy="50" r="48" fill="none" stroke="#E2231A" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="43" fill="none" stroke="#E2231A" strokeWidth="0.75" opacity="0.6" />
              <text x="50" y="55" text-anchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="800" fontSize="34" fill="#ffffff">
                Y<tspan fill="#E2231A">R</tspan>
              </text>
              <text x="50" y="69" text-anchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="9" letterSpacing="2" fill="#ffffff">
                IMPORTS
              </text>
              <text x="50" y="79" text-anchor="middle" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="4" letterSpacing="0.4" fill="#E2231A">
                QUALITY CARS &middot; TRUSTED SERVICE
              </text>
              <text x="50" y="87" text-anchor="middle" fontFamily="Inter, sans-serif" fontSize="3.5" fill="#9a9a9a">
                EST. 2023
              </text>
            </svg>
            <span className="font-display font-bold text-2xl tracking-widest">
              YR <span className="text-ocean">IMPORTS</span>
            </span>
          </div>
          <p className="text-charcoal/60 max-w-sm text-sm leading-relaxed">
            Certified new &amp; used cars — buy, sell, and trade with confidence. Quality
            cars at your fingertips, curated for the Caribbean.
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="https://www.instagram.com/yr_imports_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-charcoal/15 flex items-center justify-center hover:bg-ocean hover:text-white hover:border-ocean transition-colors"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://wa.me/18765452126"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-charcoal/15 flex items-center justify-center hover:bg-ocean hover:text-white hover:border-ocean transition-colors"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5 tracking-wide uppercase text-sm">
            Navigate
          </h4>
          <ul className="space-y-3 text-sm text-charcoal/60">
            <li>
              <a href="#home" onClick={handleLinkClick} className="hover:text-ocean transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#showroom" onClick={handleLinkClick} className="hover:text-ocean transition-colors">
                Showroom
              </a>
            </li>
            <li>
              <a href="#why" onClick={handleLinkClick} className="hover:text-ocean transition-colors">
                Why Us
              </a>
            </li>
            <li>
              <a href="#social" onClick={handleLinkClick} className="hover:text-ocean transition-colors">
                Social
              </a>
            </li>
            <li>
              <a href="#schedule" onClick={handleLinkClick} className="hover:text-ocean transition-colors">
                Schedule
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5 tracking-wide uppercase text-sm">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-charcoal/60">
            <li>
              <i className="fa-solid fa-location-dot text-ocean mr-2"></i>Kingston, Jamaica
            </li>
            <li>
              <i className="fa-solid fa-phone text-ocean mr-2"></i>
              <a href="tel:+18765452126" className="hover:text-ocean transition-colors">
                876-545-2126
              </a>
            </li>
            <li>
              <i className="fa-solid fa-phone text-ocean mr-2"></i>
              <a href="tel:+18768230483" className="hover:text-ocean transition-colors">
                876-823-0483
              </a>
            </li>
            <li>
              <i className="fa-solid fa-clock text-ocean mr-2"></i>Mon-Fri 9-5 | Sat 9-3
            </li>
            <li>
              <i className="fa-solid fa-envelope text-ocean mr-2"></i>
              <a href="mailto:info@yrimports.com" className="hover:text-ocean transition-colors">
                info@yrimports.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-charcoal/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-charcoal/50">
        <p>&copy; 2026 YR Imports. All rights reserved.</p>
        <p>Your Gateway to Premium Global Imports.</p>
      </div>
    </footer>
  );
}
