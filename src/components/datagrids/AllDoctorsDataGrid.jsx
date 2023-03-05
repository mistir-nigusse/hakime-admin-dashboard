import React, { useEffect, useState, useMemo } from "react";
import { Button, Container } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef,GridToolbar,GridRowParams,valueGetter } from "@mui/x-data-grid";
import {useNavigate} from 'react-router-dom';
import {GET_DOCTORS} from "../model/Queries/queryDoctors";
import { useQuery, useMutation } from "@apollo/client";
import Loader from "../utils/loading";

import Box from '@mui/material/Box';
import CustomToolbar from "./components/CustomToolbar";
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";
import { DELETE_DOCTOR, APPROVE_DOCTOR } from "../model/mutations/doctorsMutations";
import SuspendDoctorButton from "./components/suspendDoctorButton";
import UnsuspendDoctorButton from "./components/unsuspendDoctorButton";




function AllDoctorsDataGrid() {

  const allDoctorsColumn = useMemo(
    ()=>[
      {
        field: " ", 
        flex:1,
        headerName: '',
        renderCell: (params) => {
          return(
            console.log(params.row.profile_image.url),
            <img className="rounded-full h-12 w-12 p-1 " src={params.row.profile_image.url} alt="pp" />
         

            )
        }
    // headerAlign: 'center',
    },
      {
        field: "full_name",
        headerName: "Full Name",
        
        flex:1,
        
      },
      {
        field: "speciallity_name",
        headerName: "specialization",
        flex:1,
        valueGetter: (params) =>{
          return(
             params.row.speciallities.speciallity_name
             )
        }
    
        
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
        field: "is_suspended",
        headerName: "Suspension",
        
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
            
              <div className="flex">
                    { cellValues.row.is_suspended? <span><UnsuspendDoctorButton id={cellValues.id}/></span>:

                <span>
                  <SuspendDoctorButton id={cellValues.id} />
                 </span>
                 }
                 <span>
                  <Button onClick={(e)=>{
                           navigate(`/doctorsdetail/${cellValues.row.id}`);

                  }}><OpenInNewIcon/></Button>
                 </span>
               
              </div>
              
      
          )
        }
       
      }
    
    ]
    
    )
    

    const navigate = useNavigate();
    const handleRowClick =(params)=>{
       navigate(`/doctorsdetail/${params.row.id}`);

       console.log(params.row.id)
    }
  

    const [pageSize, setPageSize] = React.useState(15); //make 5 25
    const { loading, error, data } = useQuery(GET_DOCTORS);
    const [deleteDoctor] = useMutation(DELETE_DOCTOR);

    // const [deleteDoctor] = useMutation(DELETE_DOCTOR,{update:{updateCache}});
    const [approveDoctor] = useMutation(APPROVE_DOCTOR);

    if (loading) return <Loader/>;
    if (error) return <p>Error : {error.message}</p>;
  
  return (
    
      // const {loading,error,data} = useMutaion(DELETE_DOCTOR);
  
  
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
      components={{Toolbar:CustomToolbar} }
      rowClick={handleRowClick}
      
     />
     </Box> 
  );
  
  
}

export default AllDoctorsDataGrid
  