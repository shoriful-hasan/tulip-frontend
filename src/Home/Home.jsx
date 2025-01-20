import React from 'react';
import Slider from '../Component/Slider';
import { Fade, Slide } from 'react-awesome-reveal';
import { useLoaderData } from 'react-router-dom';
import Productcard from '../Component/Productcard';

const Home = () => {
const data = useLoaderData()
console.log(data);

    return ( 
        <div >
 
            <div className='flex lg:flex-row items-center lg:text-start md:text-center justify-center md:flex-col-reverse sm:flex-col-reverse mt-2 w-full'>
                <div className='text-7xl sm:w-full lg:w-1/2'>
                <Slide>
                <h2>Share Your Things</h2>
      </Slide>
    <p className='w-full'>
    <Fade delay={1e3} cascade damping={1e-1}>
    <div>
    We contribute Your <br /> Funding 
    </div>
 </Fade></p>
                
                </div>
            <div className='border sm:w-full lg:w-1/2'><Slider></Slider></div>
            </div>



<div className='max-w-screen-xl mx-auto mt-28'>
    <div className='text-center mb-10'><h1 className='text-5xl'>Running Campaign</h1></div>
<div className='grid grid-cols-3'>
{
    data.map((item) => <Productcard key={item._id} item ={item}></Productcard> )
}
</div>
</div>


        </div>
    );
};

export default Home;