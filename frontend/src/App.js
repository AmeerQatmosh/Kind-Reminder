import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar/Navbar';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import CalendarPage from './pages/Calendar';
import Reminders from './pages/Reminders';
import Events from './pages/Events';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './components/Footer/footer';
import Contact from './components/Contact/contact';
import About from './components/About/about';
import ForgetPassword from './components/Forms/forgetpassword';
import './App.css'

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route exact path='/'          element={<Home />}           />
        <Route path='/calendar'        element={<CalendarPage />}   />
        <Route path='/events'          element={< Events/>}         />
        <Route path='/reminders'       element={<Reminders />}      />
        <Route path='/tasks'           element={< Tasks />}         />
        <Route path='/signin'          element={<SignIn />}         />
        <Route path='/signup'          element={< SignUp />}        />
        <Route path='/resetpassword' element={<ForgetPassword />}   />
      </Routes>
    
      <Routes>
        <Route path='contact'          element={<Contact />}        />
        <Route path='about'            element={<About />}          />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
