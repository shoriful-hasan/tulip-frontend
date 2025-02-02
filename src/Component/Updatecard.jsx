import { useState } from "react";
import {  Link } from "react-router-dom";

const Updatecard = ({item}) => {
    const {_id,imageurL,campaignTitle,CampaignType,description,datetime} = item

const [Donate,setDonate] = useState(item);
console.log(Donate);

console.log(_id);
const handleDelete = (id)=>{
    console.log(id);
    fetch(`http://localhost:5000/tulipdonationdataGet/${id}`,{
        method : 'DELETE',
    })
    .then((res)=> {
        res.json();
        const newdonation = Donate.filter((items)=> id !== items._id);
        setDonate(newdonation)
    })
    .then((data)=> console.log(data))
    
}

 




    return (
        <div>
      
        <div className="card bg-base-100 w-96 shadow-xl">
<figure>
<img
  src={imageurL}
  alt="Shoes" />
</figure>
<div className="card-body">
<h2 className="card-title">{campaignTitle}</h2>
<p>{description.split(" ").slice(0,50).join(" ")}</p>
<div className="card-actions justify-between">
    <Link to={`/update/${_id}`}><button className="btn btn-primary">Edit</button></Link>
<button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
</div>
</div>
</div>
    </div>
    );
};

export default Updatecard;