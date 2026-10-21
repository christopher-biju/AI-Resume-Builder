import { red } from '@mui/material/colors'
import React from 'react'
import { FaGithub, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { LuFacebook } from 'react-icons/lu'
import { MdEmail } from 'react-icons/md'

function Footer() {
  return (
    <div style={{backgroundColor:'#954535'}} className='container-fluid text-light'>
      <div className='row p-4'>
        <div className="col-lg-4">
          <h2>AI rBuilder</h2>
          <p className='textAlign:"justify-content"'>
            An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF.
          </p>
        </div>
        <div className="col-lg-4"></div>

        <div className="col-lg-4 text-end">
          <h2 className='pe-3'>Contact Us</h2>
          <p><MdEmail className='me-2'/>resume@gmail.com</p>
          <p className='pe-5'><FaPhoneAlt className='me-2'/>7639236103</p>
          <h4>Connect With Us</h4>
          <div className='fs-5 pe-4'>
            <FaInstagram className='' />
            <LuFacebook className='mx-3'/>
            <FaWhatsapp />
            <FaGithub className='ms-3'/>
          </div>
        </div>
        <h5 className='text-center pt-2 ps-5'>Designed & built with ❤️ using React</h5>
      </div>
    </div>
  )
}

export default Footer
