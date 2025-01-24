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

  const [input, setInput] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleAddReminder = () => {
    // This function can be updated to add new reminders via a form or API call
    if (input.trim()) {
      setReminders([...reminders, { title: input, date: date, time: time, description: description }]);
      setInput('');
    };
  }

  return (
    <div className="bg-[#f7f9fc] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 to-orange-400 text-white text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Upcoming Reminders</h1>
        <p className="text-lg md:text-xl mb-6">Stay on top of your tasks with timely reminders!</p>
        <Link to="/tasks">
          <button className="bg-white text-orange-500 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
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
                  className="text-orange-500 hover:text-orange-700 font-semibold"
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
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Add a new reminder..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-lg mb-4"
          />
          <input
            type="text"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-lg mb-4"
          />
          <input
            type="text"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-lg mb-4"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-lg mb-4"
          />
          <button
            onClick={handleAddReminder}
            className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Add New Reminder
          </button>
        </div>
      </section>
    </div>
  );
};

export default Reminders;

