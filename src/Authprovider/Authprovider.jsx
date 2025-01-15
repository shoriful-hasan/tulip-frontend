import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const Authcontext = createContext()

const Authprovider = ({Details}) => {
// firebase  authprovider 
const provider = getAuth(app)
const [user,setuser] = useState(null)
const [loading,setloading] = useState(true)

// create user profile using email and password // signup
const Create_New_User_using_Register = (email,password) =>{
setloading(true)
    return createUserWithEmailAndPassword(provider,email,password)
}


// signin user

const usersignin = (email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(provider,email,password)
}


// userlogout
const logout = ()=>{
    setloading(true)
    return signOut(provider)
}

// user profile update
const updateprofile = (updatedate)=>{
    setloading(true)
    return updateProfile(provider.currentUser,updatedate)
}

// onAuthstate change
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(provider,currentuser =>{
        setuser(currentuser)
        setloading(false)
    })
return ()=>{
    unsubscribe()
}


},[])





    const authinfo = {
        Create_New_User_using_Register,
        updateprofile,
        logout,
        usersignin,
        loading,
        user,
        setuser
    }
    return (
<Authcontext.Provider value={authinfo}>{Details}</Authcontext.Provider>
    )
};

export default Authprovider