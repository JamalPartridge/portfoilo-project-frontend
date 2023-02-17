import React, { useState } from 'react';

function WelcomeAlert() {
  const [showAlert, setAlert] = useState(true);

  function handleClose() {
    setAlert(false);
  }

  return (
    showAlert && (
      <div className="alert" role="alert">
        <p>Welcome to Valorant Generator 2.0!</p>
        <button type="button" className="button" onClick={handleClose}>Close</button>
      </div>
    )
  );
}

export default WelcomeAlert;
