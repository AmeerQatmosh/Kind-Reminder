import React from 'react';
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import gear from '../images/settings.gif';

function CalendarPage() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={gear} className="App-logo" alt="logo" />
        <code>
          This page is under progress!
        </code>
        {/* <Calendar /> */}
      </header>
    </div>
  );
}

export default CalendarPage;
