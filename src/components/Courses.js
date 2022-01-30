import React from 'react'
import './Course.css'
import CourseCard from './CourseCard'
import photo from '../assets/node.jpg'
import photo1 from '../assets/dsa.jpg'
import photo2 from '../assets/microsoft.jpg'

const Courses = () => {
    const style={marginBottom:"300px"}
    return (
        <section className="main">
            <div className="title" data-aos="flip-left" style={{ marginBottom: "20px" }} data-aos-once="true">Courses</div>

            <div className="courses_container">
                
                <CourseCard
                    imgsrc={photo}
                    title="Web Development Using Node.Js"
                    subtitle="Foxmula"
                    link="https://drive.google.com/file/d/1XLHbTbAxmXB24pBcPvO0xECEHKkVHfW8/view?usp=sharing"
                />
                <CourseCard imgsrc={photo2} title="Introduction to JavaScript" subtitle="Microsoft" link="https://drive.google.com/file/d/1Hwn7fbodHDiwsjgRBfK077Ozihsppd22/view?usp=sharing" />
                <CourseCard imgsrc={photo1} title="Data Structures and Algorithms" subtitle="Udemy" link="https://drive.google.com/file/d/1aK0a0Byecx1Q-kqLi4oXzONXG_tRpHBS/view?usp=sharing" style={style}/>

            </div>

        </section>
    )
}

export default Courses
