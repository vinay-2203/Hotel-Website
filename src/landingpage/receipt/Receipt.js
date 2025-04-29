import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper
} from '@mui/material';
import { useParams } from 'react-router-dom';

export default function ReceiptPage() {
  const { bookingId } = useParams();
  const [loading, setLoading] = useState(true);
  const [receiptData, setReceiptData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReceiptData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/receipt/${bookingId}`);
        setReceiptData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching receipt data", err);
        setError("Failed to fetch receipt data");
        setLoading(false);
      }
    };

    fetchReceiptData();
  }, [bookingId]);

  if (loading) return <Box textAlign="center" mt={10}><CircularProgress /></Box>;
  if (error) return <Typography textAlign="center" color="error" mt={10}>{error}</Typography>;
  if (!receiptData) return <Typography textAlign="center" mt={10}>No receipt data found</Typography>;

  const {
    bookingDetails: {
      bookingId: bookId,
      user: { name: userName, email: userEmail, id: userId },
      hotel: { name: hotelName, location: hotelLocation, pricePerNight: hotelPrice },
      stayDuration: { startDate, endDate, nights, guests },
      totalAmount,
      discount,           // Add discount here
      totalAmountBeforeDiscount // Add totalAmountBeforeDiscount here
    }
  } = receiptData;

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        py: 6,
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Print styles */}
      <style>{`
        @media print {
          body {
            background: white;
          }
          button, .MuiButton-root {
            display: none !important;
          }
          .MuiContainer-root {
            padding: 0 !important;
          }
          .MuiPaper-root {
            box-shadow: none !important;
            border: none;
          }
          .watermark {
            display: none !important;
          }
        }
      `}</style>

      {/* Watermark */}
      <Box
        className="watermark"
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "6rem",
          fontWeight: "bold",
          color: "rgba(0, 0, 0, 0.05)",
          zIndex: 0,
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        Hotel.com
      </Box>

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Paper elevation={4} sx={{ borderRadius: 4, p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            🧾 Booking Receipt
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h6" sx={{ color: "text.secondary" }}>👤 Guest</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>Name: {userName}</Typography>
                <Typography variant="body1">Email: {userEmail}</Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>User ID: {userId}</Typography>
                <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
                  Booking ID: {bookId}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>1 room capacity has 2 guests</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h6" sx={{ color: "text.secondary" }}>🏨 Hotel Info</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>Hotel: {hotelName}</Typography>
                <Typography variant="body1">Location: {hotelLocation}</Typography>
                <Typography variant="body1">Price per Night/room: ₹{hotelPrice}</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h6" sx={{ color: "text.secondary" }}>📅 Stay Details</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  From: {new Date(startDate).toLocaleDateString()}
                </Typography>
                <Typography variant="body1">
                  To: {new Date(endDate).toLocaleDateString()}
                </Typography>
                <Typography variant="body1">Nights: {nights}</Typography>
                <Typography variant="body1">Guests: {guests}</Typography>
                
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: "#f3f3f3",
                  p: 2,
                  borderRadius: 2,
                  textAlign: "center",
                  boxShadow: 1,
                }}
              >
                <Typography variant="h6" sx={{ color: "text.secondary" }}>💰 Total Cost</Typography>
                {discount > 0 && (
                  <Typography variant="body1" sx={{ color: "green", mt: 2 }}>
                    Discount Applied: ₹{discount.toFixed(2)}
                  </Typography>
                )}
                <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                  Before Discount: ₹{totalAmountBeforeDiscount}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold", mt: 1 }}>
                  ₹{totalAmount}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box mt={5} textAlign="center">
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              sx={{ px: 5, py: 1.5, borderRadius: 3, mr: 2 }}
              onClick={() => window.print()}
            >
              Print Receipt
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 5, py: 1.5, borderRadius: 3 }}
              onClick={() => window.location.href = "/"}
            >
              Back to Home
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
