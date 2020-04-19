import React from "react";
import BreakContainer from "./containers/BreakContainer";
import SessionContainer from "./containers/SessionContainer";
import TimerContainer from "./containers/TimerContainer";
import ControlsContainer from "./containers/ControlsContainer";
import Beep from "./components/Beep";

const App: React.FC = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <BreakContainer />
        <SessionContainer />
      </div>
      <Beep />
      <TimerContainer />
      <ControlsContainer />
    </div>
  );
};

export default App;
