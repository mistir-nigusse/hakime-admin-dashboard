import React from 'react';
import { DataGrid, GridRowsProp, GridColDef,GridToolbarExport,GridToolbarColumnsButton,GridToolbarFilterButton,GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import CustomToolbar from './components/CustomToolbar';
import { useQuery } from "@apollo/client";
import Loader from "../utils/loading";
import { GET_PATIENTS } from '../model/Queries/queryPatients';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";

export const patientsColumn = [ 
    // {
    //     field: "id",
    //     headerName: "ID",
    //     headerClassName: 'super-app-theme--header',
    // headerAlign: 'center',
    //     flex:0.1,
    //     align: "center"
    // },
    {
        field: "full_name",
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        headerName: "Full Name",
        flex:1,
        align: "center"
    },
    {
        field: "sex",
        headerName: "Gender",
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        flex:1,
        align:'center'
    },
    {
        field: "phone_number",
        headerName: "Phone No",
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        flex:1,
        align: "center"
    },
    {
        field: "created_at",
        headerName: "Create at",
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        flex:1,
        align: "center"
    },
    {
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      field: 'Actions',
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


function AllPatientsDG() {
    const [pageSize, setPageSize] = React.useState(10); //make 5 25
    const { loading, error, data } = useQuery(GET_PATIENTS);
    
    if (loading) return <Loader/>;
    if (error) return <p>Error : {error.message}</p>;
  return (
    <>
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
        rows={data.users}
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
      
    </>
  )
}

export default AllPatientsDG