import { Button, Divider } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div className='w-100'>
      <h4>Full Name</h4>
      <p className='fs-5 lh-1'>Phone :</p>
      <p className='fs-5 lh-1'>Email :</p>
      <p className='fs-5 lh-1'>Linkedin :</p>
      <p className='fs-5 lh-1'>Github :</p>
      <p className='fs-5 lh-1'>Location :</p>
      <Divider className='bg-dark my-3' />
      <h3>Professional Summary</h3>
      <p>summary</p>
      <Divider className='bg-dark my-3'/>
      <h3>Technical Skills</h3>
      <span><Button variant='text' className='bg-danger text-light rounded my-2'>Skill</Button></span>
      <Divider className='bg-dark my-3'/>
      <p className='fs-5 lh-1'>Bachelor's Degree in : </p>
      <p className='fs-5 lh-1'>University / College Name : </p>
      <p className='fs-5 lh-1'>Year Of Graduate :</p>
    </div>
  )
}

export default Preview
