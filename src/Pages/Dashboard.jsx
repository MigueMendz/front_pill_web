import React from "react";
import Header from "../Components/Home/Header";
import Slidebar from "../Components/Home/Slidebar";
import InfoCards from "../Components/Home/InfoCards";
import Statistics from "../Components/Home/Statistics";
import LatestTransactions from "../Components/Home/LatestTransactions";
import MedicationCalendar from "../Components/Home/MedicationCalendar";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <Slidebar />

      <div className="flex-1 p-6">
          <Header />
         
       

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <InfoCards />
          </div>
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
            <Statistics />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow lg:col-span-1">
            <MedicationCalendar />
          </div>

          <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow">
            <LatestTransactions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
