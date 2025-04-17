
import React, { useState } from 'react';
import ViewToggle from './ViewToggle';
import DisplayTypeToggle from './DisplayTypeToggle';
import PieChart from './PieChart';
import ShiftCard from './ShiftCard';

const RolloutDashboard: React.FC = () => {
  const [activeView, setActiveView] = useState('overview');
  const [displayType, setDisplayType] = useState('vertical');

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

  const verticalShifts = [
    {
      shiftName: 'Shift A',
      shiftValue: 15,
      metrics: [
        { label: 'LMD', value: 10 },
        { label: 'HD', value: 5 },
        { label: '#', value: 0 }
      ],
      shiftColor: 'text-red-500'
    },
    {
      shiftName: 'Shift B',
      shiftValue: 12,
      metrics: [
        { label: 'LMD', value: 8 },
        { label: 'HD', value: 4 },
        { label: '#', value: 0 }
      ],
      shiftColor: 'text-yellow-500'
    },
    {
      shiftName: 'Shift C',
      shiftValue: 18,
      metrics: [
        { label: 'LMD', value: 13 },
        { label: 'HD', value: 5 },
        { label: '#', value: 0 }
      ],
      shiftColor: 'text-blue-500'
    }
  ];

  const lineShifts = [
    {
      shiftName: 'Shift A',
      shiftValue: 15,
      metrics: [
        { label: 'LMD', value: 12 },
        { label: 'HD', value: 4 },
        { label: 'BPL', value: 4 },
        { label: 'Export', value: 4 },
        { label: 'Method', value: 4 },
        { label: '#', value: 4 }
      ],
      shiftColor: 'text-red-500'
    },
    {
      shiftName: 'Shift B',
      shiftValue: 17,
      metrics: [
        { label: 'LMD', value: 12 },
        { label: 'HD', value: 4 },
        { label: 'BPL', value: 4 },
        { label: 'Export', value: 4 },
        { label: 'Method', value: 4 },
        { label: '#', value: 4 }
      ],
      shiftColor: 'text-yellow-500'
    },
    {
      shiftName: 'Shift C',
      shiftValue: 19,
      metrics: [
        { label: 'LMD', value: 12 },
        { label: 'HD', value: 4 },
        { label: 'BPL', value: 4 },
        { label: 'Export', value: 4 },
        { label: 'Method', value: 4 },
        { label: '#', value: 4 }
      ],
      shiftColor: 'text-blue-500'
    }
  ];

  return (
    <div className="pb-6">
      <ViewToggle 
        activeView={activeView} 
        onViewChange={setActiveView} 
      />

      <DisplayTypeToggle 
        displayType={displayType}
        onDisplayTypeChange={setDisplayType}
      />

      <div className="mt-2 p-4">
        <div className="bg-white border rounded-sm shadow-sm flex mb-4">
          <div className="flex-1 flex flex-col items-center justify-center p-4">
            <div className="text-5xl font-bold text-dashboard-blue">
              {displayType === 'vertical' ? '50' : '51'}
            </div>
            <div className="text-sm text-gray-600">
              {displayType === 'vertical' ? 'Vertical' : 'Line'}
            </div>
          </div>
          <div className="flex-2 grid grid-cols-3 gap-2 p-2">
            {displayType === 'vertical' ? 
              verticalShifts.map((shift, idx) => (
                <ShiftCard
                  key={idx}
                  shiftName={shift.shiftName}
                  shiftValue={shift.shiftValue}
                  metrics={shift.metrics}
                  shiftColor={shift.shiftColor}
                />
              ))
              :
              lineShifts.map((shift, idx) => (
                <ShiftCard
                  key={idx}
                  shiftName={shift.shiftName}
                  shiftValue={shift.shiftValue}
                  metrics={shift.metrics}
                  shiftColor={shift.shiftColor}
                />
              ))
            }
          </div>
        </div>

        <div className="flex flex-col shadow-sm border mx-2 bg-white rounded mb-4">
          <PieChart 
            data={mtdData} 
            title="MTD" 
            total={5754} 
          />
        </div>
        
        <div className="flex flex-col shadow-sm border mx-2 bg-white rounded">
          <PieChart 
            data={ytdData} 
            title="YTD" 
            total={85139} 
          />
        </div>
      </div>
    </div>
  );
};

export default RolloutDashboard;
