
import React from 'react';
import { cn } from '@/lib/utils';

interface DashboardTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const DashboardTabs: React.FC<DashboardTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-full px-4 py-2 flex border-b">
      <button 
        className={cn(
          "py-2 px-4 font-medium text-sm",
          activeTab === 'rollout' 
            ? "text-dashboard-red border-b-2 border-dashboard-red" 
            : "text-gray-500"
        )}
        onClick={() => onTabChange('rollout')}
      >
        Roll Out
      </button>
      <button 
        className={cn(
          "py-2 px-4 font-medium text-sm",
          activeTab === 'delivery' 
            ? "text-dashboard-red border-b-2 border-dashboard-red" 
            : "text-gray-500"
        )}
        onClick={() => onTabChange('delivery')}
      >
        Delivery
      </button>
    </div>
  );
};

export default DashboardTabs;
