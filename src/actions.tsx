export const BREAK_INCREMENT = "BREAK_INCREMENT";
export const BREAK_DECREMENT = "BREAK_DECREMENT";
export const SESSION_INCREMENT = "SESSION_INCREMENT";
export const SESSION_DECREMENT = "SESSION_DECREMENT";
export const PLAY_PAUSE = "PLAY_PAUSE";
export const RESET = "RESET";
export const SESSION_TICK = "SESSION_TICK";
export const BEEP_ON = "BEEP_ON";
export const BEEP_OFF = "BEEP_OFF";
export const BREAK_ON = "BREAK_ON";
export const BREAK_OFF = "BREAK_OFF";

export const breakIncrement = () => {
  return {
    type: BREAK_INCREMENT,
  };
};

export const breakDecrement = () => {
  return {
    type: BREAK_DECREMENT,
  };
};

export const sessionIncrement = () => {
  return {
    type: SESSION_INCREMENT,
  };
};

export const sessionDecrement = () => {
  return {
    type: SESSION_DECREMENT,
  };
};

export const playOrPause = () => {
  return {
    type: PLAY_PAUSE,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const tickAction = () => {
  return {
    type: SESSION_TICK,
  };
};

export const breakOnAction = () => {
  return {
    type: BREAK_ON,
  };
};

export const breakOffAction = () => {
  return {
    type: BREAK_OFF,
  };
};

export const beepOnAction = () => {
  return {
    type: BEEP_ON,
  };
};
