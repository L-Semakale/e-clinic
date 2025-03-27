import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!email || !phone || !role || !checked) {
      setError('Please fill all fields and agree to the terms.');
      return;
    }

    // Simulate API call and registration process
    // Replace this with actual API call logic
    setError(''); // Reset error if all fields are valid

    // Redirect to the appropriate dashboard based on the role
    if (role === 'patient') {
      navigate('/patient-dashboard'); // Redirect to Patient Dashboard
    } else if (role === 'doctor') {
      navigate('/doctor-dashboard'); // Redirect to Doctor Dashboard
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center">Create Account</h2>
          <p className="text-center text-muted">Manage your health easily</p>

          {/* Show error if validation fails */}
          {error && <p className="text-danger text-center">{error}</p>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="role">
              <Form.Label>Are you a Patient or Doctor?</Form.Label>
              <Form.Control
                as="select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select...</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="terms">
              <Form.Check
                type="checkbox"
                label="I agree with Terms & Conditions"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            </Form.Group>

            <Button variant="primary" className="w-100" type="submit">
              Register
            </Button>
          </Form>

          <div className="text-center my-3">Or</div>

          <Button variant="danger" className="w-100 mb-2">
            <FaGoogle /> Continue with Google
          </Button>

          <Button variant="primary" className="w-100">
            <FaFacebook /> Continue with Facebook
          </Button>

          <p className="text-center mt-3">
            Already registered? <a href="/login">Log In</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpScreen;
