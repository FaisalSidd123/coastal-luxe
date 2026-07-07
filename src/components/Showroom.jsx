import { useState } from 'react';
import CarCard from './CarCard';

const carsData = [
  {
    id: 1,
    category: 'jdm',
    title: 'Nissan GT-R Premium',
    year: 2021,
    mileage: '18k km',
    price: '$68,500',
    badge: 'new',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'euro',
    title: 'BMW M4 Competition',
    year: 2022,
    mileage: '9k km',
    price: '$79,900',
    badge: 'reserved',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'jdm',
    title: 'Toyota Supra RZ',
    year: 2020,
    mileage: '22k km',
    price: '$59,200',
    badge: 'new',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 4,
    category: 'suv',
    title: 'Range Rover Sport HSE',
    year: 2021,
    mileage: '31k km',
    price: '$71,000',
    badge: '',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 5,
    category: 'euro',
    title: 'Mercedes-Benz C300',
    year: 2022,
    mileage: '14k km',
    price: '$52,400',
    badge: '',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 6,
    category: 'suv',
    title: 'Toyota Land Cruiser ZX',
    year: 2021,
    mileage: '27k km',
    price: '$84,750',
    badge: 'reserved',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop',
  },
];

const filters = [
  { value: 'all', label: 'All' },
  { value: 'jdm', label: 'JDM' },
  { value: 'euro', label: 'Euro' },
  { value: 'suv', label: 'SUVs' },
];

export default function Showroom() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCars = carsData.filter((car) => {
    if (activeFilter === 'all') return true;
    return car.category === activeFilter;
  });

  return (
    <section id="showroom" className="relative py-24 px-6 lg:px-10 max-w-7xl mx-auto grain">
      <div className="text-center mb-14">
        <p className="font-display text-sage tracking-[0.3em] text-xs uppercase mb-3 font-semibold">
          Current Stock
        </p>
        <h2 className="font-display font-bold text-4xl md:text-5xl">The Showroom</h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-3 mb-14">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`tab-btn px-6 py-2.5 rounded-full font-display text-sm tracking-wide border border-charcoal/15 cursor-pointer ${
              activeFilter === filter.value ? 'active' : ''
            }`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div id="grid" className="grid md:grid-cols-3 gap-8">
        {filteredCars.map((car) => (
          <CarCard
            key={car.id}
            category={car.category}
            title={car.title}
            year={car.year}
            mileage={car.mileage}
            price={car.price}
            badge={car.badge}
            image={car.image}
          />
        ))}
      </div>
    </section>
  );
}
