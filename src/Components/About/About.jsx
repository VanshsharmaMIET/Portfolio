import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/fullprofile.png'
const About = () => {
  return (
    <div id='about' className='about'> 
      <div className="about-title"><h1>About me</h1>
      <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>

        <div className="about-right">
            <div className="about-para">
                <p>I am a  Developer with an innovative mindset and a strong eagerness to learn. As a fresher, I bring a solid foundation in HTML, CSS, JavaScript, and React, along with a passion for creating responsive and user-friendly web interfaces. I am excited to collaborate, grow, and contribute meaningfully to real-world projects while continuously enhancing my skills.

</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Databases</p><hr style={{width:"50%"}}/></div>
                
            </div>
        </div>
      </div>

      {/* <div className="about-achievements">
        <div className="about-achievement">
        <h1>10+</h1> 
        <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
        <h1>90+</h1> 
        <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
         <div className="about-achievement">
        <h1>15+</h1> 
        <p>HAPPY CLIENTS</p>
        </div>



      </div> */}
    </div>
  )
}

export default About
