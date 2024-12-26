import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Reminders = () => {
  const [reminders, setReminders] = useState([
    {
      title: 'Buy groceries',
      date: '2024-12-27',
      time: '8:00 AM',
      description: 'Pick up the milk, eggs, and bread.'
    },
    {
      title: 'Doctor Appointment',
      date: '2024-12-28',
      time: '10:00 AM',
      description: 'Routine check-up with Dr. Smith.'
    },
    {
      title: 'Team Meeting',
      date: '2024-12-29',
      time: '2:00 PM',
      description: 'Discuss the new project launch.'
    }
  ]);

  const handleAddReminder = () => {
    // This function can be updated to add new reminders via a form or API call
    const newReminder = {
      title: 'New Reminder',
      date: '2024-12-30',
      time: '5:00 PM',
      description: 'Reminder description goes here.'
    };
    setReminders([...reminders, newReminder]);
  };

  return (
    <div className="bg-[#f7f9fc] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-400 text-white text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Upcoming Reminders</h1>
        <p className="text-lg md:text-xl mb-6">Stay on top of your tasks with timely reminders!</p>
        <Link to="/tasks">
          <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
            View Tasks
          </button>
        </Link>
      </section>

      {/* Reminders List Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Your Upcoming Reminders</h2>
        <div className="space-y-8">
          {reminders.map((reminder, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800">{reminder.title}</h3>
              <p className="text-gray-600 text-lg">{reminder.date} | {reminder.time}</p>
              <p className="text-gray-500 mt-4">{reminder.description}</p>
              <div className="mt-4">
                <Link
                  to={`/reminders/${index}`}
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add Reminder Button */}
      <section className="text-center py-8">
        <button
          onClick={handleAddReminder}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Add New Reminder
        </button>
      </section>
    </div>
  );
};

export default Reminders;

