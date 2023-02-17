import React, { useState } from 'react';

function WelcomeAlert() {
  const [showAlert, setAlert] = useState(true);

  function handleClose() {
    setAlert(false);
  }

  return (
    showAlert && (
      <div className="alert alert-success" role="alert">
        <p>Welcome to Valorant Generator 2.0!</p>
        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}>Close</button>
      </div>
    )
  );
}

export default WelcomeAlert;
