import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getDownloadResumeApi } from '../service/apiService'

function Downloads() {

  const [downloadList, getdowloads] = useState([])
  console.log(downloadList);

  const getAllDownloads = async () => {
    const result = await getDownloadResumeApi()
    getdowloads(result.data)
  }

  useEffect(() => {
    getAllDownloads()
  }, [])

  return (
    <div className='container my-5 '>
      <div className='d-flex justify-content-between align-items-center'>
        <h3 >Downloaded Resume History</h3>
        <Link className='text-decoration-none' to={'/resume-details'}><FaArrowLeft className='me-1 mb-1' />Back</Link>
      </div>
      <div className='row my-5'>
        {/* Duplicate the row according to the resume count */}
        {
          downloadList.length > 0 ?
            downloadList.map(item => (
              <div className="col-lg-4 my-4">
                <div style={{ height: '385px' }} className='rounded shadow p-3'> {/*height=350 line 18:w-50  */}
                  <h6>Review at : {item?.timeStamp}</h6>
                  <div className='mt-3 text-center'>
                    <Link to={`/resume/${item?.resumeid}`}><img className='w-75' src={item?.resumeurl} alt="cv image" /></Link>
                  </div>
                </div>
              </div>
            ))
            :
            <p>NO DOWNLOADED RESUME</p>
        }
      </div>
    </div>
  )
}

export default Downloads
