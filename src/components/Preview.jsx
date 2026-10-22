import { Button, Divider } from '@mui/material'
import React from 'react'

function Preview({resumeDetails}) {
  return (
    <div className='w-100'>
      <h2>{resumeDetails?.fullname}</h2>
      <p className='fs-5 lh-1'>Phone : {resumeDetails?.phone}</p>
      <p className='fs-5 lh-1'>Email : {resumeDetails?.email}</p>
      <p className='fs-5 lh-1'>Linkedin : {resumeDetails?.linkedin}</p>
      <p className='fs-5 lh-1'>Github : {resumeDetails?.github}</p>
      <p className='fs-5 lh-1'>Location : {resumeDetails?.location}</p>
      <Divider className='bg-dark my-3' />
      <h3>Professional Summary</h3>
      <p>{resumeDetails?.summary}</p>
      <Divider className='bg-dark my-3' />
      <h3>Technical Skills</h3>
      {
        resumeDetails?.skills?.map(skill =>
          <span><Button variant='text' className='bg-danger text-light rounded my-2 mx-1'>{skill}</Button></span>
        )
      }
      <Divider className='bg-dark my-3' />
      <p className='fs-5 lh-1'>Bachelor's Degree in : {resumeDetails?.degree}</p>
      <p className='fs-5 lh-1'>University / College Name : {resumeDetails?.college}</p>
      <p className='fs-5 lh-1'>Year Of Graduate : {resumeDetails?.year}</p>
    </div>
  )
}

export default Preview
