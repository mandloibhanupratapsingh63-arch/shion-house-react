import React, { useState, useEffect } from 'react';
import './Home.css';
import Services from '../components/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/footer";

// all images import 
import img1 from '../assets/images/hero1.jpeg';
import img2 from '../assets/images/hero2.jpeg';
import img3 from '../assets/images/hero3.jpeg';
import women from '../assets/images/girl.jpeg';
import men from '../assets/images/watch.jpeg';
import baby from '../assets/images/girl1.jpeg';
import accessories from '../assets/images/girl2.jpeg';
import arrival1 from '../assets/images/arrival1.png.webp';
import arrival2 from '../assets/images/arrival2.png.webp';
import arrival3 from '../assets/images/arrival3.png.webp';
import arrival4 from '../assets/images/arrival4.png.webp';
import arrival5 from '../assets/images/arrival5.png.webp';
import arrival6 from '../assets/images/arrival6.png.webp';
import arrival7 from '../assets/images/arrival7.png.webp';
import arrival8 from '../assets/images/arrival8.png.webp';


const images = [img1, img2, img3];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="hero-section">
        <img src={images[currentIndex]} alt="Hero Slide" className="hero-image" />
        <div className="hero-content">
          <h1> FASHION<br /> CHANGES<br /> ALWAYS </h1>
          <button className="hero-btn"><span>Shop Now</span></button>
        </div>
      </div>

      <div className="hover-cards">
        {[
          { image: women, label: 'Women' },
          { image: men, label: 'Men' },
          { image: baby, label: 'Baby' },
          { image: accessories, label: 'Accessories' },
        ].map((item, index) => (
          <div
            className={`hover-card ${loaded ? 'loaded' : ''}`}
            key={index}
            style={{ animationDelay: `${0.2 * (index + 1)}s` }}
          >
            <img src={item.image} alt={item.label} />
            <div className="label">{item.label}</div>
            <button className="shop-now">Shop Now</button>
          </div>
        ))}
      </div>
      
      {/* NEW ARRIVAL SECTION */}
      <div className="new-arrival-section">
        <div className="section-title" data-aos="fade-up" data-aos-duration="800">
          <h2>NEW<br />ARRIVAL</h2>
        </div>

        <div className="arrival-grid">
          {[arrival1, arrival2, arrival3, arrival4, arrival5, arrival6, arrival7, arrival8].map((img, index) => (
            <div
              className="arrival-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <img src={img} alt={`arrival-${index}`}
                data-aos="fade-up"
                data-aos-delay={index * 100 + 100}
                data-aos-duration="800"
              />
              <div className='bottom-card'>
                <h3><a href="#">Knitted Jumper </a></h3>
                <div className="stars">{'★'.repeat(5)}</div>
                <div className="price">$30.00</div>
              </div>
            </div>
          ))}
        </div>

        {/* browse more button  */}
        <div className="browse-btn-wrapper" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
          <a href="#" className="browse-btn">Browse More</a>
        </div>
      </div>


      {/* banner section  */}
      <div className="banner-section">
        <div className="banner-wrapper">
          <img src={require('../assets/images/discount.jpeg')} alt="Big Discount" className="banner-image" />
          <div className="banner-content">
            <h2>collection houses<br /> our first-ever</h2>
            <button className="banner-btn"><span>ABOUT US</span></button>
          </div>
        </div>
      </div>

      {/* Content Banner Section */}
      <div className="content-banner-section">
        <div className="content-banner-wrapper">
          <div className="content-banner-card">
            <img src={require('../assets/images/popular-imtes1.png')} alt="Card 1" />
            <div className="content-overlay">
              <div className="banner-text">
                <p>
                  <a href="#">Established fact that by <br />the readable content</a>
                </p>
              </div>
              <a href="#" className="content-btn">
                <span>read more</span>
              </a>
            </div>
          </div>

          <div className="content-banner-card">
            <img src={require('../assets/images/popular-imtes2.png')} alt="Card 2" />
            <div className="content-overlay">
              <div className="banner-text">
                <p>
                  <a href="#">Established fact that by <br />the readable content</a>
                </p>
              </div>
              <a href="#" className="content-btn">
                <span>read more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* service */}

      <Services />

     {/* footer */}
       <Footer />
    </>
  );
}
export default Home;
