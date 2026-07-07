export default function CarCard({ image, category, title, year, mileage, price, badge = '' }) {
  // Determine badge styling and text
  let badgeEl = null;
  if (badge === 'new') {
    badgeEl = (
      <span className="badge-new absolute top-4 left-4 text-xs font-display uppercase tracking-wider px-3 py-1.5 rounded-full z-10">
        New Arrival
      </span>
    );
  } else if (badge === 'reserved') {
    badgeEl = (
      <span className="badge-reserved absolute top-4 left-4 text-xs font-display uppercase tracking-wider px-3 py-1.5 rounded-full z-10">
        Reserved
      </span>
    );
  }

  // Display category nicely
  const categoryLabels = {
    jdm: 'JDM',
    euro: 'Euro',
    suv: 'SUV',
  };
  const categoryLabel = categoryLabels[category.toLowerCase()] || category;

  return (
    <div className="showroom-card card-hover bg-noir2 rounded-3xl overflow-hidden border border-charcoal/5">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {badgeEl}
      </div>
      <div className="p-6">
        <p className="text-xs text-sage font-display uppercase tracking-wide mb-1">
          {categoryLabel}
        </p>
        <h3 className="font-display font-bold text-xl mb-3">{title}</h3>
        <div className="flex justify-between text-sm text-charcoal/60 mb-5">
          <span>
            <i className="fa-regular fa-calendar mr-1"></i>
            {year}
          </span>
          <span>
            <i className="fa-solid fa-gauge-high mr-1"></i>
            {mileage}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-ocean text-lg">
            {price}
          </span>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-sm font-display font-semibold underline decoration-sage underline-offset-4 hover:text-ocean"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
