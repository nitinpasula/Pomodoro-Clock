import Beep from "../components/Beep";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    beepON: state.beepON,
  };
};

const BeepContainer = connect(mapStateToProps)(Beep);
export default BeepContainer;
