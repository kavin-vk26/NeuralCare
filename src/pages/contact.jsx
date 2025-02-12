"use client";
import React ,{ useState } from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const faqs = [
    {
      question: "What equipment is needed for the AR training?",
      answer:
        "Our system requires AR-capable smart glasses or tablets that we provide as part of the training program. All necessary equipment is included in the package.",
    },
    {
      question: "How long does the training program last?",
      answer:
        "The core training program runs for 12 weeks, with flexible modules that can be completed at your own pace. Additional specialized training is available.",
    },
    {
      question: "Can multiple healthcare workers train simultaneously?",
      answer:
        "Yes, our platform supports both individual and group training sessions. Multiple workers can participate in virtual simulations simultaneously.",
    },
    {
      question: "Is internet connectivity required for all features?",
      answer:
        "While some features work offline, a stable internet connection is recommended for live expert assistance and real-time feedback features.",
    },
    {
      question: "What types of medical procedures are covered?",
      answer:
        "Our training covers a wide range of primary care procedures, emergency response, diagnostic techniques, and patient examination protocols.",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
              className="text-[#2C3E50]"
            >
              <i
                className={`fas ${
                  isMenuOpen ? "fa-times" : "fa-bars"
                } text-2xl`}
              ></i>
            </button>
          </div>
          <div className="hidden md:flex space-x-6 font-montserrat">
            <a href="/" className="text-[#2C3E50] hover:text-[#3498DB]">
              Home
            </a>
            <a href="/features" className="text-[#2C3E50] hover:text-[#3498DB]">
              Features
            </a>
            <a href="/training" className="text-[#2C3E50] hover:text-[#3498DB]">
              Training
            </a>
            <a href="/contact" className="text-[#2C3E50] hover:text-[#3498DB]">
              Contact
            </a>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 font-montserrat">
            <a href="/" className="block text-[#2C3E50]">
              Home
            </a>
            <a href="/features" className="block text-[#2C3E50]">
              Features
            </a>
            <a href="/training" className="block text-[#2C3E50]">
              Training
            </a>
            <a href="/contact" className="block text-[#2C3E50]">
              Contact
            </a>
          </div>
        )}
      </nav>

      <main className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#2C3E50] text-center font-montserrat mb-12">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] font-montserrat mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-[#2C3E50] mb-2 font-montserrat">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#3498DB]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#2C3E50] mb-2 font-montserrat">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#3498DB]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#2C3E50] mb-2 font-montserrat">
                      Inquiry Type
                    </label>
                    <select
                      name="type"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#3498DB]"
                    >
                      <option value="training">Training Program</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#2C3E50] mb-2 font-montserrat">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#3498DB]"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#3498DB] text-white py-3 rounded-lg hover:bg-[#2980B9] font-montserrat"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#2C3E50] font-montserrat mb-6">
                  Support Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-phone text-[#3498DB] text-xl"></i>
                    <div>
                      <p className="font-montserrat text-[#2C3E50]">
                        Technical Support:
                      </p>
                      <p className="font-montserrat text-[#7F8C8D]">
                        1-800-HEALTH-AI
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-envelope text-[#3498DB] text-xl"></i>
                    <div>
                      <p className="font-montserrat text-[#2C3E50]">
                        Email Support:
                      </p>
                      <p className="font-montserrat text-[#7F8C8D]">
                        support@neural.care
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-clock text-[#3498DB] text-xl"></i>
                    <div>
                      <p className="font-montserrat text-[#2C3E50]">
                        Available Hours:
                      </p>
                      <p className="font-montserrat text-[#7F8C8D]">
                        24/7 Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#2C3E50] font-montserrat mb-6">
                  Training Programs
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-calendar text-[#3498DB] text-xl"></i>
                    <div>
                      <p className="font-montserrat text-[#2C3E50]">
                        Next Batch Starts:
                      </p>
                      <p className="font-montserrat text-[#7F8C8D]">
                        February 1, 2025
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-users text-[#3498DB] text-xl"></i>
                    <div>
                      <p className="font-montserrat text-[#2C3E50]">
                        Group Size:
                      </p>
                      <p className="font-montserrat text-[#7F8C8D]">
                        Maximum 15 participants
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-certificate text-[#3498DB] text-xl"></i>
                    <div>
                      <p className="font-montserrat text-[#2C3E50]">
                        Certification:
                      </p>
                      <p className="font-montserrat text-[#7F8C8D]">
                        Included with completion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-[#2C3E50] text-center font-montserrat mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-[#2C3E50] font-montserrat mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[#7F8C8D] font-montserrat">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#2C3E50] text-white py-12 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="font-montserrat text-2xl font-bold">NeuralCare</h3>
            <p className="mt-2 font-montserrat">
              Empowering rural healthcare through AR training
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div>
              <h4 className="font-montserrat font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 font-montserrat">
                <li>
                  <a href="/" className="hover:text-[#3498DB]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/features" className="hover:text-[#3498DB]">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/training" className="hover:text-[#3498DB]">
                    Training
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-[#3498DB]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-[#3498DB]">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-2xl hover:text-[#3498DB]">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-2xl hover:text-[#3498DB]">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;