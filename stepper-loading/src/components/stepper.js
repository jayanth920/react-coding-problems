import { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Stepper = () => {
  const [num, setNum] = useState(0);

  const steps = [
    { id: 1, text: "Order Placed" },
    { id: 2, text: "Order Dispatched" },
    { id: 3, text: "Out for Delivery" },
    { id: 4, text: "Delivered" },
  ];

  const onRestart = () => {
    setNum(0);
  };

  const handleNext = () => {
    if (num < 3) {
      console.log(num);
      setNum((prev) => prev + 1);
    }
  };

  const selectColor = (id) => {
    if (id === num + 1) {
      return { backgroundColor: "rgb(0, 200, 255)" };
    } else if (id < num + 1) {
      return { backgroundColor: "lightgreen" };
    } else {
      return { backgroundColor: "grey" };
    }
  };

  return (
    <div className="wrapper">
      <div className="box">
        {steps.map((item) => {
          return (
            <div className="nums" key={item.id} style={selectColor(item.id)}>
              {item.id}
            </div>
          );
        })}
      </div>
      <div className="bar">
        <ProgressBar
          completed={25 * num}
          maxCompleted={75}
          customLabel=" "
          bgColor="orange"
          baseBgColor="black"
        />
      </div>
      <div className="text"><b>{steps[num].text}</b></div>
      <div className="buttonDiv">
        <button className="nextButton" onClick={handleNext}>NEXT</button>
        <button className="restartButton" onClick={onRestart}>RESTART</button>
      </div>
    </div>
  );
};
export default Stepper;
