import React, { useEffect, useState } from "react";
import { Button, Container } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef,GridToolbar,GridRowParams } from "@mui/x-data-grid";
import {useNavigate} from 'react-router-dom';
import {GET_DOCTORS} from "../model/Queries/queryDoctors";
import Box from '@mui/material/Box';
import CustomToolbar from "./components/CustomToolbar";
import { useQuery } from "@apollo/client";
import Loader from "../utils/loading";
import EditIcon from '@mui/icons-material/Edit';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";

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
    // {
    //   field: "phone_number",
    //   headerName: "Phone NO",
      
    //   flex:1,
      
    // },
    {
      field: "current_hospital",
      headerName: "Hospital",
      
      flex:1,
      
    },
    // {
    //   field: "experience_year",
    //   headerName: "Experience",
      
    //   flex:1,
      
    // },
    {
      field: "is_verified",
      headerName: "Verified",
      
      flex:1,
      
    },
    // {
    //   field: "sex",
    //   headerName: "Gender",
      
    //   flex:1,
      
    // },
    // {
    //   field: "rate",
    //   headerName: "Rate",
      
    //   flex:1,
      
    // },     
    {
      
      field: 'actions',
      flex:2,
      renderCell:(cellValues)=>{
        return(
          
            <div>
              <span><Button variant="text" size="small"
          color="error"
          onClick={(event)=>{
            console.log("suspend")
            console.log(cellValues.id)
          }}>
            <RemoveCircleOutline/>
            </Button></span>
              <span><Button variant="text" size="small"
          color="third"
          onClick={(event)=>{
            console.log("edit")
            console.log(cellValues.id)
          }}>
            <EditIcon/>
            </Button></span>
              <span><Button variant="text" size="small"
          color="primary"
          onClick={(event)=>{
            console.log("open")
            console.log(cellValues.id)
          }}>
            <OpenInNewIcon/>
            </Button></span>
            </div>
            
    
        )
      }
     
    }
    
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
      isRowSelectable={false}
      components={{Toolbar:CustomToolbar}
      
    }
      
     />
     </Box> 
  );
  
  
}

export default AllDoctorsDataGrid
  