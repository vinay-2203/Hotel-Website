import React from 'react';
import {Link} from 'react-router-dom'
function Hero() {
    return ( 
        <div className='container mt-3'>
            <div className='row mt-5 ' style={{backgroundColor:'#191E3B',borderRadius:'1.5rem',height:'80px',width:'100%'}}>
                <div className='col-1 mt-3'>
                    <img src='/Media/mod.svg' style={{width:'100px',height:'50px'}}/>
                    </div>
                <div className='col-8 mt-3 p-2'>
                    <p className='fs-5' style={{color:'white'}}>Give one night stay free if you stay ten nights . . . </p>
                </div>
                <div className='col-2 mt-3 ' style={{marginLeft:'100px'}}>
                    <Link to='/signup'>
                    <button className='btn btn-primary' style={{borderRadius:'1.5rem',width:'100px',height:'45px'}}>Grab offer</button>
                    </Link>
                </div>
                

            </div>
        </div>
     );
}

export default Hero;