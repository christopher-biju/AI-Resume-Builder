import React from 'react'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { LiaFileDownloadSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'

function Resume() {
  return (
    <div>
      <div style={{ height: '100vh' }} className="container">
        <h1 className='text-center pt-5 pb-2'>Create An ATS Friend Resume In Minutes With AI</h1>
        <div className="container">
          <div className="row pt-5">

            <div className="col-lg-1"></div>

            <div className="col-lg-4 rounded shadow text-center p-5">
              <IoDocumentTextOutline className='fs-1 mb-3 text-primary' />
              <h4>Add Your Details</h4>
              <p>Our AI will generate skill & summary</p>
              <h5>Step 1</h5>
            </div>

            <div className="col-lg-2"></div>

            <div className="col-lg-4 rounded shadow text-center p-5">
              <LiaFileDownloadSolid className='fs-1 mb-3 text-danger' />
              <h4>Download Your Resume</h4>
              <p>Download PDF and start applying</p>
              <h5>Step 2</h5>
            </div>

            <div className="col-lg-1"></div>
          
          </div>
        </div>
        <div className="text-center mt-3">
          <Link to={'/resume-details'} style={{backgroundColor:'#5f2322'}} className='btn text-light mt-5 rounded'>Let's Start</Link>
        </div>




      </div>
    </div>
  )
}

export default Resume
