import React from 'react'
import MakeCakes from '../assests/makeCakes.jpg'
import Particles from    "react-particles-js"
import './About.css'
import CustomButton from './custom-button/custom-button'


function About(){
    return(
        <div>
            <Particles
          style={{ position: "absolute" }}
          height="95%"
          width="95%"
          z-index="-5"
          params={{
            particles: {
              number: {
                value: 200,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.5,
                },
              },
              line_linked: {
                enable: true,
              },
              color: {
                value: "#DB7093",
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />
        <div className='about pad' id="about">
        <div className="aboutText">
          <h1>About <span>Us</span></h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            doloribus quos repudiandae nisi cum vero nulla nostrum perferendis
            sint eaque. Asperiores deserunt perferendis facilis optio hic,
            voluptatibus laboriosam totam illum.
          </p>
          <CustomButton>Explore</CustomButton>
        </div>
        <div className= "aboutImg">
          <img src={MakeCakes} alt="" />
        </div>
      </div>
      </div>
    )


    
}
export default About;