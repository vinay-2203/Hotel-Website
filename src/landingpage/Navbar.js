// // import React from 'react';
// // import { NavLink, useNavigate } from 'react-router-dom';
// // import { useState, useEffect } from 'react';
// // import { Avatar, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'; 

// // function Navbar() {
// //   const navigate = useNavigate();
// //   const [isAdmin, setIsAdmin] = useState(false);
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [anchorEl,setAnchorEl] = useState(null);

// //   useEffect(() => {
// //     const email = localStorage.getItem("email");
// //     if (email) {
// //       console.log("You email is : ", email);
// //       setIsLoggedIn(true);
// //     }

// //     if (email === "cr.vinay8448@gmail.com") {
// //       setIsAdmin(true);
// //     }
// //     else{
// //       setIsLoggedIn(false);
// //       setIsAdmin(false);
// //     }
// //   }, [isLoggedIn]);
// //   const handleMenuOpen = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleMenuClose = () => {
// //     setAnchorEl(null);
// //   };


// //   const handleProtectNav = (e, path) => {
// //     if (!isLoggedIn) {
// //       e.preventDefault();
// //       navigate('/login');
// //     }
// //     else {
// //       navigate(path)
// //     }
// //   }
// //   const handleLogout = () => {
// //     localStorage.removeItem("email");
// //     setIsLoggedIn(false);
// //     setIsAdmin(false);
// //     handleMenuClose();
// //     navigate('/');
// //   };
// //   return (
// //     <>
// //       <style>
// //         {`
// //           /* Modern navbar styles */
// //           .custom-nav-link {
// //             font-weight: 500;
// //             font-size: 15.5px;
// //             color: #2d2d2d;
// //             text-decoration: none;
// //             position: relative;
// //             padding: 6px 10px;
// //             transition: all 0.25s ease-in-out;
// //           }

// //           .custom-nav-link:hover {
// //             color: #E61E43;
// //           }

// //           .custom-nav-link::after {
// //             content: '';
// //             position: absolute;
// //             bottom: 0;
// //             left: 10%;
// //             height: 2px;
// //             width: 0;
// //             background-color: #E61E43;
// //             transition: width 0.3s ease-in-out;
// //           }

// //           .custom-nav-link:hover::after {
// //             width: 80%;
// //           }

// //           .custom-nav-link.active {
// //             color: #E61E43;
// //             font-weight: 600;
// //           }

// //           .custom-nav-link.active::after {
// //             width: 80%;
// //           }

// //           .navbar {
// //             font-family: 'Segoe UI', sans-serif;
// //             font-size: 16px;
// //           }

// //           .navbar-brand img {
// //             max-width: 130px;
// //             height: auto;
// //           }

// //           .navbar-nav {
// //             align-items: center;
// //           }

// //           .nav-item {
// //             margin-left: 10px;
// //             margin-right: 10px;
// //           }

// //           .navbar-toggler {
// //             border: none;
// //           }

// //           .navbar-toggler:focus {
// //             box-shadow: none;
// //           }
// //         `}
// //       </style>

// //       <nav className="navbar navbar-expand-lg bg-light border-bottom shadow-sm">
// //         <div className="container">
// //           <NavLink className="navbar-brand" to="/">
// //             <img
// //               src={'https://a.travel-assets.com/dms-svg/hcom/hotelscom.svg'}
// //               alt="logo"
// //             />
// //           </NavLink>
// //           <button
// //             className="navbar-toggler"
// //             type="button"
// //             data-bs-toggle="collapse"
// //             data-bs-target="#navbarSupportedContent"
// //             aria-controls="navbarSupportedContent"
// //             aria-expanded="false"
// //             aria-label="Toggle navigation"
// //           >
// //             <span className="navbar-toggler-icon"></span>
// //           </button>
// //           <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
// //               {isAdmin && (
// //                 <li className="nav-item">
// //                   <NavLink to="/addhotel" end className="nav-link custom-nav-link">
// //                     Add hotels
// //                   </NavLink>
// //                 </li>
// //               )}
// //               {/* if user is logged In, show other options */}
// //               {/* {isLoggedIn ? ( */}
// //               {isLoggedIn ? (
// //                 <>

// //                   <li className="nav-item">
// //                     <NavLink to="/allhotels" end className="nav-link custom-nav-link" onClick={(e) => handleProtectNav(e, 'allhotels')}>
// //                       Hotels
// //                     </NavLink>
// //                   </li>
// //                   <li className="nav-item">
// //                     <NavLink to="/hotels" end className="nav-link custom-nav-link" onClick={(e) => handleProtectNav(e, '/hotels')}>
// //                       Hotels suggestion
// //                     </NavLink>
// //                   </li>
// //                   <li className="nav-item">
// //                     <NavLink to="/trains" className="nav-link custom-nav-link" onClick={(e) => handleProtectNav(e, '/trains')}>
// //                       Trains
// //                     </NavLink>
// //                   </li>
// //                   <li className="nav-item">
// //                     <NavLink to="/flights" className="nav-link custom-nav-link" onClick={(e) => handleProtectNav(e, '/flights')}>
// //                       Flights
// //                     </NavLink>
// //                   </li>
// //                   {/* Profile Avatar with Menu */}
// //                   <li className="nav-item">
// //                     <Tooltip title="Profile Options">
// //                       <IconButton onClick={handleMenuOpen} sx={{ ml: 1 }}>
// //                         <Avatar sx={{ width: 32, height: 32, bgcolor: "#e61e43" }}>
// //                           {localStorage.getItem("email")?.[0].toUpperCase() || 'U'}
// //                         </Avatar>
// //                       </IconButton>
// //                     </Tooltip>

// //                     <Menu
// //                       anchorEl={anchorEl}
// //                       open={Boolean(anchorEl)}
// //                       onClose={handleMenuClose}
// //                       anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
// //                       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
// //                     >
// //                       <MenuItem onClick={() => { handleMenuClose(); navigate('/profile'); }}>
// //                         Profile
// //                       </MenuItem>
// //                       <MenuItem onClick={handleLogout}>Logout</MenuItem>
// //                     </Menu>
// //                   </li>

// //                 </>
// //               ) : (
// //                 <li className="nav-item">
// //                   <NavLink to="/signup" className="nav-link custom-nav-link">
// //                     Signup/Login
// //                   </NavLink>
// //                 </li>
// //               )}
// //             </ul>
// //           </div>
// //         </div>
// //       </nav>
// //     </>
// //   );
// // }

// // export default Navbar;



// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { Avatar, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';

// function Navbar() {
//   const navigate = useNavigate();
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [email, setEmail] = useState(localStorage.getItem("email"));

//   // useEffect(() => {
//   //   const handleStorageChange = () => {
//   //     const email = localStorage.getItem("email");
//   //     if (email) {
//   //       setIsLoggedIn(true);
//   //       setIsAdmin(email === "cr.vinay8448@gmail.com");
//   //     } else {
//   //       setIsLoggedIn(false);
//   //       setIsAdmin(false);
//   //     }
//   //   };

//   //   handleStorageChange(); // Initial check
//   //   window.addEventListener('storage', handleStorageChange); // Listen for changes

//   //   return () => {
//   //     window.removeEventListener('storage', handleStorageChange);
//   //   };
//   // }, []);  // Run only once when the component mounts

//   useEffect(() => {
//     const handleStorageChange = () => {
//       const email = localStorage.getItem("email");
//       if (email) {
//         setIsLoggedIn(true);
//         setIsAdmin(email === "cr.vinay8448@gmail.com");
//       } else {
//         setIsLoggedIn(false);
//         setIsAdmin(false);
//       }
//     };

//     handleStorageChange(); // Initial check on mount
//     window.addEventListener('storage', handleStorageChange); // Listen for localStorage changes

//     return () => {
//       window.removeEventListener('storage', handleStorageChange); // Cleanup on component unmount
//     };
// }, []);  // Empty dependency array ensure

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleProtectNav = (e, path) => {
//     if (!isLoggedIn) {
//       e.preventDefault();
//       navigate('/login');
//     } else {
//       navigate(path);
//     }
//   };
//   const handleLogin = (userEmail) => {
//     localStorage.setItem("email", userEmail);
//     setEmail(userEmail); // trigger useEffect
//   };
//   const handleLogout = () => {
//     localStorage.removeItem("email");
//     setIsLoggedIn(false);
//     setIsAdmin(false);
//     handleMenuClose();
//     navigate('/');
//   };

//   return (
//     <>
//       <style>
//         {`
//           /* Modern navbar styles */
//           .custom-nav-link {
//             font-weight: 500;
//             font-size: 15.5px;
//             color: #2d2d2d;
//             text-decoration: none;
//             position: relative;
//             padding: 6px 10px;
//             transition: all 0.25s ease-in-out;
//           }

//           .custom-nav-link:hover {
//             color: #E61E43;
//           }

//           .custom-nav-link::after {
//             content: '';
//             position: absolute;
//             bottom: 0;
//             left: 10%;
//             height: 2px;
//             width: 0;
//             background-color: #E61E43;
//             transition: width 0.3s ease-in-out;
//           }

//           .custom-nav-link:hover::after {
//             width: 80%;
//           }

//           .custom-nav-link.active {
//             color: #E61E43;
//             font-weight: 600;
//           }

//           .custom-nav-link.active::after {
//             width: 80%;
//           }

//           .navbar {
//             font-family: 'Segoe UI', sans-serif;
//             font-size: 16px;
//           }

//           .navbar-brand img {
//             max-width: 130px;
//             height: auto;
//           }

//           .navbar-nav {
//             align-items: center;
//           }

//           .nav-item {
//             margin-left: 10px;
//             margin-right: 10px;
//           }

//           .navbar-toggler {
//             border: none;
//           }

//           .navbar-toggler:focus {
//             box-shadow: none;
//           }
//         `}
//       </style>

//       <nav className="navbar navbar-expand-lg bg-light border-bottom shadow-sm">
//         <div className="container">
//           <NavLink className="navbar-brand" to="/">
//             <img
//               src={'https://a.travel-assets.com/dms-svg/hcom/hotelscom.svg'}
//               alt="logo"
//             />
//           </NavLink>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               {isAdmin && (
//                 <li className="nav-item">
//                   <NavLink to="/addhotel" end className="nav-link custom-nav-link">
//                     Add hotels
//                   </NavLink>
//                 </li>
//               )}
//               {isLoggedIn ? (
//                 <>
//                   <li className="nav-item">
//                     <NavLink to="/allhotels" end className="nav-link custom-nav-link" onClick={(e) => handleProtectNav(e, 'allhotels')}>
//                       Hotels
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink to="/hotels" end className="nav-link custom-nav-link" onClick={(e) => handleProtectNav(e, '/hotels')}>
//                       Hotels suggestion
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink to="/trains" className="nav-link custom-nav-link" onClick={(e) => handleProtectNav(e, '/trains')}>
//                       Trains
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink to="/flights" className="nav-link custom-nav-link" onClick={(e) => handleProtectNav(e, '/flights')}>
//                       Flights
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <Tooltip title="Profile Options">
//                       <IconButton onClick={handleMenuOpen} sx={{ ml: 1 }}>
//                         <Avatar sx={{ width: 32, height: 32, bgcolor: "#e61e43" }}>
//                           {localStorage.getItem("email")?.[0].toUpperCase() || 'U'}
//                         </Avatar>
//                       </IconButton>
//                     </Tooltip>
//                     <Menu
//                       anchorEl={anchorEl}
//                       open={Boolean(anchorEl)}
//                       onClose={handleMenuClose}
//                       anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//                       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//                     >
//                       <MenuItem onClick={() => { handleMenuClose(); navigate('/profile'); }}>
//                         Profile
//                       </MenuItem>
//                       <MenuItem onClick={handleLogout}>Logout</MenuItem>
//                     </Menu>
//                   </li>
//                 </>
//               ) : (
//                 <li className="nav-item">
//                   <NavLink to="/signup" className="nav-link custom-nav-link">
//                     Signup/Login
//                   </NavLink>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { Avatar, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';

// function Navbar() {
//   const navigate = useNavigate();
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("email"));
//   const [anchorEl, setAnchorEl] = useState(null);

//   useEffect(() => {
//     // Check if email exists in localStorage
//     const email = localStorage.getItem("email");
//     console.log("Email from localStorage: ", email);  // Debugging line

//     if (email) {
//       setIsLoggedIn(true);
//       setIsAdmin(email === "cr.vinay8448@gmail.com"); // Assuming you have a specific admin email
//     } else {
//       setIsLoggedIn(false);
//       setIsAdmin(false);
//     }
//   }, []);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleProtectNav = (e, path) => {
//     if (!isLoggedIn) {
//       console.log("Not logged in, redirecting to login");  // Debugging line
//       e.preventDefault();
//       navigate('/login');
//     } else {
//       console.log("Logged in, navigating to: ", path);  // Debugging line
//       navigate(path);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("email");
//     setIsLoggedIn(false);
//     setIsAdmin(false);
//     handleMenuClose();
//     navigate('/');
//   };

//   return (
//     <>
//       <style>
//         {`
//           .custom-nav-link {
//             font-weight: 500;
//             font-size: 15.5px;
//             color: #2d2d2d;
//             text-decoration: none;
//             position: relative;
//             padding: 6px 10px;
//             transition: all 0.25s ease-in-out;
//           }

//           .custom-nav-link:hover {
//             color: #E61E43;
//           }

//           .custom-nav-link::after {
//             content: '';
//             position: absolute;
//             bottom: 0;
//             left: 10%;
//             height: 2px;
//             width: 0;
//             background-color: #E61E43;
//             transition: width 0.3s ease-in-out;
//           }

//           .custom-nav-link:hover::after {
//             width: 80%;
//           }

//           .custom-nav-link.active {
//             color: #E61E43;
//             font-weight: 600;
//           }

//           .custom-nav-link.active::after {
//             width: 80%;
//           }

//           .navbar {
//             font-family: 'Segoe UI', sans-serif;
//             font-size: 16px;
//           }

//           .navbar-brand img {
//             max-width: 130px;
//             height: auto;
//           }

//           .navbar-nav {
//             align-items: center;
//           }

//           .nav-item {
//             margin-left: 10px;
//             margin-right: 10px;
//           }

//           .navbar-toggler {
//             border: none;
//           }

//           .navbar-toggler:focus {
//             box-shadow: none;
//           }
//         `}
//       </style>

//       <nav className="navbar navbar-expand-lg bg-light border-bottom shadow-sm">
//         <div className="container">
//           <NavLink className="navbar-brand" to="/">
//             <img
//               src={'https://a.travel-assets.com/dms-svg/hcom/hotelscom.svg'}
//               alt="logo"
//             />
//           </NavLink>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               {isAdmin && (
//                 <li className="nav-item">
//                   <NavLink to="/addhotel" end className="nav-link custom-nav-link">
//                     Add hotels
//                   </NavLink>
//                 </li>
//               )}
//               {isLoggedIn ? (
//                 <>
//                   <li className="nav-item">
//                     <NavLink to="/allhotels" end className="nav-link custom-nav-link" onClick={(e) => handleProtectNav(e, '/allhotels')}>
//                       Hotels
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink to="/hotels" end className="nav-link custom-nav-link" onClick={(e) => handleProtectNav(e, '/hotels')}>
//                       Hotels suggestion
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink to="/trains" className="nav-link custom-nav-link" onClick={(e) => handleProtectNav(e, '/trains')}>
//                       Trains
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink to="/flights" className="nav-link custom-nav-link" onClick={(e) => handleProtectNav(e, '/flights')}>
//                       Flights
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <Tooltip title="Profile Options">
//                       <IconButton onClick={handleMenuOpen} sx={{ ml: 1 }}>
//                         <Avatar sx={{ width: 32, height: 32, bgcolor: "#e61e43" }}>
//                           {localStorage.getItem("email")?.[0].toUpperCase() || 'U'}
//                         </Avatar>
//                       </IconButton>
//                     </Tooltip>
//                     <Menu
//                       anchorEl={anchorEl}
//                       open={Boolean(anchorEl)}
//                       onClose={handleMenuClose}
//                       anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//                       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//                     >
//                       <MenuItem onClick={() => { handleMenuClose(); navigate('/profile'); }}>
//                         Profile
//                       </MenuItem>
//                       <MenuItem onClick={handleLogout}>Logout</MenuItem>
//                     </Menu>
//                   </li>
//                 </>
//               ) : (
//                 <li className="nav-item">
//                   <NavLink to="/signup" className="nav-link custom-nav-link">
//                     Signup/Login
//                   </NavLink>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';

function Navbar() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("email"));
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    // Check if email exists in localStorage
    const email = localStorage.getItem("email");
    console.log("Email from localStorage: ", email);  // Debugging line

    if (email) {
      setIsLoggedIn(true);
      setIsAdmin(email === "cr.vinay8448@gmail.com"); // Assuming you have a specific admin email
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false);
    }
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProtectNav = (e, path) => {
    if (!isLoggedIn) {
      console.log("Not logged in, redirecting to login");  // Debugging line
      e.preventDefault();
      navigate('/login');
    } else {
      console.log("Logged in, navigating to: ", path);  // Debugging line
      navigate(path);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    setIsAdmin(false);
    handleMenuClose();
    navigate('/');
  };

  return (
    <>
      <style>
        {`
          .custom-nav-link {
            font-weight: 500;
            font-size: 15.5px;
            color: #2d2d2d;
            text-decoration: none;
            position: relative;
            padding: 6px 10px;
            transition: all 0.25s ease-in-out;
          }

          .custom-nav-link:hover {
            color: #E61E43;
          }

          .custom-nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 10%;
            height: 2px;
            width: 0;
            background-color: #E61E43;
            transition: width 0.3s ease-in-out;
          }

          .custom-nav-link:hover::after {
            width: 80%;
          }

          .custom-nav-link.active {
            color: #E61E43;
            font-weight: 600;
          }

          .custom-nav-link.active::after {
            width: 80%;
          }

          .navbar {
            font-family: 'Segoe UI', sans-serif;
            font-size: 16px;
          }

          .navbar-brand img {
            max-width: 130px;
            height: auto;
          }

          .navbar-nav {
            align-items: center;
          }

          .nav-item {
            margin-left: 10px;
            margin-right: 10px;
          }

          .navbar-toggler {
            border: none;
          }

          .navbar-toggler:focus {
            box-shadow: none;
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg bg-light border-bottom shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src={'https://a.travel-assets.com/dms-svg/hcom/hotelscom.svg'}
              alt="logo"
            />
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {isAdmin && (
                <li className="nav-item">
                  <NavLink to="/addhotel" end className="nav-link custom-nav-link">
                    Add hotels
                  </NavLink>
                </li>
              )}
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/allhotels" end className="nav-link custom-nav-link" onClick={(e) => handleProtectNav(e, '/allhotels')}>
                      Hotels
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/hotels" end className="nav-link custom-nav-link" onClick={(e) => handleProtectNav(e, '/hotels')}>
                      Hotels suggestion
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/trains" className="nav-link custom-nav-link" onClick={(e) => handleProtectNav(e, '/trains')}>
                      Trains
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/support" className="nav-link custom-nav-link" onClick={(e) => handleProtectNav(e, '/support')}>
                      Support
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <Tooltip title="Profile Options">
                      <IconButton onClick={handleMenuOpen} sx={{ ml: 1 }}>
                        <Avatar sx={{ width: 32, height: 32, bgcolor: "#e61e43" }}>
                          {localStorage.getItem("email")?.[0].toUpperCase() || 'U'}
                        </Avatar>
                      </IconButton>
                    </Tooltip>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                      <MenuItem onClick={() => { handleMenuClose(); navigate('/profile'); }}>
                        Profile
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink to="/signup" className="nav-link custom-nav-link">
                    Signup/Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
