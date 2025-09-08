import React from "react";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

const NextButton = ({
  children,
  onClick,
  className = "",
  variant = "outline",
  size = "default",
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      size={size}
      className={`transition-transform duration-200 lg:hover:border-none
      lg:hover:bg-gradient-to-r lg:hover:from-red-600 lg:hover:to-red-500
    lg:hover:text-white ${className}`}
    >
      {children}
    </Button>
  );
};

export default NextButton;

// lg:hover:bg-gradient-to-r lg:hover:from-red-500 lg:hover:to-red-600
// lg:hover:bg-[#ED1B24]
