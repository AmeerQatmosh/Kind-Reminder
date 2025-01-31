import React from 'react';
import { Form, FormControl, FormFloating, Button } from 'react-bootstrap';

function ForgetPassword() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-7 w-full max-w-md">
        <h3 className="text-3xl font-semibold text-center mb-6">Reset your password</h3>
        <div className='bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-3 mb-3' role="alert">
            <p className='font-bold'>Forggeting your password?</p>
            <p>Enter your Email address below, and we'll send you an Email allowing you to reset it.</p>
        </div>
        
        <Form>
        
          <FormFloating className="mb-4">
            <FormControl
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">Email address</label>
          </FormFloating>

          <Button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ForgetPassword;
