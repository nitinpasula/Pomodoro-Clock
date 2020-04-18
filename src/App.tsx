import React from "react";
import BreakContainer from "./containers/BreakContainer";
import SessionContainer from "./containers/SessionContainer";
import TimerContainer from "./containers/TimerContainer";
import ControlsContainer from "./containers/ControlsContainer";

const App: React.FC = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <BreakContainer />
        <SessionContainer />
      </div>
      <TimerContainer />
      <ControlsContainer />
    </div>
  );
};

export default App;
