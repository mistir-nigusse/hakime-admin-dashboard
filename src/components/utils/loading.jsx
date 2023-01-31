import React from "react";
const Loader = () => {
    let circleCommonClasses = 'h-2.5 w-2.5 bg-green-900  rounded-full';

    return (
   <div className='flex m-auto'>
        <div className={`${circleCommonClasses} mr-1`}></div>
        <div className={`${circleCommonClasses} mr-1`}></div>
        <div className={`${circleCommonClasses}`}></div>
   </div>
    );
};

export default Loader;