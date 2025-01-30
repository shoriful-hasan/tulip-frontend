import { Link } from "react-router-dom";

const Updatecard = ({item}) => {
    const {_id,imageurL,campaignTitle,CampaignType,description,datetime} = item
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
<p>{description}</p>
<div className="card-actions justify-between">
<button className="btn btn-primary">Edit</button>
<button className="btn btn-primary">Delete</button>
</div>
</div>
</div>
    </div>
    );
};

export default Updatecard;