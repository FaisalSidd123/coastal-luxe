import { useState } from 'react';

export default function CarDetailModal({ car, onClose }) {
  const [activeTab, setActiveTab] = useState('general');

  if (!car) return null;

  // Format dynamic WhatsApp inquiry message
  const inquiryText = encodeURIComponent(
    `Hi YR Imports! I'm interested in the ${car.title} (${car.year}).\nRef. No: ${car.specs?.refNo || 'N/A'}\nPrice: ${car.price}\n\nIs this vehicle still available for a viewing/consultation?`
  );

  const whatsAppUrl = `https://wa.me/18765452126?text=${inquiryText}`;

  // Categorized Specs
  const specsData = {
    general: [
      { label: 'Ref. No.', value: car.specs?.refNo },
      { label: 'Sub Ref No', value: car.specs?.subRefNo },
      { label: 'Steering', value: car.specs?.steering },
      { label: 'Ext. Color', value: car.specs?.extColor },
      { label: 'Location', value: car.specs?.location },
      { label: 'Fuel', value: car.specs?.fuel },
      { label: 'Seats', value: car.specs?.seats },
      { label: 'Doors', value: car.specs?.doors },
    ],
    engine: [
      { label: 'Chassis No.', value: car.specs?.chassisNo },
      { label: 'Model Code', value: car.specs?.modelCode },
      { label: 'Engine Code', value: car.specs?.engineCode },
      { label: 'Engine Size', value: car.specs?.engineSize },
      { label: 'Transmission', value: car.specs?.transmission },
      { label: 'Drive', value: car.specs?.drive },
      { label: 'Mileage', value: car.specs?.mileage },
      { label: 'Version/Class', value: car.specs?.versionClass },
    ],
    dimensions: [
      { label: 'Dimension', value: car.specs?.dimension },
      { label: 'Weight', value: car.specs?.weight },
      { label: 'M3', value: car.specs?.m3 },
      { label: 'Max.Cap', value: car.specs?.maxCap },
      { label: 'Registration Yr/Mo', value: car.specs?.registrationDate },
      { label: 'Manufacture Yr/Mo', value: car.specs?.manufactureDate },
    ],
  };

  const tabs = [
    { id: 'general', label: 'General Info' },
    { id: 'engine', label: 'Engine & Build' },
    { id: 'dimensions', label: 'Size & Weight' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-5xl bg-noir2 border border-charcoal/15 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col gap-6 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-charcoal/60 hover:text-white text-xl transition-all cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-sand/60 hover:bg-ocean border border-charcoal/10"
          aria-label="Close details"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Modal Header */}
        <div className="pr-12">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="text-xs text-sage font-display uppercase tracking-widest bg-sage/10 px-3 py-1 rounded-full border border-sage/20">
              {car.category.toUpperCase()}
            </span>
            {car.badge && (
              <span className={`text-xs font-display uppercase tracking-widest px-3 py-1 rounded-full font-semibold ${
                car.badge === 'new' ? 'bg-ocean text-white border border-ocean/20' : 'bg-charcoal text-sand'
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

        {/* Content Layout */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Left: Image & CTA */}
          <div className="md:col-span-5 flex flex-col gap-5">
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
              className="bg-ocean text-white font-display font-bold py-4 rounded-full hover:bg-charcoal hover:text-sand transition-all duration-300 flex items-center justify-center gap-3 w-full text-center text-base cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i> Inquire via WhatsApp
            </a>
          </div>

          {/* Right: Decoupled & Redesigned Specs */}
          <div className="md:col-span-7 flex flex-col gap-5">
            
            {/* Quick Specs Strip */}
            <div className="grid grid-cols-3 gap-3 bg-sand/40 border border-charcoal/10 rounded-2xl p-4">
              <div className="text-center">
                <i className="fa-solid fa-gauge text-ocean text-lg mb-1 block"></i>
                <span className="text-[10px] text-charcoal/40 uppercase font-display block">Mileage</span>
                <span className="text-xs font-bold text-charcoal">{car.specs?.mileage || car.mileage}</span>
              </div>
              <div className="text-center border-x border-charcoal/10">
                <i className="fa-solid fa-gears text-ocean text-lg mb-1 block"></i>
                <span className="text-[10px] text-charcoal/40 uppercase font-display block">Transmission</span>
                <span className="text-xs font-bold text-charcoal truncate block px-1">
                  {car.specs?.transmission?.includes('Automatic') ? 'Automatic' : 'Manual'}
                </span>
              </div>
              <div className="text-center">
                <i className="fa-solid fa-gas-pump text-ocean text-lg mb-1 block"></i>
                <span className="text-[10px] text-charcoal/40 uppercase font-display block">Fuel Type</span>
                <span className="text-xs font-bold text-charcoal truncate block">{car.specs?.fuel?.split(' ')[0] || '—'}</span>
              </div>
            </div>

            {/* Spec Category Tabs */}
            <div className="flex border-b border-charcoal/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 pb-3 text-sm font-display font-semibold transition-all border-b-2 cursor-pointer ${
                    activeTab === tab.id
                      ? 'border-ocean text-ocean font-bold'
                      : 'border-transparent text-charcoal/40 hover:text-charcoal'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Selected Spec Tab Content */}
            <div className="grid grid-cols-1 gap-y-1.5 animate-fade-in mt-1">
              {specsData[activeTab].map((spec, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 py-2.5 border-b border-charcoal/5 text-sm items-center hover:bg-charcoal/[0.02] px-2 rounded-lg transition-colors"
                >
                  <span className="col-span-5 text-charcoal/50 font-display font-medium">
                    {spec.label}
                  </span>
                  <span className="col-span-7 font-semibold text-charcoal text-right md:text-left pl-4 break-words">
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
