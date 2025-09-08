import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import { X } from 'lucide-react';
import { cn } from '@/utility/lib/utils';
import { Button } from '@/components/ui/button';
import {useEffect} from "react";
import FullScreenLoader, {ModalFullScreenLoader} from "@/components/loading/full-screen-loader.jsx";
import {UtilityStore} from "@/store/utility-store.js";

const ResponsiveModal = DialogPrimitive.Root;
const ResponsiveModalTrigger = DialogPrimitive.Trigger;
const ResponsiveModalClose = DialogPrimitive.Close;
const ResponsiveModalPortal = DialogPrimitive.Portal;
const ResponsiveModalOverlay = React.forwardRef(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        className={cn(
            'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            className,
        )}
        {...props}
        ref={ref}
    />
));
ResponsiveModalOverlay.displayName = DialogPrimitive.Overlay.displayName;

const ResponsiveModalVariants = cva(
    cn(
        'fixed z-50 bg-white shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 overflow-y-auto',
        'lg:left-[50%] lg:top-[50%] lg:grid lg:w-full lg:max-w-lg lg:translate-x-[-50%] lg:translate-y-[-50%] lg:border lg:duration-200 lg:data-[state=open]:animate-in lg:data-[state=closed]:animate-out lg:data-[state=closed]:fade-out-0 lg:data-[state=open]:fade-in-0 lg:data-[state=closed]:zoom-out-95 lg:data-[state=open]:zoom-in-95 lg:data-[state=closed]:slide-out-to-left-1/2 lg:data-[state=closed]:slide-out-to-top-[48%] lg:data-[state=open]:slide-in-from-left-1/2 lg:data-[state=open]:slide-in-from-top-[48%] lg:rounded-xl',

    ),
    {
        variants: {
            side: {
                top: 'inset-x-0 top-0 border-b rounded-b-xl max-h-[95%] lg:h-fit data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
                bottom:
                    'inset-x-0 bottom-0 border-t lg:h-fit max-h-[95%] rounded-t-xl data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
                left: 'inset-y-0 left-0 h-full lg:h-fit w-3/4 border-r rounded-r-xl data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
                right:
                    'inset-y-0 right-0 h-full lg:h-fit w-3/4 border-l rounded-l-xl data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
            },
        },
        defaultVariants: {
            side: 'bottom',
        },
    },
);

const ResponsiveModalContent = React.forwardRef(({ side = 'bottom', className, title, footer, children, ...props }, ref) => (
    <ResponsiveModalPortal>
        <ResponsiveModalOverlay />
        <DialogPrimitive.Content
            ref={ref}
            className={cn(ResponsiveModalVariants({side}), className, props?.size === 'lg' ? 'lg:max-w-6xl' : props?.size === 'md' ? 'lg:max-w-2xl' : 'lg:max-w-lg')}
            {...props}
        >
            <div className="sticky top-0 z-10 bg-white border-b shadow-sm flex justify-between items-center px-4 py-3">
                <ResponsiveModalTitle className="text-lg font-semibold text-black">{title}</ResponsiveModalTitle>
                <ResponsiveModalClose
                    className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary text-black">
                    <X className="h-6 w-6"/>
                    <span className="sr-only">Close</span>
                </ResponsiveModalClose>
            </div>

            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto p-4">
                {children}
            </div>

            <div className="sticky bottom-0 z-10 bg-white shadow-sm p-4 pt-0 space-y-2">
                {footer?.map((btn, idx) =>
                    <Button className={`w-full ${btn?.className}`} key={idx.toString()} variant={btn?.variant}
                            onClick={btn?.onClick}>{btn?.btnName}</Button>
                )}
            </div>
        </DialogPrimitive.Content>
    </ResponsiveModalPortal>
));
ResponsiveModalContent.displayName = DialogPrimitive.Content.displayName;

const ResponsiveModalHeader = ({className, ...props}) => (
    <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
);
ResponsiveModalHeader.displayName = 'ResponsiveModalHeader';

const ResponsiveModalFooter = ({className, ...props}) => (
    <div
        className={cn('flex flex-col items-center md:flex-row sm:justify-end sm:space-x-2', className)}
        {...props}
    />
);
ResponsiveModalFooter.displayName = 'ResponsiveModalFooter';

const ResponsiveModalTitle = React.forwardRef(({className, ...props}, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn('text-lg font-semibold text-black', className)}
        {...props}
    />
));
ResponsiveModalTitle.displayName = DialogPrimitive.Title.displayName;

const ResponsiveModalDescription = React.forwardRef(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn('text-sm', className)}
        {...props}
    />
));
ResponsiveModalDescription.displayName = DialogPrimitive.Description.displayName;

export {
    ResponsiveModal,
    ResponsiveModalPortal,
    ResponsiveModalOverlay,
    ResponsiveModalTrigger,
    ResponsiveModalClose,
    ResponsiveModalContent,
    ResponsiveModalHeader,
    ResponsiveModalFooter,
    ResponsiveModalTitle,
    ResponsiveModalDescription,
};

const ModalComponent = ({show, setShow, side='bottom', title='Title', modalBody=<></>, modalFooter = [], size='lg'}) => {
    const {loading} = UtilityStore();

    return (
        <div className="space-3">
            <ResponsiveModal open={show} onOpenChange={setShow}>
                <ResponsiveModalContent side={side} size={size} title={title} footer={modalFooter}>
                    <ResponsiveModalHeader>
                        <ResponsiveModalDescription>
                            {loading && <ModalFullScreenLoader />}
                            {modalBody}
                        </ResponsiveModalDescription>
                    </ResponsiveModalHeader>
                </ResponsiveModalContent>
            </ResponsiveModal>
        </div>
    );
};

export default ModalComponent;
