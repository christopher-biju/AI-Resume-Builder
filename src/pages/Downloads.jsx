import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Downloads() {
  return (
    <div className='container my-5 '>
      <div className='d-flex justify-content-between align-items-center'>
        <h3 >Downloaded Resume History</h3>
        <Link className='text-decoration-none' to={'/resume-details'}><FaArrowLeft className='me-1 mb-1' />Back</Link>
      </div>
      <div className='row my-5'>
        {/* Duplicate the row according to the resume count */}
        <div className="col-lg-4">
          <div style={{height:'385px'}} className='rounded shadow p-3'> {/*height=350 line 18:w-50  */}
            <h6>Review at : Time Stamp</h6>
            <div className='mt-3 text-center'>
              <Link to={'/resume/:id'}><img className='w-75'  src="https://cdn.venngage.com/template/thumbnail/small/8df44329-87c2-4907-801d-8f335745a2b0.webp" alt="cv image" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Downloads
