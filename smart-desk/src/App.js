import React from "react";
import Introduction from './components/Introduction'; 
import BasicDesk from './components/BasicDesk'; 
import ChargingAndStorage from './components/ChargingAndStorage'; 
import RightSideVariations from "./components/RightSideVariations";
import ScreenInterface from  './components/ScreenInterface'; 
import Desk from './components/deskjust/Desk'; 
import Box from "./components/focusflow/Box"; 

  function App() {
    return (
    <>
      <div className="intro"> 
        <Introduction /> 
        <BasicDesk />
        <ChargingAndStorage /> 
        <RightSideVariations />
        <ScreenInterface /> 
        
      </div>
    <div className = "focus-flow">
      <Box /> 
    </div>

    <div className = "desk-just">
      <Desk />
    </div>
    </>
    );
  };

  export default App;