const FullScreenLoader = () => {

    return (
        <div role="status" className="absolute top-0 left-0 bottom-0 right-0 h-screen w-screen bg-black bg-opacity-5 z-50 flex items-center justify-center">
            <div className='w-24 h-24'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                    <circle fill="#000000" stroke="#000000" strokeWidth="15" r="15" cx="40" cy="65">
                        <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;"
                                 keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
                    </circle>
                    <circle fill="#cc0a13" stroke="#cc0a13" strokeWidth="15" r="15" cx="100" cy="65">
                        <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;"
                                 keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
                    </circle>
                    <circle fill="#000000" stroke="#000000" strokeWidth="15" r="15" cx="160" cy="65">
                        <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;"
                                 keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
                    </circle>
                </svg>
            </div>

            <span className="sr-only text-center">Loading... Please wait</span>
        </div>
    );
};

export default FullScreenLoader;

export const ModalFullScreenLoader = () => {

    return (
        <div role="status" className="absolute top-50 left-50 bottom-0 right-0 h-full w-full bg-black bg-opacity-5 z-50 flex items-center justify-center">
            <div className='w-24 h-24'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                    <circle fill="#000000" stroke="#000000" strokeWidth="15" r="15" cx="40" cy="65">
                        <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;"
                                 keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
                    </circle>
                    <circle fill="#cc0a13" stroke="#cc0a13" strokeWidth="15" r="15" cx="100" cy="65">
                        <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;"
                                 keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
                    </circle>
                    <circle fill="#000000" stroke="#000000" strokeWidth="15" r="15" cx="160" cy="65">
                        <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;"
                                 keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
                    </circle>
                </svg>
            </div>

            <span className="sr-only text-center">Loading... Please wait</span>
        </div>
    );
};