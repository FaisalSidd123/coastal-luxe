import { useState } from 'react';
import CarCard from './CarCard';
import CarDetailModal from './CarDetailModal';

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
    specs: {
      refNo: 'PJ0265',
      subRefNo: 'S-R35-09',
      mileage: '18,000 km',
      chassisNo: 'R35-802144',
      engineCode: 'VR38DETT',
      modelCode: 'DBA-R35',
      steering: 'RIGHT',
      engineSize: '3,800 cc',
      extColor: 'GUNMETALLIC GRAY',
      location: 'Kingston, Jamaica',
      fuel: 'PETROL',
      versionClass: 'Premium Edition',
      seats: '4',
      drive: 'AWD',
      doors: '2',
      transmission: 'Automatic (GR6 Dual Clutch)',
      m3: '11.2',
      registrationDate: '2021/06',
      dimension: '4.71m x 1.89m x 1.37m',
      manufactureDate: '2021/02',
      weight: '1,760 kg',
      maxCap: '4 passengers',
    }
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
    specs: {
      refNo: 'BM8842',
      subRefNo: 'S-G82-44',
      mileage: '9,000 km',
      chassisNo: 'G82-M4-023',
      engineCode: 'S58',
      modelCode: 'G82',
      steering: 'RIGHT',
      engineSize: '3,000 cc',
      extColor: 'PORTIMAO BLUE',
      location: 'Kingston, Jamaica',
      fuel: 'PETROL',
      versionClass: 'Competition Edition',
      seats: '4',
      drive: '2WD (RWD)',
      doors: '2',
      transmission: 'Automatic (8-Speed M Steptronic)',
      m3: '10.8',
      registrationDate: '2022/03',
      dimension: '4.79m x 1.88m x 1.39m',
      manufactureDate: '2022/01',
      weight: '1,725 kg',
      maxCap: '4 passengers',
    }
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
    specs: {
      refNo: 'TS4942',
      subRefNo: 'S-DB42-22',
      mileage: '22,000 km',
      chassisNo: 'DB42-00214',
      engineCode: 'B58',
      modelCode: '3BA-DB42',
      steering: 'RIGHT',
      engineSize: '3,000 cc',
      extColor: 'PROMINENCE RED',
      location: 'Kingston, Jamaica',
      fuel: 'PETROL',
      versionClass: 'RZ Edition',
      seats: '2',
      drive: '2WD (RWD)',
      doors: '2',
      transmission: 'Automatic (8-Speed)',
      m3: '9.6',
      registrationDate: '2020/09',
      dimension: '4.38m x 1.85m x 1.29m',
      manufactureDate: '2020/05',
      weight: '1,520 kg',
      maxCap: '2 passengers',
    }
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
    specs: {
      refNo: 'RR1964',
      subRefNo: 'S-L494-08',
      mileage: '31,000 km',
      chassisNo: 'SALLW5-998',
      engineCode: 'AJ126',
      modelCode: 'L494',
      steering: 'RIGHT',
      engineSize: '3,000 cc',
      extColor: 'FUJI WHITE',
      location: 'Kingston, Jamaica',
      fuel: 'DIESEL',
      versionClass: 'HSE Dynamic',
      seats: '5',
      drive: 'AWD',
      doors: '5',
      transmission: 'Automatic (8-Speed)',
      m3: '14.5',
      registrationDate: '2021/04',
      dimension: '4.88m x 2.07m x 1.80m',
      manufactureDate: '2020/11',
      weight: '2,180 kg',
      maxCap: '5 passengers',
    }
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
    specs: {
      refNo: 'MB5033',
      subRefNo: 'S-W206-12',
      mileage: '14,000 km',
      chassisNo: 'W206-8812',
      engineCode: 'M254',
      modelCode: 'W206',
      steering: 'RIGHT',
      engineSize: '2,000 cc',
      extColor: 'OBSIDIAN BLACK',
      location: 'Kingston, Jamaica',
      fuel: 'PETROL (Mild Hybrid)',
      versionClass: 'AMG Line',
      seats: '5',
      drive: '2WD (RWD)',
      doors: '4',
      transmission: 'Automatic (9G-TRONIC)',
      m3: '11.0',
      registrationDate: '2022/07',
      dimension: '4.75m x 1.82m x 1.44m',
      manufactureDate: '2022/02',
      weight: '1,675 kg',
      maxCap: '5 passengers',
    }
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
    specs: {
      refNo: 'LC5334',
      subRefNo: 'S-LC300-33',
      mileage: '27,000 km',
      chassisNo: 'FJA300-0012',
      engineCode: 'F33A-FTV',
      modelCode: '3DA-FJA300W',
      steering: 'RIGHT',
      engineSize: '3,300 cc',
      extColor: 'PEARL WHITE',
      location: 'Kingston, Jamaica',
      fuel: 'DIESEL',
      versionClass: 'ZX Edition',
      seats: '7',
      drive: '4WD (Full-Time)',
      doors: '5',
      transmission: 'Automatic (10-Speed)',
      m3: '16.8',
      registrationDate: '2021/10',
      dimension: '4.98m x 1.98m x 1.92m',
      manufactureDate: '2021/08',
      weight: '2,570 kg',
      maxCap: '7 passengers',
    }
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
  const [selectedCar, setSelectedCar] = useState(null);

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
            onViewDetails={() => setSelectedCar(car)}
          />
        ))}
      </div>

      {/* Car Specs Details Modal Overlay */}
      {selectedCar && (
        <CarDetailModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
        />
      )}
    </section>
  );
}
