import React from 'react';
import { Form, FormControl, FormFloating, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h3 className="text-3xl font-semibold text-center mb-6">Sign Up</h3>

        <Form>
          {/* Email Input with Floating Label */}
          <FormFloating className="mb-4">
            <FormControl
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">Email Address</label>
          </FormFloating>

          {/* First Name Input with Floating Label */}
          <FormFloating className="mb-4">
            <FormControl
              id="floatingFirstName"
              type="text"
              placeholder="First Name"
            />
            <label htmlFor="floatingFirstName">First Name</label>
          </FormFloating>

          {/* Last Name Input with Floating Label */}
          <FormFloating className="mb-4">
            <FormControl
              id="floatingLastName"
              type="text"
              placeholder="Last Name"
            />
            <label htmlFor="floatingLastName">Last Name</label>
          </FormFloating>

          {/* Password Input with Floating Label */}
          <FormFloating className="mb-4">
            <FormControl
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </FormFloating>

          {/* Confirm Password Input with Floating Label */}
          <FormFloating className="mb-6">
            <FormControl
              id="floatingConfirmPasswordCustom"
              type="password"
              placeholder="Confirm Password"
            />
            <label htmlFor="floatingConfirmPasswordCustom">Confirm Password</label>
          </FormFloating>

          {/* Sign Up Button */}
          <Button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 hover:bg-blue-600 transition duration-300">
            Sign Up
          </Button>

          {/* Additional Links */}
          <div className="text-center">
            <Link to="/signin" className="text-sm text-blue-500 hover:text-blue-700">
              Already have an account? Sign In
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
