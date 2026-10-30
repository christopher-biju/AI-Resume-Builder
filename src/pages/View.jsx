import React, { useEffect, useRef, useState } from 'react'
import Preview from '../components/Preview'
import Edit from '../components/Edit'
import { Button } from '@mui/material'
import { FaBackward, FaExternalLinkAlt, FaFileDownload } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { IoMdRefresh } from 'react-icons/io'
import { downloadResumeApi, viewResumeApi } from '../service/apiService'
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { toast } from 'react-toastify'


function View() {

  const [resume, setResume] = useState()
  const { id } = useParams()
  console.log(id);

  const prevref = useRef()

  const getResumeDetails = async () => {
    const response = await viewResumeApi(id)
    if (response.status == 200) {
      setResume(response.data)
    }
  }
  useEffect(() => {
    getResumeDetails()
  }, [])

  const downloadcv = async () => {
    const PreviewTag = prevref.current
    const canvas = await html2canvas(PreviewTag)
    canvas.toBlob(async (imgFile) => {
      //create form data to sent file via api
      const formData = new FormData()
      formData.append("file", imgFile)
      formData.append("upload_preset", "resumeBuilder")
      const result = await fetch("https://api.cloudinary.com/v1_1/ockz5ozx/image/upload", {
        method: "POST",
        body: formData
      })
      const serverData = await result.json()
      const url = serverData.secure_url
      console.log(url);
      generatepdf(url)
    });
  }

  const generatepdf = async (resumeurl) => {
    const pdf = new jsPDF()
    const imageHeight = pdf.internal.pageSize.getHeight()
    const imageWidth = pdf.internal.pageSize.getWidth()
    pdf.addImage(resumeurl, "PNG", 0, 0, imageWidth, imageHeight)
    const today = new Date()
    console.log(today);
    const timeStamp = `${today.toLocaleDateString()}, ${today.toLocaleTimeString()}`
    console.log(timeStamp);
    const result = await downloadResumeApi({ timeStamp, resumeurl, resumeid: resume.id, jobrole: resume.job })
    if (result.status == 201){
      // to download pdf to pc of lap
      //pdf.save(`${resume.fullname}_CV.pdf`)
    }
  }

  return (
    <div className='container my-4'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className='d-flex justify-content-center align-items-center '>
            {/* Download */}
            <Button onClick={downloadcv} style={{ color: '#5f2322' }} className='btn me-2 align-items-center'><FaFileDownload className='me-1 fs-4' />Download CV</Button>

            {/* Edit */}
            <Edit resumeDetails={resume} setResumeDetails={setResume} />

            {/* all resume */}
            {/* <Link style={{ color: '#5f2322' }} to={'/all-resume'} className='btn me-2 align-items-center'><FaExternalLinkAlt className='me-1 fs-5' />All Resume</Link> */}

            {/* download History */}
            {/* <Link style={{ color: '#5f2322' }} to={'/downloads'} className='btn me-2 align-items-center'><IoMdRefresh className='me-1 fs-4' />download History</Link> */}

            {/* back */}
            <Link style={{ color: '#5f2322' }} to={'/resume-details'} className='btn me-2 align-items-center'><FaBackward className='me-1 fs-4' />Previous</Link>
          </div>
          {/*  */}
          <div ref={prevref} className='p-5'>
            <Preview resumeDetails={resume} />
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default View