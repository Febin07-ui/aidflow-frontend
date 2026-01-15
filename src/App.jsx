import { Route, Routes } from "react-router-dom"
import Home from "./users/pages/Home"
import Auth from "./assets/pages/Auth"
import VictimHome from "./victim/pages/VictimHome"
import VolunteerHome from "./volunteer/pages/VolunteerHome"
import AdminHome from "./admin/pages/AdminHome"
import NewResourceRequest from "./victim/pages/NewResourceRequest"
import ApprovedRequest from "./volunteer/pages/ApprovedRequest"
import MyTasks from "./volunteer/pages/MyTasks"
import ManageRequests from "./admin/pages/ManageRequests"
import ProflileVictim from "./victim/pages/ProflileVictim"
import VictimRequests from "./victim/pages/VictimRequests"
import RequestDetails from "./victim/pages/RequestDetails"
import ProfileVolunteer from "./volunteer/pages/ProfileVolunteer"
import ManageUser from "./admin/pages/ManageUser"


function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Auth />}/>
        <Route path="/register" element={<Auth insideRegister={true}/>}/>

        <Route path="/victim" element={<VictimHome/>}/>
        <Route path="/victim/profile" element={<ProflileVictim/>}/>
        <Route path="/victim/new-request" element={<NewResourceRequest />}/>
        <Route path="/victim/all-requests" element={<VictimRequests />}/>
        <Route path="/victim/request-details" element={<RequestDetails />}/>
        
        
        <Route path="/volunteer" element={<VolunteerHome/>}/>
        <Route path="/volunteer/profile" element={<ProfileVolunteer/>}/>
        <Route path="/volunteer/approved-request" element={<ApprovedRequest/>}/>
        <Route path="/volunteer/mytask" element={<MyTasks />}/>

        <Route path="/admin" element={<AdminHome/>}/>
        <Route path="/admin/manage-requests" element={<ManageRequests/>}/>
        <Route path="/admin/manage-users" element={<ManageUser/>}/>
        
        
        
      </Routes>
    </>
  )
}

export default App
