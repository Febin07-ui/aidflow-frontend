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
// google login
export const googleLoginAPI = async (userDetails) =>{
    return await commonAPI("POST",`${serverURL}/google/sign-in`,userDetails)
}


// create request
export const createRequestAPI = async (reqBody,reqHeader) =>{
    return await commonAPI("POST",`${serverURL}/request/create`,reqBody,reqHeader)
}
// get all victim request(victim)
export const getVictimRequestAPI = async (reqHeader) =>{
    return await commonAPI("GET",`${serverURL}/request/my-requests`,"",reqHeader)
}



// get all request (admin)
export const getAllRequestAPI = async () =>{
    return await commonAPI("GET",`${serverURL}/admin/requests`,"")
}
// approve / reject request (admin)
export const updateRequestStatusAPI = async (id,status) =>{
    return await commonAPI("PUT",`${serverURL}/admin/update/${id}`,{status})
}
// get all users 
export const getAllUsersAPI = async (reqHeader) => {
    return await commonAPI("GET",`${serverURL}/admin/users`,"",reqHeader)
}
// block user
export const blockUserAPI = async (userId,reqHeader) =>{
    return await commonAPI("PUT",`${serverURL}/admin/block/${userId}`,{},reqHeader)
}
// unblock user 
export const unblockUserAPI = async (userId,reqHeader) => {
    return await commonAPI("PUT",`${serverURL}/admin/unblock/${userId}`,{},reqHeader)
}
//admin dashboart stats
export const getAdminDashboardStatsAPI = async (reqHeader) =>{
    return await commonAPI("GET",`${serverURL}/admin/dashboard-stats`,"",reqHeader)
}

// volunteer get approved request
export const getApprovedRequestsAPI = async () =>{
    return await commonAPI("GET",`${serverURL}/volunteer/request/approved`,"")
}
// volunteer assigned task
export const acceptTaskAPI = async (taskdata) =>{
    return await commonAPI("POST",`${serverURL}/volunteer/accept-task`,taskdata)
}
// get volunteer tasks
export const getMyTasksAPI = async (volunteerId) =>{
    return await commonAPI("GET",`${serverURL}/volunteer/my-tasks/${volunteerId}`,"")
}
// mark task as delivered
export const markDeliveredAPI = async (data) =>{
    return await commonAPI("PUT",`${serverURL}/volunteer/mark-delivered`,data)
}


