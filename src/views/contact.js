import React from "react";
import { Helmet } from 'react-helmet'
import './home.css'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

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
  const handleOnContact = () => {

      navigate('/contact')
    }

      const handleResumeClick = () =>{

    navigate('/resume')

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

            <button className = 'work-home-button' onClick={handleResumeClick}><span className="home-link Navbar-Link">Resume</span></button>
            <button className = 'work-home-button' onClick={handleOnMyWork}><span className="home-link Navbar-Link">Projects</span></button>
            <button className = 'work-home-button' onClick={handleOnMyExperience}><span className="home-link1 Navbar-Link">Experience</span></button>
            <button className = 'work-home-button' onClick={handleOnMyPublications}><span className="home-link2 Navbar-Link">Blogs</span></button>
            <button className = 'work-home-button' onClick={handleOnContact}><span className="Navbar-Link">Contact</span></button>
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

            <div className="home-features">
                <div className="home-cards-container">
                    <a className="home-card" target="blank_" href="https://www.linkedin.com/in/deepanshusachdeva5/">
                        <div >
                            <div className="home-icon-container">
                                <img alt="image" src="/linkedIn.png" className="home-logo projectImage" />
                            </div>
                            <div className="home-content-container">
                            <span className="home-heading3 Card-Heading">Deepanshu Sachdeva</span>
                            <span className="home-text05 Card-Text">
                                Computer Vision Researcher @University of Colorado at Boulder | Ex- Samsung | Ex-Coding Ninjas | Ex-Rubick.ai
                            </span>
                            </div>
                        </div>
                    </a>

                    <a className="home-card" target="blank_" href="https://github.com/deepanshusachdeva5">
                        <div >
                            <div className="home-icon-container">
                                <img alt="image" src="/github.png" className="home-logo projectImage" />
                            </div>
                            <div className="home-content-container">
                            <span className="home-heading3 Card-Heading">Deepanshu Sachdeva</span>
                            <span className="home-text05 Card-Text">
                                Skills: Pytorch, Natural Language Processing, Computer Vision, BioInformatics, AWS, Docker, React, Node
                            </span>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
     </div>
    )

    

}

export default Contact;