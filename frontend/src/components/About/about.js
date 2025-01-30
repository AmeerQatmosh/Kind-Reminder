import React from 'react';
import { Link } from 'react-router-dom';
function About() {
    return (
        <div className="bg-gray-100 p-6 md:p-12 rounded-2xl shadow-lg max-w-6xl mx-auto text-center mt-10 mb-10 border border-gray-300">
        
            <h1 className="text-3xl font-bold text-blue-800 mb-4">About Us</h1>
            <h2 className="text-left font-bold text-blue-500 mb-4">Who we are</h2>
            <p className="text-gray-600 text-lg text-left leading-relaxed">
                At <b> Kind Reminder </b> we provide everything you need to manage and organize your work and your life.
                Our platform offers common features needed to everyone who need a way to organize his tasks in a <b className="text-blue-400">simple and modern way,
                with no complexites </b> ,features including <b className="text-blue-400">Events, Reminders, Tasks, Scheduale, Calender, and Notifications,
                and track of your progress. </b>
            </p>

            <h2 className="text-left font-bold text-blue-500 mb-4">How it works</h2>
            <ol className="list-decimal list-inside text-left text-gray-700 text-lg mt-4">
                <li> Start your organizing by <Link to="/signup" >Register/Sign up. </Link> </li>
                <li> It will open to you a ways to organize your needs in a ways you prefer, so relax and explore how to manage your needs.</li>
                <li> Keep track your progress by viewing notifications, real time tracking, and suggestions.</li>
            </ol>
            

            <h2 className="text-left font-bold text-blue-500 mb-4">What We Offer</h2>

            <ol className="list-decimal list-inside text-left text-gray-700 text-lg mt-4">
                <li> Create Events and get suggestions of how to be ready. </li>
                <li> Create Reminders and get notifications. </li>
                <li> Create Tasks and get suggestions of how to complete it. </li>
                <li>Calender to overview your created Events, Reminders, and Tasks, to help you get decision of what to do right now. </li>
                <li>Sceduale to help you achieve your goals. </li>
                <li> Notifications, email notifications. </li>
            </ol>
        </div>
    );
}

export default About;
