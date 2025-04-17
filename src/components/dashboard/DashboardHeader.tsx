
import React from 'react';

interface DashboardHeaderProps {
  lastUpdated: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ lastUpdated }) => {
  return (
    <div className="w-full bg-dashboard-header py-3 px-4 flex justify-between items-center">
      <h1 className="text-md font-semibold">ETB - VEHICLE DASHBOARD</h1>
      <span className="text-xs">Last updated on: {lastUpdated}</span>
    </div>
  );
};

export default DashboardHeader;
