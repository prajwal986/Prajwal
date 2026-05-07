import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  Menu as MenuIcon, 
  X, 
  Instagram, 
  Facebook, 
  Twitter, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-cafe-cream/90 backdrop-blur-md py-4 border-b border-cafe-brown/10' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="group flex items-center gap-2">
          <div className="w-10 h-10 bg-cafe-brown rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
            <Coffee className="text-cafe-cream w-6 h-6" />
          </div>
          <span className="font-serif text-2xl font-semibold tracking-tight text-cafe-brown">
            The Morning Press
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-cafe-ink/70 hover:text-cafe-brown transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-cafe-brown text-cafe-cream px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-cafe-terracotta transition-colors shadow-lg shadow-cafe-brown/10"
          >
            Reserve
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-cafe-brown"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-cafe-cream border-b border-cafe-brown/10 py-10 px-6 flex flex-col items-center gap-6 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-serif text-cafe-brown"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="w-full text-center bg-cafe-brown text-cafe-cream py-4 rounded-full font-serif text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reserve a Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=2000" 
          alt="Café Interior" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-cafe-ink/40 backdrop-grayscale-[0.2]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-cafe-cream/80 uppercase tracking-[0.3em] font-medium text-sm mb-6 block">
            Craft Coffee & Artisanal Pastries
          </span>
          <h1 className="font-serif text-6xl md:text-8xl text-cafe-cream mb-8 leading-tight tracking-tight">
            Your Morning <br />
            <span className="italic font-light">Ritual, Refined.</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <a 
              href="#menu" 
              className="group relative px-10 py-4 bg-cafe-cream text-cafe-brown rounded-full font-medium uppercase tracking-widest overflow-hidden transition-all hover:pr-14"
            >
              <span className="relative z-10">Explore Menu</span>
              <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-5 h-5" />
            </a>
            <a 
              href="#about" 
              className="px-10 py-4 border border-cafe-cream/30 text-cafe-cream rounded-full font-medium uppercase tracking-widest backdrop-blur-sm hover:bg-cafe-cream/10 transition-colors"
            >
              Our Story
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-cafe-cream/50 to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000" 
                alt="Coffee Pour" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border-2 border-cafe-terracotta/20 rounded-2xl -z-10 hidden md:block" />
            <div className="absolute top-1/4 -left-12 font-serif text-cafe-terracotta text-9xl opacity-10 select-none">
              1992
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-cafe-terracotta font-serif italic text-2xl mb-4 block">Since 1992</span>
            <h2 className="font-serif text-5xl md:text-6xl text-cafe-brown mb-8 leading-tight">
              A Legacy of <br />
              Coffee Craftsmanship
            </h2>
            <div className="space-y-6 text-cafe-ink/70 leading-relaxed text-lg">
              <p>
                Founded on the belief that a great cup of coffee should be more than just a morning caffeine jolt — it should be an experience. The Morning Press started as a small roastery in the heart of the arts district.
              </p>
              <p>
                Today, we continue that tradition by sourcing small-batch beans from sustainable farms across Africa and Latin America, roasting them in-house daily to ensure every sip is a testament to quality and care.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-8 border-t border-cafe-brown/10">
                <div>
                  <h4 className="font-serif text-xl text-cafe-brown mb-2">Ethically Sourced</h4>
                  <p className="text-sm">Direct partnerships with farmers focused on fair wages and sustainability.</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-cafe-brown mb-2">Handcrafted</h4>
                  <p className="text-sm">Every pastry is baked fresh at dawn by our resident artisan baker.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState<'drinks' | 'food' | 'specials'>('drinks');

  const menuItems = {
    drinks: [
      { name: 'Pour Over', desc: 'Single origin beans, brewed manually', price: '$5.50' },
      { name: 'Flat White', desc: 'Double espresso with silky microfoam', price: '$4.75' },
      { name: 'Cascara Tea', desc: 'Dried coffee cherry husks, honey notes', price: '$4.25' },
      { name: 'Oat Milk Latte', desc: 'Custom bean blend with creamy oat milk', price: '$5.25' },
      { name: 'Iced Tonic', desc: 'Cold brew, tonic water, rosemary spray', price: '$6.00' },
      { name: 'Cortado', desc: 'Equal parts espresso and steamed milk', price: '$4.00' },
    ],
    food: [
      { name: 'Almond Croissant', desc: 'Twice-baked with Frangipane filling', price: '$5.50' },
      { name: 'Avocado Tartine', desc: 'Sourdough, radish, chili flakes, sea salt', price: '$12.00' },
      { name: 'Seasonal Quiche', desc: 'Forest mushrooms and Gruyère', price: '$10.50' },
      { name: 'Pain au Chocolat', desc: 'Valrhona chocolate, flaky layers', price: '$4.75' },
      { name: 'Fig & Goat Cheese', desc: 'Honey drizzle on warm walnut bread', price: '$9.00' },
      { name: 'Lemon Poppy Scone', desc: 'Served with house-made clotted cream', price: '$4.25' },
    ],
    specials: [
      { name: 'The Seasonal Flight', desc: 'Three 4oz pours of our rarest roasts', price: '$14.00' },
      { name: 'Smoked Vanilla Latte', desc: 'Bourbon vanilla, smoked Himalayan salt', price: '$6.50' },
      { name: 'Mizu Coffee Jelly', desc: 'Japanese style coffee gelée with cream', price: '$7.50' },
    ]
  };

  return (
    <section id="menu" className="py-24 bg-cafe-brown/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-6xl text-cafe-brown mb-6"
          >
            The Daily Menu
          </motion.h2>
          <div className="flex justify-center gap-8 md:gap-12 mt-8">
            {(['drinks', 'food', 'specials'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-2 text-sm uppercase tracking-[0.2em] font-medium transition-colors ${
                  activeTab === tab ? 'text-cafe-terracotta' : 'text-cafe-brown/50 hover:text-cafe-brown'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cafe-terracotta"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {menuItems[activeTab].map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex items-start justify-between border-b border-cafe-brown/10 pb-4 group"
              >
                <div>
                  <h3 className="font-serif text-xl text-cafe-brown transition-colors group-hover:text-cafe-terracotta">{item.name}</h3>
                  <p className="text-sm text-cafe-ink/60 mt-1">{item.desc}</p>
                </div>
                <span className="font-serif text-lg text-cafe-brown/80">{item.price}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-16">
          <p className="text-cafe-ink/50 text-xs uppercase tracking-widest italic">
            * All prices include local taxes. Daily specials change with the sunrise.
          </p>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1497933321160-dc7c4e4b30a0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section id="gallery" className="py-24 overflow-hidden bg-cafe-ink text-cafe-cream">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h2 className="font-serif text-5xl mb-4">Captured Moments</h2>
            <p className="text-cafe-cream/60 max-w-md">Our space is designed for slow mornings and deep conversations.</p>
          </div>
          <div className="hidden md:flex gap-4">
            <Instagram className="hover:text-cafe-terracotta cursor-pointer transition-colors" />
            <span className="text-sm font-medium tracking-widest uppercase">@themorningpress</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 overflow-hidden">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.1 }}
            className={`relative overflow-hidden rounded-lg group ${i === 1 ? 'md:row-span-2' : ''} ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}
          >
            <img 
              src={img} 
              alt={`Gallery ${i}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-cafe-terracotta/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Instagram className="text-white w-8 h-8" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    date: '',
    size: '2',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cafe-terracotta/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-serif text-5xl text-cafe-brown mb-8">Visit Us</h2>
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-cafe-brown/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-cafe-terracotta w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-cafe-brown mb-2">Location</h4>
                  <p className="text-cafe-ink/70">128 Artisan Square, East District <br />Portland, OR 97204</p>
                  <a href="#" className="inline-flex items-center gap-2 text-cafe-terracotta text-sm font-semibold mt-4 hover:underline">
                    Get Directions <ChevronRight size={16} />
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-cafe-brown/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-cafe-terracotta w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-cafe-brown mb-2">Hours</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-cafe-ink/70">
                    <span>Mon - Fri</span> <span>07:00 - 18:00</span>
                    <span>Saturday</span> <span>08:00 - 17:00</span>
                    <span>Sunday</span> <span>09:00 - 16:00</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-cafe-brown/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-cafe-terracotta w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-cafe-brown mb-2">Contact</h4>
                  <p className="text-cafe-ink/70">hello@themorningpress.com</p>
                  <p className="text-cafe-ink/70">+1 (503) 555-0128</p>
                </div>
              </div>
            </div>

            {/* Simple Map Placeholder */}
            <div className="mt-12 h-64 bg-cafe-brown/10 rounded-2xl overflow-hidden relative grayscale">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                alt="Map Background" 
                className="w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-cafe-brown text-cafe-cream p-4 rounded-xl shadow-2xl flex flex-col items-center gap-1">
                  <MapPin className="text-cafe-terracotta" />
                  <span className="text-xs uppercase tracking-widest font-bold">Find Us Here</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cafe-brown/5 p-10 md:p-14 rounded-3xl border border-cafe-brown/10">
            <h2 className="font-serif text-4xl text-cafe-brown mb-2">Reservation</h2>
            <p className="text-cafe-ink/60 mb-10 text-sm italic">Join us for brunch or a private coffee cupping session.</p>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-cafe-terracotta rounded-full flex items-center justify-center mx-auto mb-8">
                    <Coffee className="text-cafe-cream w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl text-cafe-brown mb-4">Table Reserved!</h3>
                  <p className="text-cafe-ink/70 mb-8">We've sent a confirmation to your email. See you at the press soon.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-cafe-terracotta font-bold underline"
                  >
                    Make another booking
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-cafe-brown/60 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Elias Thorne"
                        className="w-full bg-cafe-cream border border-cafe-brown/10 rounded-xl px-6 py-4 focus:outline-none focus:border-cafe-terracotta transition-colors text-cafe-brown"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-cafe-brown/60 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="elias@example.com"
                        className="w-full bg-cafe-cream border border-cafe-brown/10 rounded-xl px-6 py-4 focus:outline-none focus:border-cafe-terracotta transition-colors text-cafe-brown"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-cafe-brown/60 ml-1">Date</label>
                      <input 
                        required
                        type="date" 
                        className="w-full bg-cafe-cream border border-cafe-brown/10 rounded-xl px-6 py-4 focus:outline-none focus:border-cafe-terracotta transition-colors text-cafe-brown"
                        value={formState.date}
                        onChange={(e) => setFormState({...formState, date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-cafe-brown/60 ml-1">Party Size</label>
                      <select 
                        className="w-full bg-cafe-cream border border-cafe-brown/10 rounded-xl px-6 py-4 focus:outline-none focus:border-cafe-terracotta transition-colors text-cafe-brown appearance-none"
                        value={formState.size}
                        onChange={(e) => setFormState({...formState, size: e.target.value})}
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="4">4 People</option>
                        <option value="6">6+ People</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-cafe-brown/60 ml-1">Special Request</label>
                    <textarea 
                      rows={4}
                      placeholder="Any allergies or celebrations we should know about?"
                      className="w-full bg-cafe-cream border border-cafe-brown/10 rounded-xl px-6 py-4 focus:outline-none focus:border-cafe-terracotta transition-colors text-cafe-brown resize-none"
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-cafe-brown text-cafe-cream py-5 rounded-xl font-bold uppercase tracking-[0.2em] hover:bg-cafe-terracotta transition-colors relative overflow-hidden group shadow-xl shadow-cafe-brown/20"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        >
                          <Coffee size={20} />
                        </motion.div>
                        Brewing your booking...
                      </span>
                    ) : (
                      'Confirm Reservation'
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-cafe-brown text-cafe-cream py-20 border-t border-cafe-cream/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-cafe-cream rounded-full flex items-center justify-center">
                <Coffee className="text-cafe-brown w-7 h-7" />
              </div>
              <span className="font-serif text-3xl font-semibold tracking-tight">The Morning Press</span>
            </a>
            <p className="text-cafe-cream/60 max-w-sm leading-relaxed mb-10">
              A community-driven corner of the world dedicated to the art of the perfect brew and the beauty of the shared table.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 border border-cafe-cream/20 rounded-full flex items-center justify-center hover:bg-cafe-cream hover:text-cafe-brown transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-cafe-cream/20 rounded-full flex items-center justify-center hover:bg-cafe-cream hover:text-cafe-brown transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-cafe-cream/20 rounded-full flex items-center justify-center hover:bg-cafe-cream hover:text-cafe-brown transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-8">Quick Links</h4>
            <ul className="space-y-4 text-cafe-cream/60 uppercase tracking-widest text-xs font-semibold">
              <li><a href="#home" className="hover:text-cafe-terracotta transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cafe-terracotta transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-cafe-terracotta transition-colors">The Menu</a></li>
              <li><a href="#gallery" className="hover:text-cafe-terracotta transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-cafe-terracotta transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-8">Newsletter</h4>
            <p className="text-cafe-cream/60 text-sm mb-6">Receive notes on our latest roasts and seasonal menu updates.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="email address"
                className="w-full bg-cafe-cream/5 border border-cafe-cream/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cafe-terracotta transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-cafe-terracotta hover:scale-110 transition-transform">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-cafe-cream/10 flex flex-col md:flex-row justify-between items-center gap-6 text-cafe-cream/40 text-[10px] uppercase tracking-[0.3em] font-bold">
          <span>&copy; 2026 The Morning Press. All Rights Reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-cafe-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cafe-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-cafe-terracotta selection:text-cafe-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
