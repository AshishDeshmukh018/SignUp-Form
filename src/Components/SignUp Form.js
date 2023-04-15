import React, { useState } from 'react';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!name) {
      errors.name = 'Please enter your name';
      formIsValid = false;
    }

    if (!email) {
      errors.email = 'Please enter your email address';
      formIsValid = false;
    }

    if (typeof email !== 'undefined') {
      let lastAtPos = email.lastIndexOf('@');
      let lastDotPos = email.lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && email.length - lastDotPos > 2)) {
        errors.email = 'Please enter a valid email address';
        formIsValid = false;
      }
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      formIsValid = false;
    }

    setErrors(errors);

    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // TODO: submit the form
      setSuccessMessage('Successfully Signed Up!');
    }
  };

  return (
    <div className='signup-form-container'>
      <h1>Sign Up</h1>
      {successMessage && <span style={{ color: 'green' }}>{successMessage}</span>}
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
          {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>

  );
}

export default SignupForm;
