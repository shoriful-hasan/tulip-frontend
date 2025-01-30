import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Updatedetails = () => {
    const data = useLoaderData();
    console.log(data);
    
    return (
        <div>
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
     
            <Link to='/'><span className='text-lime-600'>Back To Home</span></Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Updatedetails;