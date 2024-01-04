import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import SignUpPage from './components/SignUp';
import LoginPage from './components/Login';
import CreateCoursesPage from './components/CreateCourse';
import CoursesPage from './components/Courses';
import MentorsPage from './components/Mentors';
import RegistrationPage from './components/RegistrationPage';
import AboutUsPage from './components/AboutUs';


const App = () => {
    return (
        <Router>
        <div className="">
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/mentors" element={<MentorsPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/create-courses" element={<CreateCoursesPage />} />
            
                <Route path="/registration" element={<RegistrationPage />} /> 
            </Routes>
            
        </div>
    </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

