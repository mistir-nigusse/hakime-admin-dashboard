import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef,GridToolbar } from "@mui/x-data-grid";
import {useNavigate} from 'react-router-dom';

const Tablee =(props)  => {

  const navigate = useNavigate();

  
  const clickHandler =(params)=>{
     navigate ('/individual')
    // console.log(params.row.firstName)
  }
 
  const [pageSize, setPageSize] = React.useState(5);

  return (
    <Container>
      
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={pageSize}
        onPageSizeChange={(newPage) => setPageSize(newPage)}
        pagination
        autoHeight
        components={{Toolbar:GridToolbar}}
		onRowClick={clickHandler}{...props.rows}
	
      />
    </Container>
  );
}

export default Tablee;



