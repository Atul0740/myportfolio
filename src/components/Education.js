import React from 'react'
import Card from './Card'

const Education = () => {
   const style = { marginBottom: "300px"};
   return (

      <div class="main">
         <h2 class="title" data-aos="flip-left" data-aos-once="true" >Education</h2>
         <Card desg="B.Tech (Mining Engineering)" company="IIT (ISM) Dhanbad" date="July 2019 - May 2023" desc="7.89 CGPA" isStars="0" stars="" buttonInfo="View Certification" link="https://drive.google.com/file/d/17AJq8pjGMgyiH1k_4PRE55qV2nzQJUPB/view?usp=sharing"/>
         <Card desg="12th CBSE" company="Rajkiya Pratibha Vikas Vidyalaya, B-block Yamuna Vihar, Delhi-110053" date="Apr 2018" desc="88.4%" isStars="0" stars="" buttonInfo="View Certification" link="https://drive.google.com/file/d/1Jy0j_8cELxPDMRieXQfK7Jh99Kf6rzSW/view?usp=sharing"/>
         <Card desg="10th CBSE" company="Rajkiya Pratibha Vikas Vidyalaya, B-block Yamuna Vihar, Delhi-110053" date="Apr 2016" desc="10 CGPA" isStars="0" stars="" buttonInfo="View Certification" style={style} link="https://drive.google.com/file/d/1K42dIOEaV5A93gXFQdBCLm3jDohc7kfw/view?usp=sharing"></Card>
      </div>
   )
}

export default Education
