import React from 'react';
import { Link } from 'react-router-dom';

const Productcard = ({item}) => {
   const {_id,imageurl,campaignTitle,CampaignType,description,datetime} = item
    
    return (
        <div>
            <Link to={`/single/${_id}`}>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={imageurl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{campaignTitle}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">See More</button>
    </div>
  </div>
</div></Link>
        </div>
    );
};

export default Productcard;