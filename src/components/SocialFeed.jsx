export default function SocialFeed() {
  const feedImages = [
    { id: 1, src: '/assets/instagram/ig-1.jpg', alt: 'YR Imports inventory 1' },
    { id: 2, src: '/assets/instagram/ig-2.jpg', alt: 'YR Imports inventory 2' },
    { id: 3, src: '/assets/instagram/ig-3.jpg', alt: 'YR Imports inventory 3' },
    { id: 4, src: '/assets/instagram/ig-4.jpg', alt: 'YR Imports inventory 4' },
    { id: 5, src: '/assets/instagram/ig-5.jpg', alt: 'YR Imports inventory 5' },
    { id: 6, src: '/assets/instagram/ig-6.jpg', alt: 'YR Imports inventory 6' },
    { id: 7, src: '/assets/instagram/ig-7.jpg', alt: 'YR Imports inventory 7' },
    { id: 8, src: '/assets/instagram/ig-8.jpg', alt: 'YR Imports inventory 8' },
  ];

  return (
    <section id="social" className="relative py-24 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <p className="font-display tracking-[0.3em] text-xs uppercase mb-3 font-semibold" style={{ color: '#E2231A' }}>
            Follow The Fleet
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl">@yr_imports_</h2>
        </div>
        <a
          href="https://www.instagram.com/yr_imports_"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-charcoal/15 px-6 py-3 rounded-full font-display text-sm tracking-wide hover:border-ocean hover:text-ocean transition-colors flex items-center gap-2 w-fit"
        >
          <i className="fa-brands fa-instagram text-lg" style={{ color: '#E2231A' }}></i> Follow @yr_imports_
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {feedImages.map((image) => (
          <a
            key={image.id}
            href="https://www.instagram.com/yr_imports_"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square rounded-2xl overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
              <i className="fa-brands fa-instagram text-2xl text-white"></i>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
