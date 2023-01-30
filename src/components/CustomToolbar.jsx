import { DataGrid, GridRowsProp, GridColDef,GridToolbarExport,GridToolbarColumnsButton,GridToolbarFilterButton,GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";

function CustomToolbar() {
    return (
      <GridToolbarContainer className='bg-bg grid grid-cols-3 gap-4'>
        <div className='p-4 '><GridToolbarColumnsButton /></div>
        <div className='p-4 '> <GridToolbarFilterButton /></div>
        <div className='p-4 '>   <GridToolbarExport /></div>
  
       
        
     
      </GridToolbarContainer>
    );
  }
export default CustomToolbar;  