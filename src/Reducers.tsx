import {
  BREAK_INCREMENT,
  BREAK_DECREMENT,
  SESSION_DECREMENT,
  SESSION_INCREMENT,
  PLAY_PAUSE,
  RESET,
  TIMER,
} from "./actions";
const initialState = {
  breakLength: 5,
  sessionLength: 25,
  sessionTime: 1500,
  playON: false,
  isInBreak: false,
};

export const pomodoroClock = (state = initialState, action: any) => {
  switch (action.type) {
    case BREAK_INCREMENT:
      return Object.assign({}, state, {
        breakLength: state.breakLength + 1 < 60 ? state.breakLength + 1 : 60,
      });
    case BREAK_DECREMENT:
      return Object.assign({}, state, {
        breakLength: state.breakLength - 1 > 0 ? state.breakLength - 1 : 1,
      });
    case SESSION_INCREMENT:
      return Object.assign({}, state, {
        sessionLength:
          state.sessionLength + 1 < 60 ? state.sessionLength + 1 : 60,
        sessionTime:
          (state.sessionLength + 1) * 60 < 3600
            ? (state.sessionLength + 1) * 60
            : 3600,
      });
    case SESSION_DECREMENT:
      return Object.assign({}, state, {
        sessionLength:
          state.sessionLength - 1 > 0 ? state.sessionLength - 1 : 1,
        sessionTime:
          (state.sessionLength - 1) * 60 > 0
            ? (state.sessionLength - 1) * 60
            : 60,
      });
    case PLAY_PAUSE:
      return Object.assign({}, state, { playON: !state.playON });
    case RESET:
      return Object.assign({}, initialState);
    case TIMER:
      let newSessionTime = state.sessionTime;
      let newIsInBreak = state.isInBreak;
      if (!state.isInBreak && state.sessionTime <= 0) {
        newIsInBreak = true;
        newSessionTime = state.breakLength * 60 + 1;
      }
      if (state.isInBreak && state.sessionTime <= 0) {
        newIsInBreak = false;
        newSessionTime = state.sessionLength * 60 + 1;
      }
      return Object.assign({}, state, {
        sessionTime: newSessionTime - 1,
        isInBreak: newIsInBreak,
      });

    default:
      return state;
  }
};
