import React from 'react'
import './Experiences.css'
import Card from './Card'
const Experiences = () => {
    const style = { marginBottom: "250px"};
    return (
        <div class="main" >
            <h2 class="title" data-aos="flip-left" data-aos-once="true">Experiences</h2>
            <Card desg="Frontend developer (Intern)" company="Social Comment Pvt. Ltd." date="10/2021 - 11/2021" desc="Built portfolios for the company on various themes. Designed login and signup pages using React.js" isstars="1" stars="5" buttonInfo="View Certification" link="https://drive.google.com/file/d/1KoJitqaaN4sghjAxasb_aS95wliywnGH/view?usp=sharing"/>
            <Card desg="Academic Mentor" company="Reflection Academy" date="08/2020 - 02/2021" desc="Math teacher and mentor for class 10th and 12th.Managing academic schedules and syllabus." isstars="1" stars="4" buttonInfo="View Certification" link="https://drive.google.com/file/d/1HqKR9hhjr84y2Tz665W5PBQ8h4Ex-7id/view?usp=sharing"/>
            <Card desg="Web developer (Intern)" company="Foxmula" date="07/2020 - 08/2020" desc="Learnt Node.js and JavaScript. Built an application portal with the help of it." isstars="1" stars="3" buttonInfo="View Certification" style={style} link="https://drive.google.com/file/d/19tFy_IdroLNjNgu4aFK1xNddxjku2if6/view?usp=sharing"/>
        </div>
    )
}

export default Experiences
