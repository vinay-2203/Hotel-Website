import React from 'react';
import {Link} from 'react-router-dom'
function Members() {
    return ( 
        <div className='container mt-3'>
            <div className='row mt-5 ' style={{backgroundColor:'#191E3B',borderRadius:'1.5rem',height:'80px',width:'100%'}}>
                <div className='col-1 mt-3'>
                    <img src='/Media/mod.svg' style={{width:'100px',height:'50px'}}/>
                    </div>
                <div className='col-8 mt-3 p-2'>
                    <p className='fs-5' style={{color:'white'}}>Members save 10% or more on over 100,000 hotels worldwide when signed in. . .</p>
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

export default Members;