import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Reminders = () => {
  const [reminders, setReminders] = useState([
    { title: 'Buy groceries', date: '2024-12-27', time: '8:00 AM', description: 'Pick up the milk, eggs, and bread.' },
    { title: 'Doctor Appointment', date: '2024-12-28', time: '10:00 AM', description: 'Routine check-up with Dr. Smith.' },
    { title: 'Team Meeting', date: '2024-12-29', time: '2:00 PM', description: 'Discuss the new project launch.' }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [input, setInput] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleAddReminder = () => {
    if (input.trim() && date && time && description) {
      setReminders([...reminders, { title: input, date, time, description }]);
      setInput('');
      setDate('');
      setTime('');
      setDescription('');
      setShowForm(false);
    }
  };

  return (
    <div className="bg-[#f7f9fc] min-h-screen">
      <section className="bg-gradient-to-r from-orange-900 to-orange-400 text-white text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Upcoming Reminders</h1>
        <p className="text-lg md:text-xl mb-6">Stay on top of your tasks with timely reminders!</p>
        <Link to="/tasks">
          <button className="bg-white text-orange-500 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">View Tasks</button>
        </Link>
      </section>

      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Your Upcoming Reminders</h2>
        <div className="space-y-8">
          {reminders.map((reminder, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800">{reminder.title}</h3>
              <p className="text-gray-600 text-lg">{reminder.date} | {reminder.time}</p>
              <p className="text-gray-500 mt-4">{reminder.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-8">
        <button onClick={() => setShowForm(true)} className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300">Add New Reminder</button>
      </section>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Add Reminder</h3>
            <input type="text" placeholder="Reminder Title" value={input} onChange={(e) => setInput(e.target.value)} className="w-full px-4 py-2 mb-3 border rounded" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-4 py-2 mb-3 border rounded" />
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full px-4 py-2 mb-3 border rounded" />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-4 py-2 mb-3 border rounded"></textarea>
            <div className="flex justify-between">
              <button onClick={handleAddReminder} className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Add</button>
              <button onClick={() => setShowForm(false)} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reminders;