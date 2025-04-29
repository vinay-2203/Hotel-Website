


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Box, Typography, Button, CircularProgress, Grid, Paper, Rating, Container, TextField
} from '@mui/material';

export default function BookPage() {
    const userId = localStorage.getItem("userId"); 
    const { id } = useParams();
    const navigate = useNavigate();
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [guests, setGuests] = useState(1);
    const [nights, setNights] = useState(1);
    const [promoCode, setPromoCode] = useState('');
    const [isRedeemApplied, setIsRedeemApplied] = useState(false);
    const [codeStatus, setCodeStatus] = useState(null);
    const [bookingId, setBookingId] = useState(null);
    useEffect(() => {
        const fetchHotel = async () => {
            try {
                console.log(userId);
                const res = await axios.get(`http://localhost:8000/payment/${id}`);
                setHotel(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Hotel fetch failed", error);
                setLoading(false);
            }
        };

        fetchHotel();
    }, [id]);

    const calculateTotal = () => {
        if (!hotel) return { totalBeforeDiscount: 0, totalAfterDiscount: 0, discount: 0, numberOfRooms: 0, basePricePerRoom: 0 };

        const roomCapacity = hotel.roomCapacity || 2;
        const basePrice = hotel.price;
        const numberOfRooms = Math.ceil(guests / roomCapacity);

        if (numberOfRooms <= 0) {
            alert("Invalid number of rooms. Check the number of guests and room capacity.");
            return { totalBeforeDiscount: 0, totalAfterDiscount: 0, discount: 0, numberOfRooms: 0, basePricePerRoom: 0 };
        }

        const totalBeforeDiscount = basePrice * numberOfRooms * nights;
        let discount = 0;

        if (nights > 10) discount = 0.3 * totalBeforeDiscount;
        else if (nights > 5) discount = 0.2 * totalBeforeDiscount;
        else if (nights === 5) discount = 0.1 * totalBeforeDiscount;

        const totalAfterDiscount = totalBeforeDiscount - discount;

        return isRedeemApplied
            ? {
                totalBeforeDiscount,
                totalAfterDiscount: 0,
                discount: totalBeforeDiscount,
                numberOfRooms,
                basePricePerRoom: basePrice
            }
            : {
                totalBeforeDiscount,
                totalAfterDiscount,
                discount,
                numberOfRooms,
                basePricePerRoom: basePrice
            };
    };

    if (loading) return <Box textAlign="center" mt={10}><CircularProgress /></Box>;
    if (!hotel) return <Typography textAlign="center">Hotel not found</Typography>;

    const {
        totalBeforeDiscount,
        totalAfterDiscount,
        discount,
        numberOfRooms,
        basePricePerRoom
    } = calculateTotal();

    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
            <Grid container spacing={4}>
                {/* Left - Hotel Details */}
                <Grid item xs={12} md={7}>
                    <Paper elevation={3} sx={{ borderRadius: 4, overflow: 'hidden' }}>
                        <img
                            src={hotel.image}
                            alt={hotel.title}
                            style={{ width: '100%', height: 400, objectFit: 'cover' }}
                        />
                        <Box p={3}>
                            <Typography variant="h4" fontWeight="bold">{hotel.title}</Typography>
                            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                {hotel.location}, {hotel.country}
                            </Typography>
                            <Box display="flex" alignItems="center" mt={1}>
                                <Rating value={hotel.rating} precision={0.1} readOnly />
                                <Typography variant="body2" ml={1}>({hotel.count} reviews)</Typography>
                            </Box>
                            <Typography variant="h6" color="primary" mt={2}>
                                ₹{hotel.price} / night
                            </Typography>
                            <Typography variant="body2" color="text.secondary" mt={1}>
                                1 available room capacity: {hotel.roomCapacity || 2} guests
                            </Typography>
                            <Typography variant="body1" mt={2}>
                                {hotel.description}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                {/* Right - Booking Form */}
                <Grid item xs={12} md={5}>
                    <Paper elevation={4} sx={{ p: 3, borderRadius: 4 }}>
                        <Typography variant="h6" mb={2}>Your Booking</Typography>

                        <TextField
                            label="Guests"
                            type="number"
                            value={guests}
                            onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value)))}
                            fullWidth sx={{ mb: 2 }} inputProps={{ min: 1 }}
                        />
                        <TextField
                            label="Nights"
                            type="number"
                            value={nights}
                            onChange={(e) => setNights(Math.max(1, parseInt(e.target.value)))}
                            fullWidth sx={{ mb: 2 }} inputProps={{ min: 1 }}
                        />

                        <Typography variant="body1" mt={1}>
                            Price: ₹{basePricePerRoom} x {nights} nights x {numberOfRooms} room(s)
                        </Typography>

                        {nights > 10 && (
                            <Typography color="green">30% discount applied for stays over 10 nights</Typography>
                        )}
                        {nights > 5 && nights <= 10 && (
                            <Typography color="green">20% discount applied for stays over 5 nights</Typography>
                        )}
                        {nights === 5 && (
                            <Typography color="green">10% discount applied for 5-night stay</Typography>
                        )}

                        <Box mt={2}>
                            <Typography variant="body1">Total before discount: ₹{totalBeforeDiscount.toFixed(2)}</Typography>
                            <Typography variant="body1" color="green">Discount: -₹{discount.toFixed(2)}</Typography>
                            <Typography variant="h6" mt={2}>Final Amount: ₹{totalAfterDiscount.toFixed(2)}</Typography>

                            <TextField
                                label="Redeem Code"
                                value={promoCode}
                                onChange={(e) => setPromoCode(e.target.value)}
                                fullWidth sx={{ mb: 2 }}
                            />

                            <Box display="flex" justifyContent="center" mt={1}>
                                <Button
                                    variant="outlined"
                                    onClick={async () => {
        
                                        try {
                                            const res = await axios.post("http://localhost:8000/api/book", {
                                                code: promoCode,
                                                hotelId: hotel._id,
                                                guests,
                                                nights,
                                                userId,
                                                startDate: new Date()
                                            });

                                            setCodeStatus({ success: true, message: res.data.message });
                                            setIsRedeemApplied(true);
                                            setBookingId(res.data.bookingId);
                                            alert("✅ " + res.data.message);
                                            navigate(`/receipt/${res.data.bookingId}`);
                                        } catch (err) {
                                            const message = err.response?.data?.message || "Something went wrong.";
                                            setCodeStatus({ success: false, message });
                                            alert("❌ Invalid Redeem Code: " + message);
                                        }
                                    }}
                                >
                                    Apply Code
                                </Button>
                            </Box>
                        </Box>

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 3, py: 1.5, borderRadius: 2 }}
                            onClick={() => {
                                alert("Payment gateway integration coming soon!");
                            }}
                        >
                            Proceed to Payment
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}


// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import {
//     Box, Typography, Button, CircularProgress, Grid, Paper, Rating, Container, TextField
// } from '@mui/material';

// export default function BookPage() {
//     const userId = localStorage.getItem("userId");
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [hotel, setHotel] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [rooms, setRooms] = useState(1);  // Changed from guests to rooms
//     const [nights, setNights] = useState(1);
//     const [promoCode, setPromoCode] = useState('');
//     const [isRedeemApplied, setIsRedeemApplied] = useState(false);
//     const [codeStatus, setCodeStatus] = useState(null);
//     const [bookingId, setBookingId] = useState(null);

//     useEffect(() => {
//         const fetchHotel = async () => {
//             try {
//                 console.log(userId);
//                 const res = await axios.get(`http://localhost:8000/payment/${id}`);
//                 setHotel(res.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Hotel fetch failed", error);
//                 setLoading(false);
//             }
//         };

//         fetchHotel();
//     }, [id]);

//     const calculateTotal = () => {
//         if (!hotel) return { totalBeforeDiscount: 0, totalAfterDiscount: 0, discount: 0, numberOfRooms: 0, basePricePerRoom: 0 };

//         const roomCapacity = hotel.roomCapacity || 2; // Assuming default room capacity is 2 if not provided
//         const basePrice = hotel.price;
        
//         // Calculate total guests based on rooms and room capacity
//         const totalGuests = rooms * roomCapacity;

//         if (rooms <= 0) {
//             alert("Invalid number of rooms. Check the number of rooms and room capacity.");
//             return { totalBeforeDiscount: 0, totalAfterDiscount: 0, discount: 0, numberOfRooms: 0, basePricePerRoom: 0 };
//         }

//         const totalBeforeDiscount = basePrice * rooms * nights;
//         let discount = 0;

//         if (nights > 10) discount = 0.3 * totalBeforeDiscount;
//         else if (nights > 5) discount = 0.2 * totalBeforeDiscount;
//         else if (nights === 5) discount = 0.1 * totalBeforeDiscount;

//         const totalAfterDiscount = totalBeforeDiscount - discount;

//         return isRedeemApplied
//             ? {
//                 totalBeforeDiscount,
//                 totalAfterDiscount: 0,
//                 discount: totalBeforeDiscount,
//                 numberOfRooms: rooms,
//                 basePricePerRoom: basePrice
//             }
//             : {
//                 totalBeforeDiscount,
//                 totalAfterDiscount,
//                 discount,
//                 numberOfRooms: rooms,
//                 basePricePerRoom: basePrice
//             };
//     };

//     if (loading) return <Box textAlign="center" mt={10}><CircularProgress /></Box>;
//     if (!hotel) return <Typography textAlign="center">Hotel not found</Typography>;

//     const {
//         totalBeforeDiscount,
//         totalAfterDiscount,
//         discount,
//         numberOfRooms,
//         basePricePerRoom
//     } = calculateTotal();

//     return (
//         <Container maxWidth="lg" sx={{ mt: 5 }}>
//             <Grid container spacing={4}>
//                 {/* Left - Hotel Details */}
//                 <Grid item xs={12} md={7}>
//                     <Paper elevation={3} sx={{ borderRadius: 4, overflow: 'hidden' }}>
//                         <img
//                             src={hotel.image}
//                             alt={hotel.title}
//                             style={{ width: '100%', height: 400, objectFit: 'cover' }}
//                         />
//                         <Box p={3}>
//                             <Typography variant="h4" fontWeight="bold">{hotel.title}</Typography>
//                             <Typography variant="subtitle1" color="text.secondary" gutterBottom>
//                                 {hotel.location}, {hotel.country}
//                             </Typography>
//                             <Box display="flex" alignItems="center" mt={1}>
//                                 <Rating value={hotel.rating} precision={0.1} readOnly />
//                                 <Typography variant="body2" ml={1}>({hotel.count} reviews)</Typography>
//                             </Box>
//                             <Typography variant="h6" color="primary" mt={2}>
//                                 ₹{hotel.price} / night
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary" mt={1}>
//                                 1 available room capacity: {hotel.roomCapacity || 2} guests
//                             </Typography>
//                             <Typography variant="body1" mt={2}>
//                                 {hotel.description}
//                             </Typography>
//                         </Box>
//                     </Paper>
//                 </Grid>

//                 {/* Right - Booking Form */}
//                 <Grid item xs={12} md={5}>
//                     <Paper elevation={4} sx={{ p: 3, borderRadius: 4 }}>
//                         <Typography variant="h6" mb={2}>Your Booking</Typography>

//                         <TextField
//                             label="Rooms"
//                             type="number"
//                             value={rooms}
//                             onChange={(e) => setRooms(Math.max(1, parseInt(e.target.value)))}
//                             fullWidth sx={{ mb: 2 }} inputProps={{ min: 1 }}
//                         />
//                         <TextField
//                             label="Nights"
//                             type="number"
//                             value={nights}
//                             onChange={(e) => setNights(Math.max(1, parseInt(e.target.value)))}
//                             fullWidth sx={{ mb: 2 }} inputProps={{ min: 1 }}
//                         />

//                         <Typography variant="body1" mt={1}>
//                             Price: ₹{basePricePerRoom} x {nights} nights x {rooms} room(s)
//                         </Typography>

//                         {nights > 10 && (
//                             <Typography color="green">30% discount applied for stays over 10 nights</Typography>
//                         )}
//                         {nights > 5 && nights <= 10 && (
//                             <Typography color="green">20% discount applied for stays over 5 nights</Typography>
//                         )}
//                         {nights === 5 && (
//                             <Typography color="green">10% discount applied for 5-night stay</Typography>
//                         )}

//                         <Box mt={2}>
//                             <Typography variant="body1">Total before discount: ₹{totalBeforeDiscount.toFixed(2)}</Typography>
//                             <Typography variant="body1" color="green">Discount: -₹{discount.toFixed(2)}</Typography>
//                             <Typography variant="h6" mt={2}>Final Amount: ₹{totalAfterDiscount.toFixed(2)}</Typography>

//                             <TextField
//                                 label="Redeem Code"
//                                 value={promoCode}
//                                 onChange={(e) => setPromoCode(e.target.value)}
//                                 fullWidth sx={{ mb: 2 }}
//                             />

//                             <Box display="flex" justifyContent="center" mt={1}>
//                                 <Button
//                                     variant="outlined"
//                                     onClick={async () => {
//                                         try {
//                                             const res = await axios.post("http://localhost:8000/api/book", {
//                                                 code: promoCode,
//                                                 hotelId: hotel._id,
//                                                 rooms,
//                                                 guests: rooms * hotel.roomCapacity, // Calculate guests based on room capacity
//                                                 nights,
//                                                 userId,
//                                                 startDate: new Date()
//                                             });

//                                             setCodeStatus({ success: true, message: res.data.message });
//                                             setIsRedeemApplied(true);
//                                             setBookingId(res.data.bookingId);
//                                             alert("✅ " + res.data.message);
//                                             navigate(`/receipt/${res.data.bookingId}`);
//                                         } catch (err) {
//                                             const message = err.response?.data?.message || "Something went wrong.";
//                                             setCodeStatus({ success: false, message });
//                                             alert("❌ Invalid Redeem Code: " + message);
//                                         }
//                                     }}
//                                 >
//                                     Apply Code
//                                 </Button>
//                             </Box>
//                         </Box>

//                         <Button
//                             variant="contained"
//                             color="primary"
//                             fullWidth
//                             sx={{ mt: 3, py: 1.5, borderRadius: 2 }}
//                             onClick={() => {
//                                 alert("Payment gateway integration coming soon!");
//                             }}
//                         >
//                             Proceed to Payment
//                         </Button>
//                     </Paper>
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// }