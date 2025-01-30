import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Updatecard from '../Component/Updatecard';
import { Authcontext } from '../Authprovider/Authprovider';

const Mycamp = () => {

    const {user} = useContext(Authcontext);
    console.log(user.email);
const [donation,Setdonation] = useState([])

   


useEffect(()=>{
    fetch('http://localhost:5000/tulipdonationdataGet')
    .then((res)=>res.json())
    .then((data)=> {
    const filterdata = data.filter(item => item.email === user.email)
    Setdonation(filterdata)
    }
    )
},[])



    return (
        <div className='flex justify-center'>
           <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
{
    donation.map((item) => <Updatecard key={item._id} item={item} ></Updatecard> )
}
           </div>
        </div>
    );
};

export default Mycamp;