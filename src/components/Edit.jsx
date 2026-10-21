import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaRegEdit } from 'react-icons/fa';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { FaXmark } from 'react-icons/fa6';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  overflowY: 'auto',
  maxHeight: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button style={{ color: '#5f2322' }} className='btn me-2' onClick={handleOpen}><FaRegEdit className='me-1 fs-4 ' />Edit CV</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/*  */}
            <div>
              <h3>Personal Details</h3>
              <TextField className='container-fluid mt-2' id="standard-basic-fullname" label="Full Name" variant="standard" />
              <TextField className='container-fluid my-4' id="standard-basic-loc" label="Location" variant="standard" />
              <FormControl variant="standard" className='container-fluid mb-5'>
                <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="job"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* Contact Details */}
            <div>
              <h3>Contact Details</h3>
              <TextField className='container-fluid mt-2' id="standard-basic-email" label="Email" variant="standard" />
              <TextField className='container-fluid my-4' id="standard-basic-contnum" label="Contact Number" variant="standard" />
              <TextField className='container-fluid' id="standard-basic-linkd" label="Linkedin Link" variant="standard" />
              <TextField className='container-fluid mt-4 mb-5' id="standard-basic-github" label="Github Link" variant="standard" />
            </div>
            {/* Educational Details */}
            <div>
              <h3>Educational Details</h3>
              <TextField className='container-fluid mt-2' id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
              <TextField className='container-fluid my-4' id="standard-basic-ucname" label="University / College Name" variant="standard" />
              <TextField className='container-fluid mb-5' id="standard-basic-yog" label="Year Of Graduate" variant="standard" />
            </div>
            {/* skills */}
            <div>
              <h3 className='mb-3'>Skills</h3>
              <div className='d-flex'>
                <input type="text" placeholder='Add Skills' className='form-control' />
                <Button className='btn ms-2'>Add</Button>
              </div>
              <h5 className='my-4'>Added Skills : </h5>
              <div className='d-flex justify-content-between flex-wrap'>
                <Button variant='contained'>Skill <FaXmark className='ms-3' /></Button>
              </div>
            </div>
            {/* Summary */}
            <div>
              <h3 className='mt-4'>Summary</h3>
              <dir>
                <TextField className='container-fluid mb-5 mt-2' id="summary" label="Summary" variant="standard" />
              </dir>
            </div>
            {/* update button */}
            <button className='btn btn-primary '>Update CV</button>
          </Box>
        </Box>
      </Modal>

    </div>
  )
}

export default Edit
