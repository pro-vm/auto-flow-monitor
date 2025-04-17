
import React from 'react';

interface DashboardHeaderProps {
  lastUpdated: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ lastUpdated }) => {
  return (
    <div className="w-full bg-gradient-to-r from-dashboard-blue/10 to-dashboard-blue/5 backdrop-blur-sm py-4 px-6 flex justify-between items-center shadow-sm">
      <h1 className="text-lg font-semibold text-gray-800 tracking-tight">
        ETB - VEHICLE DASHBOARD
      </h1>
      <span className="text-xs bg-white/80 px-3 py-1 rounded-full shadow-sm text-gray-600">
        Last updated: {lastUpdated}
      </span>
    </div>
  );
};

export default DashboardHeader;
