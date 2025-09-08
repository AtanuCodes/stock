import React from 'react';
import ModalComponent from "@/components/modal/modal-component.jsx";
import {IoInformationCircleOutline} from "react-icons/io5";
import {Label} from "@/components/ui/label.jsx";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp.jsx";

const SectionOtpModal = ({showOTP, setShowOTP, handleVerified}) => {
    const ModalOTP = <div className=''>
        <div className='p-2 border border-black bg-gray-100 rounded-lg flex items-center text-start'>
            <IoInformationCircleOutline size={70} className='me-2 text-[#0000ff]'/>
            <p className='text-base'>Please input the 6 digit OTP sent to your mobile & email for verification.</p>
        </div>

        <div className='mt-6 flex justify-center'>
            <div className=''>
                {/*<Label className='ps-3'>Verification Code</Label>*/}
                <div className="flex flex-col justify-center space-x-2 mb-6 mt-2">
                    <InputOTP maxLength={6}>
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
                    <p className="text-sm text-center text-gray-500 mt-4">
                        OTP expires in 03:00s
                    </p>
                </div>
            </div>

        </div>
    </div>

    const handleClose = () => {
        setShowOTP(false);
    }

    return (
        <ModalComponent
            title='OTP Verification'
            show={showOTP}
            setShow={setShowOTP}
            modalBody={ModalOTP}
            modalFooter={[
                {
                    btnName: 'Verify',
                    onClick: async () => {
                        setShowOTP(false);
                        handleVerified();
                    },
                },
                {
                    btnName: 'Close', variant: 'outline',
                    onClick: handleClose
                }
            ]}
        />
    );
};

export default SectionOtpModal;