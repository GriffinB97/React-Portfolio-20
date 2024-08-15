import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = /^\S+@\S+\.\S+$/.test(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Form submitted:', formState);
      // Handle form submission here (e.g., send data to an API or email service)
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            onBlur={handleChange}
            defaultValue={formState.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            onBlur={handleChange}
            defaultValue={formState.email}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            onBlur={handleChange}
            defaultValue={formState.message}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
