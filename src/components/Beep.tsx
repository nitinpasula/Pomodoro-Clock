import React, { useEffect } from "react";

const Beep: React.FC<any> = (props: any) => {
  useEffect(() => {
    if (props.beepON) {
      let beepElement: any = document.getElementById("beep");
      if (beepElement) {
        beepElement.play();
      }
    }
  }, [props.beepON]);
  return <audio id="beep" src="./audio/buzzer.mp3"></audio>;
};

export default Beep;
