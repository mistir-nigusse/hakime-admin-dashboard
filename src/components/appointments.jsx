import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef,GridToolbar } from "@mui/x-data-grid";
import {useNavigate} from 'react-router-dom';
import data from './data/appDB.json'
import {ProgressBarChart2} from "./progressbar";
import CustomToolbar from "./CustomToolbar";
import {Box} from "@mui/material";
import  app from '../components/data/appDB.json';
import { APPOINTMENT } from './columns/columns';

const Appointments =()  => {



  const [pageSize, setPageSize] = React.useState(10); //make 5 25

  return (
      <div className='grid grid-cols-3'>
 
     <div className= 'col-span-2   rounded  mr-8 ' >
   <Box
    sx={{
    
      width: '100%',
      '& .super-app-theme--header': {
        backgroundColor: 'rgb(230, 230, 230)',
  
      },
    }}>
    <DataGrid 
         sx={{
          boxShadow: 2,
          border: 0,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      rows={app}
      columns={APPOINTMENT}
      pageSize={pageSize}
      onPageSizeChange={(newPage) => setPageSize(newPage)}
      pagination
      headerHeight={50}
      autoHeight 
    
      components={{Toolbar:CustomToolbar}
      
    }
      
     />
     </Box>
    
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



