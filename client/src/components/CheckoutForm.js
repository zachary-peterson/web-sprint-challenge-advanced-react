import React, { useState } from "react";
import useForm from '../hooks/useForm';

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const {values, showSuccessMessage, handleChanges, handleSubmit} = useForm(initialValue);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label htmlFor='firstName'>
          First Name:
          <input
            id='firstName'
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            placeholder='Enter your first name'
          />
        </label>
        <label htmlFor='lastName'>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            placeholder='Enter your last name'
          />
        </label>
        <label htmlFor='address'>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
            placeholder='Enter your street address'
          />
        </label>
        <label htmlFor='city'>
          City:
          <input name="city" placeholder='Enter your city' value={values.city} onChange={handleChanges} />
        </label>
        <label htmlFor='state'>
          State:
          <input name="state" placeholder='Enter your state' value={values.state} onChange={handleChanges} />
        </label>
        <label htmlFor='zip'>
          Zip:
          <input name="zip" placeholder='Enter your zip code' value={values.zip} onChange={handleChanges} />
        </label>
        <button id='submitBtn' onClick={handleSubmit}>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
