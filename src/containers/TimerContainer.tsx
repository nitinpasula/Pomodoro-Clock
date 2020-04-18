import { connect } from "react-redux";
import TimerComponent from "../components/TimerComponent";

const mapStateToProps = (state: any) => {
  return {
    sessionTime: state.sessionTime,
    breakTime: state.breakLength,
    isInBreak: state.isInBreak,
  };
};
const TimerContainer = connect(mapStateToProps)(TimerComponent);

export default TimerContainer;
