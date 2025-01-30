import React, { useContext } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Authprovider';
import Swal from 'sweetalert2';

const Details = () => {
  const location = useLocation();
  console.log(location);
  
    const data = useLoaderData();
    const {user} = useContext(Authcontext)
const {_id,imageurl,campaignTitle,CampaignType,description,datetime}  = data;

const donationdata = ()=>{
  const name = user.displayName;
  const imageurL = imageurl;
  const email  = user.email; 
  const data ={
    campaignTitle,CampaignType,description,datetime,name,imageurL,email
  };
  console.log(data);
  fetch('http://localhost:5000/tulipdonationdata',{
    method : 'post',
    headers : {'content-type' : 'application/json'},
    body    : JSON.stringify(data)
  })
  .then(res => res.json())
   .then(data => {
              console.log(data)
              if(data.insertedId){
                  Swal.fire({
                      title: "Donation Done",
                      text: "Thanks For Your Contribution",
                      icon: "success"
                    });
              }
              
          })
}
    
    return (
      
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image Section */}
          <img
            src={imageurl}
            alt="Campaign"
            className="w-full h-64 object-cover"
          />
  
          {/* Content Section */}
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {campaignTitle}
            </h1>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Type:</strong> {CampaignType}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Date:</strong> {datetime}
            </p>
  
            <p className="text-gray-700 text-base mb-6">
              {description || "No description is available for this campaign. Stay tuned for more updates."}
            </p>
  
            {/* Button Section */}
        {
          user &&     <button onClick={donationdata} type='submit' className="w-full bg-blue-500 text-white text-lg font-semibold py-3 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none transition duration-300">
          Donate Now
        </button>
        }
            <Link to='/'><span className='text-lime-600'>Back To Home</span></Link>
          </div>
        </div>
      </div>
    )
};

export default Details;