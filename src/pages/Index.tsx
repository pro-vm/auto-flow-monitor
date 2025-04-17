
import React, { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardTabs from '@/components/dashboard/DashboardTabs';
import DeliveryDashboard from '@/components/dashboard/DeliveryDashboard';
import RolloutDashboard from '@/components/dashboard/RolloutDashboard';

const Index = () => {
  const [activeTab, setActiveTab] = useState('delivery');
  const lastUpdated = '27 Mar 06:12 PM';

  return (
    <div className="flex flex-col min-h-screen bg-dashboard-light-bg">
      <DashboardHeader lastUpdated={lastUpdated} />
      <DashboardTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1">
        {activeTab === 'delivery' ? (
          <DeliveryDashboard />
        ) : (
          <RolloutDashboard />
        )}
      </div>
    </div>
  );
};

export default Index;
