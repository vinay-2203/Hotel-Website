import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for routing
import StarRating from './StarRating';

function HotelList() {
    const [hotels, setHotels] = useState([]);

    // Fetch hotels data from the backend
    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const res = await axios.get('http://localhost:8000/gethotels');
                setHotels(res.data);  // Update the state with fetched hotel data
            } catch (err) {
                console.error("Error fetching hotels:", err);
            }
        };

        fetchHotels();
    }, []); // Empty dependency array ensures the effect runs once when the component mounts

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5">Explore Our Hotels</h2>
            <div className="row">
                {hotels.map((hotel) => (
                    <div key={hotel._id} className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="card shadow-sm border-light rounded-3">
                            <img src={hotel.image} className="card-img-top rounded-3" alt={hotel.title} />
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
                                    style={{ fontWeight: '500', backgroundColor:'#E61E43'}}>
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HotelList;
