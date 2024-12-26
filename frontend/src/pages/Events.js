import React from 'react';
import { Link } from 'react-router-dom';
const Events = () => {
  const events = [
    {
      title: 'Meeting with Bob',
      date: '2024-12-28',
      time: '3:00 PM',
      description: 'Discuss the Q4 marketing strategy.'
    },
    {
      title: 'Project Deadline',
      date: '2024-12-30',
      time: '11:59 PM',
      description: 'Submit the final report for the project.'
    },
    {
      title: 'Team Building Activity',
      date: '2024-12-31',
      time: '10:00 AM',
      description: 'A fun activity to foster team collaboration.'
    }
  ];
  return (
    <div className="bg-[#f7f9fc] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-400 text-white text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-lg md:text-xl mb-6">Stay on top of your schedule with our upcoming events and activities.</p>
        <Link to="/tasks">
          <button className="bg-white text-green-500 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
            View Tasks
          </button>
        </Link>
      </section>

      {/* Events List Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Your Upcoming Events</h2>
        <div className="space-y-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800">{event.title}</h3>
              <p className="text-gray-600 text-lg">{event.date} | {event.time}</p>
              <p className="text-gray-500 mt-4">{event.description}</p>
              <div className="mt-4">
                <Link
                  to={`/events/${index}`}
                  className="text-green-500 hover:text-green-700 font-semibold"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
