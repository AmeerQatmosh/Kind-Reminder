import React, { useState } from 'react';

function InputTask() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const handleAddItem = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput('');
    }
  };

  return (
    <div className="Task max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      {/* Task Input Form */}
      <div className="mb-4">
        <label htmlFor="task-input" className="block text-lg font-medium text-gray-600">Add Task</label>
        <input
          id="task-input"
          type="text"
          className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {/* Add Task Button */}
      <div className="flex justify-start">
        <button
          onClick={handleAddItem}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="mt-6">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center text-gray-800">
              <span>{item}</span>
              <button
                className="ml-4 text-red-500 hover:text-red-700"
                onClick={() => setItems(items.filter((_, i) => i !== index))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InputTask;
