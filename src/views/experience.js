import React from "react";
import { Helmet } from 'react-helmet'
import './home.css'
import { useNavigate } from 'react-router-dom'

const Experience = () => {

    const navigate = useNavigate();

    const handleHomeClick =()=>{

            navigate('/')

    }

  const handleOnMyPublications = () =>{


      navigate('/publications')
  }

  const handleOnMyExperience = ()=>{

    navigate('/experience')
  }
  const handleOnMyWork = () =>{

      navigate('/work');
  }
    return (

    <div className="home-container">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <button className = 'work-home-button' onClick={handleHomeClick}><span className="Card-Heading home-heading"><img alt="image" src= "./image2.jpg" className='logoBar'/></span></button>
          <div className="home-links-container">
            <button className = 'work-home-button' onClick={handleOnMyWork}><span className="home-link Navbar-Link">My Work</span></button>
            <button className = 'work-home-button' onClick={handleOnMyExperience}><span className="home-link1 Navbar-Link">Experience</span></button>
            <button className = 'work-home-button' onClick={handleOnMyPublications}><span className="home-link2 Navbar-Link">Blogs</span></button>
            <span className="Navbar-Link">Contact</span>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container01">
              <span className="Card-Heading home-heading1"><img alt="image" src= "./image2.jpg"/></span>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <span className="home-link4 Navbar-Link">My Work</span>
              <span className="home-link5 Navbar-Link">Experience</span>
              <span className="home-link6 Navbar-Link">Blogs</span>
              <span className="Navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
     </div>
    )

}

export default Experience;