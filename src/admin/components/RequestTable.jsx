import React from 'react'
import { ReqRows } from './ReqRows'
import { Flip, ToastContainer} from 'react-toastify';
function RequestTable({requests}) {
  return (
    <div>
        {/*request table header */}
        <table className="w-full border-collapse border rounded-lg overflow-hidden">
        <thead className="bg-primary-blue text-sm text-gray-100">
            <tr>

            {/* Checkbox */}
            <th className="p-3 w-10 text-left">
                <p></p>
            </th>

            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Requester</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Urgency</th>
            <th className="p-3 text-left">Status</th>

            {/* Actions */}
            <th className="p-3 text-left w-28">Actions</th>

            </tr>
        </thead>

        <tbody>
            {
              requests.length > 0 ? (
                requests.map((req)=>(
                  <ReqRows key={req._id} req={req} />
                ))
              ):(
                <tr>
                  <td colSpan={7} className='text-center p-4 text-gray-400'>No request found</td>
                </tr>
                
              )
            }
            
        
        </tbody>
        </table>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          theme="dark"
          transition={Flip}
      />
        

    </div>
  )
}

export default RequestTable