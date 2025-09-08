import { Button } from "@/components/ui/button.jsx";
import { IoMdCall } from "react-icons/io";
import { useEffect, useState } from "react";

const CallHelplineButton = () => {
  const [userDetail, setUserDetail] = useState(null);
  useEffect(() => {
    const storedUserDetail = sessionStorage.getItem("UserDetail");
    if (storedUserDetail) {
      setUserDetail(JSON.parse(storedUserDetail));
    }
  }, []);
  const helplineNumber = "16409";
  const userPhoneNumber = userDetail?.UserAccount?.MobileNumber;
  console.log(userPhoneNumber);
  const handleCall = () => {
    if (userPhoneNumber) {
      console.log(`User (${userPhoneNumber}) is calling the helpline...`);
      window.location.href = `tel:${helplineNumber}`;
    } else {
      alert("Your phone number is not found. Please log in again.");
    }
  };

  return (
    <Button
      // onClick={() => navigate(BasePath + "/")}
      onClick={handleCall}
      variant="ghost"
      className="bg-gray-100 border border-slate-300 p-0 rounded-lg w-10 h-10 mb-1.5
               lg:w-14 lg:h-14 text-black flex justify-center items-center"
    >
      <IoMdCall color="#404040" className="" size={21} />
    </Button>
  );
};

export default CallHelplineButton;
