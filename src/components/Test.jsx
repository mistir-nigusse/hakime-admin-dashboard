// import React, { useEffect, useState } from "react";
// import { Container } from "@mui/material";
// import { DataGrid, GridRowsProp, GridColDef,GridToolbar } from "@mui/x-data-grid";
// import {useNavigate} from 'react-router-dom';
// import data from './data/dbb.json';
// import { mycolumn } from "./columns/columns";
// const Test =()  => {

//   const navigate = useNavigate();
//   const columns = [
    
//     {
//       field: "first_name",
//       headerName: "First name",
//       width: 15,
      
//     },
//     {
//       field: "last_name",
//       headerName: "Last name",
//       width: 150,
  
//     },
//     {
//       field: "specialization",
//       headerName: "Age",
    
//       width: 110,
    
//     },
   
//   ];
  
//   const clickHandler =(params)=>{
//      navigate ('/individual')
//     // console.log(params.row.firstName)
//   }
//   const rows = [
//     { id: 1, last_name: "Snow", first_name: "Jon", specialization: 35 },
//     { id: 2, last_name: "Lannister", first_name: "Cersei", specialization: 42 },
//     { id: 3, last_name: "Lannister", first_name: "Jaime", specialization: 45 },
//     { id: 4, last_name: "Stark", first_name: "Arya", specialization: 16 },
//     { id: 7, last_name: "Clifford", first_name: "Ferrara", specialization: 44 },
//     { id: 8, last_name: "Frances", first_name: "Rossini", specialization: 36 },
//     { id: 9, last_name: "Roxie", first_name: "Harvey", specialization: 65 }
//   ];
//   const [pageSize, setPageSize] = React.useState(25);

//   return (
//     <Container>
      
//       <DataGrid
//         rows={rows}
//         columns={mycolumn}
//         pageSize={pageSize}
//         onPageSizeChange={(newPage) => setPageSize(newPage)}
//         pagination
//         autoHeight
//         components={{Toolbar:GridToolbar}}
// 		onRowClick={clickHandler}{...rows}
	
//       />
//     </Container>
//   );
// }

// export default Test;


// // export default function SubscribeToEventsProp() {
// //   const [message, setMessage] = React.useState('');
// //   const data = useMovieData();

// //   const handleRowClick = (params) => {
// //     setMessage(`Movie "${params.row.title}" clicked`);
// //   };

// //   return (
// //     <Stack spacing={2} sx={{ width: '100%' }}>
// //       <Box sx={{ height: 300, width: '100%' }}>
// //         <DataGrid onRowClick={handleRowClick} {...data} />
// //       </Box>
// //       {message && <Alert severity="info">hello {message}</Alert>}
// //     </Stack>
// //   );
// // }
import React from 'react'
import BreadCrumbs from './BreadCrumbs'
const Test = () => {
  return (
    <div><BreadCrumbs/></div>
  )
}

export default Test