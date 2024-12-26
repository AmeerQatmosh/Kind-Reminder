import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar'; // Import the react-calendar component
import 'react-calendar/dist/Calendar.css'; // Import the default calendar styles
// You can also directly use Tailwind classes for styling

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="bg-[#f7f9fc] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-400 text-white text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Calendar</h1>
        <p className="text-lg md:text-xl mb-6">Manage your events, tasks, and reminders efficiently!</p>
        <Link to="/tasks">
          <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
            View Tasks
          </button>
        </Link>
      </section>

      {/* Calendar Section */}
      <section className="py-16 px-8">
        <div className="max-w-xl mx-auto">
          {/* Styling the Calendar component directly with Tailwind */}
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="react-calendar shadow-lg rounded-lg overflow-hidden" // Tailwind classes for the Calendar wrapper
            tileClassName="react-calendar__tile bg-white text-gray-800 rounded-lg p-4 hover:bg-blue-100 transition-all duration-300" // Tailwind for the individual date tiles
            tileDisabled={({ date }) => date.getDay() === 0 || date.getDay() === 6} // Disable weekends (optional)
          />
        </div>
      </section>

      {/* Date Info Section */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Selected Date: {date.toDateString()}</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Events on this day</h3>
          <ul className="space-y-4">
            <li className="text-lg text-gray-800">Event 1: Task Review</li>
            <li className="text-lg text-gray-800">Event 2: Meeting with team</li>
            <li className="text-lg text-gray-800">Event 3: Dinner with friends</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CalendarPage;
