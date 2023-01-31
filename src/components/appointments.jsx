import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef,GridToolbar } from "@mui/x-data-grid";
import {useNavigate} from 'react-router-dom';
import data from './data/appDB.json'
import {ProgressBarChart2} from "./charts/progressbar";
import CustomToolbar from "./CustomToolbar";
import {Box} from "@mui/material";
import  app from '../components/data/appDB.json';
import { APPOINTMENT } from './columns/columns';
import AllAppointmentsDG from "./datagrids/AllAppointmnetsDG";

const Appointments =()  => {



  const [pageSize, setPageSize] = React.useState(10); //make 5 25

  return (
      <div className='grid grid-cols-3'>
 
     <div className= 'col-span-2   rounded  mr-8 ' >
     <AllAppointmentsDG/>
    
</div>
<div className='sticky top-4 right-4 mr-3 grid grid-cols-1 grid-rows-2'>
    <div className='bg-white shadow-lg rounded-md m-4'>
    <ProgressBarChart2/>
  
    </div>
    <div className='bg-white shadow-lg m-4 rounded-md'>
  
    {/* <Piechart/> */}
    </div>
    
    </div>
  </div>
  );
}

export default Appointments;



