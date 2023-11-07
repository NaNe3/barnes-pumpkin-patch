import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
      </div>

      <div className='body-container'></div>
    </>
  )
}

// NEXT STEP:   CREATE COMPONENT FOR THE SLIDESHOW!!!!!!!

export default App