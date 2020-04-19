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
      <input
        type="text"
        readOnly
        style={textStyle}
        id="time-left"
        value={`${minutes}:${seconds}`}
        size={1}
      />
    </div>
  );
};

export default TimerComponent;
