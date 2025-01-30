import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/kricon.png';
const Footer = () => {
    return (
        <>
            {/* Footer Section */}
            <footer className="bg-blue-900 text-white py-8">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <Link to="/" className="text-2xl font-bold">
                            <img
                                src={logo}
                                alt="king Reminder Home"
                                className="h-15 w-20"
                            />
                        </Link>

                        <p className="text-sm text-gray-400">
                            &copy; {new Date().getFullYear()} Kind Reminder. All rights reserved.
                        </p>
                    </div>
                    {/* Right Side - Contact Us */}
                    <div>
                        <p to="/services" className="text-lg font-semibold text-white hover:text-gray-300">
                            Services
                        </p>
                        <div>
                            <div>
                                <Link to="/calendar" className="text-md no-underline text-white hover:underline">
                                    Calendar
                                </Link>
                            </div>

                            <div>
                                <Link to="/events" className="text-md no-underline text-white hover:underline">
                                    Events
                                </Link>
                            </div>

                            <div>
                                <Link to="/reminders" className="text-md no-underline text-white hover:underline">
                                    Reminders
                                </Link>
                            </div>

                            <div>
                                <Link to="/tasks" className="text-md no-underline text-white hover:underline">
                                    Tasks
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p to="/info" className="text-lg font-semibold text-white hover:text-gray-300">
                            Info
                        </p>
                        <div>
                            <Link to="/about" className="text-md no-underline text-white hover:underline">
                                About Us
                            </Link>
                        </div>

                    </div>

                    <div>
                        <Link to="/contact" className="text-lg no-underline font-semibold text-white hover:underline">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;