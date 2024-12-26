import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            {/* Footer Section */}
            <footer className="bg-blue-900 text-white py-8">
                <div className="container mx-auto text-center">
                    <div className="mb-4">
                        <Link to="/signin" className="text-white hover:text-gray-400 mx-4">
                            Sign In
                        </Link>
                        <Link to="/signup" className="text-white hover:text-gray-400 mx-4">
                            Sign Up
                        </Link>
                    </div>
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Kind Reminder. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;