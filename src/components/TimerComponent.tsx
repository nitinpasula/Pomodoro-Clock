import React, { useEffect } from "react";

const TimerComponent: React.FC<any> = (props: any) => {
  useEffect(() => {
    if (props.playON) {
      if (props.sessionTime >= 0) {
        let interval = setInterval(props.tickSession, 1000);
        return () => {
          clearInterval(interval);
        };
      } else {
        if (props.breakON) {
          props.stopBreak();
        } else {
          props.startBreak();
        }
      }
    }
  });

  const timerLabel = props.breakON ? "Break" : "Session";
  const textStyle = {
    color: props.breakON ? "red" : "green",
  };
  const minutes =
    Math.floor(props.sessionTime / 60) > 0
      ? Math.floor(props.sessionTime / 60)
      : "00";
  const seconds = props.sessionTime % 60 > 0 ? props.sessionTime % 60 : "00";
  return (
    <div>
      <h4 id="timer-label">{timerLabel}</h4>
      <h4 style={textStyle} id="time-left">
        {`${minutes}:${seconds}`}
      </h4>
    </div>
  );
};

export default TimerComponent;
