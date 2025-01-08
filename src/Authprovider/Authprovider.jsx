import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const Authcontext = createContext()

const Authprovider = ({Details}) => {
// firebase  authprovider 
const provider = getAuth(app)
// create user profile using email and password
const Create_New_User_using_Register = (email,password) =>{
    return createUserWithEmailAndPassword(provider,email,password)
}
// user profile update


const updateprofile = (updatedate)=>{
    return updateProfile(provider.currentUser,updatedate)
}






    const name = 'shoriful hasan'
    const authinfo = {
        Create_New_User_using_Register,
        updateprofile,
        name
    }
    return (
<Authcontext.Provider value={authinfo}>{Details}</Authcontext.Provider>
    )
};

export default Authprovider