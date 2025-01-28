import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Navber/Navber';
import Footer from '../Footer/Footer';

const Mainlayout = () => {
    return (
        <div>
         <div className=''>
             <div className='bg-cyan-300'><Navber></Navber></div>
           <div className="min-h-screen">
            <div className='px-3'>
            <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
</div>
         </div>
        </div>
    );
};

export default Mainlayout;