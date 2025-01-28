import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Productcard from '../Component/Productcard';

const Allcampaign = () => {
    const data = useLoaderData();
    return (
        <div className='max-w-screen-xl mx-auto mt-28'>
        <div className='text-center mb-10'><h1 className='text-5xl'>Running Campaign</h1></div>
    
    <div className='flex justify-center'>
    <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
    {
        data.map((item) => <Productcard key={item._id} item={item} ></Productcard>)
    }
    </div>
    </div>
    
    </div>
    );
};

export default Allcampaign;