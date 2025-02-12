"use client";
import React ,{ useState } from "react";

function MainComponent() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <button
                onClick={() => setActiveTab("features")}
                className={`font-montserrat px-3 py-2 rounded-md ${
                  activeTab === "features"
                    ? "text-[#3498DB] font-bold"
                    : "text-[#7F8C8D] hover:text-[#3498DB]"
                }`}
              >
                Features
              </button>
            </div>
            <div>
              <a
                href="/"
                className="font-montserrat px-3 py-2 rounded-md text-[#7F8C8D] hover:text-[#3498DB]"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      </nav>

      {activeTab === "features" && (
        <section className="py-20 px-6 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-center font-montserrat text-4xl font-bold text-[#2C3E50] mb-6">
              AR Training Features
            </h1>
            <p className="text-center text-[#7F8C8D] font-montserrat text-xl mb-16 max-w-3xl mx-auto">
              Explore our comprehensive AR-powered training tools designed
              specifically for rural healthcare workers
            </p>

            <div className="space-y-16">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/3 text-center">
                    <i className="fas fa-list-check text-5xl text-[#3498DB] mb-4"></i>
                    <h2 className="font-montserrat text-2xl font-bold text-[#2C3E50]">
                      Step-by-Step Medical Procedures
                    </h2>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-[#7F8C8D] font-montserrat mb-4">
                      Interactive AR guides that walk you through common medical
                      procedures with precision and clarity.
                    </p>
                    <div className="bg-[#F8FAFC] p-6 rounded-lg">
                      <h3 className="font-montserrat text-lg font-bold text-[#2C3E50] mb-3">
                        Example Scenarios:
                      </h3>
                      <ul className="space-y-2 text-[#7F8C8D] font-montserrat">
                        <li>
                          • Blood pressure measurement with proper cuff
                          placement
                        </li>
                        <li>• Basic wound cleaning and dressing techniques</li>
                        <li>• Proper injection administration guidance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/3 text-center">
                    <i className="fas fa-check-double text-5xl text-[#3498DB] mb-4"></i>
                    <h2 className="font-montserrat text-2xl font-bold text-[#2C3E50]">
                      Real-Time Correction System
                    </h2>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-[#7F8C8D] font-montserrat mb-4">
                      Instant feedback and corrections to ensure proper
                      technique and patient safety.
                    </p>
                    <div className="bg-[#F8FAFC] p-6 rounded-lg">
                      <h3 className="font-montserrat text-lg font-bold text-[#2C3E50] mb-3">
                        Example Scenarios:
                      </h3>
                      <ul className="space-y-2 text-[#7F8C8D] font-montserrat">
                        <li>• Posture correction during patient examination</li>
                        <li>• Medical instrument handling guidance</li>
                        <li>• Proper hand positioning for procedures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/3 text-center">
                    <i className="fas fa-user-injured text-5xl text-[#3498DB] mb-4"></i>
                    <h2 className="font-montserrat text-2xl font-bold text-[#2C3E50]">
                      Virtual Patient Simulations
                    </h2>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-[#7F8C8D] font-montserrat mb-4">
                      Practice with realistic virtual patients displaying
                      various symptoms and conditions.
                    </p>
                    <div className="bg-[#F8FAFC] p-6 rounded-lg">
                      <h3 className="font-montserrat text-lg font-bold text-[#2C3E50] mb-3">
                        Example Scenarios:
                      </h3>
                      <ul className="space-y-2 text-[#7F8C8D] font-montserrat">
                        <li>• Common cold and flu diagnosis</li>
                        <li>• Emergency response training</li>
                        <li>• Chronic condition management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/3 text-center">
                    <i className="fas fa-video text-5xl text-[#3498DB] mb-4"></i>
                    <h2 className="font-montserrat text-2xl font-bold text-[#2C3E50]">
                      Remote Doctor Connection
                    </h2>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-[#7F8C8D] font-montserrat mb-4">
                      Connect with experienced doctors for real-time guidance
                      and consultations.
                    </p>
                    <div className="bg-[#F8FAFC] p-6 rounded-lg">
                      <h3 className="font-montserrat text-lg font-bold text-[#2C3E50] mb-3">
                        Example Scenarios:
                      </h3>
                      <ul className="space-y-2 text-[#7F8C8D] font-montserrat">
                        <li>• Live consultation support</li>
                        <li>• Complex case review sessions</li>
                        <li>• Emergency situation guidance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/3 text-center">
                    <i className="fas fa-x-ray text-5xl text-[#3498DB] mb-4"></i>
                    <h2 className="font-montserrat text-2xl font-bold text-[#2C3E50]">
                      Medical Imaging Training
                    </h2>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-[#7F8C8D] font-montserrat mb-4">
                      Learn to interpret X-rays and medical imaging with AR
                      overlay assistance.
                    </p>
                    <div className="bg-[#F8FAFC] p-6 rounded-lg">
                      <h3 className="font-montserrat text-lg font-bold text-[#2C3E50] mb-3">
                        Example Scenarios:
                      </h3>
                      <ul className="space-y-2 text-[#7F8C8D] font-montserrat">
                        <li>• Basic X-ray interpretation</li>
                        <li>• Anatomical structure identification</li>
                        <li>• Common abnormality detection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/3 text-center">
                    <i className="fas fa-chart-line text-5xl text-[#3498DB] mb-4"></i>
                    <h2 className="font-montserrat text-2xl font-bold text-[#2C3E50]">
                      Progress Tracking
                    </h2>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-[#7F8C8D] font-montserrat mb-4">
                      Monitor your learning journey and skill development over
                      time.
                    </p>
                    <div className="bg-[#F8FAFC] p-6 rounded-lg">
                      <h3 className="font-montserrat text-lg font-bold text-[#2C3E50] mb-3">
                        Example Scenarios:
                      </h3>
                      <ul className="space-y-2 text-[#7F8C8D] font-montserrat">
                        <li>• Skill proficiency assessments</li>
                        <li>• Performance analytics dashboard</li>
                        <li>• Personalized learning recommendations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <button className="bg-[#3498DB] text-white px-8 py-3 rounded-lg font-montserrat hover:bg-[#2980B9]">
                Request Demo
              </button>
            </div>
          </div>
        </section>
      )}

      {activeTab === "home" && (
        <section className="py-20 px-6 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="font-montserrat text-4xl font-bold text-[#2C3E50] mb-6">
              Welcome to AR Training for Rural Healthcare
            </h1>
            <p className="text-[#7F8C8D] font-montserrat text-xl mb-8 max-w-3xl mx-auto">
              Empowering rural healthcare workers with cutting-edge AR
              technology for better patient care
            </p>
            <button
              onClick={() => setActiveTab("features")}
              className="bg-[#3498DB] text-white px-8 py-3 rounded-lg font-montserrat hover:bg-[#2980B9]"
            >
              Explore Features
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export default MainComponent;