import * as React from "react";
import { cn } from "@/utility/lib/utils";

const Textarea = React.forwardRef(({ className, autoFocus, ...props }, ref) => {
  return (
    <textarea
      autoFocus={autoFocus} 
      className={cn(
        "flex min-h-[70px] w-full rounded-md border border-dashed border-input bg-background px-3 py-2 text-sm focus:border-blue-600 focus:border-double focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };