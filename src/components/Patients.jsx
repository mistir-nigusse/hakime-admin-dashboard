import React from 'react';
import PatientsChart from './charts/patientChart';
import { DataGrid, GridRowsProp, GridColDef,GridToolbarExport,GridToolbarColumnsButton,GridToolbarFilterButton,GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";
import { patientsColumn } from "./columns/columns";
import rows from "../components/data/patient.json"
import { Piechart } from './charts/piechart';
import Box from '@mui/material/Box';
import CustomToolbar from './CustomToolbar';
import AllPatientsDG from './datagrids/AllPatientsDG';


const Patients = () => {

    return (
        <div className='grid grid-cols-3'>
        
       <div className= 'col-span-2   rounded  mr-8 ' >
       <AllPatientsDG/>
</div>
<div className='sticky top-4 right-4 mr-3 grid grid-cols-1 grid-rows-2'>
      <div className='bg-white shadow-lg rounded-md m-4'>
      <PatientsChart/>
    
      </div>
      <div className='bg-white shadow-lg m-4 rounded-md'>
    
      <Piechart/>
      </div>
      
      </div>
    </div>
    );
};
export default Patients;