import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Otp.css";

const Otp = () => {
  const location = useLocation();
  const data = location.state?.data;
  const phoneNum = data.phoneNum;
  const otpLength = data.otpLength;
  const receivedOtp = data.otp;
  const [otp, setOtp] = useState(new Array(otpLength).fill(""));
  const [isValidating, setIsValidating] = useState(false);
  const inputRefs = useRef([]);

  // OTP Message
  const notify = () =>
    toast.success(`Your OTP is ${receivedOtp}`, {
      position: "bottom-right",
      autoClose: 15000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  // OTP Success Validation Message
  const notifySuccess = () =>
    toast(`✅ OTP validated successfully!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });

  // OTP Failed Validation Message
  const notifyError = () =>
    toast.error(`OTP validation failed!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    notify();
  }, []);

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    if (value && index < otpLength - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
    setIsValidating(false);
  };

  // Skips when backspace is presser
  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      index > 0 &&
      !otp[index] &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  // The cursor moves to the right when clicked on a field
  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    setIsValidating(true);
    if (parseInt(enteredOtp) == receivedOtp) {
      notifySuccess();
    } else {
      notifyError();
    }
  };

  return (
    <div className="otpWrapper">
      <div className="numberHeading">
        <h3 style={{fontSize: "medium"}}>
          Enter the OTP sent to the number{" "}
          <code>
            +{phoneNum.slice(0, 3)} {phoneNum.slice(3, 6)}-
            {phoneNum.slice(6, 10)}
          </code>
        </h3>
      </div>
      <div className="otpInputFields">
        {otp.map((digit, index) => {
          return (
            <input
              key={index}
              className="digit"
              ref={(input) => (inputRefs.current[index] = input)}
              value={digit}
              type="text"
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onClick={(e) => handleClick(index)}
            />
          );
        })}
      </div>
      <div className="Submission">
        <button className="submitOtp" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        limit={2}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition:Zoom
      />
    </div>
  );
};

export default Otp;
