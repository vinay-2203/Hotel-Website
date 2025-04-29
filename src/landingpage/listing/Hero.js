import React from 'react';
import {Link} from 'react-router-dom';
function Hero() {
    return ( 
        <div className='container-fluid mt-3'>
        <div className='row mt-5 offset-1' style={{backgroundColor:'#191E3B',borderRadius:'1.5rem',height:'80px',width:'80%'}}>
            <div className='col-1 mt-3'>
                <img src='/Media/mod.svg' style={{width:'100px',height:'50px'}}/>
                </div>
            <div className='col-6 mt-3 p-2'>
                <p className='fs-5' style={{color:'white'}}>Give a reward night when you stay for 10 nights . . .
                </p>
            </div>
            <div className='col-2 mt-3 ' style={{marginLeft:'100px'}}>
                <Link to='/signup'>
                <button className='btn btn-primary' style={{borderRadius:'1.5rem',width:'100px',height:'45px'}}>Join Now</button>
                </Link>
            </div>

        </div>
    </div>
     );
}

export default Hero;