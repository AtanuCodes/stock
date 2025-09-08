import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/selectnew.jsx";

const RSelectNew = ({onChange, placeholder='', className, defaultOption, options, ...props}) => {
    return (
        <Select
            onValueChange={onChange}
            {...props}
        >
            <SelectTrigger id={props?.id} className={`${className} flex space-x-2 text-start`}>
                <SelectValue placeholder={placeholder}/>
            </SelectTrigger>
            <SelectContent>
                {defaultOption && <SelectItem value="">
                    {placeholder}
                </SelectItem>}
                {options?.map((item, idx) => (
                    <SelectItem key={idx.toString()} value={item?.value}>
                        {item?.label}
                    </SelectItem>))}
            </SelectContent>
        </Select>

    );
};

export default RSelectNew;