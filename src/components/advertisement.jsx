
import React, { useEffect, useState } from "react";

import banner from "../images/banner.jpg";

const Advertisement = () =>{

  return(
       
        <div className="m-4 m- w-11/12 h-screen shadow-xl bg-white  rounded-xl">
        <div className="grid grid-rows-3">
            <div className="row-span-2 ">
              <img src={banner} alt="banner image"/>
            </div>
            <div className="p-4 text-left ">
             <p className="font-bold"> Teklehaymanot Hospital </p> 
             <ul className="text-gray-700">
              <li>Up for 3 weeks</li>
              <li>1 week remaining</li>
             </ul>
          
              
              <button className="bg-gray-400 rounded-md shadow-mdtext-center text-black hover:text-white hover:bg-red-900  p-2 m-4">Remove</button>
            </div>
            </div>
      </div>
      );
  
  
}
export default Advertisement;