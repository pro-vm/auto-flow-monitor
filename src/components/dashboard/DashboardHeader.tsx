
import React from 'react';
import { Clock } from 'lucide-react';

interface DashboardHeaderProps {
  lastUpdated: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ lastUpdated }) => {
  return (
    <div className="sticky top-0 z-10 w-full bg-white/70 backdrop-blur-md border-b border-gray-100 py-4 px-6 flex justify-between items-center shadow-sm">
      <h1 className="text-xl font-semibold bg-gradient-to-r from-dashboard-blue to-purple-600 bg-clip-text text-transparent">
        ETB - VEHICLE DASHBOARD
      </h1>
      <div className="flex items-center gap-2 text-xs bg-white/80 px-4 py-2 rounded-full shadow-sm border border-gray-100">
        <Clock size={14} className="text-dashboard-blue" />
        <span className="text-gray-600 font-medium">
          Last updated: {lastUpdated}
        </span>
      </div>
    </div>
  );
};

export default DashboardHeader;
