import * as React from 'react';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


import AddIcon from '@mui/icons-material/Add';
import UploadImageButton from './uploadImage';
export default function AddBannerButton() {
  const [open, setOpen] = React.useState(false);
  const [start_date, setStart_date] = React.useState("");
  const [end_date, setEnd_date] = React.useState("");
  const [bussinessName, setBussinessName] = React.useState("");
  const [imgId, setImgId] = React.useState("");



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 


  return (
    //  setImgId(data.insert_images.returning[0].id),
    //  console.log(imgId),
    <div className='m-4 mt-12'>
      <Button variant="contained" onClick={handleClickOpen}>
       <AddIcon/> Publish a new Banner
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Upload a new Banner</DialogTitle>
        <DialogContent>
       
      
        <UploadImageButton/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button variant='contained' onClick={handleSubmit}>Submit</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}