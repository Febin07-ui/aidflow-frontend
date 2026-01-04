import React from 'react'

import { ReqestRowVictim } from './RequestRowVictim'

function RequestTableVictim() {
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

            {/* Actions */}
            <th className="p-3 text-left w-28">Actions</th>

            </tr>
        </thead>

        <tbody>
            <ReqestRowVictim />
            <ReqestRowVictim />
        </tbody>
        </table>

        

    </div>
  )
}

export default RequestTableVictim