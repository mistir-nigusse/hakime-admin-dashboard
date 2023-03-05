// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import { UPDATE_BANNER } from '../../model/mutations/advertisementMutations';
// import { useMutation } from '@apollo/client';

// export default function EditBannerButton(props) {
//   const [open, setOpen] = React.useState(false);
//   const handleSubmit = (event)=>{
//     event.preventDefault();
//     update_banner({ variables: {  start_date:start_date, end_date:end_date ,bussiness_name:bussinessName} });
//     event.preventDefault();
//    }
// const [start_date, setStart_date] = React.useState("");
// const [end_date, setEnd_date] = React.useState("");
// const [bussinessName, setBussinessName] = React.useState(props.name);
// const [imgId, setImgId] = React.useState(props.imgId);
// const[update_banner, {data,loading,error}] = useMutation(UPDATE_BANNER);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   if (loading) return 'Submitting...';
//   if (error) return `Submission error! ${error.message}`;
//   // if (data) return 'Updated successfully'
//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Edit
//       </Button>
//       <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
//         <DialogTitle>Edit information</DialogTitle>
//         <DialogContent>
          
//           <TextField
//           fullWidth
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Bussiness name"
//             type="text"
            
//             variant="standard"
//           /><br/><br/><br/> start date<br/>
//            <TextField
//            fullWidth
//             autoFocus
//             margin="dense"
//             id="name"
//             type="date"
            
//             variant="standard"
//           /><br/> <br/><br/> End date<br/>
//            <TextField
//            fullWidth
//             autoFocus
//             margin="dense"
//             id="name"
//             type="date"
            
//             variant="standard"
//           /><br/><br/>
         
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button variant='contained' onClick={handleClose}>Submit</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }