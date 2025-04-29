import React from 'react';
function Stay() {
    return ( 
        <div className='container mt-4'>
            <p className='text-center fs-3' style={{fontFamily:'cursive'}}>"Find You Perfect Stay - AnyWhere, Anytime"</p>
            <div className='row ms-auto ' style={{backgroundColor:'#E61E43',borderRadius:'1.5rem',height:'200px'}}>
                <div className='col-3 p-5'>
                    <p className='fs-3' style={{fontFamily:'cursive',color:'white'}}>"Find and book your perfect stay "</p>
                    
                </div>
                <div className='col-3 mt-4 text-center' style={{backgroundColor:'#A1122C',height:'150px',borderRadius:'1.5rem',color:'white'}}>
                    <p className='fs-6 p-3 mt-4'>
                    <i class="fa-regular fa-moon fa-2x"></i>  Earn reward on every night you stay
                </p>
                </div>
                <div className='col-2 mt-4 text-center' style={{backgroundColor:'#A1122C',height:'150px',borderRadius:'1.5rem',color:'white',marginLeft:'10px'}}>
                    <p className='fs-6 p-3 mt-4'>
                    <i class="fa-solid fa-tags fa-2x"></i>  Save more with Member Prices
                </p>
                </div>
                <div className='col-3 mt-4 text-center' style={{backgroundColor:'#A1122C',height:'150px',borderRadius:'1.5rem',color:'white',marginLeft:'10px'}}>
                    <p className='fs- p-3 mt-4'>
                    <i class="fa-solid fa-calendar"></i>  Free cancellation options if plans change
                </p>
                </div>

                
            </div>
        </div>
     );
}

export default Stay;