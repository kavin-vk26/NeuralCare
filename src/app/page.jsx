"use client";
import React,{useState} from "react";

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
              href="/diagnosis"
              className="text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Diagnosis
            </a>
            <a
              href={process.env.NEXT_PUBLIC_WEATHER_HEALTH_URL}
              className="text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Weather Health
            </a>
            <a
              href={process.env.NEXT_PUBLIC_CHAT_BOT_URL}
              className="text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              ChatBot
            </a>
            <a
              href="/contact"
              className="text-[#2C3E50] hover:text-[#3498DB] active:text-[#2980B9] transition-colors"
            >
              Contact
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
              href="/diagnosis"
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
          </div>
        )}
      </nav>

      <main>
        <section className="bg-gradient-to-b from-[#EBF5FB] to-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
                  🌍 AI-Powered Healthcare: Detect, Prevent, Protect
                </h1>
                <p className="text-xl text-[#7F8C8D] mb-4">
                  Transforming Disease Detection & Preventive Healthcare with AI
                </p>
                <p className="text-lg text-[#7F8C8D]">
                  Every second counts in healthcare. Our AI-driven system
                  detects diseases early, enhances accessibility, and ensures
                  faster treatment—bridging critical gaps in healthcare for
                  underserved communities.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="AI Healthcare Innovation showing medical professionals analyzing digital health data"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white p-4 rounded-xl shadow-lg hidden md:block">
                  <p className="text-sm font-semibold">
                    Powered by Advanced AI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-12">
              🚀 What We Do: AI for Smarter, Proactive Healthcare
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F8FAFC] p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🔍</span>
                  <h3 className="text-xl font-bold text-[#2C3E50]">
                    AI-Powered Early Disease Detection
                  </h3>
                </div>
                <p className="text-[#7F8C8D]">
                  Faster, accurate, and accessible in low-resource settings.
                </p>
              </div>
              <div className="bg-[#F8FAFC] p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🌦</span>
                  <h3 className="text-xl font-bold text-[#2C3E50]">
                    Weather-Linked Health Insights
                  </h3>
                </div>
                <p className="text-[#7F8C8D]">
                  Early warnings for weather-sensitive diseases.
                </p>
              </div>
              <div className="bg-[#F8FAFC] p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🏥</span>
                  <h3 className="text-xl font-bold text-[#2C3E50]">
                    Bridging Rural Healthcare Gap
                  </h3>
                </div>
                <p className="text-[#7F8C8D]">
                  Bringing fast, reliable diagnostics to remote areas.
                </p>
              </div>
              <div className="bg-[#F8FAFC] p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📡</span>
                  <h3 className="text-xl font-bold text-[#2C3E50]">
                    Scalable & Smart Solutions
                  </h3>
                </div>
                <p className="text-[#7F8C8D]">
                  AI-driven insights for better patient outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-12">
              📊 The Four Critical Diseases We Target
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">🫁</span>
                  <h3 className="text-2xl font-bold text-[#2C3E50]">
                    Tuberculosis (TB)
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-[#2C3E50] mb-4">
                      📌 The Challenge:
                    </h4>
                    <ul className="space-y-2 text-[#7F8C8D]">
                      <li>• 2.8 million cases annually in India</li>
                      <li>
                        • Rural areas have 30% lower access to diagnostic labs
                      </li>
                      <li>• Delayed diagnosis leads to complications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2C3E50] mb-4">
                      💡 Our Solution:
                    </h4>
                    <ul className="space-y-2 text-[#7F8C8D]">
                      <li>✅ AI-Powered X-Ray Analysis (90%+ accuracy)</li>
                      <li>✅ Faster diagnosis and treatment</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">🦟</span>
                  <h3 className="text-2xl font-bold text-[#2C3E50]">Malaria</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-[#2C3E50] mb-4">
                      📌 The Challenge:
                    </h4>
                    <ul className="space-y-2 text-[#7F8C8D]">
                      <li>• 5-6 million cases per year in India</li>
                      <li>
                        • ~70% of cases occur in rural & tribal areas due to
                        poor healthcare access
                      </li>
                      <li>
                        • Traditional diagnosis takes 1-2 hours, delaying
                        treatment
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2C3E50] mb-4">
                      💡 Our Solution:
                    </h4>
                    <ul className="space-y-2 text-[#7F8C8D]">
                      <li>
                        ✅ AI-Based Microscopic Analysis detects malaria
                        parasites in 20 seconds
                      </li>
                      <li>
                        ✅ Rapid, AI-driven detection helps reduce malaria
                        mortality
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">🩸</span>
                  <h3 className="text-2xl font-bold text-[#2C3E50]">Anemia</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-[#2C3E50] mb-4">
                      📌 The Challenge:
                    </h4>
                    <ul className="space-y-2 text-[#7F8C8D]">
                      <li>
                        • Over 50% of women and 60% of children in India suffer
                        from anemia
                      </li>
                      <li>
                        • Often goes undiagnosed until severe symptoms appear
                      </li>
                      <li>
                        • Fatigue, weakness, and cognitive delays impact daily
                        life and productivity
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2C3E50] mb-4">
                      💡 Our Solution:
                    </h4>
                    <ul className="space-y-2 text-[#7F8C8D]">
                      <li>
                        ✅ AI-Powered Blood Analysis detects anemia from medical
                        images & test data
                      </li>
                      <li>
                        ✅ Early detection enables timely dietary & medical
                        interventions
                      </li>
                      <li>
                        ✅ Weather-Based Alerts warn of fatigue risks in extreme
                        heat
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">🌬</span>
                  <h3 className="text-2xl font-bold text-[#2C3E50]">
                    Pneumonia
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-[#2C3E50] mb-4">
                      📌 The Challenge:
                    </h4>
                    <ul className="space-y-2 text-[#7F8C8D]">
                      <li>
                        • 120,000 children under 5 die annually from pneumonia
                        in India
                      </li>
                      <li>• 80% of pneumonia deaths occur in rural areas</li>
                      <li>• Manual X-ray analysis takes 30+ minutes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2C3E50] mb-4">
                      💡 Our Solution:
                    </h4>
                    <ul className="space-y-2 text-[#7F8C8D]">
                      <li>
                        ✅ AI-Powered Lung X-Rays detect pneumonia in 3 minutes
                      </li>
                      <li>
                        ✅ Faster identification prevents complications and
                        improves survival rates
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-12">
              🌟 The Future of AI + IoT in Healthcare
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <span className="text-4xl mb-4 block">🧠</span>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-4">
                  Smart & Adaptive AI
                </h3>
                <p className="text-[#7F8C8D]">
                  Integrates environmental data for context-aware health
                  insights
                </p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl mb-4 block">📡</span>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-4">
                  AI + IoT-Like Health Advisory
                </h3>
                <p className="text-[#7F8C8D]">
                  Making AI more responsive beyond traditional applications
                </p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl mb-4 block">🚀</span>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-4">
                  Preventive & Predictive Healthcare
                </h3>
                <p className="text-[#7F8C8D]">
                  Not just diagnosis but early intervention
                </p>
              </div>
            </div>
          </div>

          <section className="py-16 px-6 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-12">
                🏡 Rural Relevance: Predict & Prevent Before It's Too Late
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <span className="text-3xl mb-4 block">🚑</span>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-4">
                    Shifting from Treatment to Prevention
                  </h3>
                  <p className="text-[#7F8C8D]">
                    Early warnings for weather-sensitive diseases like malaria,
                    pneumonia, and anemia-related fatigue.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <span className="text-3xl mb-4 block">🌍</span>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-4">
                    Better Health, Fewer Hospital Visits
                  </h3>
                  <p className="text-[#7F8C8D]">
                    Helps rural communities prepare in advance, reducing delays
                    in treatment.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <span className="text-3xl mb-4 block">📉</span>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-4">
                    Lower Disease Burden
                  </h3>
                  <p className="text-[#7F8C8D]">
                    AI-driven insights keep communities healthier and safer in
                    remote areas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-6xl mx-auto mt-16 bg-[#3498DB] text-white rounded-xl">
            <div className="py-16 px-6 text-center">
              <h2 className="text-3xl font-bold mb-8">
                💙 Join the Healthcare Revolution
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <span className="text-4xl mb-4 block">📍</span>
                  <p>
                    Real-time AI diagnostics for better healthcare accessibility
                  </p>
                </div>
                <div>
                  <span className="text-4xl mb-4 block">⏳</span>
                  <p>
                    Faster disease detection, saving lives and improving
                    treatment
                  </p>
                </div>
                <div>
                  <span className="text-4xl mb-4 block">💡</span>
                  <p>
                    A future where early intervention prevents major health
                    crises
                  </p>
                </div>
              </div>
              <p className="mt-8 text-xl">
                🔗 Your health, our mission. Experience AI-powered healthcare
                today!
              </p>
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
                    href="/diagnosis"
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
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;