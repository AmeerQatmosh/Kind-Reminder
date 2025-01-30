import React from 'react';
import { Form, FormControl, FormFloating, Button, Card, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Row className="w-full max-w-4xl">
        {/* Company Contact Info Card (on the left now) */}
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <Card className="shadow-lg rounded-lg p-8 bg-white">
            <h5 className="text-xl font-semibold mb-4">Our Contact Information</h5>
            <p><strong>Email:</strong> contact@kindreminder.com</p>
            <p><strong>Phone:</strong> (213) 456-0987</p>
            <p><strong>Address:</strong> 523 Main St, Starbury, San Escobar</p>
          </Card>
        </Col>

        {/* Contact Form Card (on the right now) */}
        <Col xs={12} md={6}>
          <Card className="shadow-lg rounded-lg p-8 bg-white">
            <h3 className="text-3xl font-semibold text-center mb-6">Contact Us</h3>
            <Form>
              {/* Full Name Input with Floating Label */}
              <FormFloating className="mb-4">
                <FormControl
                  id="floatingFullName"
                  type="text"
                  placeholder="Full Name"
                />
                <label htmlFor="floatingFullName">Full Name</label>
              </FormFloating>

              {/* Email Input with Floating Label */}
              <FormFloating className="mb-4">
                <FormControl
                  id="floatingInputEmail"
                  type="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInputEmail">Email Address</label>
              </FormFloating>

              {/* Message with Floating Label */}
              <FormFloating className="mb-4">
                <FormControl
                  as="textarea"
                  id="floatingTextareaMessage"
                  placeholder="Enter your message"
                  style={{ height: "100px" }} // Adjust height as needed
                />
                <label htmlFor="floatingTextareaMessage">Message</label>
              </FormFloating>

              {/* Contact Us Button */}
              <Button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 hover:bg-blue-600 transition duration-300"
              >
                Contact Us
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
