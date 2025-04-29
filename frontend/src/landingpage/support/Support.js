// import React, { useState } from 'react';
// import { Container, Typography, Grid, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Paper } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const faqs = [
//   {
//     title: "How do I book a hotel?",
//     detail: "Search for your destination, choose your dates, and click 'Book Now'."
//   },
//   {
//     title: "How can I cancel or change my reservation?",
//     detail: "Log in to your account, go to 'My Bookings', and choose modify/cancel."
//   },
//   {
//     title: "What payment methods are accepted?",
//     detail: "We accept all major cards, UPI, wallets, and Razorpay."
//   },
//   {
//     title: "How do I use a promo code?",
//     detail: "Apply your promo code during checkout. The discount will reflect immediately."
//   }
// ];

// export default function SupportPage() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Support request submitted!");
//     // You can send this to your backend here.
//   };

//   return (
//     <Container maxWidth="lg" sx={{ py: 6 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Need Help?
//       </Typography>
//       <Typography variant="subtitle1" align="center" color="text.secondary" mb={4}>
//         Browse FAQs or contact our support team below.
//       </Typography>

//       <Grid container spacing={4}>
//         <Grid item xs={12} md={6}>
//           {faqs.map((faq, index) => (
//             <Accordion key={index}>
//               <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
//                 <Typography variant="subtitle1">{faq.title}</Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography variant="body2">{faq.detail}</Typography>
//               </AccordionDetails>
//             </Accordion>
//           ))}
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ p: 4 }}>
//             <Typography variant="h6" gutterBottom>Contact Support</Typography>
//             <form onSubmit={handleSubmit}>
//               <TextField
//                 fullWidth
//                 name="name"
//                 label="Your Name"
//                 margin="normal"
//                 value={form.name}
//                 onChange={handleChange}
//               />
//               <TextField
//                 fullWidth
//                 name="email"
//                 label="Email"
//                 margin="normal"
//                 value={form.email}
//                 onChange={handleChange}
//               />
//               <TextField
//                 fullWidth
//                 name="message"
//                 label="Your Message"
//                 margin="normal"
//                 multiline
//                 rows={4}
//                 value={form.message}
//                 onChange={handleChange}
//               />
//               <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
//                 Submit
//               </Button>
//             </form>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Paper,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    title: "How do I book a hotel?",
    detail: "Choose your dates, select a hotel, and click 'Book Now' to proceed."
  },
  {
    title: "How can I cancel a booking?",
    detail: "Visit your profile > Bookings, select the booking, and choose cancel (if allowed)."
  },
  {
    title: "What payment methods are supported?",
    detail: "We accept all major cards, UPI, and Razorpay."
  },
  {
    title: "How do I apply a discount code?",
    detail: "Enter your code on the payment page to apply the offer."
  }
];

export default function SupportPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    // Post to backend here
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          How can we help?
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Browse our frequently asked questions or reach out to our support team.
        </Typography>
      </Box>

      <Grid container spacing={5}>
        {/* FAQs */}
        <Grid item xs={12} md={6}>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ borderRadius: 2, boxShadow: 1, mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-${index}`} id={`faq-header-${index}`}>
                <Typography variant="subtitle1" fontWeight="medium">{faq.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">{faq.detail}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
            <Typography variant="h6" fontWeight="medium" gutterBottom>
              Still need help?
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Fill out the form and our team will get back to you within 24 hours.
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                name="name"
                label="Your Name"
                margin="dense"
                variant="outlined"
                value={form.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                name="email"
                label="Email Address"
                margin="dense"
                variant="outlined"
                value={form.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                name="message"
                label="Describe your issue"
                multiline
                rows={4}
                margin="dense"
                variant="outlined"
                value={form.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  backgroundColor: '#ff385c',
                  '&:hover': { backgroundColor: '#e03150' },
                  borderRadius: 2,
                  textTransform: 'none'
                }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

