import { useState } from 'react';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    vehicle: '',
    message: '',
  });

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, date, time, vehicle, message } = formData;

    const lines = [
      "Hi YR Imports! I'd like to schedule a consultation.",
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Preferred Date: ${date}`,
      `Preferred Time: ${time}`,
    ];
    if (vehicle.trim()) lines.push(`Vehicle: ${vehicle}`);
    if (message.trim()) lines.push(`Message: ${message}`);

    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/18765452126?text=${text}`, '_blank');
  };

  return (
    <section id="schedule" className="relative py-24 bg-noir2 border-y border-charcoal/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="font-display text-sage tracking-[0.3em] text-xs uppercase mb-3 font-semibold">
            Let's Talk Cars
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Schedule a Consultation
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto">
            Pick a time that works and we'll confirm your viewing or call over WhatsApp — no
            back-and-forth required.
          </p>
        </div>

        <form
          id="scheduleForm"
          onSubmit={handleSubmit}
          className="bg-sand rounded-3xl p-8 md:p-10 grid md:grid-cols-2 gap-6 border border-charcoal/5"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-display uppercase tracking-wide text-charcoal/50 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-noir2 border border-charcoal/15 rounded-xl px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-ocean transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-display uppercase tracking-wide text-charcoal/50 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-noir2 border border-charcoal/15 rounded-xl px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-ocean transition-colors"
              placeholder="876 000 0000"
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-xs font-display uppercase tracking-wide text-charcoal/50 mb-2"
            >
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              required
              min={today}
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-noir2 border border-charcoal/15 rounded-xl px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-ocean transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="block text-xs font-display uppercase tracking-wide text-charcoal/50 mb-2"
            >
              Preferred Time
            </label>
            <input
              type="time"
              id="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full bg-noir2 border border-charcoal/15 rounded-xl px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-ocean transition-colors"
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="vehicle"
              className="block text-xs font-display uppercase tracking-wide text-charcoal/50 mb-2"
            >
              Vehicle You're Interested In
            </label>
            <input
              type="text"
              id="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              className="w-full bg-noir2 border border-charcoal/15 rounded-xl px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-ocean transition-colors"
              placeholder="e.g. Nissan GT-R, BMW M4..."
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="message"
              className="block text-xs font-display uppercase tracking-wide text-charcoal/50 mb-2"
            >
              Message (optional)
            </label>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-noir2 border border-charcoal/15 rounded-xl px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-ocean transition-colors"
              placeholder="Anything else we should know?"
            ></textarea>
          </div>
          <p className="md:col-span-2 text-xs text-charcoal/50 -mt-2">
            Prefer to call? Reach us directly at{' '}
            <a href="tel:+18765452126" className="text-ocean hover:underline">
              876-545-2126
            </a>{' '}
            or{' '}
            <a href="tel:+18768230483" className="text-ocean hover:underline">
              876-823-0483
            </a>{' '}
            &middot; Mon–Fri 9–5, Sat 9–3.
          </p>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-ocean text-white font-display font-bold py-4 rounded-full hover:bg-charcoal hover:text-sand transition-colors flex items-center justify-center gap-3 cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i> Schedule via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
