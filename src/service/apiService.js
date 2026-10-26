import axiosService from "../api/axiosService";

// save resume api : called by resumeinput component when finish button clicks

export  const saveResumeApi = async (resumeDetails) => {
    return await axiosService("POST","/resumes",resumeDetails)
}


export const viewResumeApi = async (resumeId) => {
    return await axiosService("GET",`/resumes/${resumeId}`,{})
}
