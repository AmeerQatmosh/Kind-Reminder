import React from 'react';
import { Link } from 'react-router-dom';
 
function Home() {
  return (
    <div className="bg-[#f7f9fc] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-400 text-white text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Kind Reminder!</h1>
        <p className="text-lg md:text-xl mb-6">Organize your life with ease—Track events, reminders, and tasks all in one place.</p>
        <div className="space-x-4">
          <Link to="/signup">
            <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
          </Link>
          <Link to="/signin">
            <button className="bg-transparent border-2 border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-blue-500 transition duration-300">
              Sign In
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16 px-8 text-center">
        <div className="feature-item">
          <div className="bg-blue-100 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              strokeWidth={2}
              stroke='currentColor'
              className='w-12 h-12 text-blue-500'
            >

              <path
                fill="#74C0FC"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z" />
            </svg>
            
          </div>
          <h3 className="text-2xl font-bold mb-2 text-blue-800">Calendar</h3>
          <p className="text-gray-600">Plan your days and stay on track.</p>
        </div>
        <div className="feature-item">
          <div className="bg-blue-100 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              strokeWidth={2}
              stroke='currentColor'
              className='w-12 h-12 text-blue-500'
            >

              <path
                fill="#74C0FC"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-blue-800">Reminders</h3>
          <p className="text-gray-600">Never forget important dates or tasks.</p>
        </div>
        <div className="feature-item">
          <div className="bg-blue-100 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              strokeWidth={2}
              stroke='currentColor'
              className='w-12 h-12 text-blue-500'
            >

              <path
                fill="#74C0FC"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-blue-800">Tasks</h3>
          <p className="text-gray-600">Manage your to-do list effortlessly.</p>
        </div>
      </section>      
    </div>
  );
}

export default Home;
