import { connect } from "react-redux";
import TimerComponent from "../components/TimerComponent";
import {
  tickAction,
  breakOnAction,
  breakOffAction,
  beepOnAction,
} from "../actions";

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    sessionTime: state.sessionTime,
    breakON: state.breakON,
    playON: state.playON,
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    tickSession: () => {
      dispatch(tickAction());
    },
    startBreak: () => {
      dispatch(breakOnAction());
    },
    stopBreak: () => {
      dispatch(breakOffAction());
    },
    startBeep: () => {
      dispatch(beepOnAction());
    },
  };
};
const TimerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerComponent);

export default TimerContainer;
