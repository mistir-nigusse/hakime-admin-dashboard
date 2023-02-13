import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import  app from '../data/appDB.json';
import {useNavigate} from 'react-router-dom';
import {GET_UPCOMING_APPOINTMENTS} from "../model/Queries/queryAppointments";
import { useQuery, useMutation } from "@apollo/client";
import Loader from "../utils/loading";

const UpcomingAppointmentsDG = ()=>{

    const APPOINTMENT = [
    // {
    //     Header: "ID",
    //     accessor: "id"
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
        flex:1
    },
    {
        Header: "Price",
        field: "price",
        flex:0.5
    },
  
];

    const [pageSize, setPageSize] = React.useState(15); //make 5 25
    const { loading, error, data } = useQuery(GET_UPCOMING_APPOINTMENTS);
   
    if (loading) return <Loader/>;
    if (error) return <p>Error : {error.message}</p>;

  
    return(
       
    
     <>
      <div className='bg-white rounded-lg shadow pt-4 p-8 mr-8 mt-4 col-span-2'>
                <h4 className='font-bold p-4 text-green-900'>Upcoming appointments</h4>
                <p className="text-right"> view all</p>
                <DataGrid
        rows={data.appointments}
        columns={APPOINTMENT}
        pageSize={5}
        // onPageSizeChange={(newPage) => setPageSize(newPage)}
        pagination
        autoHeight
        // components={{Toolbar:GridToolbar}}
   

      />
      

            </div>
    
    </>
    )
}

export default UpcomingAppointmentsDG;