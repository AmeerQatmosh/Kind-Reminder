import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormControl, FormFloating, Button, Row, Col } from 'react-bootstrap';

function SignIn() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h3 className="text-2xl font-bold mb-6 text-center">Sign In</h3>
        <Form>
        
          <FormFloating className="mb-4">
            <FormControl
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">Email address</label>
          </FormFloating>

          <FormFloating className="mb-6">
            <FormControl
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </FormFloating>

          {/* Remember Me and Forgot Password */}
          <Row className="mb-4">
            <Col>
              <Form.Check
                type="checkbox"
                id="rememberMe"
                label="Remember Me"
                className="text-sm"
              />
            </Col>
            <Col className="text-right">
              <a href="/forgot-password" className="text-blue-500 text-sm hover:underline hover:text-blue-700">
                Forgot Password?
              </a>
            </Col>
          </Row>

          <Button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Sign In
          </Button>
          {/* Additional Links */}
          <div className="text-center">
            <br />
            <Link to="/signup" className="text-sm text-blue-500 hover:text-blue-700">
              Don't have an account? Sign Up
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;
