import React from 'react';
import PatientsChart from './patientChart';
import { DataGrid, GridRowsProp, GridColDef,GridToolbarExport,GridToolbarColumnsButton,GridToolbarFilterButton,GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";
import { patientsColumn } from "./columns/columns";
import rows from "../components/data/patient.json"
import { Piechart } from './piechart';
import Box from '@mui/material/Box';
import CustomToolbar from './CustomToolbar';


const Patients = () => {
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
        rows={rows}
        columns={patientsColumn}
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