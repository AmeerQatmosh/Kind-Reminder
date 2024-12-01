import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gear from '../images/settings.gif';
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gear} className="App-logo" alt="logo" />
        <code>
          This page is under progress!
        </code>
        <h1>Set Reminders, Events, or Tasks all at one place </h1>

        <div>
          <Button as={Link} to="/signin" className="capsule-button me-2">Sign In</Button>
          <Button as={Link} to="/signup" className="capsule-button me-2">Sign Up</Button>
        </div>

      </header>
    </div>
  );
}

export default Home;
