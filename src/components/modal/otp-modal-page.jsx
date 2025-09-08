import React, {useEffect, useState} from "react";
import ModalComponent from "@/components/modal/modal-component.jsx";
import {IoInformationCircleOutline} from "react-icons/io5";
import {REGEXP_ONLY_DIGITS_AND_CHARS} from "input-otp";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp.jsx";
import moment from "moment";

const OtpModal = ({showOTP, setShowOTP, otp, setOtp, handleVerified, otpType="", timeout}) => {
    const [timer, setTimer] = useState(timeout);
    const [isTimerComplete, setIsTimerComplete] = useState(false);

    useEffect(() => {
        if (showOTP) {
            setTimer(timeout);
            setIsTimerComplete(false);

            const interval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer <= 0) {
                        clearInterval(interval);
                        setIsTimerComplete(true);
                        return 0;
                    }
                    return prevTimer - 1;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [showOTP]);

    const resetOtpTimer = () => {
        setTimer(timeout);
        setIsTimerComplete(false);
    };

    const handleVerifyOtp = async () => {
        await handleVerified();
        setOtp("");
    };

    const getOTPMessage = () => {
        if (otpType === "email")
            return "Please input the 6-digit OTP sent to your email for verification.";
        if (otpType === "mobile")
            return "Please input the 6-digit OTP sent to your mobile for verification.";
        return "Please input the 6-digit OTP sent to your mobile & email for verification.";
    };

    const handleResendOTP = async () => {
        resetOtpTimer();
    };

    const handleOtpChange = (value) => {
        console.log("OTP: ", value);
        setOtp(value);
        // setMaskedOtp(value.replace(/\d/g, "*"));
    };

    const ModalOTP = (
        <div>
            <div className="p-2 border border-black bg-gray-100 rounded-lg flex items-center text-start">
                <IoInformationCircleOutline size={70} className="me-2 text-[#3a3a96]"/>
                <p className="text-base">{getOTPMessage()}</p>
            </div>

            <div className="mt-6 flex justify-center">
                <div>
                    <div className="flex flex-col justify-center space-x-2 mb-6 mt-2">
                        <InputOTP
                            value={otp}
                            onChange={handleOtpChange}
                            maxLength={6}
                            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                        >
                            {[...Array(6)].map((_, index) => (
                                <InputOTPGroup key={index}>
                                    <InputOTPSlot index={index}/>
                                </InputOTPGroup>
                            ))}
                        </InputOTP>
                        {isTimerComplete ?
                            <div className="flex items-center justify-center py-3 gap-2">
                                <span className="text-xs">
                                  Didn't get OTP?
                                  <button
                                      className="bg-transparent text-xs underline px-1 text-blue-500"
                                      onClick={handleResendOTP}
                                  >Resend</button>
                                </span>
                            </div> :
                            <div className="w-100 justify-center text-xs mt-2">
                                Time Remaining:{" "}
                                <span>{moment.utc(timer * 1000).format("mm:ss")}</span>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <ModalComponent
            title="OTP Verification"
            show={showOTP}
            setShow={setShowOTP}
            modalBody={ModalOTP}
            modalFooter={[
                {btnName: "Verify", variant: "destructive", onClick: handleVerifyOtp},
                {btnName: "Close", variant: "outline", onClick: () => setShowOTP(false)},
            ]}
        />
    );
};

export default OtpModal;
