import React, { useEffect, useState } from 'react'
import { FaSearch, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getAllResumeApi } from '../service/apiService'
import { deleteAllResumeApi } from '../service/apiService'

function Saved() {

  const [allResume, setAllResume] = useState([])
  console.log(allResume);

  const [searchItem, setSearchItem] = useState("")
  console.log(searchItem)

  const searchCandidate = () => {
    setAllResume(allResume.filter(item => item.job.toLowerCase().includes(searchItem.toLowerCase())))
  }

  const getAllResume = async () => {
    const response = await getAllResumeApi()
    if (response.status == 200) {
      setAllResume(response.data)
    }
  }

  useEffect(() => {
    searchItem == "" ? getAllResume() : searchCandidate()
  }, [searchItem])

  const removeResume = async (id) => {
    if (confirm("Are you sure do you want to delete this resume")) {
      const response = await deleteAllResumeApi(id)
      if (response.status == 200) {
        getAllResume()
      }
    }
  }

  return (
    <div className='container d-flex justify-content-center align-items-center flex-column my-5'>
      <h1>All Saved Resume</h1>
      <div className='d-flex justify-content-center align-items-center w-50 mt-4'>
        <input onChange={(e) => setSearchItem(e.target.value)} type="text" placeholder='search candidate by job name' className='form-control' />
        <FaSearch style={{ marginLeft: '-35px' }} />
      </div>
      <table className='table table-hover table-stripped my-5'>
        <thead>
          <tr className='table-dark'>
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {
            allResume?.length > 0 ?
              allResume?.map((resumes, index) => (
                <tr key={resumes?.id}>
                  <td>{index + 1}</td>
                  <td><Link className=' text-dark text-decoration-none' to={`/resume/${resumes?.id}`}>{resumes?.fullname.toUpperCase()}</Link></td>
                  <td>{resumes?.job.toUpperCase()}</td>
                  <td><button onClick={() => removeResume(resumes?.id)} className='btn btn-danger'><FaTrash /></button></td>
                </tr>
              ))
              :
              <p>NO RESUMES ADDED</p>
          }
        </tbody>
      </table>
    </div>
  )
}

export default Saved
