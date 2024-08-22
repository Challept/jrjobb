// In SignUp.js or wherever your sign-up form is
import React, { useState } from 'react';

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    const response = await fetch('/.netlify/functions/sendVerificationSMS', {
      method: 'POST',
      body: JSON.stringify({ phoneNumber }),
    });

    if (response.ok) {
      setMessage(`Verification code was sent to ${phoneNumber}`);
    } else {
      setMessage('Failed to send verification code.');
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="tel"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default SignUp;