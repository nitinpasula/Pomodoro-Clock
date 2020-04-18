import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { IconButton } from "@material-ui/core";
import "./BreakComponent.css";

const BreakComponent: React.FC<any> = (props: any) => {
  return (
    <div className="break-container">
      <h4 id="break-label">Break Length</h4>
      <div className="break-controls">
        <IconButton id="break-decrement" onClick={props.handleDecrement}>
          <RemoveIcon />
        </IconButton>
        <p id="break-length">{props.breakLength}</p>
        <IconButton id="break-increment" onClick={props.handleIncrement}>
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default BreakComponent;
