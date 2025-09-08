import {CircleAlert} from "lucide-react";

const OnScreenAlert = ({message, className, ...props}) => {
    return (
        <div className={`bg-secondary rounded border border-primary p-2 flex items-center cursor-pointer ${className}`} {...props}>
            <CircleAlert className='text-primary me-2' size={16} />
            <span className='text-primary text-xs'>{message}</span>
        </div>
    );
};

export default OnScreenAlert;