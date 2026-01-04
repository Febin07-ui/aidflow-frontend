import React from 'react'
import NavigationBar from '../components/NavigationBar'
import StatusStepper from '../components/StatusStepper'
import { FaEnvelopeOpenText } from 'react-icons/fa'

function RequestDetails() {
  return (
    <div className='flex flex-col'>
        <NavigationBar/>
        <div className='flex flex-col bg-primary-blue h-screen p-8'>
            <div className='flex justify-between items-center mb-5'>
                <div className='flex flex-col'>
                    <p className=' font-semibold text-gray-400 mb-2'> Request Details</p>
                    <div className='flex gap-2 items-center mb-3'>
                        <p className='text-2xl text-white font-bold'>Request #8791</p>
                        <p className='bg-red-500/20 rounded-md text-red-500 w-14 p-1'>Critcal</p>
                    </div>
                    <p className='text-gray-400'>Created on Oct 24,2023 • 10:45 AM</p>
                    
                </div>

                <div className='flex gap-3'>
                    <button className='text-gray-400 bg-gray-400/20 hover:bg-gray-400/30 h-10 p-2 rounded-md cursor-pointer'>Edit Details</button>
                    <button className='text-red-500 bg-red-500/20 hover:bg-red-500/30 hover:text-red-600 h-10 p-2 rounded-md cursor-pointer'>Cancel Request</button>

                </div>
                

            </div>
            <StatusStepper/>

            <div className='grid grid-cols-5'>
                <div className='col-span-3'>
                    <div className='bg-[#2342] w-full rounded-md '>
                        <div className='bg-primary-navbg w-full flex justify-between p-2 '>
                            <p className='text-white font-bold '>Request manifest</p>
                            <FaEnvelopeOpenText className='text-gray-400'/>
                        </div>
                        

                    </div>
                </div>
                <div className='col-span-2'>

                </div>

            </div>
        </div>

    </div>
  )
}

export default RequestDetails