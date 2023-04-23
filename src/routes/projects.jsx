import '../styles/Projects.css';
import Nav from '../components/Nav';
import VanillaTilt from 'vanilla-tilt';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { RandomReveal } from 'react-random-reveal'

import React, { useState, useRef, useEffect } from 'react';
import onlineShop from '../assets/images/OnlineShopImg.png'
import onlineChat from '../assets/images/onlineChat.png'
import Stocks from'../assets/images/Stocks.png'
const projects = [
  {
    title: 'CURRENT',
    projects: [
      {
        img: onlineShop,
        title: 'Online Shop',
        // subtitle: 'Junior Developer and Lead 2D Artist',
        link: "https://github.com/VladislavFisun/OnlineShop",
        description: "to create this application, I used JavaScript as a programming language and React.js , Redux toolkit  was used  to store information, I used css to create styles, all data was taken from Platzi Fake Api "
      },
      {
        img: onlineChat,
        title: 'Online Chat',
        subtitle: 'description',
        link: "https://github.com/VladislavFisun/Chat-client",
        description: 'When creating this application for the client side, I used TypeScript as the main programming language, react was used as the main framework, I used the Material UI, the css framework Tailwind and scss to create styles for components.For the server side, I used  node.js and the express.js as framework for node, the library was also used socket.io to create a permanent connection between the server and the client'
        
      },
      {
        img: Stocks,
        title: 'Stocks price',
        subtitle: 'description...',
        link: "https://github.com/VladislavFisun/StocksPrice",
        description: "to create this application, I used typescript as a programming language, and Mobx state manager was used to store information, I used Tailwind to create styles, data on promotions was taken from the Finhub service"
      },
    ]
  },

]

function Projects() {
  const [projectsReady, setProjectsReady] = useState(false);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".Project-Card"), {
      max: 7,
      speed: 400
    });
  }, []);

  const randomRevealCharacters = ["█","░",'`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', "'", '"', ',', '<', '.', '>', '/', '?'];

  const circleVariants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };

  return (
    <div>
      <Nav color="var(--purple)"/>
      <div className="Projects">


          <motion.div
            initial={{height: 0}}
            animate={{height: 'auto'}}
            transition={{delay: 1.25, duration: 0.5}}
            className="Contact-Line"
            >
              <motion.div
                variants={circleVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 1.5, duration: 0.5 }}
                className="Contact-Line-Circle"
                >
              </motion.div>
          </motion.div>

          <motion.div className="Projects-Header">
            <div className="Projects-Title">
              <TypeAnimation sequence={["",1500,"Projects />", ()=>{setProjectsReady(true)}]} cursor={false} speed={80} />
            </div>
            {
              projectsReady ?
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                className="Projects-Subtitle">
                <RandomReveal
                  isPlaying duration={1.5}
                  characters="Selected dev projects..."
                  revealEasing='easeInQuad'
                  characterSet={randomRevealCharacters}/>
              </motion.div> :
              null
            }
            
          </motion.div>
          
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: projectsReady ? 1 : 0}}
            transition={{duration: 0.75}}
            className="Projects-Section"
            >
            {/* Project Mapping */}

            {
            projects.map((project, index) => {
              return (
                <>
                  <div className="Projects-List">
                    <div key={index} className={`Projects-${ (index + 1) % 2 === 1 ? "Right" : "Left" } Projects-Section-Title`}>
                      {project.title}
                    </div>
                    {
                      project.projects.map((proj, projindex) => {
                        return (
                          <motion.div
                            className={`Project-Wrapper Card-${ (projindex + index + 1) % 2 === 1 ? "Left" : "Right" }`}
                            >
                            <div 
                              className={`Project-Card `} 
                              key={projindex}
                              onClick={
                                () => {
                                  window.open(proj.link, '__blank');
                                }
                              }>
                              <motion.div
                                className="Project-Image"
                                >
                                <div className="Image-Gradient"></div>
                                <LazyLoadImage
                                  className="Project-Image"
                                  src={proj.img}
                                  alt={proj.title}
                                  />
                                <motion.div className={`Project-Texts Project-Text-${ (projindex + index + 1) % 2 === 1 ? "Left" : "Right" }`}>
                                  <div className={`Project-Name ${proj.title.length > 9 ? "Name-Long" : "Name-Short"}`}>
                                    {proj.title}
                                  </div>
                                  <div className="Project-Subtitle">
                                    {proj.subtitle}
                                  </div>
                                </motion.div>
                              </motion.div>
                              <motion.div
                                className={`Project-Description Desc-${ (projindex + index + 1) % 2 === 1 ? "Left" : "Right" }`}>
                                {proj.description}
                              </motion.div>
                            </div>
                          </motion.div>
                        )
                    })
                    }
                  </div>
                  </>
                )
              })
            }
        </motion.div>
        <div className="Projects-Footer">
          <motion.a
            href="#/contact"
            className="Projects-Contact"
            animate={{color: 'var(--light)'}}
            whileHover={{color: 'var(--blue)', letterSpacing: '0.2rem', scale: 1.1}}>
            get in touch
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Projects;