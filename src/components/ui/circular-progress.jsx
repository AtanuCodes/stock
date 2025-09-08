import * as React from "react"
import { Progress } from "@/components/ui/progress"


export default function CircularProgress({progress=0, message=null, size = 120, strokeWidth = 8, strokeColor = "currentColor", className = "",}) {
    const [value, setValue] = React.useState(0)

    React.useEffect(() => {
        const timer = setTimeout(() => setValue(progress), 500)
        return () => clearTimeout(timer)
    }, [progress])

    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const strokeDashoffset = circumference - (value / 100) * circumference

    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <svg
                className="transform -rotate-90"
                width={size}
                height={size}
            >
                <circle
                    className="text-muted-foreground"
                    strokeWidth={strokeWidth}
                    stroke={strokeColor+40}
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <circle
                    className="text-primary transition-all duration-300 ease-in-out"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    stroke={strokeColor}
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                {message ? message : <span className="text-2xl font-bold">{Math.round(value)}%</span>}
            </div>
        </div>
    )
}