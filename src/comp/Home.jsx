import { useState } from 'react'
import Slideshow from './Slideshow.jsx'

function Home() {

  return (
    <div id='god-father'>

      <div className='body-container'>
        
        <Slideshow />

        <div className='container-orange'>
          <div className='sub-tainer' style={{width: "70%"}}>
            <h1>This is the future babya</h1>
            <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
          </div>
        </div>

        <div className='container-white'>
          <div className='sub-tainer'>
            <div className='flex-parent'>

              <div className='info-box orange'>
                <h2>Activites</h2>
                <p>Goat Chasing</p>
                <p>Goat Chasing</p>
                <p>Goat Chasing</p>
                <p>Goat Chasing</p>
                <p>Goat Chasing</p>
                <p>Goat Chasing</p>
                <p>Goat Chasing</p>
              </div>
              <div style={{width: "100%"}}>
                <h2>Customer Satisfaction</h2>
                <p>We offer genuine family friendly games that offer hours of recreational fun! </p>
              </div>

            </div>
          </div>
        </div>

        <div className='container-orange'>
          <div className='sub-tainer'>
            <h1>This is the future babya</h1>
            <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
          </div>
        </div>

      </div>

    </div>
  )
}

// NEXT STEP:   CREATE COMPONENT FOR THE SLIDESHOW!!!!!!!

export default Home