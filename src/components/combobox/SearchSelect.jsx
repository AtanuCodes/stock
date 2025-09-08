import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const statuses = [
    {
        value: "backlog",
        label: "Backlog",
    },
    {
        value: "todo",
        label: "Todo",
    },
    {
        value: "in progress",
        label: "In Progress",
    },
    {
        value: "done",
        label: "Done",
    },
    {
        value: "canceled",
        label: "Canceled",
    },
]
const SearchSelect = ({value="", onChange, options=statuses, placeholder=""}) => {
    const [open, setOpen] = React.useState(false)
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    function StatusList({setOpen, setSelectedStatus}) {
        return (
            <Command>
                <CommandInput placeholder={`Filter ${placeholder}...`} />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                        {options.map((status) => (
                            <CommandItem
                                key={status.value}
                                value={status.value}
                                onSelect={(value) => {
                                    setSelectedStatus(
                                        options.find((priority) => priority.value === value) || null
                                    )
                                    setOpen(false)
                                }}
                            >
                                {status.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </Command>
        )
    }
    
    if (isDesktop) {
        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <div className='relative w-full'>
                        <Button variant="outline" className="justify-start w-full">
                            {value ? <>{value.label}</> : <>Select {placeholder} </>}
                        </Button>
                    </div>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0" align="start">
                    <StatusList setOpen={setOpen} setSelectedStatus={onChange} />
                </PopoverContent>
            </Popover>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <div className='relative w-full'>
                    <Button variant="outline" className="w-full justify-start">
                        {value ? <>{value.label}</> : <>+ Set {placeholder}</>}
                    </Button>
                </div>
            </DrawerTrigger>
            <DrawerContent>
            <div className="mt-4 border-t">
                    <StatusList setOpen={setOpen} setSelectedStatus={onChange} />
                </div>
            </DrawerContent>
        </Drawer>
    )
};

export default SearchSelect;

