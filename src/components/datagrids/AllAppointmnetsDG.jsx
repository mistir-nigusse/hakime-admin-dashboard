import React from 'react';
import { DataGrid, GridRowsProp, GridColDef,GridToolbarExport,GridToolbarColumnsButton,GridToolbarFilterButton,GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import CustomToolbar from '../CustomToolbar';
import { useQuery } from "@apollo/client";
import Loader from "../utils/loading";
import { GET_APPOINTMENTS } from '../Queries/queryAppointments';

export const allAppointmentsColumn = [
    // {
    //     Header: "ID",
    //     accessor: "id",
    //     flex:0.1
    // },
    {
        Header: "Patient",
        field: "patient_name", 
        flex:1,
        headerClassName: 'super-app-theme--header',
        valueGetter: (params) => params.row.patient.full_name
    // headerAlign: 'center',
    },
    {
        Header: "Doctor",
        field: "Doctor_name",
        flex:1,
        valueGetter: (params) => params.row.doctor.full_name

    },
    {
        Header: "Appointment",
        field: "time",
        flex:0.8
    },
    {
        Header: "Payment",
        field: "price",
        flex:0.5
    },
    {
        Header: "Status",
        field: "status",
        flex:0.5
    },
];


function AllAppointmentsDG() {
    const [pageSize, setPageSize] = React.useState(10); //make 5 25
    const { loading, error, data } = useQuery(GET_APPOINTMENTS);
    
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
        rows={data.appointments}
        columns={allAppointmentsColumn}
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

export default AllAppointmentsDG