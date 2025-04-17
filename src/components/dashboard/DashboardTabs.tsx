
import React from 'react';
import { cn } from '@/lib/utils';

interface DashboardTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const DashboardTabs: React.FC<DashboardTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-full px-6 py-3 flex gap-4 border-b bg-white/50 backdrop-blur-sm">
      <button 
        className={cn(
          "py-2 px-6 font-medium text-sm rounded-full transition-all duration-200",
          activeTab === 'rollout' 
            ? "bg-dashboard-blue text-white shadow-md shadow-dashboard-blue/20" 
            : "text-gray-500 hover:bg-gray-100"
        )}
        onClick={() => onTabChange('rollout')}
      >
        Roll Out
      </button>
      <button 
        className={cn(
          "py-2 px-6 font-medium text-sm rounded-full transition-all duration-200",
          activeTab === 'delivery' 
            ? "bg-dashboard-blue text-white shadow-md shadow-dashboard-blue/20" 
            : "text-gray-500 hover:bg-gray-100"
        )}
        onClick={() => onTabChange('delivery')}
      >
        Delivery
      </button>
    </div>
  );
};

export default DashboardTabs;
