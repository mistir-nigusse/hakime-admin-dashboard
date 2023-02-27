import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {SUSPEND_DOCTOR} from '../../model/mutations/doctorsMutations'
import { useMutation } from "@apollo/client";
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";



export default function SuspendDoctorButton(props) {
  const [open, setOpen] = React.useState(false);
 


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
 const handleSuspend = (event)=>{
  event.preventDefault();
   
   suspend_doctor({ variables: { id: props.id} });
    handleClose();

 }

const[suspend_doctor,{loading,error,data}] = useMutation(SUSPEND_DOCTOR
//   refetchQueries: [
//     {query: GET_NEW_DOCTORS}, // DocumentNode object parsed with gql
//     'Unapproved_doctors', // Query name
   
//   ],
);
if (loading) return <p>loading</p>;
if (error) return <p>Error : {error.message}</p>;
if(data) return <p className='text-red-900 font-bold'>suspended</p>
  
  return (
   
    <div className=''>

      <Button  onClick={handleClickOpen} variant="text" size="small" color="error">
    
        
       <RemoveCircleOutline />
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle></DialogTitle>
        <DialogContent>
        Are you sure you want to suspend doctor?

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='contained' onClick={handleSuspend}>Suspend</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}