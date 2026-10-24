import axiosService from "../api/axiosService";

// save resume api : called by resumeinput component when finish button clicks

const saveResumeAPI = async (resumeDetails) => {
    await axiosService("POST","/resumes",resumeDetails)
}