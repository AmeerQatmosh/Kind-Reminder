//import InputTask from "../components/Tasks/InputTask";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { title: 'Complete React tutorial', completed: false },
    { title: 'Write blog post', completed: true },
    { title: 'Prepare dinner', completed: false },
  ]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { title: input, completed: false }]);
      setInput('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-[#f7f9fc] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-400 text-white text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Manage Your Tasks</h1>
        <p className="text-lg md:text-xl mb-6">Stay organized by managing your to-do list!</p>
        <Link to="/reminders">
          <button className="bg-white text-green-500 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
            View Reminders
          </button>
        </Link>
      </section>

      {/* Tasks List Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Your Tasks</h2>
        <div className="space-y-8">
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 ${task.completed ? 'opacity-50' : ''} hover:shadow-lg transition duration-300`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {task.completed ? <del>{task.title}</del> : task.title}
                </h3>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleToggleComplete(index)}
                    className={`text-sm ${task.completed ? 'text-gray-500' : 'text-green-500'} font-semibold`}
                  >
                    {task.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button
                    onClick={() => handleDeleteTask(index)}
                    className="text-red-500 font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add Task Section */}
      <section className="text-center py-8">
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-lg"
          />
          <button
            onClick={handleAddTask}
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 mt-4 transition duration-300"
          >
            Add Task
          </button>
        </div>
      </section>

    </div>
  );
};

export default Tasks;
