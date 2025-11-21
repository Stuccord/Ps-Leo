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
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img
                src="/Untitled-2 (12).png"
                alt="BearGuard Support Services"
                className="h-12 w-auto"
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Why Us</button>
              <button onClick={() => scrollToSection('referral')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Referral Network</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contact</button>
              <button onClick={() => onNavigate('login')} className="px-4 py-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors">Login</button>
              <button onClick={() => onNavigate('signup')} className="px-6 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all hover:shadow-lg font-semibold">Sign Up</button>
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

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6">
                Ghana's Trusted Claims Support Service
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Had an accident? <br />
                <span className="text-orange-600">Don't suffer twice</span>
              </h1>
              <p className="text-2xl font-semibold text-gray-700 mb-6">
                Get fast, stress-free insurance claims
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                BearGuard Support Services helps accident victims across Ghana secure the compensation they rightfully deserve—fast, stress-free, and with compassion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all hover:shadow-xl font-semibold text-lg flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <span>Get Help Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('signup')}
                  className="px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-lg hover:bg-orange-50 transition-all font-semibold text-lg"
                >
                  Become a Partner
                </button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>No upfront costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Fast processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Expert support</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthcare professional helping patient in Ghana"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We fight for what you deserve.
            </h2>
            <p className="text-xl text-orange-100">
              From gathering documents to dealing with insurance companies—we handle the difficult parts so you can focus on healing.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About BearGuard</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ghana's leading accident claims facilitation and advocacy agency
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional African team"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                BearGuard Support Services is an accident claims facilitation and advocacy agency dedicated to helping victims of road accidents secure fair and timely insurance compensation. We operate across Ghana with a growing network of hospital partners, legal experts, and field representatives.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Founded on integrity, care, and results, BearGuard exists because too many accident victims face stress, confusion, and delays when navigating insurance claims. We step in as a shield—protecting your rights and ensuring no victim is left to struggle alone.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To deliver fast, reliable, and compassionate support to accident victims by simplifying insurance claims, promoting fairness, and guiding clients back to stability.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                A Ghana where every accident victim receives the compensation and support they deserve—without stress, delay, or intimidation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end accident claims support tailored to Ghana's unique insurance landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <FileCheck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance Claims Processing</h3>
              <p className="text-gray-600">Complete assistance with all paperwork and submissions</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Police Reports Coordination</h3>
              <p className="text-gray-600">We handle all communication with law enforcement</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Reports Facilitation</h3>
              <p className="text-gray-600">Fast-track your medical documentation</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Claim Calculations & Guidance</h3>
              <p className="text-gray-600">Maximize your rightful compensation</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance Company Follow-ups</h3>
              <p className="text-gray-600">We persist until you get what you deserve</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Holistic Recovery Support</h3>
              <p className="text-gray-600">Emotional, financial, and physical guidance</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-8 rounded-2xl shadow-xl text-center text-white">
            <p className="text-xl md:text-2xl font-semibold">
              Whether you were a pedestrian, passenger, driver, or motor rider—BearGuard is here for you
            </p>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose BearGuard</h2>
            <p className="text-xl text-gray-600">The trusted choice for accident victims across Ghana</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img
                src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Compassionate healthcare support in Ghana"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>

            <div className="grid gap-4">
              <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">Fast & stress-free claims</h3>
                  <p className="text-gray-600">We expedite the entire process</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">No upfront costs</h3>
                  <p className="text-gray-600">For victims who qualify</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">Trusted hospital network</h3>
                  <p className="text-gray-600">Partnerships across Ghana</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">Transparent processes</h3>
                  <p className="text-gray-600">No hidden charges or surprises</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">Pay after compensation</h3>
                  <p className="text-gray-600">You only pay when you get paid</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-2xl text-center border-2 border-orange-200">
            <p className="text-2xl md:text-3xl font-bold text-gray-900">
              At BearGuard, every client is treated like family
            </p>
          </div>
        </div>
      </section>

      <section id="referral" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 to-orange-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                Referral Partner Program
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Become a BearGuard Referral Partner</h2>
              <p className="text-xl mb-8 text-orange-100 leading-relaxed">
                Doctors, nurses, hospital staff, and community leaders can now earn monthly commissions for referring accident victims who need help.
              </p>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8 border border-white/20">
                <h3 className="text-3xl font-bold mb-4">Earn While Helping Others</h3>
                <p className="text-xl text-orange-100">
                  Every successful referral earns you <span className="font-bold text-2xl text-white">GHC 200</span> commission—paid monthly through our secure system.
                </p>
              </div>

              <button
                onClick={() => onNavigate('signup')}
                className="px-10 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl font-bold text-lg inline-flex items-center space-x-2 transform hover:scale-105"
              >
                <span>Join Our Referral Network</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white to-orange-200 rounded-3xl transform -rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="African healthcare professionals"
                className="relative rounded-3xl shadow-2xl w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Your journey from accident to compensation in 7 simple steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: 1, title: 'Contact BearGuard', desc: 'Reach out via phone or WhatsApp' },
              { num: 2, title: 'We verify your case', desc: 'Quick assessment of your accident' },
              { num: 3, title: 'Documents secured', desc: 'Police and medical reports obtained' },
              { num: 4, title: 'Claim calculated', desc: 'We determine fair compensation' },
              { num: 5, title: 'Submission', desc: 'Documents sent to insurance company' },
              { num: 6, title: 'We fight for you', desc: 'Persistent follow-up for maximum payout' },
              { num: 7, title: 'You get paid', desc: 'Fast compensation delivery' },
            ].map((step) => (
              <div key={step.num} className="text-center bg-gray-50 p-6 rounded-2xl hover:bg-orange-50 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Real Stories, Real Results</h2>
            <p className="text-xl text-gray-600">Hear from Ghanaians we've helped</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  Y
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Yovi</p>
                  <p className="text-sm text-gray-500">Accident Victim</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "I didn't even know insurance could pay. A doctor referred me, and BearGuard handled everything. I'm grateful."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  A
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Abraham</p>
                  <p className="text-sm text-gray-500">Recovered Patient</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "I had no money for surgery. Within weeks, my compensation was paid. BearGuard saved my life."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  J
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Jonathan</p>
                  <p className="text-sm text-gray-500">Satisfied Client</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "Insurance delayed me for over a year. BearGuard stepped in, and within a week I was paid. Incredible!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  S
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Seraphine</p>
                  <p className="text-sm text-gray-500">Grateful Client</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "The police stressed me for a report and I couldn't afford a medical report. BearGuard saved me."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">We're here to help you 24/7</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow border border-orange-200">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Call / WhatsApp</h3>
              <p className="text-xl font-semibold text-orange-600">050 282 9901</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Email Us</h3>
              <p className="text-lg font-semibold text-blue-600 break-all">bearguard25@gmail.com</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Location</h3>
              <p className="text-xl font-semibold text-green-600">Ghana</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img
                src="/Untitled-1 (5).png"
                alt="BearGuard Support Services"
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-lg">We fight for what you deserve</p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
              <div className="space-y-3">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">About Us</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors">Services</button>
                <button onClick={() => scrollToSection('why-us')} className="block text-gray-400 hover:text-white transition-colors">Why Choose Us</button>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-lg">For Partners</h3>
              <div className="space-y-3">
                <button onClick={() => onNavigate('signup')} className="block text-gray-400 hover:text-white transition-colors">Referral Portal</button>
                <button onClick={() => onNavigate('signup')} className="block text-gray-400 hover:text-white transition-colors">Become a Partner</button>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-lg">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <p>050 282 9901</p>
                <p>bearguard25@gmail.com</p>
                <p>Ghana</p>
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
