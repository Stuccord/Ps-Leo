import React, { useState } from 'react';
import { Shield, Heart, TrendingUp, Users, FileCheck, Phone, Mail, MapPin, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-orange-600" />
              <span className="text-xl font-bold text-gray-900">BearGuard</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-orange-600 transition-colors">Why Us</button>
              <button onClick={() => scrollToSection('referral')} className="text-gray-700 hover:text-orange-600 transition-colors">Referral Network</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors">Contact</button>
              <button onClick={() => onNavigate('login')} className="px-4 py-2 text-orange-600 hover:text-orange-700 font-medium transition-colors">Login</button>
              <button onClick={() => onNavigate('signup')} className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium">Sign Up</button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Services</button>
              <button onClick={() => scrollToSection('why-us')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Why Us</button>
              <button onClick={() => scrollToSection('referral')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Referral Network</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Contact</button>
              <button onClick={() => onNavigate('login')} className="block w-full text-left px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg font-medium">Login</button>
              <button onClick={() => onNavigate('signup')} className="block w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-medium">Sign Up</button>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Had an accident? Don't suffer twice
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-orange-600 mb-6">
              Get fast, Stress-free insurance claims
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              BearGuard Support Services helps accident victims secure the compensation they rightfully deserve—fast, stress-free, and with compassion.
            </p>
            <p className="text-lg text-gray-600 mb-10">
              From gathering documents to dealing with insurance companies, police reports, and medical paperwork, we handle the difficult parts so you can focus on healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2">
                <span>Get Help Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => onNavigate('signup')} className="px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-lg">
                Become a Partner
              </button>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-12">
              We fight for what you deserve.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Us</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                BearGuard Support Services is an accident claims facilitation and advocacy agency dedicated to helping victims of road accidents secure fair and timely insurance compensation. We operate across Ghana with a growing network of hospital partners, legal experts, and field representatives.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Founded on integrity, care, and results, BearGuard exists because too many accident victims face stress, confusion, and delays when navigating insurance claims. We step in as a shield—protecting your rights and ensuring no victim is left to struggle alone.
              </p>
            </div>

            <div>
              <div className="bg-orange-50 p-8 rounded-xl mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To deliver fast, reliable, and compassionate support to accident victims by simplifying insurance claims, promoting fairness, and guiding clients back to stability.
                </p>
              </div>

              <div className="bg-orange-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  A Ghana where every accident victim receives the compensation and support they deserve—without stress, delay, or intimidation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">What We Do</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We provide end-to-end accident claims support
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <FileCheck className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assistance with insurance claims processing</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Coordination of police reports</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Heart className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Facilitation of medical reports</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <TrendingUp className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Claim calculations and guidance</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow-ups with insurance companies</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Heart className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support for emotional, financial, and physical recovery</h3>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <p className="text-lg text-gray-700 text-center">
              Whether you were a pedestrian, passenger, driver, or motor rider, BearGuard is here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Fast & stress-free claims</h3>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">No upfront costs (for victims who qualify)</h3>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Free education & guidance</h3>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Trusted hospital network</h3>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Compassionate and professional reps</h3>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Transparent processes—no hidden charges</h3>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">You only pay after compensation is received</h3>
              </div>
            </div>
          </div>

          <p className="text-2xl font-bold text-gray-900 text-center">
            At BearGuard, every client is treated like family.
          </p>
        </div>
      </section>

      <section id="referral" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Become a BearGuard Referral Partner</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Doctors, nurses, hospital staff, and community leaders can now earn monthly commissions for referring accident victims who need help.
          </p>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-2xl mx-auto mb-8">
            <h3 className="text-3xl font-bold mb-4">Earn While Helping Others</h3>
            <p className="text-xl">
              Every successful referral earns you GHC 200 commission—paid monthly through our secure system.
            </p>
          </div>

          <button onClick={() => onNavigate('signup')} className="px-10 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg inline-flex items-center space-x-2">
            <span>Go to Referral Portal</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works (For Victims)</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Contact BearGuard</h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-gray-900 mb-2">We verify your accident information</h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-gray-900 mb-2">We help secure your police and medical reports</h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold text-gray-900 mb-2">We calculate your claim</h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">5</div>
              <h3 className="font-bold text-gray-900 mb-2">We submit your documents to the insurance company</h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">6</div>
              <h3 className="font-bold text-gray-900 mb-2">We fight for maximum compensation</h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">7</div>
              <h3 className="font-bold text-gray-900 mb-2">You get paid—fast</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Testimonials</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-gray-700 italic mb-4 text-lg">
                "I didn't even know insurance could pay. A doctor referred me, and BearGuard handled everything."
              </p>
              <p className="font-bold text-gray-900">— Yovi</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-gray-700 italic mb-4 text-lg">
                "I had no money for surgery. Within weeks, my compensation was paid."
              </p>
              <p className="font-bold text-gray-900">— Abraham</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-gray-700 italic mb-4 text-lg">
                "Insurance delayed me for over a year. BearGuard stepped in, and within a week I was paid."
              </p>
              <p className="font-bold text-gray-900">— Jonathan</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-gray-700 italic mb-4 text-lg">
                "The police stressed me for a report and I couldn't afford a medical report. BearGuard saved me."
              </p>
              <p className="font-bold text-gray-900">— Seraphine</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Contact Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Phone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Call / WhatsApp</h3>
              <p className="text-gray-700">050 282 9901</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Mail className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-700">bearguard25@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700">Ghana</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
                <span className="text-xl font-bold">BearGuard</span>
              </div>
              <p className="text-gray-400">We fight for what you deserve</p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">About Us</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors">Services</button>
                <button onClick={() => scrollToSection('why-us')} className="block text-gray-400 hover:text-white transition-colors">Why Choose Us</button>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">For Partners</h3>
              <div className="space-y-2">
                <button onClick={() => onNavigate('signup')} className="block text-gray-400 hover:text-white transition-colors">Referral Portal</button>
                <button onClick={() => onNavigate('signup')} className="block text-gray-400 hover:text-white transition-colors">Become a Partner</button>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>050 282 9901</p>
                <p>bearguard25@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BearGuard Support Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
