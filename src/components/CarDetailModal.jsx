export default function CarDetailModal({ car, onClose }) {
  if (!car) return null;

  // Format dynamic WhatsApp inquiry message
  const inquiryText = encodeURIComponent(
    `Hi YR Imports! I'm interested in the ${car.title} (${car.year}).\nRef. No: ${car.specs?.refNo || 'N/A'}\nPrice: ${car.price}\n\nIs this vehicle still available for a viewing/consultation?`
  );

  const whatsAppUrl = `https://wa.me/18765452126?text=${inquiryText}`;

  // Spec helper list
  const specFields = [
    { label: 'Ref. No.', value: car.specs?.refNo },
    { label: 'Sub Ref No', value: car.specs?.subRefNo },
    { label: 'Mileage', value: car.specs?.mileage },
    { label: 'Chassis No.', value: car.specs?.chassisNo },
    { label: 'Engine Code', value: car.specs?.engineCode },
    { label: 'Model Code', value: car.specs?.modelCode },
    { label: 'Steering', value: car.specs?.steering },
    { label: 'Engine Size', value: car.specs?.engineSize },
    { label: 'Ext. Color', value: car.specs?.extColor },
    { label: 'Location', value: car.specs?.location },
    { label: 'Fuel', value: car.specs?.fuel },
    { label: 'Version/Class', value: car.specs?.versionClass },
    { label: 'Seats', value: car.specs?.seats },
    { label: 'Drive', value: car.specs?.drive },
    { label: 'Doors', value: car.specs?.doors },
    { label: 'Transmission', value: car.specs?.transmission },
    { label: 'M3', value: car.specs?.m3 },
    { label: 'Registration Year/month', value: car.specs?.registrationDate },
    { label: 'Dimension', value: car.specs?.dimension },
    { label: 'Manufacture Year/month', value: car.specs?.manufactureDate },
    { label: 'Weight', value: car.specs?.weight },
    { label: 'Max.Cap', value: car.specs?.maxCap },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-noir2 border border-charcoal/10 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col gap-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-charcoal/60 hover:text-white text-2xl transition-colors cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-sand/50 hover:bg-ocean border border-charcoal/10"
          aria-label="Close details"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="text-xs text-sage font-display uppercase tracking-widest bg-sage/10 px-3 py-1 rounded-full border border-sage/20">
              {car.category.toUpperCase()}
            </span>
            {car.badge && (
              <span className={`text-xs font-display uppercase tracking-widest px-3 py-1 rounded-full ${
                car.badge === 'new' ? 'bg-ocean/20 text-white border border-ocean/30' : 'bg-charcoal text-sand font-semibold'
              }`}>
                {car.badge === 'new' ? 'New Arrival' : 'Reserved'}
              </span>
            )}
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
            {car.title}
          </h2>
          <p className="text-ocean font-display font-bold text-2xl mt-1">{car.price}</p>
        </div>

        {/* Modal Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Image and WhatsApp Button */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-charcoal/15 bg-sand">
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ocean text-white font-display font-bold py-4 rounded-full hover:bg-charcoal hover:text-sand transition-colors flex items-center justify-center gap-3 w-full text-center text-base cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i> Inquire via WhatsApp
            </a>
          </div>

          {/* Right Column: Specification Details Grid */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-lg text-white border-b border-charcoal/10 pb-2">
              Vehicle Specifications
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 max-h-[400px] overflow-y-auto pr-2">
              {specFields.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex justify-between py-2 border-b border-charcoal/5 text-sm"
                >
                  <span className="text-charcoal/50 font-display">{spec.label}</span>
                  <span className="font-semibold text-charcoal text-right">
                    {spec.value || '—'}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
