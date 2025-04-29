import React from 'react';
function Discover() {
    return (
        <div className='container'>
            <p className='p-3 mt-2 fs-4' style={{ fontFamily: 'fantasy' }}>Discover your new favourite stay </p>
            <div className='row g-4'>
                <div className='col-2 col-md-3'>
                    <div className="card" style={{ width: "300px",borderRadius:'1rem' }}>
                        <img src='/Media/apartment.jpg' className="card-img-top" alt="jlj" style={{ height: '400px',borderRadius:'1rem' }}></img>
                        <div className="position-absolute top-0 start-0  text-white fw-bold fs-4">
                           <p className='p-3'>Apartment</p>
                        </div>

                    </div>
                </div>
                <div className='col-2 col-md-3'>
                <div className="card" style={{ width: "300px",borderRadius:'1rem' }}>
                        <img src='/Media/villa.jpg' className="card-img-top" alt="jlj" style={{ height: '400px',borderRadius:'1rem' }}></img>
                        <div className="position-absolute top-0 start-0  text-white fw-bold fs-4">
                           <p className='p-3'>Villa</p>
                        </div>

                    </div>
                </div>
                <div className='col-2 col-md-3'>
                <div className="card" style={{ width: "300px",borderRadius:'1rem' }}>
                        <img src='/Media/houseboat.jpg' className="card-img-top" alt="jlj" style={{ height: '400px',borderRadius:'1rem' }}></img>
                        <div className="position-absolute top-0 start-0  text-white fw-bold fs-4">
                           <p className='p-3'>Houseboat</p>
                        </div>

                    </div>
                </div>
                <div className='col-2'>
                <div className="card" style={{ width: "300px",borderRadius:'1rem' }}>
                        <img src='/Media/resort.jpg' className="card-img-top" alt="jlj" style={{ height: '400px',borderRadius:'1rem' }}></img>
                        <div className="position-absolute top-0 start-0  text-white fw-bold fs-4">
                           <p className='p-3'>resort</p>
                        </div>

                    </div>
                </div>
              

            </div>
        </div>
    );
}

export default Discover;