import React from 'react';
import Slider from '../Component/Slider';
import { Fade, Slide } from 'react-awesome-reveal';

const Home = () => {
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

        </div>
    );
};

export default Home;