import React from 'react';
import HeaderPacient from '../Components/Pacient/HeaderPacient';
import ProfileCard from '../Components/Pacient/ProfileCard';
import HealthStatus from '../Components/Pacient/HealthStatus';
import Indicators from '../Components/Pacient/Indicators';

function PacientProfile() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <HeaderPacient />
      <ProfileCard />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl w-full">
        <Indicators />
        <HealthStatus />
      </div>
    </div>
  );
}

export default PacientProfile;
