import React, { useState, useEffect } from 'react';

function WelcomeAlert() {
  const [showAlert, setAlert] = useState(true);

  useEffect(() => {
    // Hide the alert after 5 seconds
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 5000);

    // Clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    showAlert && (
      <div className="alert alert-success" role="alert">
        Welcome to Valorant Generator 2.0!
      </div>
    )
  );
}

export default WelcomeAlert;
