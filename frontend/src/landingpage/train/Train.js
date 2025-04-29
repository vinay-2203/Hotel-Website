import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Typography, Box } from "@mui/material";
// import "bootstrap/dist/css/bootstrap.min.css";

const TrainSearch = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);

  const mockTrains = [
    {
      name: "Shatabdi Express",
      time: "06:00 AM",
      fare: "₹850",
      duration: "6h 30m",
    },
    {
      name: "Rajdhani Express",
      time: "09:15 AM",
      fare: "₹1200",
      duration: "5h 50m",
    },
    {
      name: "Duronto Express",
      time: "11:30 AM",
      fare: "₹1100",
      duration: "6h 10m",
    },
  ];

  const handleSearch = () => {
    if (source && destination && date) {
      setResults(mockTrains);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(135deg, #009688, #00796b)",
        minHeight: "100vh",
        py: 6,
        position: "relative",
      }}
    >
      <div className="container">
        <header className="text-center mb-4">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              color: "white",
              fontFamily: "'Roboto', sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            🚆 Explore Train Journeys
          </Typography>
          <Typography
            sx={{
              color: "#ffffffb3",
              fontSize: "1.1rem",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Find and book your perfect train journey with ease.
          </Typography>
        </header>

        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "10px",
            padding: 5,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="row g-3">
            <div className="col-md-4">
              <TextField
                label="From"
                variant="outlined"
                fullWidth
                value={source}
                onChange={(e) => setSource(e.target.value)}
                sx={{
                  borderRadius: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />
            </div>
            <div className="col-md-4">
              <TextField
                label="To"
                variant="outlined"
                fullWidth
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                sx={{
                  borderRadius: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />
            </div>
            <div className="col-md-4">
              <TextField
                label="Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                fullWidth
                value={date}
                onChange={(e) => setDate(e.target.value)}
                sx={{
                  borderRadius: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                borderRadius: "50px",
                paddingX: 5,
                textTransform: "none",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                fontFamily: "'Roboto', sans-serif",
              }}
              onClick={handleSearch}
            >
              Search Trains
            </Button>
          </div>
        </Box>

        {results.length > 0 && (
          <div className="row mt-5">
            {results.map((train, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 4,
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: 10,
                      transform: "translateY(-5px)",
                    },
                    padding: 4,
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                        color: "#00796b",
                        fontFamily: "'Roboto', sans-serif",
                      }}
                    >
                      {train.name}
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: "0.9rem" }}>
                      Departure: {train.time}
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: "0.9rem" }}>
                      Duration: {train.duration}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1.5,
                        fontWeight: "600",
                        color: "#00796b",
                        fontSize: "1.1rem",
                        fontFamily: "'Roboto', sans-serif",
                      }}
                    >
                      {train.fare}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>

     
    </Box>
  );
};

export default TrainSearch;
