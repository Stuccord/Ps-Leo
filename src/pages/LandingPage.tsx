import React, { useState } from 'react';
import { Shield, Heart, TrendingUp, Users, FileCheck, Phone, Mail, MapPin, CheckCircle, ArrowRight, Menu, X, Clock, Award, Headphones } from 'lucide-react';

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
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <img
                src="/Untitled-2 (12).png"
                alt="BearGuard Support Services"
                className="h-16 w-auto"
              />
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-lg">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-lg">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-lg">Services</button>
              <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-lg">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-lg">Contact</button>
              <button onClick={() => onNavigate('login')} className="px-6 py-2.5 text-orange-600 hover:text-orange-700 font-semibold transition-colors text-lg">Login</button>
              <button onClick={() => onNavigate('signup')} className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl font-semibold text-lg">Join Network</button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2">
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-lg text-lg">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-lg text-lg">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-lg text-lg">Services</button>
              <button onClick={() => scrollToSection('why-us')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-lg text-lg">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-lg text-lg">Contact</button>
              <button onClick={() => onNavigate('login')} className="block w-full text-left px-4 py-3 text-orange-600 hover:bg-orange-50 rounded-lg font-medium text-lg">Login</button>
              <button onClick={() => onNavigate('signup')} className="block w-full px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-medium text-lg">Join Network</button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-5 py-2 bg-orange-600 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
                🛡️ Ghana's Trusted Insurance Claims Partner
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Had an accident?
                <span className="block text-orange-600 mt-2">Don't suffer twice</span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                Get fast, stress-free insurance claims
              </p>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                BearGuard Support Services helps accident victims across Ghana secure the compensation they rightfully deserve—without the hassle, stress, or delay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-10 py-5 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-all shadow-2xl hover:shadow-orange-200 font-bold text-xl flex items-center justify-center space-x-2"
                >
                  <span>Get Help Now</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
                <button
                  onClick={() => onNavigate('signup')}
                  className="px-10 py-5 bg-white text-orange-600 border-3 border-orange-600 rounded-xl hover:bg-orange-50 transition-all shadow-xl font-bold text-xl"
                >
                  Become a Partner
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-orange-600">GHC 200</div>
                  <div className="text-sm text-gray-600 mt-1">Per Referral</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-orange-600">Fast</div>
                  <div className="text-sm text-gray-600 mt-1">Processing</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600 mt-1">Support</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl opacity-20 blur-2xl"></div>
              <img
                src="/WhatsApp Image 2025-11-21 at 14.53.38_237cc202.jpg"
                alt="Accident victim getting support"
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 mb-3" />
              <h3 className="text-xl font-bold mb-2">No Upfront Costs</h3>
              <p className="text-orange-100">Pay only after compensation</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 mb-3" />
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-orange-100">Trained professionals nationwide</p>
            </div>
            <div className="flex flex-col items-center">
              <Headphones className="w-12 h-12 mb-3" />
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-orange-100">Always here when you need us</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About BearGuard</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Ghana's leading accident claims facilitation and advocacy agency
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img
                src="/WhatsApp Image 2025-11-21 at 14.53.38_5172faac.jpg"
                alt="Professional African team working together"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                BearGuard Support Services is Ghana's premier accident claims facilitation and advocacy agency. We're dedicated to helping road accident victims secure fair and timely insurance compensation.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                With a growing network of hospital partners, legal experts, and field representatives across Ghana, we step in as your shield—protecting your rights and ensuring no victim struggles alone.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-7 h-7 text-orange-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Founded on integrity, care, and results</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-7 h-7 text-orange-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Nationwide hospital and legal network</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-7 h-7 text-orange-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Proven track record of successful claims</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-10 rounded-3xl text-white shadow-2xl">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-xl text-orange-50 leading-relaxed">
                To deliver fast, reliable, and compassionate support to accident victims by simplifying insurance claims, promoting fairness, and guiding clients back to stability.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-10 rounded-3xl text-white shadow-2xl">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-xl text-blue-50 leading-relaxed">
                A Ghana where every accident victim receives the compensation and support they deserve—without stress, delay, or intimidation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive end-to-end accident claims support tailored to Ghana's insurance landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <FileCheck className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance Claims Processing</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Complete assistance with all paperwork, documentation, and submissions to insurance companies</p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Police Reports Coordination</h3>
              <p className="text-lg text-gray-600 leading-relaxed">We handle all communication and follow-ups with law enforcement agencies</p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical Reports Facilitation</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Fast-track your medical documentation through our hospital network</p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Claim Calculations</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Expert guidance to maximize your rightful compensation amount</p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance Follow-ups</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Persistent advocacy until you receive what you deserve</p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recovery Support</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Emotional, financial, and physical recovery guidance</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-12 rounded-3xl shadow-2xl text-center text-white">
            <p className="text-3xl font-bold">
              Whether you're a pedestrian, passenger, driver, or motor rider—BearGuard fights for you
            </p>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Why Choose BearGuard</h2>
            <p className="text-2xl text-gray-600">The trusted choice for accident victims across Ghana</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <img
                src="/WhatsApp Image 2025-11-21 at 14.53.39_4041563b.jpg"
                alt="Confident professional ready to help"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-orange-50 p-6 rounded-2xl border-2 border-orange-100">
                <CheckCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-2xl">Fast & Stress-Free Claims</h3>
                  <p className="text-gray-600 text-lg">We expedite the entire process so you can focus on recovery</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-orange-50 p-6 rounded-2xl border-2 border-orange-100">
                <CheckCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-2xl">No Upfront Costs</h3>
                  <p className="text-gray-600 text-lg">For qualifying victims—you only pay after receiving compensation</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-orange-50 p-6 rounded-2xl border-2 border-orange-100">
                <CheckCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-2xl">Trusted Hospital Network</h3>
                  <p className="text-gray-600 text-lg">Strategic partnerships with hospitals across Ghana</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-orange-50 p-6 rounded-2xl border-2 border-orange-100">
                <CheckCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-2xl">Transparent Process</h3>
                  <p className="text-gray-600 text-lg">No hidden charges or surprises—complete clarity</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-orange-50 p-6 rounded-2xl border-2 border-orange-100">
                <CheckCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-2xl">Compassionate Support</h3>
                  <p className="text-gray-600 text-lg">Every client is treated like family throughout the journey</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-12 rounded-3xl text-center border-3 border-orange-200 shadow-xl">
            <p className="text-4xl font-bold text-gray-900">
              At BearGuard, every client is treated like family
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-lg font-bold mb-8 shadow-lg">
                💰 Referral Partner Program
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">Earn While Helping Others</h2>
              <p className="text-2xl mb-10 text-orange-50 leading-relaxed">
                Doctors, nurses, hospital staff, and community leaders can now earn monthly commissions for referring accident victims who need our help.
              </p>

              <div className="bg-white/15 backdrop-blur-sm p-10 rounded-3xl mb-10 border-2 border-white/30 shadow-2xl">
                <h3 className="text-4xl font-bold mb-4">GHC 200 Per Successful Referral</h3>
                <p className="text-xl text-orange-100">
                  Join our trusted network and receive monthly payments through our secure system. Make a difference while earning steady income.
                </p>
              </div>

              <button
                onClick={() => onNavigate('signup')}
                className="px-12 py-5 bg-white text-orange-600 rounded-xl hover:bg-gray-100 transition-all shadow-2xl hover:shadow-white/50 font-bold text-2xl inline-flex items-center space-x-3"
              >
                <span>Join Our Network Today</span>
                <ArrowRight className="w-7 h-7" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-white to-orange-200 rounded-3xl transform rotate-3 opacity-50"></div>
              <img
                src="/WhatsApp Image 2025-11-21 at 14.53.39_d63d639e.jpg"
                alt="Patient consultation with healthcare professional"
                className="relative rounded-3xl shadow-2xl w-full h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Real Stories from Ghana</h2>
            <p className="text-2xl text-gray-600">Hear from accident victims we've helped recover their rightful compensation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  Y
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-2xl">Yovi</p>
                  <p className="text-lg text-gray-500">Accident Victim, Accra</p>
                </div>
              </div>
              <p className="text-gray-700 text-xl leading-relaxed italic">
                "I didn't even know insurance could pay for my treatment. A doctor at the hospital referred me to BearGuard, and they handled everything. I'm so grateful!"
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  A
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-2xl">Abraham</p>
                  <p className="text-lg text-gray-500">Recovered Patient, Kumasi</p>
                </div>
              </div>
              <p className="text-gray-700 text-xl leading-relaxed italic">
                "I had no money for surgery after my accident. Within weeks, BearGuard secured my compensation and I got the treatment I needed. They saved my life."
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  J
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-2xl">Jonathan</p>
                  <p className="text-lg text-gray-500">Satisfied Client, Takoradi</p>
                </div>
              </div>
              <p className="text-gray-700 text-xl leading-relaxed italic">
                "The insurance company delayed me for over a year. BearGuard stepped in with their expertise, and within a week, I was paid. Incredible service!"
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  S
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-2xl">Seraphine</p>
                  <p className="text-lg text-gray-500">Grateful Client, Tamale</p>
                </div>
              </div>
              <p className="text-gray-700 text-xl leading-relaxed italic">
                "The police stressed me for a report, and I couldn't afford a medical report. BearGuard handled all of that and more. God bless them!"
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-2xl text-gray-600">We're here to help you 24/7—reach out anytime</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-10 rounded-3xl text-center text-white shadow-2xl hover:shadow-orange-200 transition-all">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="font-bold mb-4 text-2xl">Call / WhatsApp</h3>
              <p className="text-3xl font-bold">050 282 9901</p>
              <p className="text-orange-100 mt-2 text-lg">Available 24/7</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-10 rounded-3xl text-center text-white shadow-2xl hover:shadow-blue-200 transition-all">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold mb-4 text-2xl">Email Us</h3>
              <p className="text-xl font-bold break-all">bearguard25@gmail.com</p>
              <p className="text-blue-100 mt-2 text-lg">Quick response guaranteed</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 p-10 rounded-3xl text-center text-white shadow-2xl hover:shadow-green-200 transition-all">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold mb-4 text-2xl">Location</h3>
              <p className="text-3xl font-bold">Ghana</p>
              <p className="text-green-100 mt-2 text-lg">Nationwide coverage</p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-orange-50 to-orange-100 p-12 rounded-3xl text-center border-2 border-orange-200">
            <img
              src="/WhatsApp Image 2025-11-21 at 14.53.39_fca7de1a.jpg"
              alt="Patient receiving guidance from healthcare professional"
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl mb-8 h-[400px] object-cover"
            />
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-2xl text-gray-700 mb-8">Let us fight for the compensation you deserve</p>
            <button
              onClick={() => scrollToSection('home')}
              className="px-12 py-5 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-all shadow-2xl font-bold text-2xl"
            >
              Contact Us Now
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img
                src="/Untitled-2 (12).png"
                alt="BearGuard Support Services"
                className="h-20 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-xl leading-relaxed">We fight for what you deserve</p>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-2xl">Quick Links</h3>
              <div className="space-y-3">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition-colors text-lg">Home</button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors text-lg">About Us</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors text-lg">Services</button>
                <button onClick={() => scrollToSection('why-us')} className="block text-gray-400 hover:text-white transition-colors text-lg">Why Choose Us</button>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-2xl">For Partners</h3>
              <div className="space-y-3">
                <button onClick={() => onNavigate('signup')} className="block text-gray-400 hover:text-white transition-colors text-lg">Referral Portal</button>
                <button onClick={() => onNavigate('signup')} className="block text-gray-400 hover:text-white transition-colors text-lg">Become a Partner</button>
                <button onClick={() => onNavigate('login')} className="block text-gray-400 hover:text-white transition-colors text-lg">Partner Login</button>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-2xl">Contact</h3>
              <div className="space-y-3 text-gray-400 text-lg">
                <p>📞 050 282 9901</p>
                <p>✉️ bearguard25@gmail.com</p>
                <p>📍 Ghana (Nationwide)</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; 2025 BearGuard Support Services. All rights reserved. We fight for what you deserve.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
