import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Instagram, 
  ArrowRight, 
  Menu, 
  X, 
  Check, 
  Star,
  Zap,
  Shield,
  Clock,
  Phone,
  MapPin,
  Facebook
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Constants ---
const BUSINESS = {
  name: "Platinum Tires & Wheels",
  shortName: "PTW Fresno",
  phone: "(559) 492-3090",
  phoneTel: "+15594923090",
  email: "info@ptwfresno.com",
  address: "6050 N Blackstone Ave",
  city: "Fresno",
  state: "CA",
  zip: "93710",
  hours: "Mon–Sat: 9:30am – 6pm",
  instagram: "https://www.instagram.com/ptwfresno/",
  facebook: "https://www.facebook.com/platinumfresno/",
  yelp: "https://www.yelp.com/biz/platinum-tires-and-wheels-fresno-2"
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12 md:py-6",
      isScrolled ? "bg-primary/80 backdrop-blur-md border-b border-glass-border" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex-shrink-0 flex items-center gap-2">
          <img src="/logo.png" alt="Platinum Tires and Wheels" className="h-10 md:h-12 object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-[12px] font-medium tracking-[2px] uppercase">
          {['Services', 'Gallery', 'Reviews', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-text-dim hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <a href="#inquiry" className="bg-white text-primary px-6 py-2 rounded-sm font-black hover:bg-white/90 transition-all">
            Build Now
          </a>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-primary border-b border-glass-border p-6 flex flex-col gap-6 md:hidden"
          >
            {['Services', 'Gallery', 'Reviews', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#inquiry" 
              className="bg-white text-primary px-6 py-3 rounded-sm text-center font-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Build Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center" style={{ minHeight: '700px' }}>
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.jpg" 
          alt="PTW Fresno storefront mural"
          fetchPriority="high"
          className="w-full h-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary" />
      </div>

      <div className="relative z-10 text-left px-6 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-white/10 border border-white/20 backdrop-blur-md mb-8">
            <Star className="w-3.5 h-3.5 text-accent-blue fill-accent-blue" />
            <span className="text-[10px] uppercase font-bold tracking-[3px] text-accent-blue">Fresno's Favorite Custom Shop</span>
          </div>

          <h1 className="text-6xl md:text-[82px] font-display font-extrabold leading-[0.9] tracking-[-2px] uppercase mb-8">
            YOUR RIDE.<br />ELEVATED.
          </h1>
          <p className="sr-only">Premium Custom Wheels, Tires, Wraps & Lift Kits in Fresno, CA</p>
          <p className="text-base md:text-lg text-white/70 mb-10 max-w-md font-normal leading-relaxed">
            Picture this — you pull up, heads turn, phones come out. Custom wheels, premium tires, full wraps, and lift kits built for the streets of Fresno.
          </p>
          <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
            <a href="#inquiry" className="bg-white text-primary px-10 py-4 rounded-sm font-black text-sm uppercase tracking-[2px] hover:bg-white/90 transition-all flex items-center gap-2 group">
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#gallery" className="glass px-10 py-4 rounded-sm font-bold text-sm uppercase tracking-[2px] hover:bg-white/10 transition-all text-center">
              View Gallery
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Custom Wheels",
      label: "Engineering",
      desc: "The moment new wheels hit your car, everything changes. Forged, multi-piece, and flow-form — fitted to your exact specs.",
      img: "/wheels.jpg",
      price: "Get a Quote"
    },
    {
      title: "Premium Tires",
      label: "Performance",
      desc: "Wrong tires ruin everything. We match the right rubber to your driving style — mounted, balanced, and road-ready same day.",
      img: "/tires.jpg",
      price: "Get a Quote"
    },
    {
      title: "Full Wraps",
      label: "Aesthetic",
      desc: "Same car, completely different identity. Matte, gloss, satin, chrome — whatever you're imagining, we've done it.",
      img: "/wrap.jpg",
      price: "Get a Quote"
    },
    {
      title: "Lift Kits",
      label: "Suspension",
      desc: "Go from stock height to head-turning stance. Leveling kits, full lifts, and suspension systems installed right the first time.",
      img: "/liftkits.jpg",
      price: "Get a Quote"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-[10px] font-bold tracking-[3px] uppercase text-accent-blue mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter uppercase">WHAT WE <span className="font-serif italic">BUILD</span></h3>
          </div>
          <p className="max-w-md text-text-dim text-lg font-normal">
            Other shops talk. We just post the results. Every vehicle leaves looking like it rolled off a magazine cover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.a
              href="#inquiry"
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer glass block"
            >
              <img 
                src={service.img} 
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[10px] font-bold tracking-[3px] text-accent-blue mb-2 block uppercase">{service.label}</span>
                <h4 className="text-xl font-display font-bold mb-3 uppercase">{service.title}</h4>
                <p className="text-sm text-text-dim opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {service.desc}
                </p>
                <div className="mt-4 text-xs font-bold text-white/60">{service.price}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    "/build1.jpg",
    "/build2.jpg",
    "/build3.jpg",
    "/build4.jpg"
  ];

  return (
    <section id="gallery" className="py-24 overflow-hidden">
      <div className="px-6 md:px-12 mb-16">
        <h2 className="text-center text-[10px] font-bold tracking-[3px] uppercase text-accent-blue mb-4">The Proof</h2>
        <h3 className="text-center text-4xl md:text-6xl font-display font-extrabold tracking-tighter uppercase">RECENT <span className="font-serif italic">BUILDS</span></h3>
      </div>

      <div className="grid grid-cols-2 gap-4 px-6 md:px-12 max-w-5xl mx-auto">
        {projects.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square overflow-hidden relative group rounded-lg glass"
          >
            <img 
              src={src} 
              alt={`Build ${idx + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50 opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-center">
                <span className="text-[10px] tracking-[3px] uppercase text-accent-blue">Project</span>
                <p className="text-lg font-display font-bold uppercase">CUSTOM BUILD {idx + 1}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Instagram CTA */}
      <div className="mt-16 text-center">
        <a 
          href={BUSINESS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-[1px] transition-all hover:-translate-y-1"
          style={{ 
            background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
            boxShadow: '0 0 25px rgba(131,58,180,0.3)'
          }}
        >
          <Instagram className="w-5 h-5" />
          See What's Leaving Our Shop This Week
        </a>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Navjot C.",
      service: "Wheels & Tires · Yelp",
      text: "Billy at PTW is so knowledgeable and easy to work with. Excellent work, great prices and all done in a timely manner. One of the best in the valley!",
      color: "#1a73e8"
    },
    {
      name: "Marcus R.",
      service: "Custom Wheels · Google",
      text: "Once again these guys outshined all the rest with their excellent customer service, knowledge and efficiency. I came in and got a balance and rotation and was in and out. Great experience every time!",
      color: "#e8710a"
    },
    {
      name: "Danny T.",
      service: "Lift Kit · Yelp",
      text: "Locally owned and operated with a team that treats your car like it's their own. No job is too big or too small for these guys. Top notch customer service and the highest quality work.",
      color: "#9334e6"
    },
    {
      name: "Jessica L.",
      service: "Full Wrap · Google",
      text: "Your one stop shop for all your auto needs. Whether you're looking for tires, rims, brakes, or lift kits — Platinum Tires & Wheels made my car look amazing. Friendly staff and great experience!",
      color: "#d93025"
    }
  ];

  return (
    <section id="reviews" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-bold tracking-[3px] uppercase text-accent-blue mb-4">Social Proof</h2>
          <h3 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter uppercase">DON'T TAKE <span className="font-serif italic">OUR WORD</span> FOR IT</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-lg hover:-translate-y-1 transition-transform duration-300 cursor-default"
            >
              <div className="flex text-accent-blue mb-4 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-white/80 font-light italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-sm flex items-center justify-center font-bold text-white text-sm"
                  style={{ background: review.color }}
                >
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-bold text-sm tracking-[2px] uppercase">{review.name}</div>
                  <div className="text-xs text-text-dim">{review.service}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Tell Us What You Want", desc: "Send us a pic of what you want — or just tell us the vibe. We'll handle the rest." },
    { num: "02", title: "We Inspect & Prep", desc: "We fully inspect your vehicle and prep everything before a single bolt gets touched." },
    { num: "03", title: "We Get To Work", desc: "While you go about your day, we're making your car unrecognizable — in the best way." },
    { num: "04", title: "The Reveal", desc: "You show up, we pull the cover off, and you drive away smiling. That's the goal every single time." }
  ];

  return (
    <section id="process" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[10px] font-bold tracking-[3px] uppercase text-accent-blue mb-4">How It Works</h2>
          <h3 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter uppercase">FOUR <span className="font-serif italic">STEPS</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-lg relative overflow-hidden group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-blue to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <div className="text-6xl font-bold text-white/5 mb-6 group-hover:text-accent-blue/20 transition-colors duration-500 font-display">{step.num}</div>
              <h4 className="text-lg font-bold mb-4 tracking-tight uppercase">{step.title}</h4>
              <p className="text-white/50 font-light leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [vehicleInfo, setVehicleInfo] = useState({ year: '', make: '', model: '', details: '' });
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const serviceOptions = [
    { value: 'wheels', label: 'Custom Wheels', icon: <Zap className="w-6 h-6 text-accent-blue" /> },
    { value: 'tires', label: 'Premium Tires', icon: <Shield className="w-6 h-6 text-accent-blue" /> },
    { value: 'wrap', label: 'Car Wrap', icon: <Star className="w-6 h-6 text-accent-blue" /> },
    { value: 'liftkits', label: 'Lift Kit', icon: <ArrowRight className="w-6 h-6 text-accent-blue rotate-[-90deg]" /> },
    { value: 'multiple', label: 'Multiple', icon: <ChevronRight className="w-6 h-6 text-accent-blue" /> },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastSubmitTime < 30000) return;
    setLastSubmitTime(now);
    const honeypot = document.getElementById('botcheck') as HTMLInputElement;
    if (honeypot?.value) return;
    setSubmitted(true);
  };

  const inputClass = "w-full bg-white/5 border border-glass-border rounded-sm px-4 py-3 outline-none focus:border-accent-blue transition-all text-sm";

  return (
    <section id="inquiry" className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto glass rounded-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Panel */}
        <div className="md:w-1/2 p-12 bg-white/5 flex flex-col justify-between">
          <div>
            <h3 className="text-4xl font-display font-extrabold leading-tight mb-6 uppercase">LET'S BUILD <br /> <span className="text-accent-blue">YOURS</span></h3>
            <p className="text-text-dim font-normal mb-12">
              Takes 30 seconds. No pressure, no spam. Just tell us what you're working with and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center">
                  <Star className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[1px]">42 Reviews</p>
                  <p className="text-xs text-text-dim">Top rated on Yelp & Google</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[1px]">We Stand Behind Our Work</p>
                  <p className="text-xs text-text-dim">Quality materials & craftsmanship guaranteed</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[1px]">{BUSINESS.hours}</p>
                  <p className="text-xs text-text-dim">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel — Funnel */}
        <div className="md:w-1/2 p-12 relative">
          {/* Step Progress */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={cn(
                  "w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold transition-all duration-300 border",
                  s <= step ? "bg-accent-blue border-accent-blue" : "bg-transparent border-white/20 text-white/40"
                )}>{s}</div>
                {i < 2 && <div className={cn("w-8 h-[1px] transition-all duration-500", s < step ? "bg-accent-blue" : "bg-white/10")} />}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-accent-blue rounded-sm flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-2 uppercase">Quote Requested</h4>
                <p className="text-text-dim">We'll be in touch within 24 hours.</p>
              </motion.div>
            ) : step === 1 ? (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <p className="text-center mb-6 text-[10px] font-bold uppercase tracking-[3px] text-text-dim">Select a Service</p>
                <div className="grid grid-cols-2 gap-3">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => { setSelectedService(opt.value); setTimeout(() => setStep(2), 250); }}
                      className={cn(
                        "flex flex-col items-center gap-2 p-4 rounded-sm border transition-all duration-200 cursor-pointer text-center",
                        selectedService === opt.value 
                          ? "border-accent-blue bg-accent-blue/15" 
                          : "border-glass-border bg-white/5 hover:border-accent-blue hover:bg-accent-blue/10"
                      )}
                    >
                      {opt.icon}
                      <span className="text-xs font-bold text-accent-blue uppercase tracking-[1px]">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : step === 2 ? (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <p className="text-center mb-1 text-[10px] font-bold uppercase tracking-[3px] text-text-dim">Vehicle Details</p>
                <p className="text-center mb-6 text-xs text-white/30">
                  <span className="text-accent-blue font-bold">{serviceOptions.find(o => o.value === selectedService)?.label}</span>
                </p>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-text-dim mb-1 block">Year</label>
                      <input type="text" value={vehicleInfo.year} onChange={e => setVehicleInfo({...vehicleInfo, year: e.target.value})} placeholder="2024" maxLength={4} className={cn(inputClass, "text-center")} />
                    </div>
                    <div className="col-span-2">
                      <label className="text-[10px] uppercase tracking-widest text-text-dim mb-1 block">Make</label>
                      <select value={vehicleInfo.make} onChange={e => setVehicleInfo({...vehicleInfo, make: e.target.value})} className={cn(inputClass, "cursor-pointer")}>
                        <option value="" className="bg-primary">Select</option>
                        {['Acura','Audi','BMW','Cadillac','Chevrolet','Dodge / Ram','Ford','GMC','Honda','Hyundai','Infiniti','Jeep','Kia','Lexus','Mazda','Mercedes-Benz','Nissan','Porsche','Subaru','Tesla','Toyota','Volkswagen','Other'].map(m => (
                          <option key={m} value={m} className="bg-primary">{m}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-text-dim mb-1 block">Model</label>
                    <input type="text" value={vehicleInfo.model} onChange={e => setVehicleInfo({...vehicleInfo, model: e.target.value})} placeholder="e.g. Camry, Civic, G-Wagon" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-text-dim mb-1 block">Notes</label>
                    <textarea value={vehicleInfo.details} onChange={e => setVehicleInfo({...vehicleInfo, details: e.target.value})} rows={2} placeholder="Sizes, colors, or any details..." className={cn(inputClass, "resize-none")} />
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button type="button" onClick={() => setStep(1)} className="glass px-4 py-3 rounded-sm font-bold uppercase tracking-[2px] text-[10px] hover:bg-white/10 transition-all">← Back</button>
                  <button type="button" onClick={() => setStep(3)} className="w-full py-3 rounded-sm bg-accent-blue text-white font-bold uppercase tracking-[2px] text-[10px] hover:bg-accent-blue/90 transition-all">Continue →</button>
                </div>
              </motion.div>
            ) : (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <p className="text-center mb-1 text-[10px] font-bold uppercase tracking-[3px] text-text-dim">Contact Info</p>
                <p className="text-center mb-6 text-xs text-white/30">
                  <span className="text-accent-blue font-bold">{serviceOptions.find(o => o.value === selectedService)?.label}</span> · <span className="text-white/60">{[vehicleInfo.year, vehicleInfo.make, vehicleInfo.model].filter(Boolean).join(' ') || '—'}</span>
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-text-dim">Full Name</label>
                    <input required type="text" className={inputClass} placeholder="Your name" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-text-dim">Email</label>
                    <input required type="email" className={inputClass} placeholder="name@email.com" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-text-dim">Phone</label>
                    <input required type="tel" className={inputClass} placeholder="(559) 000-0000" />
                  </div>
                  {/* Honeypot */}
                  <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                    <input type="text" name="botcheck" id="botcheck" tabIndex={-1} autoComplete="off" />
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button type="button" onClick={() => setStep(2)} className="glass px-4 py-3 rounded-sm font-bold uppercase tracking-[2px] text-[10px] hover:bg-white/10 transition-all flex-shrink-0">← Back</button>
                    <button type="submit" className="w-full py-3 rounded-sm bg-accent-blue text-white font-bold text-[10px] uppercase tracking-[2px] hover:bg-accent-blue/90 transition-all shadow-[0_0_20px_rgba(204,17,0,0.3)]">
                      🚗 Get My Custom Quote
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Call CTA */}
      <div className="text-center mt-10">
        <p className="text-white/30 text-[10px] uppercase tracking-[3px] font-bold mb-3">or call us directly</p>
        <a href={`tel:${BUSINESS.phoneTel}`} className="inline-flex items-center gap-3 glass px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-[1px] hover:bg-white/10 transition-all">
          <Phone className="w-4 h-4" />
          {BUSINESS.phone}
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 px-6 md:px-12 border-t border-glass-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="block mb-6">
              <img src="/logo.png" alt="Platinum Tires and Wheels" className="h-10 object-contain" />
            </a>
            <p className="text-text-dim max-w-sm mb-4 font-normal leading-relaxed">
              Fresno comes to us for a reason. Quality parts, clean installs, and a team that treats your car like it's their own.
            </p>
            <address className="not-italic text-text-dim text-sm leading-relaxed mb-6">
              <strong className="text-white/70">{BUSINESS.name}</strong><br />
              {BUSINESS.address}<br />
              {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}<br />
              <a href={`tel:${BUSINESS.phoneTel}`} className="text-accent-blue hover:text-accent-blue/80 transition-colors">{BUSINESS.phone}</a>
            </address>
            <div className="flex items-center gap-4">
              <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h5 className="text-[10px] font-bold tracking-[3px] uppercase mb-8 text-accent-blue">Our Services</h5>
            <ul className="space-y-4 text-text-dim text-xs uppercase tracking-[1px]">
              <li><a href="#services" className="hover:text-white transition-colors">Custom Wheels</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Premium Tires</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom Wraps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Lift Kits</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brakes & Suspension</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold tracking-[3px] uppercase mb-8 text-accent-blue">Service Areas</h5>
            <p className="text-text-dim text-xs leading-relaxed mb-6">
              Proudly serving <strong className="text-white/60">Fresno</strong>, <strong className="text-white/60">Clovis</strong>, Madera, Sanger, Selma, Visalia, Tulare, Kerman, Reedley, Hanford & the entire Central Valley.
            </p>
            <h5 className="text-[10px] font-bold tracking-[3px] uppercase mb-4 text-accent-blue mt-6">Hours</h5>
            <ul className="space-y-2 text-text-dim text-xs uppercase tracking-[1px]">
              <li>{BUSINESS.hours}</li>
              <li>Sunday: Closed</li>
              <li><a href={`tel:${BUSINESS.phoneTel}`} className="hover:text-accent-blue transition-colors">{BUSINESS.phone}</a></li>
              <li><a href={`mailto:${BUSINESS.email}`} className="hover:text-accent-blue transition-colors">{BUSINESS.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-glass-border gap-6">
          <p className="text-[10px] text-text-dim uppercase tracking-widest">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. | Custom Wheels, Tires & Wraps in Fresno, CA
          </p>
          <p className="text-[10px] text-text-dim uppercase tracking-widest">
            {BUSINESS.address}, {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip} · {BUSINESS.phone}
          </p>
        </div>
      </div>
    </footer>
  );
};

// Sticky CTA
const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="#inquiry"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 px-6 py-4 rounded-sm bg-accent-blue text-white font-black uppercase tracking-[1px] text-xs shadow-2xl hover:bg-accent-blue/90 transition-all flex items-center gap-3 group"
          style={{ boxShadow: '0 0 30px rgba(204,17,0,0.4)' }}
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          Get a Free Quote
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent-blue selection:text-white relative overflow-x-hidden bg-primary">
      <Navbar />
      <main>
        <Hero />
        {/* Gradient glows + shooting stars — ONLY below hero */}
        <div className="cinema-bg relative">
          {/* Shooting stars */}
          {[
            { color: 'red',   top: '8%',  w: '120px', angle: '-12deg', dur: '7s',  delay: '0s' },
            { color: 'white', top: '15%', w: '80px',  angle: '-8deg',  dur: '9s',  delay: '2s' },
            { color: 'red',   top: '28%', w: '100px', angle: '-18deg', dur: '11s', delay: '4s' },
            { color: 'white', top: '35%', w: '60px',  angle: '-5deg',  dur: '8s',  delay: '6s' },
            { color: 'red',   top: '48%', w: '140px', angle: '-14deg', dur: '10s', delay: '1s' },
            { color: 'red',   top: '58%', w: '90px',  angle: '-10deg', dur: '12s', delay: '3s' },
            { color: 'white', top: '68%', w: '70px',  angle: '-7deg',  dur: '9s',  delay: '5s' },
            { color: 'red',   top: '78%', w: '110px', angle: '-16deg', dur: '8s',  delay: '7s' },
            { color: 'white', top: '85%', w: '50px',  angle: '-4deg',  dur: '13s', delay: '2s' },
            { color: 'red',   top: '92%', w: '130px', angle: '-11deg', dur: '10s', delay: '8s' },
          ].map((s, i) => (
            <div
              key={i}
              className={`shooting-star ${s.color}`}
              style={{
                top: s.top,
                left: '0',
                width: s.w,
                '--angle': s.angle,
                '--duration': s.dur,
                '--delay': s.delay,
              } as React.CSSProperties}
            />
          ))}
          <Services />
          <Portfolio />
          <Reviews />
          <Process />
          <InquiryForm />
        </div>
      </main>
      <div className="cinema-bg relative">
        <Footer />
      </div>
      <StickyCTA />
    </div>
  );
}
