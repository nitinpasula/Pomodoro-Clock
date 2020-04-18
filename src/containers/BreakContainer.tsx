import { connect } from "react-redux";
import BreakComponent from "../components/BreakComponent";
import { breakIncrement, breakDecrement } from "../actions";

const mapStateToProps = (state: any) => {
  return {
    breakLength: state.breakLength,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    handleDecrement: () => {
      dispatch(breakDecrement());
    },
    handleIncrement: () => {
      dispatch(breakIncrement());
    },
  };
};

const BreakContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BreakComponent);

export default BreakContainer;
