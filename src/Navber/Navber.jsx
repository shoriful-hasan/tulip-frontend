import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import navicon from '/assets/favicon.jpg'
import { Authcontext } from '../Authprovider/Authprovider';

const Navber = () => {

const {logout,user} = useContext(Authcontext);
console.log(user);

    return (
        <div className="navbar bg-">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/allcampaign'>Allcampaign</Link></li>
              <li><Link to='/Addcamp'>Add New Camp</Link></li>
              <li><Link to='/mycamp'>My Campaign</Link></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl "><Link to='/' ><img className='w-14 h-14 rounded-full' src={navicon} alt="" /></Link></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/allcampaign'>Allcampaign</Link></li>
          <li>{user && <Link to='/Addcamp'>Add New Camp</Link>}</li>
          <li>{user && <Link to='/mycamp'>My Campaign</Link>}</li>
          </ul>
        </div>
        <div className="navbar-end">
         
      
        {
            user&& user?.email ? <>
             <p>{user.displayName}</p> 
             <button onClick={logout} className='btn btn-success'>logout</button>
            </>
            
            
            
            :  <li className='list-none'><Link to='/login'>Login</Link></li>
          
          
          
          }
        </div>
  
      </div>
    );
};

export default Navber;