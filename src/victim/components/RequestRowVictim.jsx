import { useNavigate } from "react-router-dom";

export function ReqestRowVictim() {
    const navigate = useNavigate()
  return (
    <tr className="border-t text-sm text-white">

      

      <td className="p-3">REQ-1024</td>
      <td className="p-3">Oct 24, 14:30</td>
      <td className="p-3">Medical Supplies</td>

      <td className="p-3">
        <span className="px-2 py-1 text-xs rounded bg-red-500/20 text-red-500">
          Critical
        </span>
      </td>

      <td className="p-3">
        <span className="px-2 py-1 text-xs rounded bg-yellow-500/20 text-yellow-500">
          Pending
        </span>
      </td>

      <td className="p-3 w-28">
        <div className="flex gap-2">
          <button onClick={()=>navigate('/victim/request-details')} className="bg-blue-500/15 text-blue-500 hover:bg-blue-500/25 cursor-pointer text-sm rounded p-1 px-1">View Details</button>
          
        </div>
      </td>

    </tr>
  );
}

