import { useContext } from "react";
import { Authcontext } from "../Authprovider/Authprovider";
import { Navigate } from "react-router-dom";

const Private = ({privatecontent}) => {
const {user,loading} = useContext(Authcontext)

if(loading){
    return  <div className='flex justify-center items-center h-48 '>
    <span className="loading loading-ring loading-lg"></span>
</div>
}
if(user){
    return privatecontent
}
return  <Navigate state={location.pathname} to={'/login'}></Navigate>

};

export default Private;