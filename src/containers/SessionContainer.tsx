import { sessionIncrement, sessionDecrement } from "../actions";
import SessionComponent from "../components/SessionComponent";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    sessionLength: state.sessionLength,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleIncrement: () => {
      dispatch(sessionIncrement());
    },
    handleDecrement: () => {
      dispatch(sessionDecrement());
    },
  };
};

const SessionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionComponent);

export default SessionContainer;
