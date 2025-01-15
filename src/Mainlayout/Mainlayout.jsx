import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Navber/Navber';

const Mainlayout = () => {
    return (
        <div>
         <div className=''>
             <div className='bg-cyan-300'><Navber></Navber></div>
            <div className='px-3'>
            <Outlet></Outlet>
            </div>
         </div>
        </div>
    );
};

export default Mainlayout;