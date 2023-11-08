import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Home from "./comp/Home";
import About from "./comp/About";
import Contact from "./comp/Contact";

function App() {
  const [count, setCount] = useState(0);

  const navBar = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.getElementById("logo").style.height = "60px";
    } else {
      document.getElementById("logo").style.height = "120px";
    }

    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
      document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, .7)";
    } else {
      document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 1)";
    }
  };

  useEffect(() => {
    if (window.innerWidth > 768) {
      window.addEventListener('scroll', navBar);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', navBar);
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <nav id='navbar' className="navbar">
          <img id='logo' className='logo' src='./src/logo.png' alt="Logo" />

          <ul className='nav-links'>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>

        <footer>
          <div className="footer-content">
            <div className="footer-section contact">
              <h3>Contact Us</h3>
              <p>Email: derekbarnes16@gmail.com</p>
              <p>Phone: (208) 569 8523</p>
            </div>

            <div className="footer-section links">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-section social">
              <h3>Follow Us</h3>
              <ul>
                <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
                <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2023 Red Barnes LLC. All Rights Reserved.</p>
          </div>
        </footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
