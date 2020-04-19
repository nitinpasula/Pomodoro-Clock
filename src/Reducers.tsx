import {
  BREAK_INCREMENT,
  BREAK_DECREMENT,
  SESSION_DECREMENT,
  SESSION_INCREMENT,
  PLAY_PAUSE,
  RESET,
  SESSION_TICK,
  BREAK_ON,
  BREAK_OFF,
  BEEP_ON,
  BEEP_OFF,
} from "./actions";
const initialState = {
  breakLength: 5,
  sessionLength: 25,
  sessionTime: 1500,
  playON: false,
  breakON: false,
  beepON: false,
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
    case SESSION_TICK:
      return Object.assign({}, state, { sessionTime: state.sessionTime - 1 });
    case BREAK_ON:
      return Object.assign({}, state, {
        breakON: true,
        sessionTime: state.breakLength * 60,
      });
    case BREAK_OFF:
      return Object.assign({}, state, {
        breakON: false,
        sessionTime: state.sessionLength * 60,
      });
    case BEEP_ON:
      return Object.assign({}, state, { beepON: true });
    case BEEP_OFF:
      return Object.assign({}, state, { beepON: false });
    default:
      return state;
  }
};
