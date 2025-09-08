import * as React from "react"

import {cn} from "@/utility/lib/utils"
import Cleave from "cleave.js/react";

const Input = React.forwardRef(({containerClassName, className, type, startIcon, onStartIconClick, endIcon, onEndIconClick, ...props}, ref) => {
    const StartIcon = startIcon || null;
    const EndIcon = endIcon || null;

    return (
        <div className={cn("relative w-full", containerClassName)}>
            {StartIcon && (
                <div onClick={onStartIconClick} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary p-2.5 rounded-s-md">
                    <StartIcon size={18} className="text-muted-foreground text-white"/>
                </div>
            )}
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
                    startIcon ? "pl-12" : "",
                    endIcon ? "pr-8" : "",
                    className
                )}
                ref={ref}
                {...props}
            />
            {EndIcon && (
                <div onClick={onEndIconClick} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2.5 rounded-e-md">
                    <EndIcon className="text-muted-foreground" size={18}/>
                </div>
            )}
        </div>
    );
})
Input.displayName = "Input"


const CleaveInput = React.forwardRef(({containerClassName, className, type, startIcon, endIcon, ...props}, ref) => {
    const StartIcon = startIcon || null;
    const EndIcon = endIcon || null;

    return (
        <div className={cn("relative w-full", containerClassName)}>
            {StartIcon && (
                <div className="absolute left-1.5 top-1/2 transform -translate-y-1/2">
                    <StartIcon size={18} className="text-muted-foreground"/>
                </div>
            )}
            <Cleave
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
                    startIcon ? "pl-8" : "",
                    endIcon ? "pr-8" : "",
                    className
                )}
                ref={ref}
                {...props}
            />
            {EndIcon && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <EndIcon className="text-muted-foreground" size={18}/>
                </div>
            )}
        </div>
    );
})
CleaveInput.displayName = "CleaveInput"

export {Input, CleaveInput}
