export const BREAK_INCREMENT = "BREAK_INCREMENT";
export const BREAK_DECREMENT = "BREAK_DECREMENT";
export const SESSION_INCREMENT = "SESSION_INCREMENT";
export const SESSION_DECREMENT = "SESSION_DECREMENT";
export const PLAY_PAUSE = "PLAY_PAUSE";
export const RESET = "REST";
export const TIMER = "TIMER";

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

export const timer = () => {
  return {
    type: TIMER,
  };
};
