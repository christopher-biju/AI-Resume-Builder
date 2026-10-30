import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaRegEdit } from 'react-icons/fa';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { FaXmark } from 'react-icons/fa6';
import jobRole from "../assets/jobRole.json";
import { toast } from 'react-toastify';
import { updatedResumeApi } from '../service/apiService'

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

function Edit({ resumeDetails, setResumeDetails }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const skillref = React.useRef()


  const removeSkill = (skill) => {
    setResumeDetails({ ...resumeDetails, skills: resumeDetails.skills.filter(item => item != skill) })
  }

  const addNewSkill = (newskill) => {
    if (newskill) {
      if (resumeDetails?.skills?.map(item => item.toLowerCase()).includes(newskill.toLowerCase())) {
        toast.warning("Skill Already Exists")
      }
      else {
        setResumeDetails({ ...resumeDetails, skills: [...resumeDetails.skills, newskill] })
      }
      skillref.current.value = ""
    }
    else {
      toast.info("Enter a valide input")
    }
  }

  const updateResume = async () => {
    //make api call to update resume whenever the finish button clicks
    const { fullname, location, job, phone, email, github, linkedin, degree, college, year, skills, summary } = resumeDetails
    if (fullname && location && job && phone && email && github && linkedin && degree && college && year && skills.length > 0 && summary) {
      const response = await updatedResumeApi(resumeDetails.id, resumeDetails)
      // console.log(response);
      if (response.status == 200) {
        toast.success("Resume updated successfully")
        setTimeout(() => {
          handleClose()
        }, 2500);
      }
    }
    else {
      toast.warning("please fill the form completely !")
    }
  }

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
            {/* Personal Details */}
            <div>
              <h3>Personal Details</h3>
              <TextField value={resumeDetails?.fullname} onChange={e => setResumeDetails({ ...resumeDetails, fullname: e.target.value })} className='container-fluid mt-2' id="standard-basic-fullname" label="Full Name" variant="standard" />
              <TextField value={resumeDetails?.location} onChange={e => setResumeDetails({ ...resumeDetails, location: e.target.value })} className='container-fluid my-4' id="standard-basic-loc" label="Location" variant="standard" />
              <FormControl variant="standard" className='container-fluid mb-5'>
                <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
                <Select onChange={e => setResumeDetails({ ...resumeDetails, job: e.target.value })}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="job"
                  defaultValue={resumeDetails?.job}
                >
                  {
                    jobRole.jobRoles.map(job => (
                      <MenuItem key={job} value={job}>{job}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </div>
            {/* Contact Details */}
            <div>
              <h3>Contact Details</h3>
              <TextField value={resumeDetails?.email} onChange={e => setResumeDetails({ ...resumeDetails, email: e.target.value })} className='container-fluid mt-2' id="standard-basic-email" label="Email" variant="standard" />
              <TextField value={resumeDetails?.phone} onChange={e => setResumeDetails({ ...resumeDetails, phone: e.target.value })} className='container-fluid my-4' id="standard-basic-contnum" label="Contact Number" variant="standard" />
              <TextField value={resumeDetails?.linkedin} onChange={e => setResumeDetails({ ...resumeDetails, linkedin: e.target.value })} className='container-fluid' id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
              <TextField value={resumeDetails?.github} onChange={e => setResumeDetails({ ...resumeDetails, github: e.target.value })} className='container-fluid mt-4 mb-5' id="standard-basic-github" label="Github Link" variant="standard" />
            </div>
            {/* Educational Details */}
            <div>
              <h3>Educational Details</h3>
              <TextField value={resumeDetails?.degree} onChange={e => setResumeDetails({ ...resumeDetails, degree: e.target.value })} className='container-fluid mt-2' id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
              <TextField value={resumeDetails?.college} onChange={e => setResumeDetails({ ...resumeDetails, college: e.target.value })} className='container-fluid my-4' id="standard-basic-ucname" label="University / College Name" variant="standard" />
              <TextField value={resumeDetails?.year} onChange={e => setResumeDetails({ ...resumeDetails, year: e.target.value })} className='container-fluid mb-5' id="standard-basic-yog" label="Year Of Graduate" variant="standard" />
            </div>
            {/* skills */}
            <div>
              <h3 className='mb-3'>Skills</h3>
              <div className='d-flex'>
                <input ref={skillref} type="text" placeholder='Add Skills' className='form-control' />
                <Button on onClick={() => { addNewSkill(skillref.current.value) }} className='btn ms-2'>Add</Button>
              </div>
              <h5 className='my-4'>Added Skills : </h5>
              <div className='d-flex justify-content-between flex-wrap'>
                {
                  resumeDetails?.skills?.map(skill =>
                    <Button onClick={() => { removeSkill(skill) }} key={skill} variant='contained' className='bg-danger text-light rounded my-1 '>{skill} <FaXmark className='ms-3' /></Button>
                  )
                }

              </div>
            </div>
            {/* Summary */}
            <div>
              <h3 className='mt-4'>Summary</h3>
              <dir>
                <TextField value={resumeDetails?.summary} onChange={e => setResumeDetails({ ...resumeDetails, summary: e.target.value })} className='container-fluid mb-5 mt-2' id="summary" label="Summary" multiline variant="standard" />
              </dir>
            </div>
            {/* update button */}
            <button onClick={updateResume} className='btn btn-primary'>Update CV</button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit