import React, { useState } from "react";
import WeeklyChart from "../Components/Statistics.jsx/WeeklyChart";
import MedicationPieChart from "../Components/Statistics.jsx/MedicationPieChart";
import HealthTrendChart from "../Components/Statistics.jsx/HealthTrendChart.jsx";
import HealthSummary from "../Components/Statistics.jsx/HealthSummary";
import IndicatorCard from "../Components/Statistics.jsx/IndicatorCard";
import { useNavigate } from "react-router-dom";

function Statistics() {
  const [activeTab, setActiveTab] = useState("weekly");

  const data = {
    compliance: 85,
    alerts: 5,
    healthStatus: "Bueno",
  };

  const renderActiveChart = () => {
    switch (activeTab) {
      case "weekly":
        return <WeeklyChart />;
      case "pie":
        return <MedicationPieChart />;
      case "trend":
        return <HealthTrendChart />;
      default:
        return <WeeklyChart />;
    }
  };

  const navigate = useNavigate();

  const handleBackTohome = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="relative w-full mb-6">
        <h2 className="text-2xl font-semibold text-teal-600">Estadísticas </h2>
        <button
          className="absolute top-0 right-0 px-4 py-2 rounded-lg bg-teal-600 text-white"
          onClick={handleBackTohome}
        >
          Regresar
        </button>
      </div>

      <div className="flex justify-center space-x-4 mb-6 border-b pb-2">
        <button
          onClick={() => setActiveTab("weekly")}
          className={`px-4 py-2 ${
            activeTab === "weekly"
              ? "border-b-2 border-teal-600 text-teal-600"
              : "text-gray-500"
          }`}
        >
          Gráfica Semanal
        </button>
        <button
          onClick={() => setActiveTab("pie")}
          className={`px-4 py-2 ${
            activeTab === "pie"
              ? "border-b-2 border-teal-600 text-teal-600"
              : "text-gray-500"
          }`}
        >
          Gráfica Circular
        </button>
        <button
          onClick={() => setActiveTab("trend")}
          className={`px-4 py-2 ${
            activeTab === "trend"
              ? "border-b-2 border-teal-600 text-teal-600"
              : "text-gray-500"
          }`}
        >
          Tendencia de Salud
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>{renderActiveChart()}</div>
        <div>
          <HealthSummary data={data} />
        </div>
      </div>

   
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <IndicatorCard
          title="Cumplimiento de Medicación"
          value="95%"
          status="success"
        />
        <IndicatorCard title="Alertas de Salud" value="2" status="warning" />
        <IndicatorCard
          title="Notificaciones Enviadas"
          value="10"
          status="info"
        />
        <IndicatorCard
          title="Próxima Dosis"
          value="En 3 horas"
          status="default"
        />
      </div>
    </div>
  );
}

export default Statistics;
