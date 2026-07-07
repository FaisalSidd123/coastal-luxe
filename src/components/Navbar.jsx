import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Showroom', href: '#showroom' },
    { label: 'Why Us', href: '#why' },
    { label: 'Social', href: '#social' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Calculate which section is currently in view
      // We offset by 140px to account for the sticky navbar and padding
      const sections = ['home', 'showroom', 'why', 'social', 'schedule', 'contact'];
      let currentSection = 'home';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop - 140;
          if (scrollPosition >= top) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header id="navbar" className="sticky top-0 left-0 w-full z-50 bg-sand/90 backdrop-blur-md border-b border-charcoal/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-5">
        <a href="#" className="flex items-center gap-3 select-none" onClick={handleLinkClick}>
          <svg width="44" height="44" viewBox="0 0 100 100" className="shrink-0">
            <circle cx="50" cy="50" r="48" fill="#0A0A0A" />
            <circle cx="50" cy="50" r="48" fill="none" stroke="#E2231A" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="43" fill="none" stroke="#E2231A" strokeWidth="0.75" opacity="0.6" />
            <text x="50" y="55" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="800" fontSize="34" fill="#ffffff">
              Y<tspan fill="#E2231A">R</tspan>
            </text>
            <text x="50" y="69" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="9" letterSpacing="2" fill="#ffffff">
              IMPORTS
            </text>
            <text x="50" y="79" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="4" letterSpacing="0.4" fill="#E2231A">
              QUALITY CARS &middot; TRUSTED SERVICE
            </text>
            <text x="50" y="87" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="3.5" fill="#9a9a9a">
              EST. 2023
            </text>
          </svg>
          <span className="font-display font-bold text-xl tracking-widest">
            YR <span className="text-ocean">IMPORTS</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 font-display text-sm tracking-wider uppercase">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/18765452126"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ocean text-white px-6 py-2.5 rounded-full text-sm font-display tracking-wide hover:bg-charcoal hover:text-sand transition-colors duration-300 flex items-center gap-2"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp Showroom
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="lg:hidden text-2xl text-charcoal focus:outline-none"
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu lg:hidden overflow-hidden border-t border-charcoal/10 transition-all duration-300`}
        style={{
          maxHeight: menuOpen ? '400px' : '0px',
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div className="flex flex-col gap-5 px-6 py-6 font-display uppercase text-sm tracking-wider">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="https://wa.me/18765452126"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="mt-2 text-center bg-ocean text-white py-3 rounded-full font-bold hover:bg-charcoal hover:text-sand transition-colors"
          >
            WhatsApp Showroom
          </a>
        </div>
      </div>
    </header>
  );
}
