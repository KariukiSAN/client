import React, { useState, useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const AboutUsPage = () => {
  useEffect(() => {
    const carousel = document.querySelector('#carouselExampleCaptions');
    const carouselInstance = new Carousel(carousel, {
      interval: 5000, // Adjust the interval between slides as needed
    });
  }, []);



  const missionVisionSlides = [
    {
      image: 'https://qph.cf2.poecdn.net/main-sdxl_1370e56c2bfe9df1358e50027a7ac5bfada6eb097d133e413a4b8674b7a0961b.png?w=1024&h=1024',
      title: 'Our Mission',
      content: 'At CodingForKids, our mission is to empower young minds with the knowledge and skills of coding. We believe that coding is not only a valuable tool for the future but also a fun and creative way for kids to express themselves.',
    },
    {
      image: 'https://qph.cf2.poecdn.net/main-sdxl_1370e56c2bfe9df1358e50027a7ac5bfada6eb097d133e413a4b8674b7a0961b.png?w=1024&h=1024',
      title: 'Our Vision',
      content: 'Our vision at CodingForKids is to create a world where every child has the opportunity to learn coding and unleash their potential. We strive to inspire and nurture the young generation to become innovative thinkers, creators, and problem solvers.',
    },
    // Add more slides as needed
  ];




  const events = [
    {
      image: 'https://qph.cf2.poecdn.net/main-sdxl_1370e56c2bfe9df1358e50027a7ac5bfada6eb097d133e413a4b8674b7a0961b.png?w=1024&h=1024',
      name: 'Event 1',
      coordinator: 'Coordinator 1',
      date: '2024-01-10',
      time: '10:00 AM',
      location: 'Event Location 1',
      mapsLink: 'https://maps.google.com/event1',
    },
    {
      image: 'https://qph.cf2.poecdn.net/main-sdxl_1370e56c2bfe9df1358e50027a7ac5bfada6eb097d133e413a4b8674b7a0961b.png?w=1024&h=1024',
      name: 'Event 2',
      coordinator: 'Coordinator 2',
      date: '2024-02-15',
      time: '02:30 PM',
      location: 'Event Location 2',
      mapsLink: 'https://maps.google.com/event2',
    },
    {
      image: 'https://qph.cf2.poecdn.net/main-sdxl_1370e56c2bfe9df1358e50027a7ac5bfada6eb097d133e413a4b8674b7a0961b.png?w=1024&h=1024',
      name: 'Event 3',
      coordinator: 'Coordinator 3',
      date: '2024-03-20',
      time: '05:45 PM',
      location: 'Event Location 3',
      mapsLink: 'https://maps.google.com/event3',
    },
  ];





  return (
    <div className="about-us container">
      <h1>About Us!</h1>


            {/* Mission and Vision */}
            <div className="mission-vision">
        {/* Mission and Vision Carousel */}
        <div id="missionVisionCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {missionVisionSlides.map((slide, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={slide.image} className="d-block w-100" alt={slide.title} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{slide.title}</h5>
                  <p>{slide.content}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#missionVisionCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#missionVisionCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>




      {/* Team Introductions */}
      <div className="team-introductions">
        <h2>Team Introductions</h2>


        <div className="team-member">
          <img
            src="https://qph.cf2.poecdn.net/main-sdxl_1370e56c2bfe9df1358e50027a7ac5bfada6eb097d133e413a4b8674b7a0961b.png?w=1024&h=1024"
            alt="Team Member 1"
          />
          <h3>John Doe</h3>
          <p>Lead Developer</p>
          <p>Email: jane.smith@example.com</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png" alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/johndoe" target="_blank" rel="noopener noreferrer">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="team-member">
          <img
            src="https://qph.cf2.poecdn.net/main-sdxl_1370e56c2bfe9df1358e50027a7ac5bfada6eb097d133e413a4b8674b7a0961b.png?w=1024&h=1024"
            alt="Team Member 2"
          />
          <h3>Jane Smith</h3>
          <p>Graphic Designer</p>
          <p>Email: jane.smith@example.com</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/janesmith" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png" alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/janesmith" target="_blank" rel="noopener noreferrer">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com/janesmith" target="_blank" rel="noopener noreferrer">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="team-member">
          <img
            src="https://qph.cf2.poecdn.net/main-sdxl_1370e56c2bfe9df1358e50027a7ac5bfada6eb097d133e413a4b8674b7a0961b.png?w=1024&h=1024"
            alt="Team Member 3"
          />
          <h3>Robert Johnson</h3>
          <p>Education Specialist</p>
          <p>Email: robert.johnson@example.com</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/robertjohnson" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png" alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/robertjohnson" target="_blank" rel="noopener noreferrer">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com/robertjohnson" target="_blank" rel="noopener noreferrer">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="team-member">
          <img
            src="https://qph.cf2.poecdn.net/main-sdxl_1370e56c2bfe9df1358e50027a7ac5bfada6eb097d133e413a4b8674b7a0961b.png?w=1024&h=1024"
            alt="Team Member 4"
          />
          <h3>Amy White</h3>
          <p>Marketing Coordinator</p>
          <p>Email: amy.white@example.com</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/amywhite" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png" alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/amywhite" target="_blank" rel="noopener noreferrer">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com/amywhite" target="_blank" rel="noopener noreferrer">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>

      {/* Educational Approach */}
      <div className="educational-approach">
        <h2>Educational Approach</h2>
        <p>
          At CodingForKids, we believe in a hands-on and interactive approach to
          teaching coding. We use gamification and project-based learning to
          make coding engaging and accessible for kids of all ages and skill
          levels.
        </p>


        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://qph.cf2.poecdn.net/main-sdxl_1370e56c2bfe9df1358e50027a7ac5bfada6eb097d133e413a4b8674b7a0961b.png?w=1024&h=1024" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://qph.cf2.poecdn.net/main-sdxl_1370e56c2bfe9df1358e50027a7ac5bfada6eb097d133e413a4b8674b7a0961b.png?w=1024&h=1024" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://qph.cf2.poecdn.net/main-sdxl_1370e56c2bfe9df1358e50027a7ac5bfada6eb097d133e413a4b8674b7a0961b.png?w=1024&h=1024" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>



            {/* Event Section */}
            <div className="event-section">
        <h2>Upcoming Events</h2>
        <div className="events">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.image} alt={`Event ${index + 1}`} />
              <div className="event-details">
                <h3>{event.name}</h3>
                <p>Coordinator: {event.coordinator}</p>
                <p>Date: {event.date}</p>
                <p>Time: {event.time}</p>
                <p>
                  Location:{' '}
                  <a href={event.mapsLink} target="_blank" rel="noopener noreferrer">
                    {event.location} <img src="google-maps-icon.png" alt="Google Maps" />
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Have any questions or feedback? We'd love to hear from you!</p>
        <p>Email: info@codingforkids.com</p>
        <p>Phone: 123-456-7890</p>
      </div>

      {/* Social Media Links */}
      <div className="social-media-links">
        <h2>Follow Us</h2>
        <ul>
          <li>
            <a href="https://www.facebook.com/codingforkids" target="_blank" rel="noopener noreferrer">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/codingforkids" target="_blank" rel="noopener noreferrer">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/codingforkids" target="_blank" rel="noopener noreferrer">
              <img src="instagram-icon.png" alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>

      
    </div>
  );
};

export default AboutUsPage;
