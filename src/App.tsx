import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Instagram, 
  Twitter, 
  Facebook, 
  ArrowRight, 
  Menu, 
  X, 
  Check, 
  Star,
  Zap,
  Shield,
  Clock
} from 'lucide-react';
import { cn } from './lib/utils';

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
        <a href="#" className="text-2xl font-display font-black tracking-[4px] uppercase flex items-center gap-2">
          PTW <span className="text-accent-blue">FRESNO</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-[12px] font-medium tracking-[2px] uppercase">
          {['Portfolio', 'Showroom', 'Process', 'Contact'].map((item) => (
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
            {['Portfolio', 'Showroom', 'Process', 'Contact'].map((item) => (
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
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://player.vimeo.com/external/459389137.sd.mp4?s=912063327339450f653439387462d165&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary" />
      </div>

      <div className="relative z-10 text-left px-6 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl md:text-[82px] font-display font-extrabold leading-[0.9] tracking-[-2px] uppercase mb-8">
            BUILD<br />YOUR<br />DREAM.
          </h1>
          <p className="text-base md:text-lg text-text-dim mb-10 max-w-md font-normal leading-relaxed">
            Fresno's premier destination for high-end automotive transformation. We specialize in forged wheels, bespoke wraps, and precision lift kits.
          </p>
          <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
            <a href="#inquiry" className="bg-white text-primary px-10 py-4 rounded-sm font-black text-sm uppercase tracking-[2px] hover:bg-white/90 transition-all">
              Start Custom Build
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
      title: "Forged Wheels",
      label: "Engineering",
      desc: "Forged, multi-piece, and flow-form options from the world's leading brands.",
      img: "https://images.unsplash.com/photo-1552650272-b8a34e21bc4b?auto=format&fit=crop&q=80&w=800",
      price: "From $1,800"
    },
    {
      title: "Full Wraps",
      label: "Aesthetic",
      desc: "Full color changes, paint protection film, and custom graphics.",
      img: "https://images.unsplash.com/photo-1611859328053-3cbc9f9399f4?auto=format&fit=crop&q=80&w=800",
      price: "From $3,500"
    },
    {
      title: "Performance Lifts",
      label: "Suspension",
      desc: "Precision suspension systems for off-road performance and aggressive stance.",
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
      price: "From $2,200"
    },
    {
      title: "Tire Packages",
      label: "Utility",
      desc: "All-terrain, track-ready, and luxury touring tires for every driving style.",
      img: "https://images.unsplash.com/photo-1578844541663-4711efaf3eb1?auto=format&fit=crop&q=80&w=800",
      price: "From $800"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-[10px] font-bold tracking-[3px] uppercase text-accent-blue mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter uppercase">ELITE SERVICES</h3>
          </div>
          <p className="max-w-md text-text-dim text-lg font-normal">
            We specialize in high-end modifications that balance aesthetics with performance. Every build is a masterpiece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer glass"
            >
              <img 
                src={service.img} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                referrerPolicy="no-referrer"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1525609004556-c46c7d6cf048?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section id="portfolio" className="py-24 bg-primary overflow-hidden">
      <div className="px-6 md:px-12 mb-16">
        <h2 className="text-center text-[10px] font-bold tracking-[3px] uppercase text-accent-blue mb-4">The Showroom</h2>
        <h3 className="text-center text-4xl md:text-6xl font-display font-extrabold tracking-tighter uppercase">RECENT BUILDS</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 md:px-12">
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
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50 opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-center">
                <span className="text-[10px] tracking-[3px] uppercase text-accent-blue">Project</span>
                <p className="text-lg font-display font-bold uppercase">CUSTOM SPEC {idx + 1}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="glass px-12 py-4 rounded-sm font-bold text-xs uppercase tracking-[2px] hover:bg-white/10 transition-all">
          Follow our Instagram for Live Feeds
        </button>
      </div>
    </section>
  );
};

const Pricing = () => {
  const tiers = [
    {
      name: "Wheels \u0026 Tires",
      price: "1,800",
      features: ["Premium Wheel Set", "Precision Alignment", "Ceramic Coating", "Basic Tint"],
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "Custom Wraps",
      price: "3,500",
      features: ["Full Color Wrap", "Custom Forged Wheels", "Performance Tires", "Paint Correction"],
      icon: <Star className="w-6 h-6 text-accent-blue" />,
      popular: true
    },
    {
      name: "Suspension",
      price: "2,200",
      features: ["Full Custom Build", "Lift/Lowering Kit", "Interior Re-trim", "Lifetime Warranty"],
      icon: <Shield className="w-6 h-6 text-accent-blue" />
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[10px] font-bold tracking-[3px] uppercase text-accent-blue mb-4">Investment</h2>
          <h3 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter uppercase">BUILD TIERS</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={cn(
                "relative p-8 rounded-xl transition-all duration-500 glass",
                tier.popular ? "scale-105 z-10 border-accent-blue/40" : ""
              )}
            >
              <div className="mb-8">
                <div className="w-12 h-12 rounded-lg glass flex items-center justify-center mb-6">
                  {tier.icon}
                </div>
                <h4 className="text-xs font-bold tracking-[3px] text-text-dim mb-2 uppercase">{tier.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-text-dim">From</span>
                  <span className="text-2xl font-bold font-display">${tier.price}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-text-dim">
                    <Check className="w-4 h-4 text-accent-blue" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={cn(
                "w-full py-4 rounded-sm font-black text-xs uppercase tracking-[2px] transition-all",
                tier.popular ? "bg-accent-blue text-white hover:bg-accent-blue/90" : "glass hover:bg-white/10"
              )}>
                Inquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-24 px-6 md:px-12 bg-primary">
      <div className="max-w-5xl mx-auto glass rounded-xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 p-12 bg-white/5 flex flex-col justify-between">
          <div>
            <h3 className="text-4xl font-display font-extrabold leading-tight mb-6 uppercase">READY TO <br /> TRANSFORM?</h3>
            <p className="text-text-dim font-normal mb-12">
              Fill out the form and our lead designer will contact you within 24 hours to discuss your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[1px]">Fast Turnaround</p>
                  <p className="text-xs text-text-dim">Most builds completed in 7-10 days</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[1px]">Certified Quality</p>
                  <p className="text-xs text-text-dim">Authorized dealer for top brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 p-12">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center"
            >
              <div className="w-20 h-20 bg-accent-blue rounded-full flex items-center justify-center mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2 uppercase">Inquiry Received</h4>
              <p className="text-text-dim">We'll be in touch shortly to build your dream.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-text-dim">Email Address</label>
                  <input required type="email" className="w-full bg-white/5 border border-glass-border rounded-sm px-4 py-3 outline-none focus:border-accent-blue transition-all text-sm" placeholder="email@example.com" />
                </div>
                <div className="flex items-end">
                  <button type="submit" className="w-full bg-accent-blue text-white py-3 rounded-sm font-bold text-xs uppercase tracking-[2px] hover:bg-accent-blue/90 transition-all">
                    Get a Quote
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary pt-24 pb-12 px-6 md:px-12 border-t border-glass-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-display font-black tracking-[4px] uppercase mb-8 block">PTW <span className="text-accent-blue">FRESNO</span></a>
            <p className="text-text-dim max-w-sm mb-8 font-normal leading-relaxed">
              The Central Valley's premier destination for high-end automotive customization. Quality craftsmanship, exclusive brands, and a passion for excellence.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-text-dim hover:text-white transition-colors"><Instagram /></a>
              <a href="#" className="text-text-dim hover:text-white transition-colors"><Twitter /></a>
              <a href="#" className="text-text-dim hover:text-white transition-colors"><Facebook /></a>
            </div>
          </div>
          
          <div>
            <h5 className="text-[10px] font-bold tracking-[3px] uppercase mb-8 text-accent-blue">Navigation</h5>
            <ul className="space-y-4 text-text-dim text-xs uppercase tracking-[1px]">
              <li><a href="#services" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Showroom</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#inquiry" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold tracking-[3px] uppercase mb-8 text-accent-blue">Visit Us</h5>
            <ul className="space-y-4 text-text-dim text-xs uppercase tracking-[1px]">
              <li>1234 Custom Way</li>
              <li>Fresno, CA 93721</li>
              <li>Mon - Sat: 9am - 6pm</li>
              <li>(559) 555-0123</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-glass-border gap-6">
          <p className="text-[10px] text-text-dim uppercase tracking-widest">
            © 2024 PTW FRESNO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8 text-[10px] text-text-dim uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent-blue selection:text-white relative overflow-x-hidden">
      {/* Theme Background Elements */}
      <div className="fixed inset-0 z-[-1] cinema-bg" />
      <div className="fixed top-[20%] right-[10%] w-[400px] h-[1px] light-streak rotate-[-35deg] opacity-30 z-[-1]" />
      
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
}
