import React from "react";
import { DataGrid, GridRowsProp, GridColDef,GridToolbar } from "@mui/x-data-grid";
const WithdrawalRequests = () =>{

    // const navigate = useNavigate();

  
    const clickHandler =(params)=>{
      //  navigate ('/individual')
      // console.log(params.row.firstName)
    }
 const mycolumn = [
        {
            field: "fullName",
            headerName: "Doctor",
            
            flex:1,
            
          },
         
          {
            field: "accountNo",
            headerName: "Preffered option",
            
            flex:1,
        
          },
           
    ];
    const rows = [
      { id: 1, last_name: "Snowwww", first_name: "Jon", gender: "male" ,specialization: "Dental" , rate: 4.5, totalEarning: "0 ETB"},
      { id: 2, last_name: "Lannister", first_name: "Cersei", gender: "male" , specialization: "Dermatologist" , rate: 4.5, totalEarning: "0 ETB"},
      { id: 3, last_name: "Lannister", first_name: "Jaime", gender: "male" , specialization: "Medical",rate: 4.5, totalEarning: "0 ETB" },
      { id: 4, last_name: "Stark", first_name: "Arya", gender: "male" , specialization:"Medical" , rate: 4.5, totalEarning: "0 ETB"},
      { id: 7, last_name: "Clifford", first_name: "Ferrara", gender: "male" , specialization: "Medical" , rate: 4.5, totalEarning: "0 ETB"},
      { id: 8, last_name: "Frances", first_name: "Rossini", gender: "male" , specialization: "Dermatologist", rate: 4.5, totalEarning: "0 ETB"},
      { id: 9, last_name: "Roxie", first_name: "Harvey", gender: "male" , specialization: "Dental", rate: 4.5, totalEarning: "0 ETB"},
      { id: 10, last_name: "Snowwww", first_name: "Jon", gender: "male" ,specialization: "Dental" , rate: 4.5, totalEarning: "0 ETB"},
      { id: 12, last_name: "Lannister", first_name: "Cersei", gender: "male" , specialization: "Dermatologist" , rate: 4.5, totalEarning: "0 ETB"},
      { id: 13, last_name: "Lannister", first_name: "Jaime", gender: "male" , specialization: "Medical",rate: 4.5, totalEarning: "0 ETB" },
      { id: 14, last_name: "Stark", first_name: "Arya", gender: "male" , specialization:"Medical" , rate: 4.5, totalEarning: "0 ETB"},
      { id: 17, last_name: "Clifford", first_name: "Ferrara", gender: "male" , specialization: "Medical" , rate: 4.5, totalEarning: "0 ETB"},
      { id: 18, last_name: "Frances", first_name: "Rossini", gender: "male" , specialization: "Dermatologist", rate: 4.5, totalEarning: "0 ETB"},
      { id: 19, last_name: "Roxie", first_name: "Harvey", gender: "male" , specialization: "Dental", rate: 4.5, totalEarning: "0 ETB"},
  
      { id: 21, last_name: "Snowwww", first_name: "Jon", gender: "male" ,specialization: "Dental" , rate: 4.5, totalEarning: "0 ETB"},
      { id: 22, last_name: "Lannister", first_name: "Cersei", gender: "male" , specialization: "Dermatologist" , rate: 4.5, totalEarning: "0 ETB"},
      { id: 23, last_name: "Lannister", first_name: "Jaime", gender: "male" , specialization: "Medical",rate: 4.5, totalEarning: "0 ETB" },
      { id: 24, last_name: "Stark", first_name: "Arya", gender: "male" , specialization:"Medical" , rate: 4.5, totalEarning: "0 ETB"},
      { id: 27, last_name: "Clifford", first_name: "Ferrara", gender: "male" , specialization: "Medical" , rate: 4.5, totalEarning: "0 ETB"},
      { id: 28, last_name: "Frances", first_name: "Rossini", gender: "male" , specialization: "Dermatologist", rate: 4.5, totalEarning: "0 ETB"},
      { id: 29, last_name: "Roxie", first_name: "Harvey", gender: "male" , specialization: "Dental", rate: 4.5, totalEarning: "0 ETB"}
    ];
    const [pageSize, setPageSize] = React.useState(5); //make 5 25
  
    return (
      <div>
        <div style={{ height: 350, width: 1000 }}>
        <DataGrid className="table"
          sx={{m:5}}
          rows={rows}
          columns={mycolumn}
          pageSize={pageSize}
          onPageSizeChange={(newPage) => setPageSize(newPage)}
          pagination
          autoHeight
          components={{Toolbar:GridToolbar}}
          componentsProps={{
            columnMenu: { background: 'red', counter: rows.length },
          }}
          onRowClick={clickHandler}{...rows}
  
        />
        </div>
    
      </div>
    );
}
export default WithdrawalRequests;