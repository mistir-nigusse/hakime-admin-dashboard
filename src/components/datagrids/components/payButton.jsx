import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {SUSPEND_DOCTOR} from '../../model/mutations/doctorsMutations'
import { useMutation } from "@apollo/client";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AddIcon from '@mui/icons-material/Add';
import { Label } from '@mui/icons-material';


export default function PayButton(props) {
  const [open, setOpen] = React.useState(false);
 
//   const [amount, setAmount] = React.useState("");
//   const [, setDescription] = React.useState("");
//   const [title, setTitle] = React.useState("");
//   const [description, setDescription] = React.useState("");
//   const [title, setTitle] = React.useState("");
//   const [description, setDescription] = React.useState("");

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
    
         Pay
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Fill out the form</DialogTitle>
        <DialogContent>
        {/* <form onSubmit={handleSubmit}>
        <TextField
            fullWidth
            margin="dense"
            id="name"
            label="Bussiness name"
            type="text"
            variant="standard"
            required
            value={bussinessName}
            onChange = {(e)=>setBussinessName(e.target.value)}
            error = {!bussinessName}
            helperText= {
              !bussinessName? 'Required' : " "
            }
          /><br/><br/>
       
          
       
        </form> */}
      

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='contained' onClick={handleSuspend}>Proceed</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}