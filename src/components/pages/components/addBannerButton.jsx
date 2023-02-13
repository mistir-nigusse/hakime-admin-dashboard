import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AddIcon from '@mui/icons-material/Add';
import { Label } from '@mui/icons-material';
import { useMutation } from "@apollo/client";
import { INSERT_BANNER } from '../../model/mutations/advertisementMutations';
export default function AddBannerButton() {
  const [open, setOpen] = React.useState(false);
  const [start_date, setStart_date] = React.useState("");
  const [end_date, setEnd_date] = React.useState("");
  const [isActive, setIsActive] = React.useState(false);
  const [bussinessName, setBussinessName] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 const handleSubmit = (event)=>{
   console.log(event.target.value)
  // insert_banners({ variables: { banner: start_date } });
  event.preventDefault();
 }

 const [insert_banners, { data, loading, error }] = useMutation(INSERT_BANNER);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  return (
    <div className='m-4 mt-12'>
      <Button variant="contained" onClick={handleClickOpen}>
       <AddIcon/> Publish a new Banner
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Upload a new Banner</DialogTitle>
        <DialogContent>
        <form onSubmit={handleSubmit}>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Bussiness name"
            type="text"
            
            variant="standard"
          /><br/><br/>
         <p className='text-gray-700'> Start Date:</p>
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label=""
            type="date"
            variant="standard"
          /><br/><br/>
        <p className='text-gray-700'> End Date:</p>

           <TextField
            autoFocus
            margin="dense"
            id="name"
            label=""
            type="date"
            value={end_date}
            variant="standard"
          /><br/><br/>
          
          <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Active?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="True" control={<Radio />} label="True" />
        <FormControlLabel value="False" control={<Radio />} label="False" />
        
      </RadioGroup>
    </FormControl>  <br/><br/>
    <input
    style={{ display: "none" }}
    id="contained-button-file"
    type="file"
    
  />
  <label htmlFor="contained-button-file">
    <Button variant="contained" color="primary" component="span">
      Upload
    </Button>
  </label>
        </form>
      

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='contained' onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}