import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  // Function to handle logout and redirect to the home or login page
  const handleLogout = () => {
    // Clear user data (e.g., from localStorage or sessionStorage)
    localStorage.removeItem('user'); // Example of clearing user data
    
    // Redirect to the homepage or login page
    navigate('/');
  };

  return (
    <div className="container mt-5 text-center">
      <h2>You have been logged out.</h2>
      <p>Thank you for using our application!</p>
      <button className="btn btn-primary" onClick={handleLogout}>
        Go to Home
      </button>
    </div>
  );
};

export default Logout;
