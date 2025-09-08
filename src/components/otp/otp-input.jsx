import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import {REGEXP_ONLY_DIGITS_AND_CHARS} from "input-otp";
import OnScreenAlert from "@/components/alert/on-screen-alert.jsx";
import {Button} from "@/components/ui/button.jsx";
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import moment from 'moment';
import {VerifyOtpRequests} from "@/api-requests/user/auth-store-requests.js";

// eslint-disable-next-line react/display-name
const OtpInput = forwardRef( ({mobileNo = "", onVerified, timeout=10}, ref) => {
    const [timer, setTimer] = useState(moment(sessionStorage.getItem("ExpireDate")).diff(moment(), 'seconds'));
    const [otp, setOtp] = useState("");

    useEffect(() => {
        let interval = setInterval(() => (timer > 0) && setTimer(timer - 1), 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const resetOtpTimer = () => {
        setTimer(timeout);
    }

    useImperativeHandle(ref, () => {
        return {resetOtpTimer, timer}
    }, [])

    const handleVerifyOtp = async () => {
        let success = await VerifyOtpRequests(otp);
        success && onVerified();
    }

    return (
        <div>
            <OnScreenAlert className="mb-5" message={"An OTP has been sent to your mobile number: " + mobileNo}/>
            <div className="flex flex-col items-center justify-center">
                <h2 className='text-primary mb-5'>Please enter the 6-digit OTP</h2>
                <InputOTP
                    value={otp}
                    onChange={(value) => setOtp(value)}
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                >
                    <InputOTPGroup>
                        <InputOTPSlot index={0}/>
                    </InputOTPGroup>
                    <InputOTPGroup>
                        <InputOTPSlot index={1}/>
                    </InputOTPGroup>
                    <InputOTPGroup>
                        <InputOTPSlot index={2}/>
                    </InputOTPGroup>
                    <InputOTPGroup>
                        <InputOTPSlot index={3}/>
                    </InputOTPGroup>
                    <InputOTPGroup>
                        <InputOTPSlot index={4}/>
                    </InputOTPGroup>
                    <InputOTPGroup>
                        <InputOTPSlot index={5}/>
                    </InputOTPGroup>
                </InputOTP>

                <div className="w-100 text-end text-xs mt-2">
                    OTP expires in <span>{moment.utc(timer * 1000).format("mm:ss")}</span>
                </div>

            </div>
            <Button onClick={handleVerifyOtp} className="w-full mt-5">Verify OTP</Button>
        </div>
    );
});

export default OtpInput;