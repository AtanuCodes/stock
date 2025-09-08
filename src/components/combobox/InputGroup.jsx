import React from "react";

const InputGroup = ({ children }) => {
    return (
        <div className="flex items-center">
            {React.Children.count(children) > 1 ? React.Children.map(children, (child, index) => {
                const isFirstChild = index === 0;
                const isLastChild = index === React.Children.count(children) - 1;

                return React.cloneElement(child, {
                    className: `block w-full px-3 py-2
                      ${isFirstChild ? "rounded-r-none" : ""} 
                      ${isLastChild ? "rounded-l-none border-l-0" : ""}
                      ${!isFirstChild && !isLastChild ? "border-l-0" : ""}`, // Remove left border for middle elements
                });
            }) : children}
        </div>
    );
};

export default InputGroup;