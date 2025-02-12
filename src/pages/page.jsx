"use client";
import React, { useState } from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b py-4 px-6">
        <div className="flex justify-between items-center">
          <div className="font-montserrat text-2xl text-[#2C3E50]">
            NeuralCare
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              <i
                className={`fas ${
                  isMenuOpen ? "fa-times" : "fa-bars"
                } text-2xl`}
              ></i>
            </button>
          </div>
          <div className="hidden md:flex space-x-6 font-montserrat">
            <a
              href="/features"
              className="text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Features
            </a>
            <a
              href="/training"
              className="text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Training
            </a>
            <a
              href="http://localhost:3001"
              className="text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Diagnosis
            </a>
            <a
              href="/contact"
              className="text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Contact
            </a>
            <a
              href="/weather-health"
              className="text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Weather Health
            </a>
            <a
              href="/chat-bot"
              className="text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Chat Bot
            </a>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 font-montserrat">
            <a
              href="/features"
              className="block text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Features
            </a>
            <a
              href="/training"
              className="block text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Training
            </a>
            <a
              href="http://localhost:3001"
              className="block text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Diagnosis
            </a>
            <a
              href="/contact"
              className="block text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Contact
            </a>
            <a
              href="/weather-health"
              className="block text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Weather Health
            </a>
            <a
              href="/chat-bot"
              className="block text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Chat Bot
            </a>
          </div>
        )}
      </nav>

      <main>
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-[#2C3E50] leading-tight">
                  AR-Powered Medical Training for Healthcare Workers
                </h1>
                <p className="mt-6 text-xl text-[#7F8C8D] font-montserrat">
                  Empower healthcare workers with advanced AR technology for
                  hands-on medical training and real-time guidance
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/photo1.avif"
                  alt="Healthcare professional using augmented reality headset for medical training"
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center font-montserrat text-3xl font-bold text-[#2C3E50] mb-12">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <a
                href="/documentation"
                className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:translate-y-0"
              >
                <i className="fas fa-vr-cardboard text-4xl text-[#3498DB]"></i>
                <h3 className="mt-4 font-montserrat text-xl font-bold text-[#2C3E50]">
                  AR Step-by-Step Training
                </h3>
                <p className="mt-2 text-[#7F8C8D] font-montserrat">
                  Interactive AR guides for medical procedures and examinations
                </p>
              </a>
              <a
                href="/contact"
                className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:translate-y-0"
              >
                <i className="fas fa-user-md text-4xl text-[#3498DB]"></i>
                <h3 className="mt-4 font-montserrat text-xl font-bold text-[#2C3E50]">
                  Virtual Patient Simulations
                </h3>
                <p className="mt-2 text-[#7F8C8D] font-montserrat">
                  Practice with AI-powered virtual patient cases
                </p>
              </a>
              <a
                href="http://localhost:3001"
                className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:translate-y-0"
              >
                <i className="fas fa-microscope text-4xl text-[#3498DB]"></i>
                <h3 className="mt-4 font-montserrat text-xl font-bold text-[#2C3E50]">
                  AI Disease Detection
                </h3>
                <p className="mt-2 text-[#7F8C8D] font-montserrat">
                  Instant analysis of X-ray scans for TB, Pneumonia, Anemia, and
                  Malaria
                </p>
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center font-montserrat text-3xl font-bold text-[#2C3E50] mb-12">
              Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Trains rural healthcare workers with AR and AI guidance",
                "Instant corrections help them learn faster",
                "Remote doctors can guide them without traveling",
                "Virtual patients allow safe practice before handling real cases",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <i className="fas fa-check-circle text-[#3498DB] text-xl mt-1"></i>
                  <p className="font-montserrat text-lg text-[#7F8C8D]">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2C3E50] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="font-montserrat text-2xl font-bold">NeuralCare</h3>
            <p className="mt-2 font-montserrat">
              Empowering rural healthcare through AR training
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-montserrat font-bold mb-4">Links</h4>
              <ul className="space-y-2 font-montserrat">
                <li>
                  <a
                    href="/training"
                    className="hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
                  >
                    Training
                  </a>
                </li>
                <li>
                  <a
                    href="http://localhost:3001"
                    className="hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
                  >
                    Diagnosis
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/weather-health"
                    className="hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
                  >
                    Weather Health
                  </a>
                </li>
                <li>
                  <a
                    href="/chat-bot"
                    className="hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
                  >
                    Chat Bot
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;