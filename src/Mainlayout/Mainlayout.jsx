import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Navber/Navber';

const Mainlayout = () => {
    return (
        <div>
         <div className='px-2'>
             <div className='border border-red-200'><Navber></Navber></div>
            <Outlet></Outlet>
         </div>
        </div>
    );
};

export default Mainlayout;