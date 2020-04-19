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
  const minutes = Math.floor(props.sessionTime / 60);
  const minutesString = minutes > 9 ? minutes : "0" + minutes;
  const seconds = props.sessionTime % 60;
  const secondsString = seconds > 9 ? seconds : "0" + seconds;
  return (
    <div>
      <h4 id="timer-label">{timerLabel}</h4>
      <time style={textStyle} id="time-left">
        {`${minutesString}:${secondsString}`}
      </time>
      {props.sessionTime === 0 && !props.breakON ? (
        <audio id="beep" src="./audio/buzzer.mp3" autoPlay></audio>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TimerComponent;
