import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "./Title";
import "./Phone.css";

const Phone = () => {
  const [phoneNum, setPhoneNum] = useState("");
  const [phInvalid, setPhInvalid] = useState(false);
  const [otpInvalid, setOtpInvalid] = useState(false);
  const [otpLength, setOtpLength] = useState(4);
  const otp = useRef();
  const navigate = useNavigate();

  // Random Number Generator
  function getRandom(num) {
    const min = Math.pow(10, num - 1);
    const max = Math.pow(10, num) - 1;
    let resultOtp = Math.floor(Math.random() * (max - min + 1)) + min;
    otp.current = resultOtp;
  }

  // Phone Number and OTP length validation before submission
  const phoneOtpValidation = () => {
    getRandom(otpLength);
    const phoneRegex = /^[0-9]+$/;
    const digitRegex = /^[2-6]+$/;
    if (
      phoneNum === "" ||
      !phoneRegex.test(phoneNum) ||
      phoneNum.length < 10 ||
      phoneNum.length > 10
    )
      return setPhInvalid(true);

    if (
      otpLength < 2 ||
      otpLength > 6 ||
      !digitRegex.test(otpLength) ||
      otpLength == ""
    )
      return setOtpInvalid(true);
    setOtpInvalid(false);
    setPhInvalid(false);
    navigate("/otp", {
      state: {
        data: {
          otpLength: parseInt(otpLength),
          phoneNum: phoneNum,
          otp: otp.current,
        },
      },
    });
  };

  return (
    <div className="phoneOtpPanel">
      <div className="phoneWrapper">
        <div className="phoneEntryBox">
          <Title/>
          <div className="phEntry">
          <p>Phone Number : </p>
          <input
            className="phoneNumberEntry"
            type="text"
            onChange={(e) => setPhoneNum(e.target.value)}
          />
          </div>
          <div className="OtEntry">
          <p>OTP Length :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <input
            className="otpLengthEntry"
            placeholder="Range [2-6]"
            type="text"
            onChange={(e) => setOtpLength(e.target.value)}
          />
          </div>
          <p style={{color: "lightgreen"}}>* Default length of the OTP is set to [ 4 ]. This is a "Backend" functionality yet is being provided for here for educational and testing purposes. *</p>
        </div>
        <button className="nextButton" onClick={phoneOtpValidation}>
          Next
        </button>
        {otpInvalid && <code className="highlighted">Please set your OTP length between [ 2-6 ].</code>}
        {phInvalid && (
          <div className="errorText">
            Please a valid phone number containing 10 digits only.&nbsp;&nbsp;
            <code className="highlighted">
              * Currently entered {phoneNum.length} digits. *
            </code>
          </div>
        )}
      </div>
    </div>
  );
};

export default Phone;
