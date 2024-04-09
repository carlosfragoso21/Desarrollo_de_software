import { FunctionComponent } from "react";
import "../onGoingCalls.css";

const OngoingCalls: FunctionComponent = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden"> {/* Prevent overflow at the root level */}
      {/* Top bar with background */}
      <div className="flex h-20 bg-tertiary shadow-lg justify-between items-center p-4">
        <div>
          <img 
            src="/logo_callCenter_color.png"  
            alt="" 
            className="w-[230px] ml-3"
          />
        </div>
        <div className="flex items-center">
          <img 
            src="/notifications_iconn.png" 
            alt="" 
            className="w-[45px] mr-2"
          />
          <h1 className="font">| Map</h1>
        </div>
      </div>
      {/* Main content */}
      <div className="flex h-[90%]">
        <div>
          <img 
            src="/onCallBlurb.png" 
            alt=""
            className="mt-12 ml-12 w-[60px] h-[60px]"
          />
        </div>
        <div className="flex-grow overflow-auto"> {/* Allow scrolling only within the main content if necessary */}
          <h1 className="font1">Agents Overview</h1>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="h-20 bg-tertiary shadow-lg flex justify-center items-center p-4">
          <p> Timestamp!! </p>
      </div>
    </div>
  );
};

export default OngoingCalls;
