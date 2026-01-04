import React, { useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import { Flip, ToastContainer, toast } from 'react-toastify';
import { loginAPI, registerAPI } from '../../services/allAPI';

function Auth({insideRegister}) {
    const navigate = useNavigate()
    const [role,setRole] = useState("victim")
    
    const [userDetails,setUserDetails] = useState({
        "username":"",
        "email":"",
        "password":"",
        
    })
    console.log(userDetails)

    const handleRegister = async (e) => {
        e.preventDefault()
        const {username,email,password} = userDetails
        if(email && password && username ){
            // toast.success("API Call")
            try{
                const result = await registerAPI({...userDetails,role:role})
                if(result.status==200){
                    toast.success(`Register successfully.. please Login to aidFlow!!!`)
                    setUserDetails({username:"",email:"",password:""})
                    navigate('/login')
                }else if(result.status==409){
                    toast.warning(result.response.data)
                    setUserDetails({username:"",email:"",password:""})
                    navigate('/login')

                }else{
                    console.log(result);
                    toast.error("Something went wrong")
                    setUserDetails({username:"",email:"",password:""})
                }
            }catch(err){
                console.log(err);
            }
        }else{
            toast.info("plase fill form complely")
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const {email,password} = userDetails
        if(email && password ){
            
            try{
                const result = await loginAPI(userDetails)
                console.log(result)
                if(result.status==200){
                    toast.success("Login Successfull!!!")
                    sessionStorage.setItem("token",result.data.user)
                    sessionStorage.setItem("user",JSON.stringify(result.data.user))
                    setTimeout(()=>{
                        if(result.data.user.role=="admin"){
                            navigate('/admin')
                        }else if(result.data.user.role=="volunteer"){
                            navigate('/volunteer')
                        }else{
                            navigate('/victim')
                        }
                    },2500)

                }else if(result.status==401 || result.status==404){
                    toast.warning(result.response.data)
                    setUserDetails({"username":"","email":"","password":""})
                }else{
                    toast.error("something went wrong")
                    setUserDetails({"username":"","email":"","password":""})

                }
            }catch(err){
                console.log(err);
            }
        }else{
            toast.info("plase fill form complely")
        }
    }


  return (
    <div className='md:grid grid-cols-2 '>
        <section className='md:flex flex-col bg-secondary-blue  lg:h-full mb-40'>
            <div className='flex justify-between items-center gap-4 w-20 h-20  pl-7'>
                <img src="aidLogo.png" alt="" />
                <h1 className='text-white text-2xl font-semibold'>AidFlow</h1>
            </div>
            <div className=' lg:px-20 md:px-13 px-10'>
                <p className='text-4xl font-bold text-white mb-3'>Join the Cordination <br /> Network</p>
                <p className='text-gray-400 mb-5'>Connect directly with resources of offer your support where <br /> It's needed most.</p>

                
                {
                    insideRegister &&
                    <div>
                        <p className='text-gray-400 mb-4'>Select Your Role</p>
                        <div className='flex gap-0 mb-4'>
                            <div onClick={()=>setRole("victim")} className={`cursor-pointer rounded text-white p-2 ${role === "victim"?"bg-blue-500":"bg-[#24272b]"}`}>
                                <p>I need assistance</p>
                            </div>|
                            <div onClick={()=>setRole("volunteer")} className={`cursor-pointer rounded text-white p-2 ${role === "volunteer"?"bg-blue-500":"bg-[#24272b]"}`}>
                                <p>I want to volunteer</p>
                            </div>
                        </div>
                        <p className='text-white mb-2'>Full Name</p>
                        <input value={userDetails.username} onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='Enter your full name' className='bg-[#24272b] w-full text-white px-2 py-2 rounded mb-2 placeholder-slate-200 ' />
                    </div>
                    
                }
                
                <p className='text-white mb-2'>Email Address</p>
                <input value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} type="text" placeholder='name@example.com' className='bg-[#24272b] w-full text-white px-2 py-2 rounded mb-2 placeholder-slate-200 ' />
                <div className='flex flex-col '>
                    <div>
                        <p className='text-white mb-1'>Password</p>
                        <input value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} type="text" placeholder='Enter Password' className='bg-[#24272b] w-full text-white px-2 py-2 rounded mb-2 placeholder-slate-200 ' />
                    </div>
                    {/* forgot password */}
                    {
                        !insideRegister && 
                        <div className='flex justify-between mb-5 '>
                            <p className='text-xs text-gray-400'>Never Share your password with others</p>
                            <button className='text-xs text-blue-50 underline cursor-pointer'>Forgot Password ?</button>
                        </div>
                    }
                    {/* {
                        insideRegister &&
                        <div>
                            <p className='text-white mb-1'>Confirm Password</p>
                            <input type="text" placeholder='Re-enter password' className='bg-[#24272b] w-full text-white px-2 py-2 rounded mb-2 placeholder-slate-200 ' />
                        </div>
                    } */}
                    
                </div>
                <div className='flex gap-2 mb-2'>
                    <input type="checkbox" className='bg-[#42474d] ' />
                    <p className='text-white'>i agree to the <span className='text-blue-400'>Terms of Service</span> and  <span className='text-blue-400'>Privacy Policy</span></p>
                </div>
                {
                    insideRegister ? 
                    <button onClick={handleRegister} className='bg-blue-500 w-full p-2 text-white rounded-md mb-2 cursor-pointer hover:bg-blue-600'>Create Account</button>
                    :
                    <button onClick={handleLogin} className='bg-blue-500 w-full p-2 text-white rounded-md mb-2 cursor-pointer hover:bg-blue-600'>Login</button>

                }

                <p className='text-gray-300 mb-2 text-center'>------------------ Or Continue with --------------------</p>
                <button className='bg-[#24272b] w-full p-2 text-white rounded-md mb-4'>Google</button>
                {
                    insideRegister &&
                    <p className='text-gray-300 '>Alredy have an account ? <Link to={'/login'} className='text-blue-400 cursor-pointer hover:text-blue-500'>Log In</Link></p>
                }
                {
                    !insideRegister &&
                    <p  className='text-gray-300 '>Alredy have an account ? <Link to={'/register'} className='text-blue-400 cursor-pointer hover:text-blue-500'>Register</Link></p>
                }
                



            </div>


        </section>

        <section className='bg-[url(login.jpg)] bg-cover bg-center  lg:h-full'>

        </section>

        {/* toast */}
        <ToastContainer
            position="top-center"
            autoClose={3000}
            theme="dark"
            transition={Flip}
        />
    </div>
  )
}

export default Auth