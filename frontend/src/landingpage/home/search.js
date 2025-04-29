// // export default SearchPage;
// import { useSearchParams, Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function SearchPage() {
//   const [searchParams] = useSearchParams();
//   const city = searchParams.get('city');
//   const guests = searchParams.get('guests');
//   const [hotels, setHotels] = useState([]);

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8000/searchi?city=${city}`);
//         console.log(res.data);
//         setHotels(res.data);
//       } catch (err) {
//         console.error("Error fetching hotels", err);
//       }
//     };

//     fetchHotels();
//   }, [city]);

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-3 fw-bold">Hotels in <span className="text-capitalize">{city}</span></h2>
//       <p className="mb-4 fs-5">Guests: {guests}</p>

//       <div className="row">
//         {hotels.length > 0 ? (
//           hotels.map((hotel) => (
//             <div key={hotel._id} className="col-lg-4 col-md-6 col-12 mb-4">
//               <div className="card shadow-sm h-100 border-light" style={{ borderRadius: '1.5rem', overflow: 'hidden' }}>
//                 <img
//                   src={hotel.image}
//                   alt={hotel.name}
//                   className="card-img-top"
//                   style={{ height: '220px', objectFit: 'cover' }}
//                 />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title fw-semibold text-primary">{hotel.name}</h5>
//                   <p className="text-muted mb-1">{hotel.location}, {hotel.country}</p>
//                   <p className="text-dark fs-6 mb-3">₹{hotel.price} / night</p>

//                   <Link
//                     to={`/payment/${hotel._id}?guests=${guests}`}
//                     className="btn btn-primary mt-auto"
//                     style={{ borderRadius: '1.5rem', backgroundColor: '#E61E43', fontWeight: 500 }}
//                   >
//                     Book Now
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-12">
//             <p className="text-muted fs-5">No hotels found in <strong>{city}</strong>.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SearchPage;

import { useSearchParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function SearchPage() {
    const [searchParams] = useSearchParams();
    const city = searchParams.get('city');
    const guests = searchParams.get('guests');
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/searchi?city=${city}`);
                console.log(res.data);
                setHotels(res.data);
            } catch (err) {
                console.error("Error fetching hotels", err);
            }
        };

        fetchHotels();
    }, [city]);

    // StarRating Component
    const StarRating = ({ rating }) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={i < rating ? 'text-warning' : 'text-muted'}>★</span>
            );
        }
        return <div>{stars}</div>;
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-3 fw-bold">Hotels in <span className="text-capitalize">{city}</span></h2>
            <p className="mb-4 fs-5">Guests: {guests}</p>

            <div className="row">
                {hotels.length > 0 ? (
                    hotels.map((hotel) => (
                        <div key={hotel._id} className="col-lg-4 col-md-6 col-12 mb-4">
                            <div className="card shadow-sm h-100 border-light" style={{ borderRadius: '1.5rem', overflow: 'hidden' }}>
                                <img
                                    src={hotel.image}
                                    alt={hotel.name}
                                    className="card-img-top"
                                    style={{ height: '220px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{hotel.title}</h5>
                                    <p className="card-text text-muted">{hotel.description}</p>
                                    <div className="d-flex justify-content-between">
                                        <p className="text-success">
                                            <strong>₹{hotel.price}</strong> / Night
                                        </p>
                                        <div className="d-flex align-items-center gap-1">
                                            <StarRating rating={hotel.rating} />
                                            <span className="text-muted ms-1">({hotel.rating})</span>
                                        </div>
                                    </div>
                                    <p><strong>Location:</strong> {hotel.location}, {hotel.country}</p>
                                    <p><strong>Available Rooms:</strong> {hotel.count}</p>

                                    {/* Link to the payment page with hotelId */}
                                    <Link
                                        to={`/payment/${hotel._id}`}
                                        className="btn btn-primary w-100 mt-3 rounded-3 p-2"
                                        style={{ fontWeight: '500', backgroundColor: '#E61E43' }}>
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12">
                        <p className="text-muted fs-5">No hotels found in <strong>{city}</strong>.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchPage;
