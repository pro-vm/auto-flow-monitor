
import React from 'react';
import { cn } from '@/lib/utils';
import { Truck, Box } from 'lucide-react';

interface DashboardTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const DashboardTabs: React.FC<DashboardTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-full px-8 py-4 bg-white/50 backdrop-blur-sm border-b border-indigo-100">
      <div className="flex gap-4">
        <button 
          className={cn(
            "flex items-center gap-2 py-2.5 px-6 font-medium text-sm rounded-xl transition-all duration-300",
            activeTab === 'rollout' 
              ? "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
              : "text-gray-600 hover:bg-indigo-50"
          )}
          onClick={() => onTabChange('rollout')}
        >
          <Box size={18} />
          Production Line
        </button>
        <button 
          className={cn(
            "flex items-center gap-2 py-2.5 px-6 font-medium text-sm rounded-xl transition-all duration-300",
            activeTab === 'delivery' 
              ? "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
              : "text-gray-600 hover:bg-indigo-50"
          )}
          onClick={() => onTabChange('delivery')}
        >
          <Truck size={18} />
          Delivery Status
        </button>
      </div>
    </div>
  );
};

export default DashboardTabs;
