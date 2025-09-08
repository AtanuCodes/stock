import React, {useEffect, useImperativeHandle, useState} from "react";
import ModalComponent from "@/components/modal/modal-component.jsx";
import {IoInformationCircleOutline} from "react-icons/io5";
import {REGEXP_ONLY_DIGITS_AND_CHARS} from "input-otp";
import {InputOTP, InputOTPGroup, InputOTPSlot,} from "@/components/ui/input-otp.jsx";
import moment from "moment";
import {sendOtp, verifyOtp} from "@/api-requests/utility-api.js";
import otpStore from "@/store/auth-store/otp-store.js";
import {OnboardingSuccessAlert} from "@/utility/AlertUtility.js";
import {BasePath} from "@/api-requests/base-url-config.js";
import { SuccessAlert } from "../../utility/AlertUtility.js";

const OnboardingOtpVerification = ({showOTP, setShowOTP, handleVerified, change, ref, timeout}) => {

    const [timer, setTimer] = useState(timeout);
    const [otp, setOtp] = useState("");
    const [maskedOtp, setMaskedOtp] = useState("");
    const [isTimerComplete, setIsTimerComplete] = useState(false);
    const {otpInfo} = otpStore();

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

    useEffect(() => {
        if (otpInfo?.Message) {
            const extractedOtp = otpInfo.Message.match(/\d{6}/)?.[0] || "";
            setOtp(extractedOtp);
            setMaskedOtp(extractedOtp.replace(/\d/g, "*"));
            // setMaskedOtp(extractedOtp.replace(/\d(?=\d{1})/g, "*"));
        }
    }, [otpInfo]);

    const resetOtpTimer = () => {
        setTimer(timeout);
        setIsTimerComplete(false);
    };

    useImperativeHandle(ref, () => ({resetOtpTimer, timer}), []);

    const handleVerifyOtp = async () => {
        const data = {
            referenceID: otpInfo?.ReferenceID,
            deviceInfo: "string",
            otpCode: otp,
        };

        let success = await verifyOtp(data);
        console.log(success);
        if (success) {
            setShowOTP(false);
            const result = await handleVerified();
            console.log(result)
            if (result) {
                const {isConfirmed,isDenied} = await OnboardingSuccessAlert("Thank you, We have receieved your request!")
                if(isConfirmed){
                    window.location.href = BasePath+"/services"
                }
            }
        }
        setOtp("");
    };

    const getOTPMessage = () => {
        if (change === "email")
            return "Please input the 6-digit OTP sent to your email for verification.";
        if (change === "mobile")
            return "Please input the 6-digit OTP sent to your mobile for verification.";
        return "Please input the 6-digit OTP sent to your mobile & email for verification.";
    };

    const handleResendOTP = async () => {
        resetOtpTimer();
        const response = await sendOtp({
            mobileNo: accountInformation?.MobileNo,
            whatsAppNo: accountInformation?.MobileNo,
            emailAddress: accountInformation?.EmailAddress,
            otpType: "string",
        });

        if (response?.Status === "OK") {
            setOtpInfo(response.Data);
        }
    };
    const handleOtpChange = (value) => {
        setOtp(value);
        // setMaskedOtp(value.replace(/\d(?=\d{1})/g, "*"));
        setMaskedOtp(value.replace(/\d/g, "*"));
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
                            value={maskedOtp}
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
                        {isTimerComplete ? (
                            <div className="flex items-center justify-center py-3 gap-2">
                <span className="text-xs">
                  Didn't get OTP?
                  <button
                      className="bg-transparent text-xs underline px-1 text-blue-500"
                      onClick={handleResendOTP}
                  >
                    Resend
                  </button>
                </span>
                            </div>
                        ) : (
                            <div className="w-100 justify-center text-xs mt-2">
                                Time Remaining:{" "}
                                <span>{moment.utc(timer * 1000).format("mm:ss")}</span>
                            </div>
                        )}
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
                {
                    btnName: "Close",
                    variant: "outline",
                    onClick: () => setShowOTP(false),
                },
            ]}
        />
    );
};

export default OnboardingOtpVerification;
