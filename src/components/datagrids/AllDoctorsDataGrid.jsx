import React, { useEffect, useState, useMemo } from "react";
import { Button, Container } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef,GridToolbar,GridRowParams } from "@mui/x-data-grid";
import {useNavigate} from 'react-router-dom';
import {GET_DOCTORS} from "../model/Queries/queryDoctors";
import { useQuery, useMutation } from "@apollo/client";
import Loader from "../utils/loading";

import Box from '@mui/material/Box';
import CustomToolbar from "./components/CustomToolbar";
import DeleteIcon from '@mui/icons-material/Delete';import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";
import { DELETE_DOCTOR, APPROVE_DOCTOR } from "../model/mutations/doctorsMutations";




function AllDoctorsDataGrid() {
  // const [insert_banners, { data, loading, error }] = useMutation(INSERT_BANNER);
  // const updateCache = (cache, {data}) => {
  //   // If this is for the public feed, do nothing
   
  //   // Fetch the todos from the cache
  //   const current = cache.readQuery({
  //     query: GET_DOCTORS
  //   });
  //   // Add the new todo to the cache
  //   const newTodo = data.insert_todos.returning[0];
  //   cache.writeQuery({
  //     query: GET_DOCTORS,
  //     data: {todos: [newTodo, ...existingTodos.todos]}
  //   });
  // };
  const allDoctorsColumn = useMemo(
    ()=>[
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
              // const [insert_banners, { data, loading, error }] = useMutation(DELETE_DOCTOR);
              deleteDoctor({variables:{id:cellValues.id}})


            }}>
              <RemoveCircleOutline/>
              </Button></span>
                <span><Button variant="text" size="small"
            color="error"
            onClick={(event)=>{
              console.log("approve")
              console.log(cellValues.id)
              approveDoctor({variables:{id:cellValues.id}})
            }}>
              <DeleteIcon/>
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
    
    )
    

    const navigate = useNavigate();
    const clickHandler =(params)=>{
       navigate ('/individual')
      // console.log(params.row.firstName)
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
      components={{Toolbar:CustomToolbar}
      
    }
      
     />
     </Box> 
  );
  
  
}

export default AllDoctorsDataGrid
  