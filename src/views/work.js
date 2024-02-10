import React from 'react'
import './home.css'
import {useNavigate} from 'react-router-dom'
import './work.css'


const Work =(props)=>{

        const navigate = useNavigate()
        const handleHomeClick =()=>{

                navigate('/')

        }
        const handleOnMyWork = () =>{

            navigate('/work');
        }

          const handleOnContact = () => {

            navigate('/contact')
        }

        const handleOnMyPublications = () =>{


            navigate('/publications')
        }

        const handleOnMyExperience = ()=>{

                 navigate('/experience')
        }
        return (
        <div className="home-container">

            <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <button className = 'work-home-button' onClick={handleHomeClick}><span className="Card-Heading home-heading"><img alt="image" src= "./image2.jpg" className='logoBar'/></span></button>
          <div className="home-links-container">
            <button className = 'work-home-button' onClick={handleOnMyWork}><span className="home-link Navbar-Link">My Work</span></button>
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
              <span className="home-link4 Navbar-Link">About</span>
              <span className="home-link5 Navbar-Link">Experience</span>
              <span className="home-link6 Navbar-Link">Portofolio</span>
              <span className="Navbar-Link">Contact</span>
            </div>
          </div>
        </div>
            </div>
            <div className="home-section-separator"></div>
            <div className="home-section-separator1"></div>
            <div className="home-features">
                <div className="home-heading-container">
                <h2 className="home-text03 Section-Heading">Projects</h2>

                </div>
                <div className="home-cards-container">
                    <div className="home-card">
                        <div className="home-icon-container">
                            <img alt="image" src="/advancedQABot.png" className="home-logo projectImage" />
                        </div>
                        <div className="home-content-container">
                        <span className="home-heading3 Card-Heading">Advanced Question Answering Bot</span>
                        <span className="home-text05 Card-Text">
                            Techstack: React.js, Node.js, MongoDB, Natural Language Processing
                        </span>
                        </div>
                    </div>
                    <div className="home-card">
                        <div className="home-icon-container">
                            <img alt="image" src="/aiInterviewer.jpg" className="home-logo projectImage" />
                        </div>
                        <div className="home-content-container">
                        <span className="home-heading3 Card-Heading">AI - Interviewer</span>
                        <span className="home-text05 Card-Text">
                            Techstack: OpenAI's Whisper, OpenAI's GPT3, React.js, Node.js, MongoDB, Python
                        </span>
                        </div>
                    </div>
                    <div className="home-card">
                        <div className="home-icon-container">
                            <img alt="image" src="/AI_vs_Human.jpg" className="home-logo projectImage" />
                        </div>
                        <div className="home-content-container">
                        <span className="home-heading5 Card-Heading">AI vs Human Text </span>
                        <span className="home-text07 Card-Text">
                            Techstack: Transformers, TF-IDF, React.js, Node.js, MongoDB 
                        </span>
                        </div>
                    </div>
                    <div className="home-card">
                        <div className="home-icon-container">
                            <img alt="image" src="/nutrition.jpg" className="home-logo projectImage" />
                        </div>
                        <div className="home-content-container">
                        <span className="home-heading3 Card-Heading">Nutritional Intake Estimator Using Food Images </span>
                        <span className="home-text05 Card-Text">
                            Techstack: React Native, PostgreSQL, Pytorch, MLOPS, Pandas, YOLO Object Detection, Python, Node.Js
                        </span>
                        </div>
                    </div>
                    <div className="home-card">
                        <div className="home-icon-container">
                            <img alt="image" src="/videoActivity.jpg" className="home-logo projectImage" />
                        </div>
                        <div className="home-content-container">
                        <span className="home-heading4 Card-Heading">Video Activity Recognizer</span>
                        <span className="home-text06 Card-Text">
                            Techstack: Pytorch, 3D Convolutional Network, Python, FastAPI
                        </span>
                        </div>
                    </div>
                    <div className="home-card">
                        <div className="home-icon-container">
                            <img alt="image" src="/realTimeDistance.jpg" className="home-logo projectImage" />
                        </div>
                        <div className="home-content-container">
                        <span className="home-heading4 Card-Heading">Real Time Distance Calculation using Aruco Markers</span>
                        <span className="home-text06 Card-Text">
                            Techstack: Pytorch, 3D Convolutional Network, Python, FastAPI
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )


}

export default Work;
