import React, { useContext, useState } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {

const {Create_New_User_using_Register,updateprofile,setuser} = useContext(Authcontext)
const [RegisterError,SetRegisterError] = useState('')
const [success,setsuccess] = useState(false)
const location = useLocation()
const navigate = useNavigate()

const RegisterData = (e)=>{
    e.preventDefault()
    const form    = new FormData(e.target);
    const name    = form.get('name')
    const email   = form.get('email')
    const photourl= form.get('photourl')
    const password= form.get('password')
    
    SetRegisterError('')
    setsuccess(false)
const registervalue = {
        name,
        email,
        photourl,
        password
    }
    console.log(registervalue);
    const regex1 = /(?=.*[A-Z])/; // At least one uppercase letter
    const regex2 = /(?=.*[a-z])/; // At least one lowercase letter
if(!regex1.test(password))
  {
     SetRegisterError('password should have one uppercase')
  return
    }
  if(!regex2.test(password)){
     SetRegisterError('password should have one lowercase')
  return
    }
if(password.length < 6){
   SetRegisterError('password length atleast 6 character')
return
  }


    Create_New_User_using_Register(email,password)
    .then((result)=>{
        console.log(result)
        setsuccess(true)
        navigate(location?.state  ? location.state : '/')
        
        updateprofile(
          {displayName: name, 
            photoURL : photourl})
            setuser({...result.user,displayName:name,photoURL:photourl})
            
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

{
  RegisterError && <p className='text-red-600'>{RegisterError}</p>
}
{

success && <p className='text-green-700'>Register Successfully</p>
}

    </div>


         </div>
        </div>
    );
};

export default Register;