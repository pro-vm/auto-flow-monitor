
import React from 'react';
import { Factory, Clock, Gauge, Activity } from 'lucide-react';

interface DashboardHeaderProps {
  lastUpdated: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ lastUpdated }) => {
  return (
    <div className="sticky top-0 z-10 w-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-md border-b border-indigo-100 py-6 px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-indigo-500 rounded-xl shadow-lg shadow-indigo-500/20">
            <Factory size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Production Dashboard
            </h1>
            <p className="text-gray-600 text-sm">Vehicle Manufacturing Analytics</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-lg border border-indigo-100 shadow-sm">
            <Activity size={18} className="text-indigo-600" />
            <span className="text-sm font-medium text-gray-700">Production Active</span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-lg border border-indigo-100 shadow-sm">
            <Gauge size={18} className="text-indigo-600" />
            <span className="text-sm font-medium text-gray-700">Efficiency: 94%</span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-lg border border-indigo-100 shadow-sm">
            <Clock size={18} className="text-indigo-600" />
            <span className="text-sm font-medium text-gray-700">
              Updated: {lastUpdated}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
