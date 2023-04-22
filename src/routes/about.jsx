import Nav from '../components/Nav';
import '../styles/About.css'
import {
  motion,
} from "framer-motion";
import {
  useState
} from 'react';
import { TypeAnimation } from 'react-type-animation';

const Comment = (paragraphState) => {
    switch (paragraphState) {
      case 1:
        return ( "//click anywhere to continue" );
      case 2:
        return ( "//two more times" );
      case 3:
        return ( "//three of four" );
      case 4:
        return ( "//last one" );
      default:
        return ( "//Click anywhere to continue" );
    }
}

const Paragraph = ({ paragraphState, typing, setTyping }) => {

  const renderParagraph = () => {
    switch (paragraphState) {
      case 1:
        return (
          <motion.p className={"Paragraph About-1"}>
            {typing ? (
              <TypeAnimation
                sequence={[
                  `I have been studying programming for 8 months and at the moment I have mastered many technologies, such as JavaScript, React, Redux Toolkit, Mobx and many others.`,
                  750,
                  () => {
                    setTyping(false);
                  },
                ]}
                speed={99}
                cursor={true}
                className="TypeAnimation"
              />
            ) : (
              <motion.span animate={{ scale: typing ? 1.1 : 1 }}>
             I have been studying programming for 8 months and at the moment I have mastered many technologies, such as <b>JavaScript</b>, React, Redux Toolkit, Mobx and many others.
              </motion.span>
            )}
          </motion.p>
        );
      case 2:
        return (
          <motion.p className={"Paragraph About-2"}>
            {typing ? (
              <TypeAnimation
                sequence={[
                  `At the moment I am creating small web applications using technologies that have already been studied, I am also studying TypeScript and trying to study node.js to become a full stack developer in the future.`,
                  750,
                  () => {
                    setTyping(false);
                  },
                ]}
                speed={99}
                cursor={true}
                className="TypeAnimation"
              />
            ) : (
              <motion.span animate={{ scale: typing ? 1.1 : 1 }}>
              At the moment I am creating small web applications using technologies that have already been studied, I am also studying <b>TypeScript</b> and trying to study node.js to become a full stack developer in the future.
              </motion.span>
            )}
          </motion.p>
        );
      case 4:
        return (
          <motion.p className={"Paragraph About-3"}>
            {typing ? (
              <TypeAnimation
                sequence={[
                  `Now I am actively looking for a job and if you are interested in my site, you can contact me on social networks or send a letter to an e-mail.`,
                  750,
                  () => {
                    setTyping(false);
                  },
                ]}
                speed={99}
                cursor={true}
                className="TypeAnimation"
              />
            ) : ( 
              <motion.span animate={{ scale: typing ? 1.1 : 1 }}>
              Now I am actively looking for a <b>job</b> and if you are interested in my site, you can contact me on social networks or send a letter to an e-mail.
              </motion.span>
            )}
          </motion.p>
        );
      case 3:
        return (
          <motion.p className={"Paragraph About-4"}>
            {typing ? (
              <TypeAnimation
                sequence={[
                  `This portfolio website is a testament to my skills and hard work. Thank you for visiting my website, and I hope you enjoy browsing through my projects.`,
                  750,
                  () => {
                    setTyping(false);
                  },
                ]}
                speed={99}
                cursor={true}
                className="TypeAnimation"
              />
            ) : ( 
              <motion.span animate={{ scale: typing ? 1.1 : 1 }}>
                This portfolio website is a testament to my <b>skills</b> and hard work. Thank you for visiting my website,
                and I hope you enjoy browsing through my <b>projects</b>.
              </motion.span>
            )}
          </motion.p>
        );
      default:
        return null;
    }
  };

  return <>{renderParagraph()}</>
}

function About() {

  const [paragraphState, setParagraphState] = useState(1);
  const [typing, setTyping] = useState(true);



  return(
      <div>
        <Nav color="var(--green)"/>
        <div className="About" onClick={()=>{
          if (paragraphState === 5 && typing === false) {
            setParagraphState(1);
            setTyping(true);
          } else if ( paragraphState < 5 && typing === false){
            setParagraphState(paragraphState + 1);
            setTyping(true);
          }
        }}>
            <p className="Comment">
              {typing ? null : 
              <TypeAnimation 
                sequence={
                  [Comment(paragraphState)]
                }
                speed={80}
                />
                }
              {
                paragraphState === 5 ?
                <TypeAnimation 
                sequence={
                  ["//check these out"]
                }
                speed={80}
                /> : null
              }
            </p>
            <Paragraph paragraphState={paragraphState} typing={typing} setTyping={setTyping}/>
            <motion.div
              className="Hyperlinks"
              initial={{opacity: 0}}
              animate={{
                opacity: paragraphState === 5 ? 1 : 0,
                }}
              transition={{
                duration: 0.75,
              }}>
                <motion.a
                  animation={{
                    y: paragraphState === 5 ? 0 : 250,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  whileHover={{
                    letterSpacing: "0.25rem",
                    color: "var(--red)",
                  }}
                  style={{
                    pointerEvents: paragraphState === 5 ? "all" : "none",
                  }}
                  href="/#/skills">
                    skills
                  </motion.a>
                <motion.a
                  animation={{
                    y: paragraphState === 5 ? 0 : 250,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  whileHover={{
                    letterSpacing: "0.25rem",
                    color: "var(--purple)",
                  }}
                  style={{
                    pointerEvents: paragraphState === 5 ? "all" : "none",
                  }}
                  href="/#/projects">
                    projects
                  </motion.a>
                
                <motion.a
                  animation={{
                    y: paragraphState === 5 ? 0 : 250,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  whileHover={{
                    letterSpacing: "0.25rem",
                    color: "var(--green)",
                  }}
                  style={{
                    pointerEvents: paragraphState === 5 ? "all" : "none",
                  }}
                  onClick={()=>{setParagraphState(1);setTyping(true)}}>
                    <b>read again</b>
                  </motion.a>
            </motion.div>
        </div>
      </div>
    )
}

export default About;