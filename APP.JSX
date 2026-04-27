import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Wifi, Waves, Utensils, Sparkles, Menu, X, Check } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkin: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navLinks = ['Home', 'Rooms', 'Amenities', 'Reviews', 'Contact'];

  const rooms = [
    {
      name: 'Deluxe Suite',
      description: 'Spacious suite with king bed, private balcony, and city views',
      price: '$299',
      image: 'linear-gradient(135deg, #D4AF37 0%, #F5F5DC 100%)'
    },
    {
      name: 'Premium Room',
      description: 'Elegant room with queen bed, modern amenities, and garden views',
      price: '$199',
      image: 'linear-gradient(135deg, #2C2C2C 0%, #D4AF37 100%)'
    },
    {
      name: 'Executive Studio',
      description: 'Contemporary studio with work area, lounge space, and luxury bath',
      price: '$249',
      image: 'linear-gradient(135deg, #F5F5DC 0%, #2C2C2C 100%)'
    },
    {
      name: 'Royal Penthouse',
      description: 'Ultimate luxury with panoramic views, private terrace, and concierge',
      price: '$499',
      image: 'linear-gradient(135deg, #D4AF37 0%, #2C2C2C 100%)'
    }
  ];

  const amenities = [
    { icon: Waves, name: 'Infinity Pool', description: 'Rooftop pool with stunning views' },
    { icon: Sparkles, name: 'Luxury Spa', description: 'Full-service spa and wellness center' },
    { icon: Utensils, name: 'Fine Dining', description: 'Award-winning restaurant and bar' },
    { icon: Wifi, name: 'High-Speed WiFi', description: 'Complimentary throughout property' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.email && formData.checkin) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', phone: '', email: '', checkin: '', message: '' });
      }, 3000);
    }
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
        className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal">
                Save<span className="text-gold">rainn</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-charcoal hover:text-gold transition-colors duration-200 text-sm font-medium tracking-wide"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-cream transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-charcoal" /> : <Menu className="w-6 h-6 text-charcoal" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden pb-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-charcoal hover:text-gold transition-colors duration-200 text-sm font-medium"
                >
                  {link}
                </a>
              ))}
            </motion.div>
          )}
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-charcoal via-gold to-cream"
          style={{ opacity: 0.95 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.2),transparent_50%)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Book Your Luxury Stay
          </h2>
          <p className="text-xl sm:text-2xl text-cream mb-8 max-w-2xl mx-auto">
            Experience unparalleled elegance and comfort at Saverainn Guest House
          </p>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center gap-3 bg-gold text-charcoal px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:scale-105 active:scale-[0.97] transition-all duration-200 ease-out shadow-lg"
          >
            <Phone className="w-5 h-5" />
            +1 (234) 567-8900
          </a>
        </motion.div>
      </section>

      {/* Featured Rooms */}
      <section id="rooms" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal mb-4">
              Our Luxury Rooms
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each room is thoughtfully designed to provide the ultimate comfort and sophistication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div
                  className="h-64 flex items-center justify-center text-white text-2xl font-serif font-bold"
                  style={{ background: room.image }}
                >
                  {room.name}
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-serif font-bold text-charcoal mb-2">{room.name}</h4>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gold">{room.price}<span className="text-lg text-gray-500">/night</span></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal mb-4">
              Premium Amenities
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Indulge in world-class facilities designed for your comfort and relaxation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <motion.div
                  key={amenity.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-cream hover:bg-gold/10 transition-colors duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-charcoal mb-2">{amenity.name}</h4>
                  <p className="text-gray-600">{amenity.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-cream">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal mb-4">
              Book Your Stay
            </h3>
            <p className="text-lg text-gray-600">
              Fill out the form below and we will get back to you shortly
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 sm:p-10"
          >
            {formSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-charcoal mb-2">
                  Thank You!
                </h4>
                <p className="text-gray-600">
                  We have received your inquiry and will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-200"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="checkin" className="block text-sm font-semibold text-charcoal mb-2">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    id="checkin"
                    name="checkin"
                    required
                    value={formData.checkin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-200 resize-none"
                    placeholder="Let us know if you have any special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-white py-4 rounded-lg font-semibold text-lg hover:bg-charcoal hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-2xl font-serif font-bold mb-4">
                Save<span className="text-gold">rainn</span>
              </h4>
              <p className="text-gray-400">
                Your luxury home away from home
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-gold">Contact Us</h5>
              <div className="space-y-3">
                <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors duration-200 justify-center md:justify-start">
                  <Phone className="w-4 h-4" />
                  +1 (234) 567-8900
                </a>
                <a href="mailto:info@saverainn.com" className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors duration-200 justify-center md:justify-start">
                  <Mail className="w-4 h-4" />
                  info@saverainn.com
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-gold">Location</h5>
              <div className="flex items-start gap-2 text-gray-300 justify-center md:justify-start">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>
                  123 Luxury Avenue<br />
                  Paradise City, PC 12345
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Saverainn Luxury Guest House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
