import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RightBox_login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        // Save the token in localStorage
        localStorage.setItem('token', result.token);
        // Redirect to the menu page
        navigate('/menu');
      } else {
        // Show error message
        setErrorMessage(result.msg || 'An error occurred');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Network error. Please try again later.');
    }
  };

  return (
    <div className="col-md-6 right-box px-lg-5 py-lg-3 d-flex justify-content-center align-items-center">
      <div className="row align-items-center border p-sm-2 p-xl-5">
        <div className="header-text mt-3 mb-3 text-center">
          <p>Sign In</p>
          <p>We are happy to have you back.</p>
        </div>

        {/* Email Input */}
        <div className="input-group mb-2">
          <input
            className="form-control form-control-lg fs-6 bg-light pb-3"
            type="email"
            placeholder="Email"
            id="myemail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="input-group mb-1">
          <input
            className="form-control form-control-lg fs-6 bg-light pb-3"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="mypassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="eye" onClick={togglePasswordVisibility}>
            <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
          </span>
        </div>

        {/* Error message */}
        {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

        {/* Remember Me and Forgot Password */}
        <div className="input-group mb-4 d-flex justify-content-between align-items-center">
          {/* <div className="form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label text-secondary rememberMe" htmlFor="rememberMe">
              <small>Remember me</small>
            </label>
          </div> */}
          <div className="forget">
            <small><Link to="/forgetPassword">Forgot password?</Link></small>
          </div>
        </div>

        {/* Sign In Button */}
        <div className="input-group mb-2 ">
          <button 
            className="btn btn-primary btn-lg w-100 fs-6 logo-color btn-login"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="row text-center sup mb-3">
          <small>Don&apos;t have an account? <Link to="/register">SIGN UP</Link></small>
        </div>
      </div>
    </div>
  );
};

export default RightBox_login;
