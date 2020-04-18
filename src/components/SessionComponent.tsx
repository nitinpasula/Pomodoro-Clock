import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { IconButton } from "@material-ui/core";
import "./SessionComponent.css";

const SessionComponent: React.FC<any> = (props: any) => {
  return (
    <div className="session-container">
      <h4 id="session-label">Session Length</h4>
      <div className="session-controls">
        <IconButton id="session-decrement" onClick={props.handleDecrement}>
          <RemoveIcon />
        </IconButton>
        <p id="session-length" style={{ color: "red" }}>
          {props.sessionLength}
        </p>
        <IconButton id="session-increment" onClick={props.handleIncrement}>
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default SessionComponent;
