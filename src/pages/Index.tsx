
import React, { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardTabs from '@/components/dashboard/DashboardTabs';
import DeliveryDashboard from '@/components/dashboard/DeliveryDashboard';
import RolloutDashboard from '@/components/dashboard/RolloutDashboard';

const Index = () => {
  const [activeTab, setActiveTab] = useState('delivery');
  const lastUpdated = '27 Mar 06:12 PM';

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/10 to-indigo-50/10">
      <DashboardHeader lastUpdated={lastUpdated} />
      <DashboardTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 container mx-auto max-w-7xl px-4 py-6 animate-fade-in">
        <div className="glass-effect rounded-2xl shadow-sm overflow-hidden">
          {activeTab === 'delivery' ? (
            <DeliveryDashboard />
          ) : (
            <RolloutDashboard />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
