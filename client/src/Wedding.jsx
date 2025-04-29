import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Wedding.css';

function Wedding() {
  const weddingDate = new Date("2025-06-30T18:30:00"); // Adjust this to the correct wedding date and time

  // State to store time remaining
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(weddingDate));
  const [daysRemaining, setDaysRemaining] = useState(calculateDaysRemaining(weddingDate));

  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(weddingDate));
      setDaysRemaining(calculateDaysRemaining(weddingDate));
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer when component unmounts
  }, [weddingDate]);

  // Function to calculate the time remaining
  function calculateTimeRemaining(targetDate) {
    const now = new Date();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  // Function to calculate the days remaining
  function calculateDaysRemaining(targetDate) {
    const now = new Date();
    const timeDiff = targetDate - now;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Calculate the number of days
  }

  // Google Calendar URL for saving the event
  const googleCalendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding%20of%20Kavya%20and%20Aarav&dates=20250630T183000Z/20250630T230000Z&details=Join%20us%20for%20the%20wedding%20of%20Kavya%20and%20Aarav&location=Grand%20Palace%2C%20Hyderabad`;

  // Slider settings
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Slide every 3 seconds
    dots: true,
    arrows: true,
  };

  return (
    <div className="wedding-page">
      <div className="video-section">
        <iframe
          src="https://drive.google.com/file/d/1v6MVxY7TXomxeuBDYCouElxehmzqQwHH/preview"
          width="100%"
          height="480"
          allow="autoplay"
          allowFullScreen
          title="Wedding Video"
        />
      </div>

      {/* Countdown Timer */}
      <div className="countdown-section">
        <h3>Countdown to Our Wedding</h3>
        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-value">{timeRemaining.hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeRemaining.minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeRemaining.seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      </div>

      {/* Save the Date Section */}
      <div className="save-the-date">
        <h3>We are getting married!</h3>
        <p>Save the date: {daysRemaining} days left until our wedding!</p>
        <p><strong>30th June, 2025</strong></p>
        <a href={googleCalendarURL} target="_blank" rel="noopener noreferrer" className="save-calendar-button">
          Save to Calendar
        </a>
      </div>


       
       {/* Couple's Names and Images */}
       <div className="couple-info">
            <h3 className="couple-heading">
            <span className="bride-name">Kavya</span>  ❤️ <span className="groom-name">Aarav</span>
            </h3>

            <div className="couple-grid">
                <div className="couple-grid-item bride-name">
                    <h4>Kavya</h4>
                    <p>Bachelor of Arts</p> {/* Add degree or any other text here */}
                </div>
                <div className="couple-grid-item bride-image">
                    <img src="/bride.jpg" alt="Bride" />
                </div>
                <div className="couple-grid-item groom-image">
                    <img src="/groom.jpg" alt="Groom" />
                </div>
                <div className="couple-grid-item groom-name">
                    <h4>Aarav</h4>
                    <p>Master of Science</p> {/* Add degree or any other text here */}
                </div>
            </div>
        </div>
     

      {/* Engagement Image Slider */}
      <div className="engagement-slider">
        
        <Slider {...sliderSettings}>
          <div>
            <img src="/engagement1.jpg" alt="Engagement Moment 1" className="slider-image" />
          </div>
          <div>
            <img src="/engagement2.jpg" alt="Engagement Moment 2" className="slider-image" />
          </div>
          <div>
            <img src="/engagement3.jpg" alt="Engagement Moment 3" className="slider-image" />
          </div>
        </Slider>
      </div>

      {/* Engagement Info Section */}
      <div className="event-info">
        <h3>Engagement Details</h3>
        <p><strong>Date:</strong> 15th April, 2025</p>
        <p><strong>Time:</strong> 5:00 PM</p>
        <p><strong>Venue:</strong> Crystal Ballroom, Hyderabad</p>
        <p>Join us as we celebrate this special moment before the wedding!</p>
      </div>

         {/* Haldi Image Slider */}
      <div className="engagement-slider">
        
        <Slider {...sliderSettings}>
          <div>
            <img src="/haldi1.jpg" alt="Engagement Moment 1" className="slider-image" />
          </div>
          <div>
            <img src="/haldi2.jpg" alt="Engagement Moment 2" className="slider-image" />
          </div>
          <div>
            <img src="/haldi3.jpg" alt="Engagement Moment 3" className="slider-image" />
          </div>
        </Slider>
      </div>

      {/* Haldi Info Section */}
      <div className="event-info">
        <h3>Haldi Ceremony</h3>
        <p><strong>Date:</strong> 28th June, 2025</p>
        <p><strong>Time:</strong> 9:00 AM</p>
        <p><strong>Venue:</strong> Grand Palace, Hyderabad</p>
        <p>The Haldi ceremony is a fun and vibrant pre-wedding event. Come dressed in yellow and join us for a day of laughter, joy, and celebration!</p>
      </div>


         {/* Mehendi Image Slider */}
      <div className="engagement-slider">
    
        <Slider {...sliderSettings}>
          <div>
            <img src="/mehendi1.jpg" alt="Engagement Moment 1" className="slider-image" />
          </div>
          <div>
            <img src="/mehendi2.jpg" alt="Engagement Moment 2" className="slider-image" />
          </div>
          <div>
            <img src="/mehendi3.jpg" alt="Engagement Moment 3" className="slider-image" />
          </div>
        </Slider>
      </div>

      {/* Mehendi Info Section */}
      <div className="event-info">
        <h3>Mehendi Ceremony</h3>
        <p><strong>Date:</strong> 29th June, 2025</p>
        <p><strong>Time:</strong> 4:00 PM</p>
        <p><strong>Venue:</strong> Grand Palace, Hyderabad</p>
        <p>The Mehendi ceremony is a beautiful and colorful event. Come and enjoy the intricate henna designs while we celebrate with music and dance!</p>
      </div>

       {/* Wedding Info Section */}
       <div className="wedding-info">
        <h3>Wedding Details</h3>
        <p><strong>Date:</strong> 30th June, 2025</p>
        <p><strong>Time:</strong> 6:30 PM</p>
        <p><strong>Venue:</strong> Grand Palace, Hyderabad</p>
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="map-link">
          View on Google Maps
        </a>
      </div>


    {/*footer section*/}
    <footer className="footer">
        <p>© 2025 Kavya ❤️ Aarav. All rights reserved.</p>
        <p>Made with ❤️ by Chintha Chandu</p>
        
        <div className="footer-links">
            <a href="/">Home</a>
            <a href="/contact">Contact Us</a>
        </div>

        <div className="footer-quote">
            <em>"Two hearts, one soul."</em>
        </div>

       
    </footer>
    </div>
  );
}

export default Wedding;
