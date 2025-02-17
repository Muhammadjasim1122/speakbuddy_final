import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RightBox_reg = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const userData = { username, email, password };

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        navigate('/login'); // Redirect to login page
      } else {
        setErrorMessage(result.msg || 'An error occurred');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setErrorMessage('Network error. Please try again later.');
    }
  };

  return (
    <div className="col-md-6 right-box px-lg-5 py-lg-3 d-flex justify-content-center align-items-center">
      <div className="row align-items-center border p-sm-2 p-xl-5">
        <div className="header-text mt-3 mb-3 text-center">
          <p>Sign Up</p>
          <p>Create your account</p>
        </div>

        {/* Username Input */}
        <div className="input-group mb-2">
          <input
            className="form-control form-control-lg fs-6 bg-light pb-3"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Email Input */}
        <div className="input-group mb-2">
          <input
            className="form-control form-control-lg fs-6 bg-light pb-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="input-group mb-1 position-relative">
          <input
            className="form-control form-control-lg fs-6 bg-light pb-3"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="eye" onClick={togglePasswordVisibility}>
            <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
          </div>
        </div>

        {/* Error message */}
        {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

        {/* Sign Up Button */}
        <div className="input-group mb-2">
          <button 
            className="btn btn-primary btn-lg w-100 fs-6 logo-color btn-login"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>

        {/* Sign In Link */}
        <div className="row text-center sup mb-3">
          <small>Already have an account? <Link to="/login">SIGN IN</Link></small>
        </div>
      </div>
    </div>
  );
};

export default RightBox_reg;
