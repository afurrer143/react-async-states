import React, { useState } from "react";

function SubscriberForm({ createSubscriber }) {
  const initialFormState = {
    name: "",
    email: "",
    referral: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Submitted:", formData);
    // console.log("Name is:", formData.name);
    // console.log("Email is:", formData.email);
    // console.log("Referral is:", formData.referral);

    setFormData({ ...initialFormState });
    createSubscriber(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Enter Your Name:
        <br />
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>
      <br />
      <label htmlFor="email">
        Your Email:
        <br />
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </label>
      <br />
      <label htmlFor="referral">
        How did you hear about us?
        <br />
        <select
          id="referral"
          name="referral"
          onChange={handleChange}
          value={formData.referral}
        >
          <option value="">-- Select an Option --</option>
          <option value="twitter">Twitter</option>
          <option value="wom">Word of Mouth</option>
          <option value="youtube">YouTube</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubscriberForm;
