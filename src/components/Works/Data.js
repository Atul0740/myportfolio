import CourseCard from "../CourseCard";
import photo from '../Works/work_images/blogs.jpg'
import photo1 from '../Works/work_images/sudoku.jpg'
import photo2 from '../Works/work_images/entertainment.jpg'
export const Data = [
{
    question: 'Projects',
    answer: [
        <CourseCard imgsrc={photo2} title="Entertainment Hub" type="work" link="https://atul0740.github.io/entertainment-hub" subtitle="A movie and TV series app where you can search for your favourite shows and see what’s trending now. Used React.Js and Material UI  for better interface. MovieDB API is used for making movie cards.
        "/>,
        <CourseCard imgsrc={photo1} title="Sudoku Solver and Visualiser" type="work" link="https://sudoku-solver-and-visualiser.herokuapp.com/" subtitle="A Sudoku web-app to visualize sudoku solving using  HTML,CSS and JavaScript. Used Backtracking and Reverse Backtracking algorithms to solve the board . It also gives options to users to solve on their own. "/>,
        <CourseCard imgsrc={photo} title="Application Portal" type="work" subtitle="A portal where users can login/signup and register for courses they want and see their registrations. HTML,CSS and JavaScript is used for front-end. Node.js is used for the backend here .
        "/>
    ]
}
];