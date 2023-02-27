import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {UNSUSPEND_DOCTOR} from '../../model/mutations/doctorsMutations'
import { useMutation } from "@apollo/client";
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";



export default function UnsuspendDoctorButton(props) {
  const [open, setOpen] = React.useState(false);
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
 const handleUnban = (event)=>{
  event.preventDefault();
   
   unsuspend_doctor({ variables: { id: props.id} });
    handleClose();

 }

const[unsuspend_doctor,{loading,error,data}] = useMutation(UNSUSPEND_DOCTOR
//   refetchQueries: [
//     {query: GET_NEW_DOCTORS}, // DocumentNode object parsed with gql
//     'Unapproved_doctors', // Query name
   
//   ],
);
if (loading) return <p>loading</p>;
if (error) return <p>Error : {error.message}</p>;
if(data) return <p className='text-green-900 font-bold'>unbanned</p>
  
  return (
   
    <div className=''>

      <Button  onClick={handleClickOpen} variant="outlined" size="small" >
     <p className="text-green-900 font-bold">Unban</p>
       
        
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle></DialogTitle>
        <DialogContent>
        Are you sure you want to unban doctor?

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='contained' onClick={handleUnban}>Unban</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}