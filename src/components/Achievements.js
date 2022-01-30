import React from 'react'
import Card from './Card'
const Achievements = () => {
    const style = { marginBottom: "300px"};
    return (
        <div class="main" >
           <h2 class="title" data-aos="flip-right" data-aos-once="true">Achievements</h2>
           <Card desg="Ranked 9/400 in Hackombat 2.0 coding contest" company="Techgig" date="17 Aug 2021" desc="" isstars="0" stars="" buttonInfo="View Certification" link="https://drive.google.com/file/d/1cLbQA5nX7DdSWuishVJAzqWlXpSpUkKq/view?usp=sharing"/>
           <Card desg="Ranked 660/5000 in Newtons Grand Contest 2021" company="Newton School" date="Sep 2021" desc="" isstars="0" stars="" buttonInfo="View Certification" style={style} link="https://drive.google.com/file/d/1qQYA9sSk071Xwjj_QSsB_RvAaGPABPqn/view?usp=sharing"/>
        </div>
    )
}

export default Achievements
