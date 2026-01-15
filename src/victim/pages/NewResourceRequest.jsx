import React, { useState } from 'react';
import { Home, Pill, Utensils, Search, Navigation, Send, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import { createRequestAPI } from '../../services/allAPI';
import { Flip, ToastContainer, toast } from 'react-toastify';


const NewResourceRequest = () => {

    const navigate = useNavigate()

  const getMyLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser")
    return
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude
      const lng = position.coords.longitude

      const locationString = `${lat},${lng}`

      setFormData({ ...formData, location: locationString })
    },
    (error) => {
      console.log(error)
      alert("Unable to get location. Please allow location access.")
    }
  )
}


  const [formData, setFormData] = useState({
    resourceType: '',
    urgency: '',
    location: '',
    details: '',
    contactName: '',
    phone: ''
  });

  const categories = [
    { id: 'Shelter', icon: <Home size={24} />, label: 'Shelter' },
    { id: 'Medicine', icon: <Pill size={24} />, label: 'Medicine' },
    { id: 'Food', icon: <Utensils size={24} />, label: 'Food' },
  ];

  const urgencyLevels = [
    { id: 'Low', color: 'bg-green-500' },
    { id: 'Medium', color: 'bg-yellow-500' },
    { id: 'High', color: 'bg-red-500' },
  ];

  const handleSubmit = async () => {
    try{
      const result = await createRequestAPI(formData)
      if(result.status === 200){
        
        toast.success('Request submitted successfully')
        setTimeout(()=>{
          navigate('/victim')
          scrollTo(0,0);
        },1500)
        
      }else{
        toast.warning("Something went wrong")
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen bg-primary-blue text-slate-200 font-sans pb-12">
      {/* Navigation Bar */}
      <NavigationBar/>

      {/* Main Content*/}
      <main className="max-w-3xl mx-auto mt-8 px-4">
        <button onClick={() => navigate('/victim')} className="flex items-center gap-2 text-blue-400 text-sm mb-6 hover:underline">
          <ArrowLeft size={16} /> Back to Dashboard
        </button>

        <h1 className="text-3xl font-bold text-white mb-2">New Resource Request</h1>
        <p className="text-slate-400 mb-10">
          Please provide details about the assistance you need. We will connect you with nearby providers.
        </p>

        <section className="space-y-10">
          {/* resourceType Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">What do you need?</h3>
            <div className="grid grid-cols-3 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFormData({ ...formData, resourceType: cat.id })}
                  className={`flex flex-col items-center justify-center p-8 rounded-xl border-2 transition-all ${
                    formData.resourceType === cat.id 
                    ? 'border-blue-500 bg-blue-500/10 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]' 
                    : 'border-slate-800 bg-slate-800/40 hover:border-slate-700'
                  }`}
                >
                  <div className="mb-3">{cat.icon}</div>
                  <span className="font-medium">{cat.label}</span>
                  {formData.resourceType === cat.id && (
                    <div className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                       <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Urgency Level */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Urgency Level</h3>
            <div className="grid grid-cols-3 bg-slate-900/50 p-1 rounded-lg border border-slate-800">
              {urgencyLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setFormData({ ...formData, urgency: level.id })}
                  className={`py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-all ${
                    formData.urgency === level.id ? 'bg-slate-800 shadow-sm' : 'opacity-50 grayscale'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${level.color}`}></span>
                  <span className="text-sm font-medium">{level.id}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Location</h3>
            <div className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input value={formData.location} onChange={(e)=>setFormData({...formData,location:e.target.value})} 
                  type="text" 
                  placeholder="Enter street address or coordinates"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
              <button onClick={getMyLocation} className="flex items-center gap-2 bg-blue-900/30 text-blue-400 px-4 py-2 rounded-lg border border-blue-800 hover:bg-blue-900/50 transition whitespace-nowrap">
                <Navigation size={18} /> Use My Location
              </button>
            </div>
            {/* Map Placeholder */}
            <div className="w-full h-48 bg-slate-800 rounded-xl overflow-hidden relative border border-slate-700">
              <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-74.006,40.7128,12/800x400?access_token=YOUR_TOKEN')] bg-cover opacity-60"></div>
              {/* Fake Map Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Additional Details</h3>
            <textarea value={formData.details} onChange={(e)=>setFormData({...formData,details:e.target.value})}
              rows="4"
              placeholder="Describe specifics (e.g., 'Need insulin specifically', 'Family of 4 with infants')..."
              className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition"
            ></textarea>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Name</label>
                <input value={formData.contactName} onChange={(e)=>setFormData({...formData,contactName:e.target.value})}
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Number</label>
                <input value={formData.phone} onChange={(e)=>setFormData({...formData,phone:e.target.value})}
                  type="text" 
                  placeholder="(555) 000-0000"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] shadow-lg shadow-blue-600/20">
            Submit Request <Send size={20} />
          </button>
        </section>
         {/* toast */}
        <ToastContainer
            position="top-center"
            autoClose={3000}
            theme="dark"
            transition={Flip}
        />
      </main>
       
    </div>
  );
};

export default NewResourceRequest;