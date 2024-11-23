import React from 'react';
import { Form, FormControl, FormFloating, Button } from 'react-bootstrap';
import '../../src/styles/Signin.css'
function SignIn() {
    return (
    <Form>
      <h3> Sign In </h3>
      <FormFloating className="mb-3">
        <FormControl
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </FormFloating>
      <FormFloating>
        <FormControl
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
        
      </FormFloating>
      <Button type="submit" className='m-3' > Sign In</Button>
    </Form>
    );
}

export default SignIn;

