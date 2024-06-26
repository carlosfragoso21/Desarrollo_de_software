
import React, { useState } from 'react';

interface TabData {
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface HorizontalTabsProps {
  data: TabData[];
  onTabChange?: (index: number) => void;  // Add onTabChange to the props interface
}

const HorizontalTabs: React.FC<HorizontalTabsProps> = ({ data, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (onTabChange) {
      onTabChange(index);  // Call the onTabChange callback
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center space-x-4">
        {data.map((tab, index) => (
          <div
            key={index}
            className={`flex items-center p-2 cursor-pointer transition-colors rounded-full ${
              index === activeTab ? 'bg-[#20253F] text-white' : 'bg-transparent'
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            <span>{tab.label}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 p-4">{data[activeTab].content}</div>
    </div>
  );
};

export default HorizontalTabs;