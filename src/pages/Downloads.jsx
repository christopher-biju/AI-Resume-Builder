import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom'
import { getDownloadResumeApi } from '../service/apiService'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  overflowY: 'auto',
  maxHeight: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Downloads() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [lable, setLable] = useState([])
  const [value, setValue] = useState([])
  const colorPallete = ['#edbe8c', '#8cb1ed', '#ed8cc0', '#8cedb1', '#ed9f8c', '#c58ced', '#8ce2ed']
  const backgroundColor = lable.map((val, index) => colorPallete[index % colorPallete.length])

  const [downloadList, getdowloads] = useState([])
  console.log(downloadList);

  const data = {
    labels: lable,
    datasets: [
      {
        label: 'Download Count',
        data: value,
        backgroundColor,
        borderWidth: 1,
      },
    ],
  }

  const getAllDownloads = async () => {
    const result = await getDownloadResumeApi()
    getdowloads(result.data)
    const output = {}
    result.data.forEach(item => {
      const currentjob = item.jobrole
      if (currentjob in output) {
        output[currentjob] = output[currentjob] + 1
      } else {
        output[currentjob] = 1
      }
    })
    setLable(Object.keys(output))
    setValue(Object.values(output))
  }

  useEffect(() => {
    getAllDownloads()
  }, [])

  return (
    <div className='container my-5 '>
      <div className='d-flex justify-content-between align-items-center'>
        <h3 >Downloaded Resume History</h3>
        <Button onClick={setOpen} className='btn text-light' style={{ backgroundColor: '#5f2322' }}>View in chart</Button>
      </div>
      <p className='mt-3 fs-3 fw-semibold text-dark'>Total Downloaded resumes from our site : <span className='fw-bolder text-danger'>{downloadList.length}</span></p>
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
      {/* modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ backgroundColor: '#954535', width: '100%', padding: '10px', color: 'white' }}>
            CV count by job role
          </Typography>
          <div className='text-center fs-3 my-3'>
            <Pie data={data} />
          </div>
          <Typography id="modal-modal-description" className='' sx={{ mt: 2, color: '#954535' }}>
            This chart provides a comprehensive overview of the total number of CV downloads associated with different jobs hosted on the website. By analyzing these metrics, it helps visualize the overall market demand and engagement levels for various job categories, roles, and individual postings. This data serves as a key indicator of activity on the platform, effectively reflecting the hiring interest from recruiters and the competitiveness of specific positions among candidates.
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Downloads
