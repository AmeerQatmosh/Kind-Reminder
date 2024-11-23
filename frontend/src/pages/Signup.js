import React from 'react';
import { Form, FormControl, FormFloating, Button } from 'react-bootstrap';
function SignUp() {
    return (
    <Form>
      <h3>Welcome to Kind Reminder</h3>

      <FormFloating className="mb-3">
        <FormControl
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </FormFloating>

      <FormFloating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="first"
        />
        <label htmlFor="floatingInputCustom">First Name</label>
      </FormFloating>

      <FormFloating className="mb-3">
        <FormControl
          id="floatingInputCustom"
          type="text"
          placeholder="last"
        />
        <label htmlFor="floatingInputCustom">Last Name</label>
      </FormFloating>

      <FormFloating className="mb-3" >
        <FormControl
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </FormFloating>

      <FormFloating className="mb-3">
        <FormControl
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Confirm Password</label>
      </FormFloating>
      <Button type="submit" className='m-3' > Sign Up</Button>
    </Form>
    );
}

export default SignUp;