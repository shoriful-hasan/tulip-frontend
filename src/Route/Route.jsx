import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Mainlayout/Mainlayout';
import Notfound from '../Notfound/Notfound';
import Home from '../Home/Home';
import Allcampaign from '../Allcampaign/Allcampaign';
import Addnew from '../Addnew/Addnew';
import Mycamp from '../Mycamp/Mycamp';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';
import Private from '../Private/Private';
import Details from '../Component/Details';
import Updatedetails from '../Component/Updatedetails';
import Edit from '../Component/Edit';



const router = createBrowserRouter([
    {
        path : '/',
        element : <Mainlayout></Mainlayout>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader :()=> fetch('http://localhost:5000/tulipallvalueGet')
            },
            {
                path : '/allcampaign',
                element : <Allcampaign></Allcampaign>,
                loader :()=> fetch('http://localhost:5000/tulipallvalueGetdata')
            },
            {
                path : '/Addcamp',
                element : <Private privatecontent={<Addnew></Addnew>}></Private>
            },
            {
                path : '/single/:id',
                element : <Private privatecontent={<Details></Details>} ></Private>,
                loader : ({params}) => fetch(`http://localhost:5000/tulivalueid/${params.id}`)
            },
           {
            path :'/update/:id',
            element : <Edit></Edit>,
            loader : ({params}) => fetch(`http://localhost:5000/tulipdonationdataGet/${params.id}`)
           },
            {

                path : '/mycamp',
                element : <Private privatecontent={<Mycamp></Mycamp>}></Private>,
        
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                 path : '/register',
                 element : <Register></Register>
            },
    
            {
                path : '*',
                element : <Notfound></Notfound>
            },
            
        ]
    },
   {
    path : '*',
    element : <Notfound></Notfound>
   }

])

export default router