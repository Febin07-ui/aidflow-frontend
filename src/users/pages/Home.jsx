import React from 'react'
import Header from '../components/Header'

import { FaBandAid, FaBell, FaClock, FaFacebook, FaFire, FaHandshake, FaHandsHelping, FaHireAHelper, FaHome, FaPooStorm, FaTimes, FaTimesCircle, FaTruck, FaUsers } from 'react-icons/fa'
import { FaBoxArchive, FaHeartPulse, FaHouseFloodWater, FaKitMedical, FaLocationDot, FaTimeline } from 'react-icons/fa6'
import Footer from '../../assets/components/Footer'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <div>
        <Header/>
        <section className='flex justify-center items-center flex-col bg-[url(background.jpg)] bg-cover bg-center h-screen'>
            <p className='text-white text-6xl font-bold text-center'>Rapid Response when it <br /> matters most</p>
            <p className='text-gray-400 text-3xl text-center mt-9'>Connecting communities in crisis with the resources they need. Join the <br /> network of surviors and aid providers action in real-time</p>

            <div className='flex justify-center items-center gap-3 mt-9'>
                <button onClick={()=>navigate('/register')} className='bg-gray-500 hover:bg-gray-600 text-xl text-white px-4 p-4 rounded-xl flex items-center gap-2 cursor-pointer'><FaHeartPulse/> I Need Help</button>
                <button onClick={()=>navigate('/register')} className='bg-blue-500 hover:bg-blue-600 text-xl text-white px-4 p-4 rounded-xl flex items-center gap-2 cursor-pointer'><FaHandsHelping/>I Can Help</button>
                
            </div>
        </section>
        {/* section */}
        <section className='md:flex justify-between items-center bg-primary-navbg p-10 px-40 '>
            <div className='flex flex-col justify-center items-center p-2'>
                <FaUsers className='text-blue-500 text-3xl mb-3'/>
                <p className='text-3xl text-white mb-3'>12,450</p>
                <p className='text-gray-400 '> People Assisted</p>
            </div>
            <div className='flex flex-col justify-center items-center p-2'>
                <FaBoxArchive className='text-blue-500 text-3xl mb-3 '/>
                <p className='text-3xl text-white mb-3'>8,320</p>
                <p className='text-gray-400 '> Resource Deployed</p>
            </div>
            <div className='flex flex-col justify-center items-center p-2'>
                <FaLocationDot className='text-blue-500 text-3xl mb-3'/>
                <p className='text-3xl text-white mb-3'>45</p>
                <p className='text-gray-400 '> Active Zones</p>
            </div>
            <div className='flex flex-col justify-center items-center p-2'>
                <FaClock className='text-blue-500 text-3xl mb-3 '/>
                <p className='text-3xl text-white mb-3 '>14m</p>
                <p className='text-gray-400 '> Avg. Response Time</p>
            </div>
        </section>
        {/* active Zones */}
        <section className='bg-primary-blue '>
            <p className='text-3xl text-white p-10 ml-10 pt-15'>Current Active Requests</p>
            <div className='md:grid grid-cols-2 p-8'>
                <div className='flex justify-between items-center text-white border-1 border-gray-600 rounded-2xl bg-primary-navbg p-4 mr-10 ml-10 px-6 mb-5'>
                    <div>   
                        <p className='text-white text-xl font-bold flex items-center gap-5 mb-3'><FaHouseFloodWater className='text-orange-600 text-2xl'/> Shelter</p>
                        <p className='text-gray-400 mb-2'>Severity:<span className='text-orange-500 font-bold'>High</span></p>
                        <p className='text-gray-400 mb-2'>Updated:10 min ago</p>
                        <p className='text-gray-400 mb-3'>Needs: Water,Shelter,Boats</p>
                        <button className='bg-gray-600 hover:bg-gray-500 text-white font-medium p-2 rounded cursor-pointer'>View Details</button>
                    </div>
                    <div>
                        <img className='w-40 h-40 rounded-2xl' src="https://www.aljazeera.com/wp-content/uploads/2024/08/AFP__20240823__36EM9XC__v1__HighRes__BangladeshWeatherFlood-1724392248.jpg" alt="" />
                    </div>
                </div>
                <div className='flex justify-between items-center text-white border-1 border-gray-600 rounded-2xl bg-primary-navbg p-4 mr-10 ml-10 px-6 mb-5'>
                    <div>   
                        <p className='text-white text-xl font-bold flex items-center gap-5 mb-3'><FaFire className='text-red-600 text-2xl'/> Food</p>
                        <p className='text-gray-400 mb-2'>Severity:<span className='text-red-500 font-bold'>Critical</span></p>
                        <p className='text-gray-400 mb-2'>Updated:25 min ago</p>
                        <p className='text-gray-400 mb-3'>Needs: Rice</p>
                        <button className='bg-gray-600 hover:bg-gray-500 text-white font-medium p-2 rounded cursor-pointer'>View Details</button>
                    </div>
                    <div>
                        <img className='w-40 h-40 rounded-2xl' src="https://wwf.ca/wp-content/uploads/2021/09/GettyImages-dv451050-scaled.jpg" alt="" />
                    </div>
                </div>
                <div className='flex justify-between items-center text-white border-1 border-gray-600 rounded-2xl bg-primary-navbg p-4 mr-10 ml-10 px-6 mb-5'>
                    <div>   
                        <p className='text-white text-xl font-bold flex items-center gap-5 mb-3'><FaPooStorm className='text-yellow-400 text-2xl'/>Medicine </p>
                        <p className='text-gray-400 mb-2'>Severity:<span className='text-yellow-500 font-bold'>Moderate</span></p>
                        <p className='text-gray-400 mb-2'>Updated:1 hour ago</p>
                        <p className='text-gray-400 mb-3'>Needs: paracetamol</p>
                        <button className='bg-gray-600 hover:bg-gray-500 text-white font-medium p-2 rounded cursor-pointer'>View Details</button>
                    </div>
                    <div>
                        <img className='w-40 h-40 rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvryTFLDHCMfOCqb2o2NN7AtZDdJEzYaHfA&s" alt="" />
                    </div>
                </div>
                <div className='flex justify-between items-center text-white border-1 border-gray-600 rounded-2xl bg-primary-navbg p-4 mr-10 ml-10 px-6 mb-5'>
                    <div>   
                        <p className='text-white text-xl font-bold flex items-center gap-5 mb-3'><FaKitMedical className='text-blue-400 text-2xl'/> Medicine</p>
                        <p className='text-gray-400 mb-2'>Severity:<span className='text-blue-400 font-bold'>Medium</span></p>
                        <p className='text-gray-400 mb-2'>Updated:2 hours ago</p>
                        <p className='text-gray-400 mb-3'>Needs: Insulin,Antibiotics</p>
                        <button className='bg-gray-600 hover:bg-gray-500 text-white font-medium p-2 rounded cursor-pointer'>View Details</button>
                    </div>
                    <div>
                        <img className='w-40 h-40 rounded-2xl' src="https://content.ucpress.edu/blog/wp-content/uploads/2020/04/Seim.jpg" alt="" />
                    </div>
                </div>
                
            </div>

        </section>

        <section className='flex justify-center items-center flex-col bg-primary-blue p-10 pb-20'> 
            <div className='flex justify-center items-center flex-col bg-primary-navbg rounded-2xl p-20 px-20'>
                <p className='text-white font-bold text-center text-4xl mb-5'>How AidFlow Works</p>
                <p className='text-gray-400 text-center mb-10'>Our platform streamlines the chaos of disaster response into three <br /> simple,actionable steps.</p>

                <div className='md:grid grid-cols-3 gap-7'>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='rounded-full text-blue-400 bg-gray-700 p-4 mb-4 '><FaBell className='w-8 h-8'/></div>
                        <p className='text-white text-2xl mb-4 font-bold'>1. Report Needs</p>
                        <p className='text-gray-400 text-center mb-2'>Survivors or on-ground teams signal <br /> requirements for food,medical aid or rescue.</p>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='rounded-full text-blue-400 bg-gray-700 p-4 mb-4'><FaHandshake className='w-8 h-8'/></div>
                        <p className='text-white text-2xl mb-4 font-bold'>2. Match Resources</p>
                        <p className='text-gray-400 text-center mb-2'>Our algorithms automatically pairs needs with <br /> nearby available aid providers.</p>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='rounded-full text-blue-400 bg-gray-700 p-4 mb-4'><FaTruck className='w-8 h-8'/></div>
                        <p className='text-white text-2xl mb-4 font-bold'>3. Coordinate Delivery</p>
                        <p className='text-gray-400 text-center mb-2'>Real-time tracking ensures resources reach <br /> the destination safely and efficiently.</p>
                    </div>
                    
                    
                </div>
            </div>
            
        </section>
        <Footer/>

    </div>
  )
}

export default Home