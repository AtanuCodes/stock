import {IoMdClose} from "react-icons/io";
import {MdDriveFolderUpload, MdOutlineRemoveRedEye} from "react-icons/md";
import {IoCameraOutline} from "react-icons/io5";
import ModalComponent from "@/components/modal/modal-component.jsx";
import {useRef, useState} from "react";
import {Camera} from "react-camera-pro";
import {urlToFile} from "@/utility/UtilityFunctions.js";
import { BaseFileUrl } from "@/api-requests/base-url-config.js";

// {
//     hide === "Camera" || "Upload"
// }

const InputFile = ({value, onChange, onClear, onCapture, className = '', id = 'InputFile', hide='', ...props}) => {
    const [showDocument, setShowDocument] = useState(false);
    const [showCamera, setShowCamera] = useState(false);
    const camera = useRef(null);
    const [image, setImage] = useState(null);
    const containerID = 'container_'+id
    
    const ModalDocumentView = (
        <div style={{ height: '80vh' }}>
          {value instanceof File || value instanceof Blob ? (
            <iframe
              src={URL.createObjectURL(value)}
              title="PDF Viewer"
              style={{ width: '100%', height: '100%' }}
              frameBorder="0"
            ></iframe>
          ) : (
            <div className="w-100 h-100">
            <img
            src={BaseFileUrl+value}
            style={{
                width:"100%",height:"100%"
            }}
            />
            </div>
          )}
        </div>
      );

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

    return (
        <>
            {
                value ? <div id={id} className={`pe-1 h-8 py-0.5 flex items-center justify-between border-b border-r-0 border-l-0 border-t-0 border-dashed rounded-none ${className}`}>
                    <p className='truncate'>{value?.name || value.split("-")[3]||""}</p>
                    <div className='space-x-1 flex items-center'>
                        <button onClick={onClear} className='text-lg rounded-lg px-1'><IoMdClose/></button>
                        <button onClick={() => setShowDocument(true)} className='text-lg rounded-lg px-1'><MdOutlineRemoveRedEye/></button>
                    </div>
                </div> : <div id={id} className={`pe-1 h-8 py-0.5 flex items-center justify-between border-b border-r-0 border-l-0 border-t-0 border-dashed rounded-none ${className}`}>
                    <p>No file selected</p>
                    <div className='space-x-1 flex items-center'>
                        <button onClick={() => setShowCamera(true)} className={`${hide === "Camera" ? "hidden" : ""} text-lg rounded-lg px-1`}><IoCameraOutline/></button>
                        <label htmlFor={containerID} className={`${hide === "Upload" ? "hidden" : ""} text-lg rounded-lg cursor-pointer px-1`}>
                            <MdDriveFolderUpload/>
                        </label>
                    </div>
                </div>
            }
            <input
                type="file"
                onChange={(e) => {
                    onChange(e);
                    document.getElementById(id)?.classList.contains("validateFocus") && document.getElementById(id)?.classList.remove("validateFocus");
                }}
                id={containerID}
                className='hidden'
                accept="application/pdf,image/*"
            />
            <ModalComponent
                title={value?.name ||value?.split("-")[3]|| ""}
                show={showDocument}
                setShow={setShowDocument}
                modalBody={ModalDocumentView}
            />
            <ModalComponent
                title="Scan Document"
                show={showCamera}
                setShow={setShowCamera}
                modalBody={ModalCameraView}
                modalFooter={[
                    {
                        btnName: 'Capture',
                        variant: 'outline',
                        onClick: () => setImage(camera.current.takePhoto()),
                        className: `${image ? 'hidden' : 'block'}`
                    },
                    {
                        btnName: 'Use this image',
                        variant: 'default',
                        onClick: async() => {
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
                ]}
            />
        </>
    );
};

export default InputFile;