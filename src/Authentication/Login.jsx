import React, { useContext } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from "../assets/Animation - 1736140034086.json";
import { Authcontext } from '../Authprovider/Authprovider';
import { Link } from 'react-router-dom';
const Login = () => {

const {name} = useContext(Authcontext)


    return (
        <div>
        <div className='flex justify-center mt-3'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 border-2 border-gray-300 p-5 shadow-2xl">
      <form className="card-body">
        <Player
      autoplay
      loop
      src={animationData}
      style={{ height: "100px", width: "300px" }}
      speed={1.5} 
        />
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" defaultValue={name} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className='text-center'>
        <h2>Don`t Have An Account Please <span className='text-fuchsia-400'><Link to='/register'>Register</Link></span></h2>
      </div>
    </div>
            
        </div>
        
        </div>
    );
};

export default Login;