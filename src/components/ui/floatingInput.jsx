import React, {useEffect, useRef, useState} from "react";
import {cn} from "@/utility/lib/utils.js";
import Cleave from "cleave.js/react.js";
import {IoMdClose} from "react-icons/io";
import {MdDriveFolderUpload, MdOutlineRemoveRedEye} from "react-icons/md";
import {IoCameraOutline} from "react-icons/io5";
import ModalComponent from "@/components/modal/modal-component.jsx";
import {urlToFile, urlToMimeType} from "@/utility/UtilityFunctions.js";
import validationHelper from "@/utility/ValidationHelper.js";
import {BaseFileUrl} from "@/api-requests/base-url-config.js"
// import {Camera} from "react-camera-pro";

const FloatingInput = ({label, value, onChange, type = "text", containerClassName, className, startIcon, onStartIconClick, endIcon, onEndIconClick, ...props}) => {
    return (
        <label
            htmlFor={props?.id}
            className={`relative block mt-1 mb-2 cursor-text py-1.5 ${containerClassName}`}
        >
            <input
                {...props}
                value={value}
                type={type}
                className={`${className} bg-transparent peer h-10 w-full border-b border-r-0 border-l-0 border-t-0 border-dashed rounded-none
                        placeholder-transparent focus:border-b focus:border-blue-500 focus:outline-none focus:border-double text-sm py-0.5 px-0
                        disabled:cursor-not-allowed disabled:opacity-50 disabled:text-slate-800`}
                onChange={(e) => {
                    onChange(e);
                    document.getElementById(props?.id)?.classList.contains("validateFocus") && document.getElementById(props?.id)?.classList.remove("validateFocus");
                }}
            />
            <span
                className="absolute left-0 -translate-y-3.5 bg-transparent text-sm peer-focus:text-blue-600 text-gray-500 transition-all
                peer-placeholder-shown:translate-y-1
                peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500
                peer-focus:-translate-y-3 peer-focus:text-xs"
            >
        {label}
      </span>
        </label>
    );
};
FloatingInput.displayName = "FloatingInput"

const FloatingCleaveInput = React.forwardRef(({containerClassName, className, type, startIcon, endIcon, autoFocus, ...props}, ref) => {
    const StartIcon = startIcon || null;
    const EndIcon = endIcon || null;

    return (
        <label
            htmlFor={props?.id}
            className={`relative block mt-1 mb-2 cursor-text py-1.5 ${containerClassName}`}
        >
            {StartIcon && (
                <div className="absolute left-1.5 top-1/2 transform -translate-y-1/2">
                    <StartIcon size={18} className="text-muted-foreground"/>
                </div>
            )}
            <Cleave
                {...props}
                autoFocus={autoFocus}
                type={type}
                className={cn(
                    `bg-transparent peer h-8 w-full border-b border-r-0 border-l-0 border-t-0 border-dashed rounded-none
                  placeholder-transparent focus:border-b focus:border-blue-500 focus:outline-none focus:border-double text-sm py-0.5 px-0
                  disabled:cursor-not-allowed disabled:opacity-50 disabled:text-slate-800`,
                    startIcon ? "pl-8" : "",
                    endIcon ? "pr-8" : "",
                    className
                )}
                onChange={(e) => {
                    props?.onChange(e);
                    document.getElementById(props?.id)?.classList.contains("validateFocus") && document.getElementById(props?.id)?.classList.remove("validateFocus");
                }}
                id={props?.id}
                ref={ref}
            />
            {EndIcon && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <EndIcon className="text-muted-foreground" size={18}/>
                </div>
            )}
            <span className="absolute left-0 -translate-y-3 bg-transparent text-xs peer-focus:text-blue-600 text-gray-500 transition-all
            peer-placeholder-shown:translate-y-1
            peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500
            peer-focus:-translate-y-3 peer-focus:text-xs"
            >
          {props?.label}
        </span>
        </label>
    );
})
FloatingCleaveInput.displayName = "FloatingCleaveInput"

export const ViewDocument = ({value}) => {
    return <div
        style={{height: (!validationHelper.isEmpty(value?.name) ? value?.type?.startsWith('image/') : urlToMimeType(value)?.startsWith('image/')) ? 'auto' : '80vh'}}>
        {(!validationHelper.isEmpty(value?.name) ? value?.type === 'application/pdf' : urlToMimeType(value) === "application/pdf") ? (
            <iframe
                src={validationHelper.isEmpty(value?.name) ? BaseFileUrl + value : URL.createObjectURL(value)}
                title="PDF Viewer"
                className='w-full h-full'
                frameBorder="0"
            ></iframe>
        ) : (!validationHelper.isEmpty(value?.name) ? value?.type?.startsWith('image/') : urlToMimeType(value)?.startsWith('image/')) ? (
            <img
                alt={validationHelper.isEmpty(value?.name) ? BaseFileUrl + value : URL.createObjectURL(value)}
                src={validationHelper.isEmpty(value?.name) ? BaseFileUrl + value : URL.createObjectURL(value)}
                className='w-full h-auto aspect-auto'
            />
        ) : <p>Preview not available for this file type</p>}
    </div>
}

const FloatingInputFile = ({value, onChange, onClear, onCapture, className = '', containerClassName, id = 'InputFile', hide = '', ...props}) => {
    const [showDocument, setShowDocument] = useState(false);
    const [showCamera, setShowCamera] = useState(false);
    const camera = useRef(null);
    const [image, setImage] = useState(null);
    const containerID = 'container_' + id;

    const ModalDocumentView = <ViewDocument value={value}/>;
    const ModalCameraView = <div className='space-y-2 h-[calc(100vh-16rem)]'>
        {!image && <Camera aspectRatio={1} ref={camera} facingMode='environment' errorMessages={{
            noCameraAccessible: 'No camera device accessible. Please connect your camera or try a different browser.',
            permissionDenied: 'Permission denied. Please refresh and give camera permission.',
            switchCamera:
                'It is not possible to switch camera to different one because there is only one video device accessible.',
            canvas: 'Canvas is not supported.'
        }}/>}
        {image && <img src={image || ""} alt='Taken photo' className='p-1 border border-destructive'/>}
    </div>

    const DocumentActions = <div className='space-x-1 flex items-center'>
        <button onClick={(event) => {
            event.preventDefault();
            setShowDocument(true);
        }} className='text-lg rounded-lg px-1'><MdOutlineRemoveRedEye/></button>
        <button onClick={(event) => {
            event.preventDefault();
            document.getElementById(id).value = null;
            onClear();
        }} className='text-lg rounded-lg px-1'><IoMdClose/></button>
    </div>
    const NoDocumentActions = <div className='space-x-1 flex items-center'>
        <label htmlFor={containerID}
               className={`${hide === "Upload" ? "hidden" : ""} text-lg rounded-lg cursor-pointer px-1`}>
            <MdDriveFolderUpload/>
        </label>
        <button onClick={(event) => {
            event.preventDefault();
            setShowCamera(true);
        }} className={`${hide === "Camera" ? "hidden" : ""} text-lg rounded-lg px-1`}><IoCameraOutline/></button>
    </div>

    const ModalActions = [
        {
            btnName: 'Capture',
            variant: 'outline',
            onClick: () => setImage(camera.current.takePhoto()),
            className: `${image ? 'hidden' : 'block'}`
        },
        {
            btnName: 'Use this image',
            variant: 'default',
            onClick: async () => {
                let imageFile = await urlToFile(image, 'CapturedImage');
                onCapture(imageFile);
                setShowCamera(false);
            },
            className: `${image ? 'block' : 'hidden'}`
        },
        {
            btnName: 'Capture Again',
            variant: 'outline',
            onClick: () => {
                setImage(null);
            },
            className: `${image ? 'block' : 'hidden'}`
        },
    ];

    return (
        <>
            <label className={`relative block mt-1 mb-2 cursor-text py-1.5 ${containerClassName}`}>
                <span className="absolute left-0 -translate-y-3 bg-transparent text-xs peer-focus:text-blue-600 text-gray-500 transition-all
                    peer-placeholder-shown:translate-y-1
                    peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500
                    peer-focus:-translate-y-3 peer-focus:text-xs"
                >
                  {props?.label}
                </span>
                {
                    !validationHelper.isEmpty(value) ? <div id={id} className={`pe-1 h-8 py-0.5 flex items-center justify-between border-b border-r-0 border-l-0 border-t-0 border-dashed rounded-none ${className}`}>
                        <p className='truncate text-sm'>{value instanceof File
                                ? value?.name
                                : (typeof value === "string" ? value?.split("\\")?.pop() : "")
                        }</p> {DocumentActions}
                    </div> : <div id={id} className={`pe-1 h-8 py-0.5 flex items-center justify-between border-b border-r-0 border-l-0 border-t-0 border-dashed rounded-none ${className}`}>
                        <p>No file selected</p> {NoDocumentActions}
                    </div>
                }
            </label>
            <input
                type="file"
                onChange={(e) => {
                    onChange(e);
                    document.getElementById(id)?.classList.contains("validateFocus")
                    && document.getElementById(id)?.classList.remove("validateFocus");
                }}
                id={containerID}
                className='hidden'
                accept="application/pdf,image/*"
            />
            <div className='hidden'>
                <ModalComponent
                    title={value instanceof File
                        ? value?.name
                        : (typeof value === "string" ? value?.split("\\")?.pop() : "")
                    }
                    show={showDocument}
                    setShow={setShowDocument}
                    modalBody={ModalDocumentView}
                />
                <ModalComponent
                    title="Scan Document"
                    show={showCamera}
                    setShow={setShowCamera}
                    modalBody={ModalCameraView}
                    modalFooter={ModalActions}
                />
            </div>
        </>
    );
};
FloatingInputFile.displayName = "FloatingInputFile"

const FloatingTextArea = ({label, type = "text", value, onChange, readOnly = false, ref, autoFocus, className, containerClassName, ...props}) => {
    return (
        <label
            htmlFor={props?.id}
            className={`relative block mt-1 mb-1 cursor-text py-1.5 ${containerClassName}`}
        >
            {/* {required && <span className="text-red-500 text-sm">*</span>} */}
            <textarea
                {...props}
                autoFocus={autoFocus}
                id={props?.id}
                ref={ref}
                className={`${className} bg-transparent peer min-h-8 w-full border-b border-r-0 border-l-0 border-t-0 border-dashed rounded-none
                        placeholder-transparent focus:border-b focus:border-blue-500 focus:outline-none focus:border-double text-sm py-0.5 px-0
                        disabled:cursor-not-allowed disabled:opacity-50 disabled:text-slate-800`}
                value={value}
                onChange={(e) => {
                    onChange(e);
                    document.getElementById(props?.id)?.classList.contains("validateFocus") && document.getElementById(props?.id)?.classList.remove("validateFocus");
                }}
                readOnly={readOnly}
            />
            <span className="absolute left-0 -translate-y-3 bg-transparent text-xs
                peer-focus:text-blue-600 text-gray-500 transition-all
                peer-placeholder-shown:translate-y-1 peer-placeholder-shown:text-sm
                peer-focus:-translate-y-3 peer-focus:text-xs"
            >
                {label}
            </span>
        </label>
    );
};
FloatingTextArea.displayName = "FloatingTextArea"
const FloatingSearchableInput = ({options = [], getSearchText, renderItem, onSelect, label, containerClassName, className, value, onChange, ...inputProps}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const wrapperRef = useRef(null);

    // Handle clicks outside to close the dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Parse value into selected items and search query
    const parseValue = (val) => {
        const parts = val?.split(';')?.map(part => part.trim());
        const searchQuery = parts.pop() || '';
        const selectedItems = parts.filter(part => part !== '');
        return { selectedItems, searchQuery };
    };

    const { selectedItems, searchQuery } = parseValue(value);

    // Handle input changes and filter items
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        onChange(newValue);
        const { searchQuery: newSearchQuery } = parseValue(newValue);
        if (newSearchQuery) {
            const filtered = options.filter(
                item =>
                    !selectedItems.includes(getSearchText(item)) &&
                    getSearchText(item).toLowerCase().includes(newSearchQuery.toLowerCase())
            );
            setFilteredItems(filtered);
            setIsOpen(true);
            setSelectedIndex(-1);
        } else {
            setFilteredItems([]);
            setIsOpen(false);
            setSelectedIndex(-1);
        }
    };

    // Handle item selection
    const handleSelect = (item) => {
        const newSelectedItems = [...selectedItems, getSearchText(item)];
        const newValue = newSelectedItems.join('; ') + '; ';
        onChange(newValue);
        setIsOpen(false);
        setSelectedIndex(-1);
        if (onSelect) onSelect(item);
    };

    // Handle input focus
    const handleFocus = () => {
        if (searchQuery && filteredItems.length > 0) {
            setIsOpen(true);
        }
    };

    // Handle input blur with delay for dropdown clicks
    const handleBlur = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    // Handle keyboard navigation and backspace
    const handleKeyDown = (e) => {
        if (e.key === 'Backspace') {
            if (searchQuery === '' && selectedItems.length > 0) {
                e.preventDefault();
                const newSelectedItems = selectedItems.slice(0, -1);
                const newValue =
                    newSelectedItems.join('; ') + (newSelectedItems.length > 0 ? '; ' : '');
                onChange(newValue);
            }
        } else if (isOpen) {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    setSelectedIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : prev));
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (selectedIndex >= 0) {
                        handleSelect(filteredItems[selectedIndex]);
                    }
                    break;
                case 'Escape':
                    e.preventDefault();
                    setIsOpen(false);
                    setSelectedIndex(-1);
                    break;
                default:
                    break;
            }
        }
    };

    // Render the dropdown
    const renderDropdown = () => {
        if (!isOpen) return null;

        if (filteredItems.length === 0 && searchQuery) {
            return (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg p-2 text-gray-500 text-sm">
                    No results found
                </div>
            );
        }

        if (filteredItems.length === 0) return null;

        return (
            <ul
                className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
                role="listbox"
                aria-expanded={isOpen}
            >
                {filteredItems.map((item, index) => (
                    <li
                        key={item.id || index}
                        className={`p-2 cursor-pointer text-sm ${
                            index === selectedIndex ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'
                        }`}
                        onClick={() => handleSelect(item)}
                        role="option"
                        aria-selected={index === selectedIndex}
                    >
                        {renderItem ? renderItem(item) : getSearchText(item)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div ref={wrapperRef} className={`relative ${containerClassName}`}>
            <FloatingTextArea
                label={label}
                value={value}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                className={className}
                {...inputProps}
            />
            {renderDropdown()}
        </div>
    );
};

FloatingSearchableInput.displayName = 'FloatingSearchableInput';

export {FloatingInput, FloatingCleaveInput, FloatingInputFile, FloatingTextArea, FloatingSearchableInput};
