import React, { useContext } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';

const Register = () => {

const {Create_New_User_using_Register,updateprofile} = useContext(Authcontext)


const RegisterData = (e)=>{
    e.preventDefault()
    const form    = new FormData(e.target);
    const name    = form.get('name')
    const email   = form.get('email')
    const photourl= form.get('photourl')
    const password= form.get('password')

const registervalue = {
        name,
        email,
        photourl,
        password
    }
    console.log(registervalue);

    Create_New_User_using_Register(email,password)
    .then((result)=>{
        console.log(result)
        updateprofile({displayName: name, 
            photoURL : photourl})
        
    })
    .then((error)=>{
        console.log(error.message)
        
    })


}




    return (
        <div>
         <div className='flex justify-center'>
            {/* this is register data */}

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form  onSubmit={RegisterData} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" name='name' required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name='email' required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="Share your photourl" className="input input-bordered" name='photourl' required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name='password' required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>


         </div>
        </div>
    );
};

export default Register;