
import React from 'react';
import { Factory, Clock, Gauge, Activity } from 'lucide-react';

interface DashboardHeaderProps {
  lastUpdated: string;
  isMobile?: boolean;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ lastUpdated, isMobile = false }) => {
  return (
    <div className="sticky top-0 z-10 w-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-md border-b border-indigo-100 py-3 sm:py-6 px-3 sm:px-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 sm:p-3 bg-indigo-500 rounded-lg sm:rounded-xl shadow-lg shadow-indigo-500/20">
            <Factory size={isMobile ? 20 : 24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Production Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-gray-600">Vehicle Manufacturing Analytics</p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/50 rounded-lg border border-indigo-100 shadow-sm">
            <Activity size={isMobile ? 16 : 18} className="text-indigo-600" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">Active</span>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/50 rounded-lg border border-indigo-100 shadow-sm">
            <Gauge size={isMobile ? 16 : 18} className="text-indigo-600" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">94%</span>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/50 rounded-lg border border-indigo-100 shadow-sm">
            <Clock size={isMobile ? 16 : 18} className="text-indigo-600" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
              {lastUpdated}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
