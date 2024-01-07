import React, { useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';


const CoursesPage = () => {
  const courses = [
    {
      title: 'Fun with Web Design',
      overview: 'Embark on an exciting journey into the world of web development! Learn the basics of creating colorful web pages using HTML and CSS. Build fun projects and discover the magic of coding in a playful environment.',
      requirements: 'Some requirements for the course: Curiosity and enthusiasm! No prior coding experience needed.',
      duration: '4 weeks',
      fee: '$99',
      topics: ['HTML', 'CSS', 'Web Development'],
    },
    
    {
      title: 'Adventure in Data Exploration',
      overview: 'Join the quest to unravel the mysteries of data! Explore the wonders of graphs, charts, and simple coding. Engage in exciting data challenges and become a junior data explorer. Perfect for young minds eager to dive into the world of data science!',
      requirements: 'Some requirements for the course: Basic computer skills. No prior coding or data knowledge required.',
      duration: '6 weeks',
      fee: '$149',
      topics: ['Data Analysis', 'Graphs', 'Coding'],
    },
    
    {
      title: 'Digital Wizards Club',
      overview: 'Become a digital wizard and master the art of online magic – digital marketing! Learn the secrets of creating eye-catching content, spreading good vibes on social media, and making your mark in the digital world. A magical journey for aspiring young marketers!',
      requirements: 'Some requirements for the course: Imagination and a love for creativity. No prior marketing or digital skills needed.',
      duration: '6 weeks',
      fee: '$149',
      topics: ['Digital Marketing', 'Content Creation', 'Social Media'],
    },
    
    {
      title: 'AI Adventures for Young Minds',
      overview: 'Embark on a thrilling adventure into the world of artificial intelligence! Discover how machines can learn and make decisions. Engage in fun projects involving games and interactive AI. Perfect for budding young scientists and tech enthusiasts!',
      requirements: 'Some requirements for the course: Basic computer skills. No prior programming or AI knowledge required – just a curious mind!',
      duration: '6 weeks',
      fee: '$149',
      topics: ['Artificial Intelligence', 'Machine Learning', 'Interactive AI'],
    }
  ];



  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/registration');
  };

  return (
    <div className="courses container">
      <h1 className= "course-heading">Welcome to the courses page!</h1>
      <div className="course-cards">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h2>{course.title}</h2>
            <p>{course.overview}</p>

            <div className="course-details">
              <h3>Topics</h3>
              <ul>
                {course.topics && course.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>

              <h3>Requirements</h3>
              <p>{course.requirements}</p>

              <h3>Duration</h3>
              <p>{course.duration}</p>

              <h3>Fee</h3>
              <p>{course.fee}</p>

              <button onClick={handleEnrollClick}>Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;


