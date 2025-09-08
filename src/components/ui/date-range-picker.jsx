"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/utility/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function DateRangePicker({date={from: new Date(), to: addDays(new Date(), 1)}, setDate, className, ...props}) {

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <button
                        id="date"
                        className={cn(
                            "w-[220px] flex items-center justify-start text-left font-normal p-1 text-sm bg-transparent text-primary border-b border-dashed border-destructive rounded-0",
                            !date && "text-muted-foreground",
                            "hover:bg-red-50"
                        )}
                    >
                        <CalendarIcon size={16} className='me-2'/>
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                        {...props}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
