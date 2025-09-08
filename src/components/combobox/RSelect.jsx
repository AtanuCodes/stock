import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import React from "react";

// const RSelect = ({onChange, placeholder = '', className, defaultOption, options, ...props}) => {
//     return (
//         <Select
//             onValueChange={(e) => {
//                 onChange(e);
//                 document.getElementById(props?.id)?.classList.contains("validateFocus") && document.getElementById(props?.id)?.classList.remove("validateFocus");
//             }}
//             {...props}
//         >
//             <SelectTrigger id={props?.id} className={`${className} peer h-8 flex space-x-2 border-b border-r-0 border-l-0 border-t-0 rounded-none border-dashed py-0.5 px-0 text-left disabled:cursor-not-allowed disabled:opacity-50 disabled:text-slate-800`}>
//                 <SelectValue placeholder={placeholder}/>
//             </SelectTrigger>
//             <SelectContent>
//                 {defaultOption && <SelectItem value="">{placeholder}</SelectItem>}
//                 {options?.length > 0 && options?.map((item, idx) => (<SelectItem key={idx.toString()} value={item?.value}>{item?.label}</SelectItem>))}
//             </SelectContent>
//         </Select>
//     );
// };

// export default RSelect;
const RSelect = ({ onChange, placeholder = '', className, options, ...props }) => {
    return (
        <Select
            onValueChange={(e) => {
                onChange(e);
                document.getElementById(props?.id)?.classList.contains("validateFocus") &&
                    document.getElementById(props?.id)?.classList.remove("validateFocus");
            }}
            value={props.value}
            {...props}
        >
            <SelectTrigger
                id={props?.id}
                className={`${className} peer h-8 flex space-x-2 border-b border-r-0 border-l-0 border-t-0 rounded-none border-dashed py-0.5 px-0 text-left disabled:cursor-not-allowed disabled:opacity-50 disabled:text-slate-800 focus-visible:border-blue-600 focus:border-blue-600 focus-visible:outline-none focus:border-double `}
            >
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options?.length > 0 &&
                    options.map((item, idx) => (
                        <SelectItem key={idx.toString()} value={item?.value}>
                            {item?.label}
                        </SelectItem>
                    ))}
            </SelectContent>
        </Select>
    );
};

export default RSelect;



export const FloatingSelect = ({onChange, label, placeholder = '', className, containerClassName, defaultOption, options, ...props}) => {
    return (
        <label
            htmlFor={props?.id}
            className={`relative block mt-1 mb-2 cursor-text py-1.5 w-full ${containerClassName}`}
        >
            <span
                className="absolute left-0 -translate-y-3.5 bg-transparent text-xs peer-focus:text-blue-600 text-gray-500 transition-all
                peer-placeholder-shown:-translate-y-1
                peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500
                peer-focus:-translate-y-3 peer-focus:text-xs"
            >
                {label}
            </span>
            <Select
                onValueChange={(e) => {
                    onChange(e, options?.find(item => item.value === e)?.label);
                    document.getElementById(props?.id)?.classList.contains("validateFocus") && document.getElementById(props?.id)?.classList.remove("validateFocus");
                }}
                {...props}
            >
                <SelectTrigger id={props?.id}
                               className={`${className} peer h-8 flex space-x-2 border-b border-r-0 border-l-0 border-t-0 border-dashed rounded-none 
                               focus-visible:border-blue-600 focus:border-blue-600 focus-visible:outline-none focus:border-double py-0.5 px-0 text-left 
                               disabled:cursor-not-allowed disabled:opacity-50 disabled:text-slate-800`}>
                    <SelectValue placeholder={placeholder}/>
                </SelectTrigger>
                <SelectContent>
                    {defaultOption && <SelectItem value="">{placeholder}</SelectItem>}
                    {options?.length > 0 && options.map((item, idx) => (
                        <SelectItem key={idx.toString()} value={item?.value}>
                            {item?.label}
                        </SelectItem>))}
                </SelectContent>
            </Select>
        </label>
    );
};

