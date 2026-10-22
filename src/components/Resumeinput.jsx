import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRole from "../assets/jobRole.json";
import jobSkills from "../assets/jobSkills.json";
import summaries from "../assets/summaries.json";

const steps = ['Basic Informations', 'Contact Details', 'Educational Details', 'Review & Submit'];

function Resumeinput({resumeDetails, setResumeDetails}) {

  const [activeStep, setActiveStep] = React.useState(0);

  // useEffect(() => {
  console.log(resumeDetails);
  // }, [resumeDetails]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderFormCount = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>
          <h3>Personal Details</h3>
          <TextField value={resumeDetails.fullname} onChange={e => setResumeDetails({ ...resumeDetails, fullname: e.target.value })} className='container-fluid mt-2' id="standard-basic-fullname" label="Full Name" variant="standard" />
          <TextField value={resumeDetails.location} onChange={e => setResumeDetails({ ...resumeDetails, location: e.target.value })} className='container-fluid my-4' id="standard-basic-loc" label="Location" variant="standard" />
          <FormControl variant="standard" className='container-fluid mb-5'>
            <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
            <Select onChange={e => setResumeDetails({ ...resumeDetails, job: e.target.value })}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="job"
            >
              {
                jobRole.jobRoles.map(job => (
                  <MenuItem key={job} value={job}>{job}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </div>
      )
        break;
      case 1: return (
        <div>
          <h3>Contact Details</h3>
          <TextField value={resumeDetails.email} onChange={e => setResumeDetails({ ...resumeDetails, email: e.target.value })} className='container-fluid mt-2' id="standard-basic-email" label="Email" variant="standard" />
          <TextField value={resumeDetails.phone} onChange={e => setResumeDetails({ ...resumeDetails, phone: e.target.value })} className='container-fluid my-4' id="standard-basic-contnum" label="Contact Number" variant="standard" />
          <TextField value={resumeDetails.linkedin} onChange={e => setResumeDetails({ ...resumeDetails, linkedin: e.target.value })} className='container-fluid' id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
          <TextField value={resumeDetails.github} onChange={e => setResumeDetails({ ...resumeDetails, github: e.target.value })} className='container-fluid mt-4 mb-5' id="standard-basic-github" label="Github Link" variant="standard" />
        </div>
      )
        break;
      case 2: return (
        <div>
          <h3>Educational Details</h3>
          <TextField value={resumeDetails.degree} onChange={e => setResumeDetails({ ...resumeDetails, degree: e.target.value })} className='container-fluid mt-2' id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
          <TextField value={resumeDetails.college} onChange={e => setResumeDetails({ ...resumeDetails, college: e.target.value })} className='container-fluid my-4' id="standard-basic-ucname" label="University / College Name" variant="standard" />
          <TextField value={resumeDetails.year} onChange={e => setResumeDetails({ ...resumeDetails, year: e.target.value })} className='container-fluid mb-5' id="standard-basic-yog" label="Year Of Graduate" variant="standard" />
        </div>
      )
        break;
      case 3: return (
        <div>
          <p>our AI will generate skill & summary according to your job role. Click the <b>Generate AI Skill & Summary</b> button to proceed</p>
        </div>
      )
        break;
      default:
        break;
    }
  };

  const generateSkills = () => {
    setResumeDetails({...resumeDetails,skills:jobSkills[resumeDetails.job],summary:summaries[resumeDetails.job]})
    handleNext()
  }
  
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button>
              Finish
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>
            {/* render form  according to the active step*/}
            {
              renderFormCount(activeStep)
            }
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {activeStep === steps.length - 1
              ?
              <Button onClick={generateSkills}>Generate AI Skill & Summary</Button>
              :
              <Button onClick={handleNext}>Next</Button>}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Resumeinput