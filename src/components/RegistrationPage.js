import React, { useState } from 'react';




const RegistrationPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    paymentMethod: '',
    cardNumber: '',
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleUserInfoChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentInfoChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleTermsAcceptedChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process enrollment logic here, e.g., send data to server, handle payment, etc.
    // You can redirect to a confirmation page or display a confirmation message on the same page.
  };

  return (
    <div className="registration container">
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <h2>User Information Form</h2>
        <label>
          Name:
          <input type="text" name="name" value={userInfo.name} onChange={handleUserInfoChange} required />
        </label>
        <label>
          Email Address:
          <input type="email" name="email" value={userInfo.email} onChange={handleUserInfoChange} required />
        </label>

        <h2>Payment Information</h2>
        <label>
          Payment Method:
          <input type="text" name="paymentMethod" value={paymentInfo.paymentMethod} onChange={handlePaymentInfoChange} required />
        </label>
        <label>
          Card Number:
          <input type="text" name="cardNumber" value={paymentInfo.cardNumber} onChange={handlePaymentInfoChange} required />
        </label>

        <h2>Course Details Confirmation</h2>
        {/* Display the selected course details, e.g., course name, date, time, etc. */}

        <h2>Terms and Conditions</h2>
        <label>
          <input type="checkbox" checked={termsAccepted} onChange={handleTermsAcceptedChange} required />
          I agree to the terms and conditions.
        </label>
        {/* Add terms and conditions text here */}

        <button type="submit">Enroll</button>
      </form>
    </div>
  );
};

export default RegistrationPage;