
import React, { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardTabs from '@/components/dashboard/DashboardTabs';
import DeliveryDashboard from '@/components/dashboard/DeliveryDashboard';
import RolloutDashboard from '@/components/dashboard/RolloutDashboard';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [activeTab, setActiveTab] = useState('delivery');
  const isMobile = useIsMobile();

  const lastUpdated = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50/10 to-purple-50/10">
      <DashboardHeader lastUpdated={lastUpdated} isMobile={isMobile} />
      <DashboardTabs activeTab={activeTab} onTabChange={setActiveTab} isMobile={isMobile} />
      
      <div className={`flex-1 container mx-auto px-2 sm:px-4 lg:px-8 py-3 sm:py-6 animate-fade-in ${isMobile ? 'max-w-full' : 'max-w-7xl'}`}>
        <div className="bg-white/70 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl border border-indigo-100/50 overflow-hidden">
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
