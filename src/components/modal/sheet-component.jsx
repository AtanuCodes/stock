import {
    Sheet,
    SheetContent,
    SheetDescription, SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

import {Button} from "@/components/ui/button.jsx";

const SheetComponent = ({show, setShow, title, content, footer, size='md'}) => {
    return (
        <Sheet open={show} onOpenChange={setShow}>
            <SheetContent side={window.innerWidth < 640 ? 'bottom' : 'right'} className={`sm:max-w-${size} bg-[#F8F9FA]`}>
                <SheetHeader className='mb-16 text-left'>
                    <SheetTitle className='text-primary mb-2 border-b border-gray-300'>{title}</SheetTitle>
                    
                    <SheetDescription className='max-h-[calc(100vh-200px)] overflow-auto p-1'>
                        {content}
                    </SheetDescription>
                </SheetHeader>
                <SheetFooter className='absolute bottom-8 right-8 left-8 flex-row'>
                    {footer?.map((btn, idx) =>
                        <Button className={`${btn?.className}`} key={idx.toString()} variant={btn?.variant} onClick={btn?.onClick}>{btn?.btnName}</Button>
                    )}
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default SheetComponent;