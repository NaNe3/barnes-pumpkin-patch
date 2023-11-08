import { useState } from 'react'
import './App.css'
import Slideshow from './comp/Slideshow.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  const navBar = () => {

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.getElementById("logo").style.height = "60px";
      // document.getElementById("navbar").style.position = "sticky";
      // document.getElementById("navbar").style.marginBottom = "-120px";
      
    } else {
      document.getElementById("logo").style.height = "120px";
      // document.getElementById("navbar").style.position = "absolute";
    }

    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
      document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, .7)";
      
    } else {
      document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 1)";
    }

    return '';
  };

  if (window.innerWidth > 768) {
    window.addEventListener('scroll', navBar)
  }

  return (
    <div id='god-father'>
      <div id='navbar' className="navbar">
          <img id='logo' className='logo' src='./src/logo.png'></img>

          <ul className='nav-links'>
            <li><a href='#'>HOME</a></li>
            <li><a href='#'>ABOUT</a></li>
            <li><a href='#'>CONTACT</a></li>
          </ul>
      </div>

      <div className='body-container'>
        
        <Slideshow />

        <div className='container-orange'>
          <div className='sub-tainer'>
            <h1>This is the future babya</h1>
            <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
          </div>
        </div>

        <div className='container-white'>
          <div className='sub-tainer'>
            <h1>This is the future babya</h1>
            <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
          </div>
        </div>

        <div className='container-orange'>
          <div className='sub-tainer'>
            <h1>This is the future babya</h1>
            <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
          </div>
        </div>

      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
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

    </div>
  )
}

// NEXT STEP:   CREATE COMPONENT FOR THE SLIDESHOW!!!!!!!

export default App