import React from 'react'
import Preview from '../components/Preview'
import Edit from '../components/Edit'
import { Button } from '@mui/material'
import { FaBackward, FaExternalLinkAlt, FaFileDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoMdRefresh } from 'react-icons/io'

function View() {
  return (
    <div className='container my-4'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className='d-flex justify-content-center align-items-center '>
            {/* Download */}
            <Button style={{color:'#5f2322'}} className='btn me-2 align-items-center'><FaFileDownload className='me-1 fs-4'/>Download CV</Button>
            {/* Edit */}
            <Edit />
            {/* all resume */}
            <Link style={{color:'#5f2322'}} to={'/all-resume'} className='btn me-2 align-items-center'><FaExternalLinkAlt className='me-1 fs-5'/>All Resume</Link>
            {/* download History */}
            <Link style={{color:'#5f2322'}} to={'/downloads'} className='btn me-2 align-items-center'><IoMdRefresh className='me-1 fs-4'/>download History</Link>
            {/* back */}
            <Link style={{color:'#5f2322'}} to={'/resume-details'} className='btn me-2 align-items-center'><FaBackward className='me-1 fs-4'/>Previous</Link>
          </div>
          {/*  */}
          <div className='p-5'>
            <Preview />
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default View
