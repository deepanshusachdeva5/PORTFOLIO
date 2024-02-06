import React from 'react'
import './home.css'
import {useNavigate} from 'react-router-dom'
import './publications.css'


const Publications = () => {

        const navigate = useNavigate()
        const handleHomeClick =()=>{

                navigate('/')

        }
        const handleOnMyWork = () =>{

            navigate('/work');
        }

        return (
            <div className="home-container">
                <div data-role="Header" className="home-navbar-container">
            <div className="home-navbar">
            <button className = 'work-home-button' onClick={handleHomeClick}><span className="Card-Heading home-heading"><img alt="image" src= "./image2.jpg" className='logoBar'/></span></button>
            <div className="home-links-container">
                <button className = 'work-home-button' onClick={handleOnMyWork}><span className="home-link Navbar-Link">My Work</span></button>
                <span className="home-link1 Navbar-Link">Experience</span>
                <span className="home-link2 Navbar-Link">Publications</span>
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
                    <h2 className="home-text03 Section-Heading">Publications</h2>

                    </div>
                    <div className="home-cards-container">
                        <div className="publications-card">
                            <div className="home-icon-container">
                                <img alt="image" src="/publications1.webp" className="home-logo" />
                            </div>
                            <div className="home-content-container">
                            <span className="home-heading3 Card-Heading">Implementing Transformers from Scratch — Positional Encoding</span>
                            </div>
                        </div>
                        <div className="publications-card">
                            <div className="home-icon-container1">
                                <img alt="image" src="/publications2.webp" className="home-logo" />
                            </div>
                            <div className="home-content-container1">
                            <span className="home-heading4 Card-Heading">Real Time Distance Calculation Using ARUCO Markers</span>
                            </div>
                        </div>
                        <div className="publications-card">
                            <div className="home-icon-container2">
                                <img alt="image" src="/publications3.webp" className="home-logo" />
                            </div>
                            <div className="home-content-container2">
                            <span className="home-heading5 Card-Heading">Implementing Glove from scratch — Word Embedding for Transformers </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Publications;