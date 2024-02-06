import React from 'react'

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import './home.css'
import './work.css'

const Home = (props) => {

  const navigate = useNavigate();

    const handleHomeClick =()=>{

            navigate('/')

    }
  const handleOnMyWork = () =>{

      navigate('/work');
  }

  // const handleClickResume = () =>{

  //   navigate('https://drive.google.com/drive/u/0/folders/1kqJRuVpwT3-_bZCX3WglumLIJXxdbdQz')

  // } 
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
      <div className="home-container02">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading2 Section-Heading">
              Software Developer/ML Engineer/Researcher
            </h1>
            <span className="home-text Section-Text">
              <span>
                  With over 4+ years of experience in development technologies like React, Node and MongoDB, I can develop websites with a wide range of intersection of AI, Machine Learning and LLM.

              </span>
            </span>
            <div className="home-cta-btn-container">
              
              <button className="home-cta-btn Anchor button" onClick={handleOnMyWork} >
                <span className="home-text02">My Work</span>
              </button>
              <button className="home-cta-btn1 button Anchor resume_class" ><a target="_blank" href='https://drive.google.com/file/d/1WoNILAt45XGMT9BxmvJ0Oe1O05XyJzK6/view?usp=drive_link'>Resume</a></button>
            </div>
          </div>
          <img
            alt="image"
            src= "./image2.jpg"
            className="home-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-heading-container">
          <h2 className="home-text03 Section-Heading">Technologies</h2>
          <span className="home-text04 Section-Text">
           My area of expertise lies in Data Science and Machine Learning, particularly - LLMs and Computer Vision. However I have experience in Devops, Web Development and Mobile Development as well.
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-card">
            <div className="home-icon-container">
              <svg
                viewBox="0 0 1170.2857142857142 1024"
                className="home-icon04"
              >
                <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
              </svg>
            </div>
            <div className="home-content-container">
              <span className="home-heading3 Card-Heading">Data Science</span>
              <span className="home-text05 Card-Text">
In the realm of Data Science, I have cultivated a comprehensive skill set, leveraging tools such as Python, R, and SQL to extract valuable insights from intricate datasets. I've applied statistical methods and machine learning algorithms to tackle complex analytical challenges, providing actionable recommendations that have driven data-informed decision-making. My experience includes working with frameworks like TensorFlow and scikit-learn, as well as implementing data visualization using tools like Matplotlib and Tableau.
              </span>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-icon-container1">
              <svg viewBox="0 0 1024 1024" className="home-icon06">
                <path d="M810 128q34 0 60 26t26 60v256h-214l44-172-172 44v-214h256zM726 726l-44-172h214v256q0 34-26 60t-60 26h-256v-214zM342 554l-44 172 172-44v214h-256q-34 0-60-26t-26-60v-256h214zM128 214q0-34 26-60t60-26h256v214l-172-44 44 172h-214v-256z"></path>
              </svg>
            </div>
            <div className="home-content-container1">
              <span className="home-heading4 Card-Heading">Dev-Ops</span>
              <span className="home-text06 Card-Text">
In the arena of DevOps, I have played a pivotal role in optimizing and automating the software development lifecycle. My expertise includes configuring and managing CI/CD pipelines using Jenkins and GitLab CI. I have employed containerization with Docker and orchestration with Kubernetes to enhance deployment scalability and portability. Proficient in infrastructure as code (IaC) tools like Terraform, I have successfully implemented and maintained infrastructure deployments in cloud environments, particularly on AWS and Azure. This holistic approach has ensured the seamless integration, testing, and deployment of software, contributing to the overall efficiency of the development process.
              </span>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-icon-container2">
              <svg viewBox="0 0 865.7188571428571 1024" className="home-icon08">
                <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
              </svg>
            </div>
            <div className="home-content-container2">
              <span className="home-heading5 Card-Heading">Development</span>
              <span className="home-text07 Card-Text">
On the Development front, I have engaged in diverse projects, showcasing proficiency in Python, Java, and JavaScript. I've actively contributed to full-stack development, utilizing frameworks such as Django and Spring Boot. My coding expertise extends to front-end technologies like React and Angular, enabling the creation of intuitive and user-friendly interfaces. Additionally, I have experience with version control systems like Git and collaborative platforms such as GitHub, fostering efficient team collaboration.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-about">
        <div className="home-max-content-width-container">
          <div className="home-heading-container1">
            <h1 className="Section-Heading home-text08">
              Professional experience
            </h1>
          </div>
          <div className="home-content-container3">
            <div className="home-about-1">
              <div className="home-container03">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text09 Card-Text">
                    Research Assistant - University of Colorado Boulder (Vignesh Kashinath Lab)   
                </span>
              </div>
              <div className="home-container04">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text10 Card-Text">
                  Software Engineer, Samsung Data Systems
                </span>
              </div>
              <div className="home-container05">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text11 Card-Text">
                  Data Science Intern,Text Mercato Solutions Pvt Ltd        	
                </span>
              </div>
            </div>
            <div className="home-about-11">
              <div className="home-container06">
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text12 Card-Text">
                  <span>
                    Tutor/Mentor - Coding Ninjas
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-container07">
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text16 Card-Text">
                  Machine Learning Engineer - Rubick.ai
                </span>
              </div>
              <div className="home-container08">
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text17 Card-Text">
                  Software Developer Intern - Janmoh Technologies
                </span>
              </div>
            </div>
          </div>
          <button className="home-button Anchor button">CHECK MY WORK</button>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-clients">
        <div className="home-heading-container2">
          <h1 className="home-text18 Section-Heading">Organizations</h1>
          <span className="home-text19 Section-Text">
            These are the organizations that I have worked for
          </span>
        </div>
        <div className="home-logo-container">
          <div><img alt="image" src="/samsung.png" className="home-logo" /> <p> Samsung Data Systems </p></div>
          <div><img alt="image" src="/codingNinjas.jpg" className="home-logo1" /> <p> Coding Ninjas </p></div>
          <div><img alt="image" src="/textmercato.png" className="home-logo2" /> <p> TextMercato Solutions </p></div>
          <div><img alt="image" src="/rubick.jpg" className="home-logo3" /> <p> Rubick.ai </p></div>
        </div>
      </div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <div className="home-section-separator5"></div>

      <div className="home-section-separator6"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon22">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon24">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon26">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon28">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="Anchor">Copyright, 2021</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
