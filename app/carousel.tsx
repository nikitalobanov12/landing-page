import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./carousel.css";
function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % 5);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide + 4) % 5);
  };

  const dotClicked = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-container">
      <div
        className="slide"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
              <h1 className="slide-title">
               B2B SEO Services
              </h1>
              <p className="slide-text">
                  Since the needs of your business are unique to you, <br /> we will work with you to create a custom strategy that will give you the best results.
                  <br />
                  <br />
          wether you need a new website, or you already have one, 
          <br /><br />
          

                  <button className="start" onClick={nextSlide}>
                Start
              </button>
              </p>
      </div>
      <div
        className="slide"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
              <h1 className="slide-title">
                  SEO Campaign
              </h1>
              <p className="slide-text">
                  SEO is the key to long term success, it is based around improving your authority in the google algorithm to make you rank higher in the search results and collect inbound leads.
                  <br /> <br />
                  This helps you build up a system for a steady stream of inbound leads, helping you establish authority with people that come across your website. 
                  <br /><br />
                    We will handle all the hard work for you, letting you focus on the other aspects on your business. 
                  <br />
                  <br />

                  <Link
                  href="#contact"
                  >
                      <button className="start">
                          Book a Free Consultation
                      </button>
                      
                  </Link>
                  </p>
              
              
      </div>
      <div
        className="slide"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
              <h1 className="slide-title">
                  Web Design
              </h1>
              <p className="slide-text">
                 copy
                  
              </p>

      </div>
      <div
        className="slide"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
              slide 3
      </div>
      <div
        className="slide"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
                slide 4
      </div>
      <div className="pagination">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => dotClicked(index)}
          />
        ))}
      </div>
      <button className="carousel-btn prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
}

export default Carousel;