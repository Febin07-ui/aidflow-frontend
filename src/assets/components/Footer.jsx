import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col items-center p-10 bg-black-900 bg-secondary-blue'>
        <div className='md:flex justify-evenly items-center gap-40 p-6 px-20'>
            <div className='flex justify-center items-center flex-col mb-8'>
                <div className='flex gap-5 mr-15'>
                    <img className='h-10' src="aidLogo.png" alt="" />
                    <p className='text-2xl font-bold text-white '>AidFlow</p>
                </div>
                <p className='text-gray-400 ml-5'>Empowering communities to rebulid <br /> faster through technology and <br /> coordination.</p>
            </div>
            <div className='flex flex-col justify-center mb-2 '>
                <a className='text-xl text-white font-bold mb-3'>Platform</a>
                <a className='text-gray-400'>Alerts Dashboard</a>
                <a className='text-gray-400'>Live Map</a>
                <a className='text-gray-400'>Submit Report</a>
                <a className='text-gray-400'>Volunteer</a>
            </div>
            <div className='flex flex-col justify-center mb-2 '>
                <a className='text-xl text-white font-bold mb-3'>Resourses</a>
                <a className='text-gray-400'>Emergency </a>
                <a className='text-gray-400'>Preparedness Guides</a>
                <a className='text-gray-400'>Partner NGOs</a>
                <a className='text-gray-400'>Donation Centers</a>
            </div>
            <div className='flex flex-col justify-center mb-2 '>
                <a className='text-xl text-white font-bold mb-3'>Legal</a>
                <a className='text-gray-400'>Privacy Policy</a>
                <a className='text-gray-400'>Terms of Services</a>
                <a className='text-gray-400'>Cookie Settings</a>

            </div>

        </div>
        <div>
            <hr className='text-gray-700 w-300 mb-5' />
            <p className='text-gray-400 text-center'>© 2025 AidFlow Disaster Coordination Platform. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer