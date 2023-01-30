import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef,GridToolbar } from "@mui/x-data-grid";
import {useNavigate} from 'react-router-dom';
import data from './data/dbb.json';
import { mycolumn } from "./columns/columns";
import './table.css';
import { Piechart } from "./piechart";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomToolbar from "./CustomToolbar";
import ProgressBarChart from "./progressbar";
const Doctors =()  => {
  
  const navigate = useNavigate();

  
  const clickHandler =(params)=>{
     navigate ('/individual')
    // console.log(params.row.firstName)
  }

  const rows = [
    { id: 1, last_name: "Snowwww", first_name: "Jon", gender: "male" ,specialization: "Dental" , rate: 4.5, totalEarning: "0 ETB"},
    { id: 2, last_name: "Lannister", first_name: "Cersei", gender: "male" , specialization: "Dermatologist" , rate: 4.5, totalEarning: "0 ETB"},
    { id: 3, last_name: "Lannister", first_name: "Jaime", gender: "male" , specialization: "Medical",rate: 4.5, totalEarning: "0 ETB" },
    { id: 4, last_name: "Stark", first_name: "Arya", gender: "male" , specialization:"Medical" , rate: 4.5, totalEarning: "0 ETB"},
    { id: 7, last_name: "Clifford", first_name: "Ferrara", gender: "male" , specialization: "Medical" , rate: 4.5, totalEarning: "0 ETB"},
    { id: 8, last_name: "Frances", first_name: "Rossini", gender: "male" , specialization: "Dermatologist", rate: 4.5, totalEarning: "0 ETB"},
    { id: 9, last_name: "Roxie", first_name: "Harvey", gender: "male" , specialization: "Dental", rate: 4.5, totalEarning: "0 ETB"},
    { id: 1, last_name: "Snowwww", first_name: "Jon", gender: "male" ,specialization: "Dental" , rate: 4.5, totalEarning: "0 ETB"},
    { id: 2, last_name: "Lannister", first_name: "Cersei", gender: "male" , specialization: "Dermatologist" , rate: 4.5, totalEarning: "0 ETB"},
    { id: 3, last_name: "Lannister", first_name: "Jaime", gender: "male" , specialization: "Medical",rate: 4.5, totalEarning: "0 ETB" },
    { id: 4, last_name: "Stark", first_name: "Arya", gender: "male" , specialization:"Medical" , rate: 4.5, totalEarning: "0 ETB"},
    { id: 7, last_name: "Clifford", first_name: "Ferrara", gender: "male" , specialization: "Medical" , rate: 4.5, totalEarning: "0 ETB"},
    { id: 8, last_name: "Frances", first_name: "Rossini", gender: "male" , specialization: "Dermatologist", rate: 4.5, totalEarning: "0 ETB"},
    { id: 9, last_name: "Roxie", first_name: "Harvey", gender: "male" , specialization: "Dental", rate: 4.5, totalEarning: "0 ETB"},

    { id: 1, last_name: "Snowwww", first_name: "Jon", gender: "male" ,specialization: "Dental" , rate: 4.5, totalEarning: "0 ETB"},
    { id: 2, last_name: "Lannister", first_name: "Cersei", gender: "male" , specialization: "Dermatologist" , rate: 4.5, totalEarning: "0 ETB"},
    { id: 3, last_name: "Lannister", first_name: "Jaime", gender: "male" , specialization: "Medical",rate: 4.5, totalEarning: "0 ETB" },
    { id: 4, last_name: "Stark", first_name: "Arya", gender: "male" , specialization:"Medical" , rate: 4.5, totalEarning: "0 ETB"},
    { id: 7, last_name: "Clifford", first_name: "Ferrara", gender: "male" , specialization: "Medical" , rate: 4.5, totalEarning: "0 ETB"},
    { id: 8, last_name: "Frances", first_name: "Rossini", gender: "male" , specialization: "Dermatologist", rate: 4.5, totalEarning: "0 ETB"},
    { id: 9, last_name: "Roxie", first_name: "Harvey", gender: "male" , specialization: "Dental", rate: 4.5, totalEarning: "0 ETB"}
  ];
  const [pageSize, setPageSize] = React.useState(15); //make 5 25

  return (
    <>
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
    columns={mycolumn}
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


// export default function SubscribeToEventsProp() {
//   const [message, setMessage] = React.useState('');
//   const data = useMovieData();

//   const handleRowClick = (params) => {
//     setMessage(`Movie "${params.row.title}" clicked`);
//   };

//   return (
//     <Stack spacing={2} sx={{ width: '100%' }}>
//       <Box sx={{ height: 300, width: '100%' }}>
//         <DataGrid onRowClick={handleRowClick} {...data} />
//       </Box>
//       {message && <Alert severity="info">hello {message}</Alert>}
//     </Stack>
//   );
// }
