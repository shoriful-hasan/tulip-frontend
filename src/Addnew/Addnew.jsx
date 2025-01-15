import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Authcontext } from '../Authprovider/Authprovider';
import Swal from 'sweetalert2';
const Addnew = () => {
    const [startdate,setstartdate] = useState(new Date())
    const {user} = useContext(Authcontext)
      const Additem = (e)=>{
        e.preventDefault();
        console.log('add btn are click');
        const form  = e.target
         const formdata =  new FormData(form);
        const imageurl  = formdata.get('imageurl');
        const campaignTitle  = formdata.get('campaignTitle');
        const CampaignType  = formdata.get('CampaignType');
        const description  = formdata.get('description');
        const datetime     = formdata.get('datetime');
        const userName    = formdata.get('userName');
        const UserEmail   = formdata.get('UserEmail') 
        const data  = {
            imageurl,campaignTitle,CampaignType,description,datetime,userName,UserEmail
        }
        fetch('http://localhost:5000/tulipallvalue',{
            method : 'post',
            headers : {'content-type' : 'application/json'},
            body :JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "Item Added",
                    text: "Successfully",
                    icon: "success"
                  });
            }
            
        })

        console.log(data);
        form.reset()        
      }

    return (
       <div >
        <div className='text-center'><h1 className='sm:text-xl md:text-2xl lg:text-6xl mb-20 mt-10'>Add New Camp</h1></div>
         <div className='flex justify-center'>
            
            <div className='  text-center  border border-red-500 space-x-3 p-5'>
                <form onSubmit={Additem}>
                  <div className=' grid md:grid-cols-1 lg:grid-cols-2 gap-3 border-red-200 '>
                    {/* leftside div */}
                
                        <div>
                        <label>image</label><br />
                    <input type="text" placeholder="Type here" name='imageurl'
                    className="input input-bordered input-success w-full max-w-xs" />
                        </div>




                        {/* <div>
                        <label>Campaign Type</label><br />
                    <input type="text" placeholder="Type here" name='campaignType'
                    className="input input-bordered input-success w-full max-w-xs" />
                        </div> */}

           

                   
            
            




{/* right side div */}
        

                        <div>
                        <label>Campaign Title</label><br />
                    <input type="text" placeholder="Type here" name='campaignTitle'
                    className="input input-bordered input-success w-full max-w-xs" />
                        </div>
                        <div className='text-center'>
    
                        <label>Campain Type</label>
                       <div className='input input-bordered text-center input-success w-full max-w-xs'>
               <select name="CampaignType" id="amount" className='w-full'>
                   <option value="personal issue">personal issue</option>
                   <option value="startup">startup</option>
                   <option value=" business">business</option>
                   <option value="creative ideas">creative ideas</option>
               </select>
                       </div>
                       </div> 
                        <div className='col-span-full w-full '>
                        <label>Description</label><br />
                    <textarea name="description" id="" rows={4} cols={50} className='w-full'></textarea>
                        </div>

                       <div className='text-center'>
                        
                         <label> Donation Amount</label>
                        <div className='input input-bordered text-center input-success w-full max-w-xs'>
                <select name="amount" id="amount" className='w-full'>
                    <option value="1200">1200</option>
                    <option value="5000">5000</option>
                    <option value="10000">10000</option>
                    <option value="12000">12000</option>
                    <option value="15000">15000</option>
                    <option value="20000">20000</option>
                    <option value="100000">100000</option>
                </select>
                        </div>
                        </div> 
                
                        <div>
                        <label>Date</label><br />
                    <div className='input input-bordered input-success w-full max-w-xs'>
                        <DatePicker
                         type="text"
                         selected={startdate}
                         onChange={(date)=> setstartdate(date)}
                          name='datetime'
                          placeholder='date'
                        
                        />
                        
                    </div>
                        </div>
       
                        <div className='text-center'>
                        <label>User Name</label><br /> 
                    <input type="text" placeholder="Type here" name='userName' defaultValue={ user && user?.displayName}
                    className="input input-bordered input-success w-full max-w-xs" />
                        </div>
                        <div>
                        <label>User Email</label><br />
                    <input type="text" placeholder="Type here" name='UserEmail' defaultValue={ user && user?.email}
                    className="input input-bordered input-success w-full max-w-xs" />
                        </div>
        

                  </div>
                  <button  className='btn btn-accent w-full mt-5' type='submit'>Add</button>
                </form>
            </div>
        </div>
       </div>
    );
};

export default Addnew;