import React from 'react'
import './AboutMe.css'
import photo from '../assets/profile-pic.jpeg'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const AboutMe = () => {
    const {ref,inView}=useInView();
    const animation = useAnimation();
    useEffect(()=>{
        if(inView )
        {
            animation.start({
                x:0,
                transition :{
                    duration:0.1,
                    type:'spring',
                    bounce:0.6
                }
            })
            
        }
        if(!inView)
        {
            animation.start({
                x:'-100vw'
            })
        }

    },[inView,animation])
    return (
        <div className='aboutme'>
            <div className="first-content">
                <div className="text" >
                    <div className="text-name" ref={ref} data-aos="fade-up" data-aos-once="true">
                        Hello I'm <span style={{ fontWeight: "bolder" }} >Atul Kumar</span>
                        <motion.p className="email" style={{ fontSize: "20px" }}  animate={animation} >atulkumarrpvvyv0740@gmail.com</motion.p>
                        <motion.p className="email" style={{ fontSize: "15px" }} >+91-9312300270</motion.p>
                        <motion.div className="icons" >
                            <a href="https://www.facebook.com/profile.php?id=100008665097588" target="_blank" rel="noreferrer">
                                <i class="fab fa-facebook-square text-white" style={{ fontSize: "50%" }}></i>
                            </a>
                            <a href="https://www.instagram.com/0740atulkumar/" target="_blank" rel="noreferrer">
                                <i class="fab fa-instagram text-white" style={{ fontSize: "50%" }}></i></a>
                            <a href="https://www.linkedin.com/in/atul-kumar-25874319b/" target="_blank" rel="noreferrer">
                                <i class="fab fa-linkedin text-white" style={{ fontSize: "50%" }}></i></a>
                            <a href="https://github.com/Atul0740" target="_blank" rel="noreferrer">
                                <i class="fab fa-github-square text-white" style={{ fontSize: "50%" }}></i></a>
                        </motion.div>
                    </div>

                    <div className="text-text" data-aos="fade-up" data-aos-once="true">Enthusiastic Frontend Web Developer who loves to play with React.Js and JavaScript to explore and be ready to dive deep into the development world.</div>
                    <a href="https://docs.google.com/document/d/1XboskOXExcwf5CEOap77W5zMkGAA7HMbjCLkMAHzO8s/edit?usp=sharing" target="_blank" rel="noreferrer"><button className="div-btn" data-aos="fade-up" data-aos-once="true">View CV</button></a>
                </div>
                <div className="photo" data-aos="fade-up" data-aos-once="true">
                    <img src={photo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutMe