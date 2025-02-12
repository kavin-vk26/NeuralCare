"use client";
import React ,{ useState, useCallback } from "react";

function MainComponent() {
  const [selectedTab, setSelectedTab] = useState("diagnosis");
  const [patientData, setPatientData] = useState({
    temperature: "",
    heartRate: "",
    bloodPressure: "",
    oxygenLevel: "",
  });
  const [riskLevel, setRiskLevel] = useState(null);
  const assessRisk = useCallback(() => {
    const { temperature, heartRate, bloodPressure, oxygenLevel } = patientData;
    if (!temperature || !heartRate || !bloodPressure || !oxygenLevel) {
      return;
    }

    // Simplified risk assessment logic
    const tempRisk = temperature > 38 || temperature < 36;
    const heartRisk = heartRate > 100 || heartRate < 60;
    const bpRisk = bloodPressure > 140 || bloodPressure < 90;
    const oxygenRisk = oxygenLevel < 95;

    const riskCount = [tempRisk, heartRisk, bpRisk, oxygenRisk].filter(
      Boolean
    ).length;
    setRiskLevel(
      riskCount >= 2 ? "high" : riskCount === 1 ? "moderate" : "normal"
    );
  }, [patientData]);
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setPatientData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const navigateHome = useCallback(() => {
    window.location.href = "/";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#F8FAFC] py-16 px-6 relative">
        <button
          onClick={navigateHome}
          className="absolute top-4 right-6 bg-[#3498DB] text-white px-6 py-2 rounded-lg hover:bg-[#2980B9] transition-colors font-montserrat flex items-center gap-2"
        >
          <i className="fas fa-home"></i>
          Home
        </button>
        <div className="max-w-6xl mx-auto">
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-[#2C3E50] text-center">
            AR Training Scenarios
          </h1>
          <p className="mt-6 text-xl text-[#7F8C8D] font-montserrat text-center max-w-3xl mx-auto">
            Experience hands-on medical training through our advanced AR
            technology platform
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <button
            onClick={() => setSelectedTab("diagnosis")}
            className={`p-4 rounded-lg font-montserrat font-bold ${
              selectedTab === "diagnosis"
                ? "bg-[#3498DB] text-white"
                : "bg-[#F8FAFC] text-[#2C3E50]"
            }`}
          >
            Disease Diagnosis Training
          </button>
          <button
            onClick={() => setSelectedTab("remote")}
            className={`p-4 rounded-lg font-montserrat font-bold ${
              selectedTab === "remote"
                ? "bg-[#3498DB] text-white"
                : "bg-[#F8FAFC] text-[#2C3E50]"
            }`}
          >
            Live Remote Assistance
          </button>
          <button
            onClick={() => setSelectedTab("virtual")}
            className={`p-4 rounded-lg font-montserrat font-bold ${
              selectedTab === "virtual"
                ? "bg-[#3498DB] text-white"
                : "bg-[#F8FAFC] text-[#2C3E50]"
            }`}
          >
            Virtual Patient Practice
          </button>
        </div>

        {selectedTab === "diagnosis" && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold font-montserrat text-[#2C3E50] mb-6">
                  Disease Diagnosis Training
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <i className="fas fa-clipboard-check text-[#3498DB] text-2xl mt-1"></i>
                    <div>
                      <h3 className="font-montserrat font-bold text-[#2C3E50] text-lg">
                        Patient Risk Assessment
                      </h3>
                      <div className="mt-4 space-y-4">
                        <div className="flex flex-col gap-2">
                          <label className="text-[#7F8C8D]">
                            Temperature (°C)
                          </label>
                          <input
                            type="number"
                            name="temperature"
                            value={patientData.temperature}
                            onChange={handleInputChange}
                            className="border rounded p-2"
                            placeholder="36.5"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[#7F8C8D]">
                            Heart Rate (bpm)
                          </label>
                          <input
                            type="number"
                            name="heartRate"
                            value={patientData.heartRate}
                            onChange={handleInputChange}
                            className="border rounded p-2"
                            placeholder="75"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[#7F8C8D]">
                            Blood Pressure (systolic)
                          </label>
                          <input
                            type="number"
                            name="bloodPressure"
                            value={patientData.bloodPressure}
                            onChange={handleInputChange}
                            className="border rounded p-2"
                            placeholder="120"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[#7F8C8D]">
                            Oxygen Level (%)
                          </label>
                          <input
                            type="number"
                            name="oxygenLevel"
                            value={patientData.oxygenLevel}
                            onChange={handleInputChange}
                            className="border rounded p-2"
                            placeholder="98"
                          />
                        </div>
                        <button
                          onClick={assessRisk}
                          className="w-full bg-[#3498DB] text-white py-2 rounded-lg mt-4 hover:bg-[#2980B9] transition-colors"
                        >
                          Analyze Patient Risk
                        </button>
                        {riskLevel && (
                          <div
                            className={`mt-4 p-4 rounded-lg ${
                              riskLevel === "high"
                                ? "bg-red-100 text-red-800"
                                : riskLevel === "moderate"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            <p className="font-montserrat font-bold">
                              Risk Level:{" "}
                              {riskLevel.charAt(0).toUpperCase() +
                                riskLevel.slice(1)}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/diagnosis-training.jpg"
                  alt="Healthcare worker using AR glasses to analyze patient symptoms"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        )}

        {selectedTab === "remote" && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold font-montserrat text-[#2C3E50] mb-6">
                  Live Remote Assistance
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <i className="fas fa-video text-[#3498DB] text-2xl mt-1"></i>
                    <div>
                      <h3 className="font-montserrat font-bold text-[#2C3E50] text-lg">
                        Video Consultations
                      </h3>
                      <p className="text-[#7F8C8D]">
                        Connect with medical experts in real-time for guidance
                        and support
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <i className="fas fa-x-ray text-[#3498DB] text-2xl mt-1"></i>
                    <div>
                      <h3 className="font-montserrat font-bold text-[#2C3E50] text-lg">
                        AR Image Analysis
                      </h3>
                      <p className="text-[#7F8C8D]">
                        Learn to interpret X-rays and medical imaging with AR
                        overlay assistance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <i className="fas fa-user-md text-[#3498DB] text-2xl mt-1"></i>
                    <div>
                      <h3 className="font-montserrat font-bold text-[#2C3E50] text-lg">
                        Expert Guidance
                      </h3>
                      <p className="text-[#7F8C8D]">
                        Receive real-time instructions and feedback from
                        experienced medical professionals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/remote-assistance.jpg"
                  alt="Remote medical consultation through AR interface"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        )}

        {selectedTab === "virtual" && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold font-montserrat text-[#2C3E50] mb-6">
                  Virtual Patient Practice
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <i className="fas fa-robot text-[#3498DB] text-2xl mt-1"></i>
                    <div>
                      <h3 className="font-montserrat font-bold text-[#2C3E50] text-lg">
                        AI Patient Simulations
                      </h3>
                      <p className="text-[#7F8C8D]">
                        Practice with realistic AI-powered virtual patients
                        displaying various conditions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <i className="fas fa-tasks text-[#3498DB] text-2xl mt-1"></i>
                    <div>
                      <h3 className="font-montserrat font-bold text-[#2C3E50] text-lg">
                        Interactive Exercises
                      </h3>
                      <p className="text-[#7F8C8D]">
                        Engage in hands-on diagnostic challenges and
                        decision-making scenarios
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <i className="fas fa-chart-line text-[#3498DB] text-2xl mt-1"></i>
                    <div>
                      <h3 className="font-montserrat font-bold text-[#2C3E50] text-lg">
                        Performance Analytics
                      </h3>
                      <p className="text-[#7F8C8D]">
                        Receive detailed feedback and track your progress over
                        time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/virtual-practice.jpg"
                  alt="Healthcare worker interacting with virtual patient simulation"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainComponent;