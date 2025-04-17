
import React, { useState } from 'react';
import ViewToggle from './ViewToggle';
import DisplayTypeToggle from './DisplayTypeToggle';
import MetricCard from './MetricCard';
import PieChart from './PieChart';
import DetailRow from './DetailRow';
import CountCard from './CountCard';
import { Truck, Users, Globe, BarChart3, LineChart } from 'lucide-react';

const DeliveryDashboard: React.FC = () => {
  const [activeView, setActiveView] = useState('overview');
  const [displayType, setDisplayType] = useState('vertical');
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  const toggleRow = (rowId: string) => {
    setExpandedRows(prev => ({
      ...prev,
      [rowId]: !prev[rowId]
    }));
  };

  const mtdData = [
    { name: 'LMD', value: 4026, color: '#4285f4' },
    { name: 'HD', value: 1650, color: '#34a853' },
    { name: '#', value: 88, color: '#fbbc04' }
  ];

  const ytdData = [
    { name: 'LMD', value: 60242, color: '#4285f4' },
    { name: 'HD', value: 24809, color: '#34a853' },
    { name: '#', value: 88, color: '#fbbc04' }
  ];

  const deliveryMetrics = [
    {
      title: 'OK Tag',
      value: 5139,
      metrics: [
        { label: 'LMD', value: 715, color: '#4285f4' },
        { label: 'HD', value: 164, color: '#34a853' },
        { label: 'BPL', value: 48, color: '#e53935' },
        { label: '#', value: 39, color: '#fbbc04' }
      ]
    },
    {
      title: 'Delivery',
      value: 4081,
      metrics: [
        { label: 'LMD', value: 715, color: '#4285f4' },
        { label: 'HD', value: 164, color: '#34a853' },
        { label: 'BPL', value: 46, color: '#e53935' },
        { label: '#', value: 39, color: '#fbbc04' }
      ]
    },
    {
      title: 'Delivery Pendency',
      value: 1688,
      metrics: [
        { label: 'LMD', value: 715, color: '#4285f4' },
        { label: 'HD', value: 164, color: '#34a853' },
        { label: 'BPL', value: 48, color: '#e53935' },
        { label: 'LMG', value: 39, color: '#fbbc04' }
      ]
    },
    {
      title: 'Closing WIP',
      value: 1688,
      metrics: [
        { label: 'LMD', value: 715, color: '#4285f4' },
        { label: 'HD', value: 164, color: '#34a853' },
        { label: 'BPL', value: 48, color: '#e53935' },
        { label: '#', value: 39, color: '#fbbc04' }
      ]
    },
    {
      title: 'Closing WIP',
      value: 871,
      metrics: [
        { label: 'LMD', value: 715, color: '#4285f4' },
        { label: 'HD', value: 164, color: '#34a853' },
        { label: 'BPL', value: 48, color: '#e53935' },
        { label: '#', value: 39, color: '#fbbc04' }
      ]
    }
  ];

  const summaryCards = [
    { title: 'Online Total', count: 4045, icon: <Truck size={20} /> },
    { title: 'Dom', count: 3408, icon: <Users size={20} /> },
    { title: 'EXP', count: 263, icon: <Globe size={20} /> },
    { title: 'IE', count: 283, icon: <BarChart3 size={20} /> },
    { title: 'NH', count: 92, icon: <LineChart size={20} /> }
  ];

  const detailRows = [
    { 
      id: 'lmdTruck',
      title: 'Total LMD Truck', 
      total: 1794, 
      dom: 1600, 
      exp: 189, 
      ie: 0, 
      nh: 6 
    },
    { 
      id: 'marketCool',
      title: 'Total Market Cool', 
      total: 672, 
      dom: 395, 
      exp: 26, 
      ie: 251, 
      nh: 0 
    },
    { 
      id: 'busCool',
      title: 'Total Bus Cool', 
      total: 396, 
      dom: 318, 
      exp: 45, 
      ie: 32, 
      nh: 1 
    },
    { 
      id: 'hd',
      title: 'Total HD Trucks', 
      total: 1183, 
      dom: 1095, 
      exp: 3, 
      ie: 0, 
      nh: 85 
    }
  ];

  return (
    <div className="pb-6">
      <ViewToggle 
        activeView={activeView} 
        onViewChange={setActiveView} 
      />

      {activeView === 'overview' && (
        <div>
          <div className="grid grid-cols-2 gap-3 p-3">
            {deliveryMetrics.map((metric, index) => (
              <MetricCard 
                key={index}
                title={metric.title}
                value={metric.value}
                metrics={metric.metrics}
              />
            ))}
          </div>

          <div className="mt-4">
            <DisplayTypeToggle 
              displayType={displayType}
              onDisplayTypeChange={setDisplayType}
            />
            
            <div className="flex flex-col shadow-sm border mx-2 bg-white rounded">
              <PieChart 
                data={mtdData} 
                title="MTD" 
                total={5754} 
              />
            </div>
            
            <div className="flex flex-col mt-6 shadow-sm border mx-2 bg-white rounded">
              <PieChart 
                data={ytdData} 
                title="YTD" 
                total={85139} 
              />
            </div>
          </div>
        </div>
      )}

      {activeView === 'detailed' && (
        <div>
          <div className="grid grid-cols-5 gap-2 px-2 py-4">
            {summaryCards.map((card, index) => (
              <CountCard 
                key={index}
                title={card.title}
                count={card.count}
                icon={card.icon}
              />
            ))}
          </div>

          <div className="px-2 pt-2">
            {detailRows.map(row => (
              <DetailRow 
                key={row.id}
                title={row.title}
                total={row.total}
                dom={row.dom}
                exp={row.exp}
                ie={row.ie}
                nh={row.nh}
                isExpanded={expandedRows[row.id]}
                onToggle={() => toggleRow(row.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryDashboard;
