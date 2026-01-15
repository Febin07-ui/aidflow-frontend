import React from 'react'

import { ReqestRowVictim } from './RequestRowVictim'

function RequestTableVictim({myRequests}) {
  return (
    <div>
        {/*request table header */}
        <table className="w-full border-collapse border-white border rounded-lg overflow-hidden">
        <thead className="bg-[#48475867] text-sm text-gray-100">
            <tr>


            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Date</th>
            
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Urgency</th>
            <th className="p-3 text-left">Status</th>

            
            

            </tr>
        </thead>

        
        <ReqestRowVictim myRequests={myRequests}/>
            
        
        </table>

        

    </div>
  )
}

export default RequestTableVictim