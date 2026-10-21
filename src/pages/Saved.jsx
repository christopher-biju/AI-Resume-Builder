import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Saved() {
  return (
    <div className='container d-flex justify-content-center align-items-center flex-column my-5'>
      <h1>All Saved Resume</h1>
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
          <tr>
            <td>1</td>
            <td><Link className='text-decoration-none' to={'/resume/:id'}>Name</Link></td>
            <td>Job</td>
            <td><button className='btn btn-danger'><FaTrash /></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Saved
