import React from "react";

const TimerComponent: React.FC<any> = (props: any) => {
  const timerLabel = props.isInBreak ? "Break" : "Session";
  const textStyle = {
    color: props.isInBreak ? "red" : "green",
  };
  const minutes =
    Math.floor(props.sessionTime / 60) > 0
      ? Math.floor(props.sessionTime / 60)
      : "00";
  const seconds = props.sessionTime % 60 > 0 ? props.sessionTime % 60 : "00";
  return (
    <div>
      <h4 id="timer-label">{timerLabel}</h4>
      <h4 id="time-left" style={textStyle}>
        {minutes}:{seconds}
      </h4>
    </div>
  );
};

export default TimerComponent;
