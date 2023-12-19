import React from 'react'
import './Profile.css'
import chandler from '../images/chandler.png'
import simplehabits from '../images/simplehabits.png'
import reboot_mind from '../images/reboot_mind.png'
import lincoln from '../images/lincoln.png'


const Profile = () => {
  return (
    <div className='info'>
        
      <div class="myskills">
            <h4 className='mstitle'>My skills</h4>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>React</p>
            <p>Node.js</p>
            <p>SQL</p>
            <p>Python</p>
        </div>

        <div class="mycontacts">
            <h1><a href="https://www.linkedin.com/in/ilyalivy/" target="_blank">LinkedIn</a></h1>

        </div>

        
        <div class="myprojects">
            <h1>My projects</h1>
            <div class="images">
                <a href="https://www.chndlr.co" target="_blank"><img src={chandler} alt="" className='chandler'/></a>
                <img src={simplehabits} alt="" className='simplehabits'/>
                <img src={reboot_mind} alt="" className='reboot_mind'/>
                <img src={lincoln} alt="" className='lincoln'/>
                

            </div>
            
        </div>

    </div>
  )
}

export default Profile