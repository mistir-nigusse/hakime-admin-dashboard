
export const USERS_COLUMNS = [
    {
        Header: "First Name",
        accessor: "first_name",
    },
    {
        Header: "Last Name",
        accessor: "last_name",
    },
    {
        Header: "Specialization",
        accessor: "specialization",
    },
    // {
    //     Header: "Total Balance",
    //     accessor: "total balance",
    // },
    {
        Header: "Active Balance",
        accessor: "active balance"
    },
    {
        Header: "Actions",
        Cell: ({ original }) => (
            <>
            {/* <button className=" m-6 bg-green-700 text-white font-medium rounded-md w-14"value="ddff" onClick={console.log("hiii there")}>
              Edit
            </button> */}
            <button className=" m-6  bg-cyan-700 text-white font-medium rounded-md w-14" value="ddff" onClick={console.log("cell")}>
            View
          </button>
          <button className=" m-6  bg-red-700 text-white font-medium rounded-md w-14" value="ddff" onClick={console.log("hiii from ban there")}>
          Ban
        </button>
            </>
            
          )
    }
   
]
export const APPOINTMENT = [
    // {
    //     Header: "ID",
    //     accessor: "id"
    // },
    {
        Header: "Patient",
        field: "patient_name", 
        flex:1,
        headerClassName: 'super-app-theme--header',
    // headerAlign: 'center',
    },
    {
        Header: "Doctor",
        field: "Doctor_name",
        flex:1
    },
    {
        Header: "Appointment",
        field: "date_and_time",
        flex:1
    },
    {
        Header: "Payment",
        field: "Payment",
        flex:0.5
    },
  
];
export const patientsColumn = [ 
    {
        field: "id",
        headerName: "ID",
        headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
        flex:0.3,
        align: "center"
    },
    {
        field: "fullName",
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        headerName: "Full Name",
        flex:1,
        align: "center"
    },
    {
        field: "totApp",
        headerName: "Total appointments",
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        flex:0.5,
        align:'center'
    },
    {
        field: "isActive",
        headerName: "Engagment",
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        flex:1,
        align: "center"
    },
]

export const mycolumn = [
    {
        field: "first_name",
        headerName: "First name",
        
        flex:1,
        
      },
     
      {
        field: "last_name",
        headerName: "Last name",
        
        flex:1,
    
      },
       {
        field: "gender",
        headerName: "Gender",
        
        flex:0.5,
        
      },
      {
        field: "specialization",
        headerName: "Specialization",
        
        flex:1,
        
      },
      {
        field: "rate",
        headerName: "Rate",
        flex:0.5
      
      },
      {
        field: "totalEarning",
        headerName: "Total earning",
        flex:0.5
      
      },
]
export const ad = [
    {
        field:"id",
        headerName: "No",
        width: 50
    },
    {
        field:"Ad_Name",
        headerName: "Advertiser Name",
        width: 100
    },
    {
        field:"Banner",
        headerName: "Banner Image",
        width: 300
    },
]
const buttons = (props)=>{
 return(
    <button className=" m-6  text-white rounded-md w-14"value="ddff" onClick={console.log("hiii there")}>
              Edit
            </button>
 );   
}