import { useState } from 'react'
import './App.css'
import Slideshow from './comp/Slideshow.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  const navBar = () => {

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.getElementById("logo").style.height = "60px";
    } else {
      document.getElementById("logo").style.height = "120px";
    }

    return '';
  };

  if (window.innerWidth > 768) {
    window.addEventListener('scroll', navBar)
  }

  return (
    <>
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
    </>
  )
}

// NEXT STEP:   CREATE COMPONENT FOR THE SLIDESHOW!!!!!!!

export default App