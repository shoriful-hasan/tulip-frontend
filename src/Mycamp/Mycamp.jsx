import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Authprovider';
import Updatecard from '../Component/Updatecard';

const Mycamp = () => {
   
    const {user} = useContext(Authcontext)
    const [donation,setdonation] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/tulipdonationdataGet')
        .then((res)=>res.json())
        .then((data)=>{
            const filterdata = data.filter((item)=> item.email === user.email)
            setdonation(filterdata)
        })
    },[])
    return (
        <div>
           <div className='flex justify-center mt-3 mb-4'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    donation.map((item)=><Updatecard key={item._id} item={item}></Updatecard>)
                }
            </div>
           </div>
        </div>
    );
};

export default Mycamp;