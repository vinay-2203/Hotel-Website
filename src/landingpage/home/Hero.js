// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Hero() {
//     const [city, setCity] = useState('');
//     const [guests, setGuests] = useState(1);
//     const navigate = useNavigate();

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (!city) return alert("Please enter a city");
//         navigate(`/search?city=${city}&guests=${guests}`);
//     };

//     return (
//         <div className='container mt-4'>
//             <div className='row'>
//                 <div className='col-6'>
//                     <img src='/Media/HomeHero.webp' style={{ width: '200%', borderRadius: '1.5rem', height: '500px' }} alt='hero' />

//                     <div
//                         className="position-absolute  start-50 translate-middle bg-light p-4 rounded shadow"
//                         style={{ width: '90%', maxWidth: '1100px', top: '45%', borderRadius: '2rem', opacity: '0.9' }}
//                     >
//                         <h4 className="mb-3 text-center">Where your next</h4>
//                         <form className="row g-3" onSubmit={handleSearch}>
//                             <div className="col-md-6">
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     placeholder="Where to India . . ."
//                                     value={city}
//                                     onChange={(e) => setCity(e.target.value)}
//                                 />
//                             </div>
//                             <div className="col-md-3">
//                                 <input
//                                     type="number"
//                                     className="form-control"
//                                     placeholder="Guests"
//                                     min="1"
//                                     value={guests}
//                                     onChange={(e) => setGuests(e.target.value)}
//                                 />
//                             </div>
//                             <div className="col-md-3">
//                                 <button
//                                     className='btn btn-primary'
//                                     style={{ borderRadius: '1.5rem', width: '150px', height: '45px', marginLeft: '100px' }}
//                                 >
//                                     Search Hotels
//                                 </button>
//                             </div>
//                         </form>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Hero;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const [city, setCity] = useState('');
    const [guests, setGuests] = useState(1);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (!city) return alert("Please enter a city");
        navigate(`/searchi?city=${city}&guests=${guests}`);
    };

    return (
        <div className='container mt-5'>
            <div className='row position-relative'>
                <div className='col-12'>
                    <div style={{
                        position: 'relative',
                        borderRadius: '2rem',
                        overflow: 'hidden',
                        height: '500px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                    }}>
                        <img
                            src='/Media/HomeHero.webp'
                            alt='hero'
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                // filter: 'brightness(75%)'
                            }}
                        />

                        {/* Overlay Search Box */}
                        <div
                            className="position-absolute start-50 translate-middle bg-white shadow"
                            style={{
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '90%',
                                maxWidth: '900px',
                                borderRadius: '1.5rem',
                                padding: '2rem',
                                opacity: 0.95,
                                zIndex: 10
                            }}
                        >
                            <h3 className="mb-4 text-center" style={{ fontWeight: 600, color: '#333' }}>
                                Where your next
                            </h3>
                            <form className="row g-3 align-items-center" onSubmit={handleSearch}>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Where to India . . ."
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        style={{ borderRadius: '1rem' }}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <input
                                        type="number"
                                        className="form-control form-control-lg"
                                        placeholder="Guests"
                                        min="1"
                                        value={guests}
                                        onChange={(e) => setGuests(e.target.value)}
                                        style={{ borderRadius: '1rem' }}
                                    />
                                </div>
                                <div className="col-md-3 d-flex justify-content-center">
                                    <button
                                        className='btn btn-primary btn-lg'
                                        style={{
                                            borderRadius: '2rem',
                                            width: '100%',
                                            maxWidth: '160px',
                                            height: '50px',
                                            fontWeight: '600'
                                        }}
                                    >
                                        Search Hotels
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

