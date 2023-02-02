import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef,GridToolbar } from "@mui/x-data-grid";
import {useNavigate} from 'react-router-dom';
import {GET_DOCTORS} from "../model/Queries/queryDoctors";
import Box from '@mui/material/Box';
import CustomToolbar from "./components/CustomToolbar";
import { useQuery } from "@apollo/client";
import Loader from "../utils/loading";



const allDoctorsColumn = [
  // {
  //     field: "id",
  //     headerName: "No",
      
  //     flex:0.1,
      
  //   },
  {
      field: "full_name",
      headerName: "Full Name",
      
      flex:1,
      
    },
    {
      field: "speciallity_name",
      headerName: "specialization",
      flex:1,
      valueGetter: (params) => params.row.speciallities.speciallity_name

      
    },
    {
      field: "phone_number",
      headerName: "Phone NO",
      
      flex:1,
      
    },
    {
      field: "current_hospital",
      headerName: "Hospital",
      
      flex:1,
      
    },
    {
      field: "experience_year",
      headerName: "Experience",
      
      flex:1,
      
    },
    {
      field: "is_verified",
      headerName: "Verified",
      
      flex:1,
      
    },
    {
      field: "sex",
      headerName: "Gender",
      
      flex:1,
      
    },
    {
      field: "rate",
      headerName: "Rate",
      
      flex:1,
      
    },     
]

function AllDoctorsDataGrid() {

    const navigate = useNavigate();
    const clickHandler =(params)=>{
       navigate ('/individual')
      // console.log(params.row.firstName)
    }
  
  
    const [pageSize, setPageSize] = React.useState(15); //make 5 25
    const { loading, error, data } = useQuery(GET_DOCTORS);
    
    if (loading) return <Loader/>;
    if (error) return <p>Error : {error.message}</p>;
    const [...docs] = data.doctors
  return (
    // console.log(docs[0].speciallities.speciallity_name)
    
  
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
      rows={data.doctors}
      columns={allDoctorsColumn}
      pageSize={pageSize}
      onPageSizeChange={(newPage) => setPageSize(newPage)}
      pagination
      headerHeight={50}
      autoHeight 
      onRowClick={clickHandler}
      components={{Toolbar:CustomToolbar}
      
    }
      
     />
     </Box> 
  );
  
  
}

export default AllDoctorsDataGrid
  