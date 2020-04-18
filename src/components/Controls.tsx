import React, { useEffect } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import { IconButton } from "@material-ui/core";
import AutorenewIcon from "@material-ui/icons/Autorenew";

const Controls: React.FC<any> = (props: any) => {
  useEffect(() => {
    if (props.playON) {
      setTimeout(props.decrementTimer, 1000);
    }
  }, [props.playON, props.decrementTimer, props.sessionTime]);

  return (
    <div style={{ display: "flex" }}>
      <IconButton onClick={props.handlePlayPause} id="start_stop">
        {props.playON ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      <IconButton id="reset" onClick={props.handleReset}>
        <AutorenewIcon />
      </IconButton>
    </div>
  );
};

export default Controls;
