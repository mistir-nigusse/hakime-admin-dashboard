import React, { useEffect, useState } from "react";
import { Piechart } from "../../charts/piechart";
import ProgressBarChart from "../../charts/progressbar";
import AllDoctorsDataGrid from "../../datagrids/AllDoctorsDataGrid";

const Doctors =()  => {
  
  return (
    <>
      <div className='grid grid-cols-3'>
   
   <div className= 'col-span-2   rounded  mr-8 ' >
 <AllDoctorsDataGrid/>
</div>
<div className='sticky top-4 right-4 mr-3 grid grid-cols-1 grid-rows-3'>
  
  <div className='bg-white max-h-80 shadow-lg m-4 rounded-md'>

  <Piechart/>
  </div>
  <div className='col-span-2 bg-white shadow-lg rounded-md m-4'>
    <h3 className="font-semibold p-2 text-green-900 ">Specialization catagories <span className="text-xs p-4 text-gray-700 cursor-pointer underline">view all {'-->'}</span></h3>
    
  <ProgressBarChart/>

  </div>
  
  </div>
</div>
      
       

       
     
     
     
  </>
  );
}

export default Doctors;

