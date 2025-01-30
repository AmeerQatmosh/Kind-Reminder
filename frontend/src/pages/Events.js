import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  const [events, setEvents] = useState([
    { title: 'Meeting with Bob', date: '2024-12-28', time: '3:00 PM', description: 'Discuss the Q4 marketing strategy.' },
    { title: 'Project Deadline', date: '2024-12-30', time: '11:59 PM', description: 'Submit the final report for the project.' },
    { title: 'Team Building Activity', date: '2024-12-31', time: '10:00 AM', description: 'A fun activity to foster team collaboration.' }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [input, setInput] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleAddEvent = () => {
    if (input.trim() && date && time && description) {
      setEvents([...events, { title: input, date, time, description }]);
      setInput('');
      setDate('');
      setTime('');
      setDescription('');
      setShowForm(false);
    }
  };

  return (
    <div className="bg-[#f7f9fc] min-h-screen">
      <section className="bg-gradient-to-r from-yellow-900 to-yellow-400 text-white text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-lg md:text-xl mb-6">Stay on top of your schedule with our upcoming events and activities.</p>
        <Link to="/tasks">
          <button className="bg-white text-yellow-500 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">View Tasks</button>
        </Link>
      </section>

      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Your Upcoming Events</h2>
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800">{event.title}</h3>
              <p className="text-gray-600 text-lg">{event.date} | {event.time}</p>
              <p className="text-gray-500 mt-4">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-8">
        <button
          onClick={() => setShowForm(true)}
          className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Add New Event
        </button>
      </section>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Add Event</h3>
            <input type="text" placeholder="Event Title" value={input} onChange={(e) => setInput(e.target.value)} className="w-full px-4 py-2 mb-3 border rounded" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-4 py-2 mb-3 border rounded" />
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full px-4 py-2 mb-3 border rounded" />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-4 py-2 mb-3 border rounded"></textarea>
            <div className="flex justify-between">
              <button onClick={handleAddEvent} className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Add</button>
              <button onClick={() => setShowForm(false)} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
