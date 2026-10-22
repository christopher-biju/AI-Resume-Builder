import React, { useState } from 'react'
import Resumeinput from "../components/Resumeinput";
import Preview from "../components/Preview";
function Info() {

  const [resumeDetails, setResumeDetails] = useState({
      fullname: "", location: "", job: "", phone: "", email: "", github: "", linkedin: "", degree: "", college: "", year: "", skills: [], summary: ""
    });

  return (
    <div>
      <div className="container my-5">
        <div className="row">

          <div className="col-lg-6">
            <Resumeinput resumeDetails={resumeDetails} setResumeDetails={setResumeDetails}/>
          </div>

          <div className="col-lg-6">
            {resumeDetails.fullname && <Preview resumeDetails={resumeDetails}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
