import axiosService from "../api/axiosService";

// save resume api : called by resumeinput component when finish button clicks
export  const saveResumeApi = async (resumeDetails) => {
    return await axiosService("POST","/resumes",resumeDetails)
}

//view resume api called when view page loads in browser
export const viewResumeApi = async (resumeId) => {
    return await axiosService("GET",`/resumes/${resumeId}`,{})
}

//view all saved resume : called when page loads in browser
export const getAllResumeApi = async () => {
    return await axiosService("GET",`/resumes`,{})
}

//view all saved resume : called when page loads in browser
export const deleteAllResumeApi = async (resumeId) => {
    return await axiosService("DELETE",`/resumes/${resumeId}`,{})
}
