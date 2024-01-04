// Courses.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CoursesPage = () => {
  const courses = [
    {
      title: 'Course 1',
      overview: 'This is an overview of Course 1.',
      topics: ['Topic 1', 'Topic 2', 'Topic 3'],
      requirements: 'Some requirements for Course 1.',
      duration: '4 weeks',
      fee: '$99',
    },
    {
      title: 'Course 2',
      overview: 'This is an overview of Course 2.',
      topics: ['Topic 1', 'Topic 2', 'Topic 3'],
      requirements: 'Some requirements for Course 2.',
      duration: '6 weeks',
      fee: '$149',
    },
    // ... (other courses)
  ];

  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/registration');
  };

  return (
    <div className="courses container">
      <h1>Welcome to the courses page!</h1>
      <div className="course-cards">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h2>{course.title}</h2>
            <p>{course.overview}</p>

            <div className="course-details">
              <h3>Topics</h3>
              <ul>
                {course.topics.map((topic, index) => (
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
