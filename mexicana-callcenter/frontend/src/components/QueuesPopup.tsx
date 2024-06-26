import React from 'react';
import GraphAgentStructure, { PieChartDataItem } from './GraphAgentStructure';

interface PopUpProps {
  isVisible: boolean;
  onClose: () => void;
  agentsState: Array<PieChartDataItem>;
  agentsAvailability: Array<PieChartDataItem>; // Add this line
}

const PopUp: React.FC<PopUpProps> = ({ isVisible, onClose, agentsState, agentsAvailability }) => { // Add agentsAvailability to props
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative w-full max-w-4xl p-8 bg-white rounded shadow-lg">
        <button className="absolute text-gray-500 top-2 right-2" onClick={onClose}>X</button>
        <GraphAgentStructure agentsState={agentsState} agentsAvailability={agentsAvailability} /> {/* Pass agentsAvailability */}
      </div>
    </div>
  );
};

export default PopUp;