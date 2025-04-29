// import React from 'react';
// import axios from 'axios';
// import { useState } from 'react';

// function AddHotelForm() {
//     const [formData, setformData] = useState({
//         title: '',
//         description: '',
//         image: '',
//         price: '',
//         location: '',
//         country: '',
//         rating: '',
//         availabelbeds: ''
//     });
//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setformData({ ...formData, [id]: value });

//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:8000/addhotel', formData);
//             alert('Hotel add Successfully');
//             console.log(res.data);
//         } catch (err) {
//             console.error(err);
//             alert('Something went Wrong');
//         }
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             {[
//                 { label: 'Title', id: 'title', type: 'text' },
//                 { label: 'Description', id: 'description', type: 'textarea' },
//                 { label: 'Image_URL', id: 'image', type: 'text' },
//                 { label: 'Price', id: 'price', type: 'number' },
//                 { label: 'Location', id: 'Location', type: 'text' },
//                 { label: 'Country', id: 'country', type: 'text' },
//                 { label: 'Rating', id: 'rating', type: 'number' },
//                 { label: 'Available', id: 'available', type: 'number' },
//             ].map((field) => (
//                 <div className='mb-3' key={field.id}>
//                     <label htmlFor={field.id} className='' form-label></label>
//                     {field.typ === 'textarea' ? (
//                         <textarea className='form-control' id={field.id} rows="3" onChange={handleChange}></textarea>
//                     ) : (
//                         <input
//                             type={field.type}
//                             className="form-control"
//                             id={field.id}
//                             onChange={handleChange}
//                         />
//                     )}

//                 </div>
//             ))}
//             <button type='submit' className='btn btn-primary'>Submit</button>
//         </form>
//     )
// }

// export default AddHotelForm;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function AddHotelForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        price: '',
        location: '',
        country: '',
        rating: '',
        count: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/addhotel', formData);
            alert('Hotel added successfully!');
            console.log(res.data);
            setTimeout(()=>{
                // setloading(false);
                navigate('/'); // redirect
                window.location.reload();
            },1000)
        } catch (err) {
            console.error(err);
            alert('Something went wrong');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-12">
                    <h2 className="text-center mb-4" style={{ fontWeight: '600' }}>Add Your Hotel</h2>
                    <form onSubmit={handleSubmit} className="shadow-lg p-4 rounded-4 border border-light bg-white">
                        {[
                            { label: 'Title', id: 'title', type: 'text' },
                            { label: 'Description', id: 'description', type: 'textarea' },
                            { label: 'Image URL', id: 'image', type: 'text' },
                            { label: 'Price', id: 'price', type: 'number' },
                            { label: 'Location', id: 'location', type: 'text' },
                            { label: 'Country', id: 'country', type: 'text' },
                            { label: 'Rating', id: 'rating', type: 'number' },
                            { label: 'Available Beds', id: 'count', type: 'number' },
                        ].map((field) => (
                            <div className="mb-4" key={field.id}>
                                <label htmlFor={field.id} className="form-label">{field.label}</label>
                                {field.type === 'textarea' ? (
                                    <textarea
                                        className="form-control"
                                        id={field.id}
                                        rows="4"
                                        onChange={handleChange}
                                        value={formData[field.id]}
                                        placeholder={`Enter ${field.label}`}
                                    ></textarea>
                                ) : (
                                    <input
                                        type={field.type}
                                        className="form-control"
                                        id={field.id}
                                        onChange={handleChange}
                                        value={formData[field.id]}
                                        placeholder={`Enter ${field.label}`}
                                    />
                                )}
                            </div>
                        ))}
                        <button type="submit" className="btn btn-primary w-100 mt-3 rounded-3 p-2" style={{ fontWeight: '500' }}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddHotelForm;


