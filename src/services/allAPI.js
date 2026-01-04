import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

// register api: called by Auth component when register btn clicked
export const registerAPI = async (userDetails) =>{
    return await commonAPI("POST",`${serverURL}/register`,userDetails)
}
// login
export const loginAPI = async (userDetails) =>{
    return await commonAPI("POST",`${serverURL}/login`,userDetails)
}
// create request
export const createRequestAPI = async (reqBody,reqHeader) =>{
    return await commonAPI("POST",`${serverURL}/request/create`,reqBody,reqHeader)
}
// get all request (admin)
export const getAllRequestAPI = async () =>{
    return await commonAPI("GET",`${serverURL}/admin/requests`,"")
}
// approve / reject request (admin)
export const updateRequestStatusAPI = async (id,status) =>{
    return await commonAPI("PUT",`${serverURL}/admin/update/${id}`,{status})
}
// volunteer get approved request
export const getApprovedRequestsAPI = async () =>{
    return await commonAPI("GET",`${serverURL}/volunteer/request/approved`,"")
}

