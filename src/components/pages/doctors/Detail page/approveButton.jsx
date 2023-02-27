import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {APPROVE_DOCTOR} from '../../../model/mutations/doctorsMutations'
import { useMutation } from "@apollo/client";
import DeleteIcon from '@mui/icons-material/Delete';
import { GET_NEW_DOCTORS } from '../../../model/Queries/queryNewDoctors';


export default function ApproveButton(props) {
  const [open, setOpen] = React.useState(false);
 
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
 const handleDelete = (event)=>{
  event.preventDefault();
   
   approve_doctor({ variables: { id: props.id} });
    handleClose();

 }

const[approve_doctor,{loading,error,data}] = useMutation(APPROVE_DOCTOR,{
  refetchQueries: [
    {query: GET_NEW_DOCTORS}, // DocumentNode object parsed with gql
    'Unapproved_doctors', // Query name
   
  ],
});
if (loading) return <p>loading</p>;
if (error) return <p>Error : {error.message}</p>;
if(data) return <p className='text-green-900 font-bold'>Approved successfully</p>
  
  return (
   
    <div className=''>
      <Button  onClick={handleClickOpen} variant="contained">
       Approve
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle></DialogTitle>
        <DialogContent>
        Are you sure you want to approve this request?

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='contained' onClick={handleDelete}>Approve</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}