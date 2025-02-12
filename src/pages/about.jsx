"use client";
import React,{ useState }from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b py-4 px-6">
        <div className="flex justify-between items-center">
          <div className="font-montserrat text-2xl text-[#2C3E50]">
            HealthAI Rural
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
              href="/documentation"
              className="text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Training
            </a>
            <a
              href="/diagnosis"
              className="text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Diagnosis
            </a>
            <a
              href="/playground"
              className="text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Features
            </a>
            <a
              href="/pricing"
              className="text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Contact
            </a>
            <a
              href="/"
              className="text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              <i className="fas fa-home"></i> Home
            </a>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 font-montserrat">
            <a
              href="/documentation"
              className="block text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Training
            </a>
            <a
              href="/diagnosis"
              className="block text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Diagnosis
            </a>
            <a
              href="/playground"
              className="block text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Features
            </a>
            <a
              href="/pricing"
              className="block text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Contact
            </a>
            <a
              href="/"
              className="block text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              <i className="fas fa-home"></i> Home
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
                  About HealthAI Rural
                </h1>
                <p className="mt-6 text-xl text-[#7F8C8D] font-montserrat">
                  Bridging the healthcare gap in rural communities through
                  innovative AR and AI technologies
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/rural-healthcare.jpg"
                  alt="Rural healthcare facility with modern technology integration"
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center font-montserrat text-3xl font-bold text-[#2C3E50] mb-12">
              Our Mission
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <i className="fas fa-heart text-4xl text-[#3498DB]"></i>
                <h3 className="mt-4 font-montserrat text-xl font-bold text-[#2C3E50]">
                  Impact
                </h3>
                <p className="mt-2 text-[#7F8C8D] font-montserrat">
                  Improving healthcare access for millions in rural communities
                  through technology
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <i className="fas fa-graduation-cap text-4xl text-[#3498DB]"></i>
                <h3 className="mt-4 font-montserrat text-xl font-bold text-[#2C3E50]">
                  Education
                </h3>
                <p className="mt-2 text-[#7F8C8D] font-montserrat">
                  Empowering healthcare workers with cutting-edge training and
                  tools
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <i className="fas fa-laptop-medical text-4xl text-[#3498DB]"></i>
                <h3 className="mt-4 font-montserrat text-xl font-bold text-[#2C3E50]">
                  Innovation
                </h3>
                <p className="mt-2 text-[#7F8C8D] font-montserrat">
                  Leveraging AR and AI to revolutionize rural healthcare
                  delivery
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center font-montserrat text-3xl font-bold text-[#2C3E50] mb-12">
              Our Story
            </h2>
            <div className="space-y-8">
              <p className="text-lg text-[#7F8C8D] font-montserrat">
                Founded in 2025, HealthAI Rural emerged from a vision to
                transform healthcare delivery in underserved communities. Our
                team of healthcare professionals, technologists, and innovators
                came together with a shared mission: to bridge the healthcare
                gap using cutting-edge technology.
              </p>
              <p className="text-lg text-[#7F8C8D] font-montserrat">
                Today, we're proud to offer comprehensive AR-powered training
                solutions that enable healthcare workers to provide better care,
                make more accurate diagnoses, and save lives in rural
                communities around the world.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2C3E50] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="font-montserrat text-2xl font-bold">
              HealthAI Rural
            </h3>
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
                    href="/documentation"
                    className="hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
                  >
                    Training
                  </a>
                </li>
                <li>
                  <a
                    href="/diagnosis"
                    className="hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
                  >
                    Diagnosis
                  </a>
                </li>
                <li>
                  <a
                    href="/playground"
                    className="hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
                  >
                    Contact
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