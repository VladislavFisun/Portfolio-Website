import '../styles/Skills.css'
import Nav from '../components/Nav'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'

import Skill from '../components/Skill'

// SKILLS DATABASE
import reactimg from '../assets/images/reactjs.png';
import jsimg from '../assets/images/js.png';
import Redux from '../assets/images/Redux.png';
import NodeJs from '../assets/images/node.png'
import css from '../assets/images/css3.svg'
import scss from '../assets/images/scss.png'
import tailwind from '../assets/images/tailwind.png'
import material from '../assets/images/Material.png'
import mobx from '../assets/images/mobx.png'
import csharpimg from '../assets/images/csharp.png';
import photoshopimg from '../assets/images/photoshop.png';
import blenderimg from '../assets/images/blender3d.png';
import mcmimg from '../assets/images/mcm.png';
import datathonimg from '../assets/images/datathon.png';
import arduinoimg from '../assets/images/arduino.png';
import pythonimg from '../assets/images/python.png';

const skills = [
  { 
    command: 'webdev',
    comment: 'click anywhere to continue',
    data: [
      {
        image: reactimg,
        name: 'ReactJS',
        level: 6,
        description: 'getting the hang of it',
      },
      {
        image: jsimg,
        name: 'JavaScript',
        level: 7,
        description: ' good'
      },
      {
        image: 'https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo.png',
        name: 'TypeScript',
        level: 4,
        description: 'working on it',
      },
      
    ]
  },
  { 
    command: 'styles',
    comment: 'click anywhere to continue',
    data: [
  
      {
        image:material,
        name: 'Material UI',
        level: 6,
        description: 'good'
      },
      {
        image:scss,
        name: 'Scss',
        level: 7,
        description: 'good'
      },
      {
        image:tailwind,
        name: 'Tailwind',
        level: 6,
        description: ' good'
      },
    ]
  },

  { 
    command: 'state managers',
    comment: 'click anywhere to continue',

    data: [
      {
        image: Redux,
        name: 'Redux',
        level: 7,
        description: 'good',
      },
      {
        image:mobx,
        name: 'Mobx',
        level: 5,
        description: 'getting the hang of it'
      },
    ]
  },


]

function SkillsMap(skills) {
  return(
    skills.map((skill, index) => {
      return(
        <motion.div
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{delay: 0 + (index*0.125), duration: 0.5,}}>
          <Skill
            image={skill.image}
            name={skill.name}
            level={skill.level}
            date={skill.date}
            description={skill.description}
            key={"skill-"+index}
          />
        </motion.div>
      )
    })
  )
}

function Skills() {

  const [typing, setTyping] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [skillsState, setSkillsState] = useState(0);
  const [isReadyForComment, setIsReadyForComment] = useState(false);

  return(
    <div>
      <Nav color="var(--red)"/>
      <div className="Skills">
        <motion.div
          className="Terminal"
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{delay: 1.25, duration: 0.5}}
          onAnimationComplete={() => {
            setIsReady(true)
          }}
          onClick={
            () => {
              if(typing){
                return
              }
              if(skillsState < skills.length-1) {
                setSkillsState(skillsState+1)
                setTyping(true)
              } else
              {
                setSkillsState(0)
                setTyping(true)
              }
            }
          }>
          <motion.div className="Window">
            <div className="TitleBar">
              <div className="Icons">
                <div className="Icon"></div>
                <div className="Icon"></div>
                <div className="Icon"></div>
              </div>
              <div className="Title">my skills</div>
            </div>
              <div className="Content">
                <div className="Line">
                  <div className="Prompt">Vladislav@Fisun:~$</div>
                  {
                    isReady ? 
                    <div className="Command">
                      {
                        typing ?
                        <TypeAnimation sequence={[`skills ${skills[skillsState].command}`,750,()=>{setTyping(false);setIsReadyForComment(true)}]} /> :
                        <>skills {skills[skillsState].command}</> 
                      }
                    </div> :
                  null
                  }
                </div>

                <div className={`Showcase Grid-${skills[skillsState].data.length > 3 ? 3 : skills[skillsState].data.length}`} >
                  { typing ? null : SkillsMap(skills[skillsState].data) }
                </div>

                <div className="Line">
                  {
                    typing ?
                    null : 
                    <div className="Command">
                      {
                        isReadyForComment ?
                        <TypeAnimation sequence={["",1000,`>> page ${skillsState + 1}/${skills.length} (${skills[skillsState].comment})`]} speed={80}/>
                        : <></>
                      }
                    </div> 
                  }
                    
                </div>

              </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills