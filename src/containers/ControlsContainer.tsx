import { playOrPause, reset } from "../actions";
import { connect } from "react-redux";
import Controls from "../components/Controls";

const mapStateToProps = (state: any) => {
  return {
    playON: state.playON,
    sessionTime: state.sessionTime,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handlePlayPause: () => {
      dispatch(playOrPause());
    },
    handleReset: () => {
      dispatch(reset());
    },
  };
};

const ControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);

export default ControlsContainer;
