import logo from './logo.svg';
import './App.css';


const Header = (args) => {
  console.log(args)
  return (
    <div >
     <h1 style={{color: "blue", fontSize:40, fontFamily:"Times New Roman"}}>{args.course}</h1>
    </div>
  )
}

const Content =  ({parts}) => {
  const [part1, part2, part3] = parts;
  return (
    <div style={{fontSize:30,color:"hotpink",fontStyle:"italic",fontFamily:"serif"}}>
      <p>Part Name :  {part1.name}  <br/>      No.of Exercises : {part1.exercises} </p>
      <p>Part Name :  {part2.name}  <br/>      No.of Exercises : {part2.exercises} </p>
      <p>Part Name :  {part3.name}  <br/>      No.of Exercises : {part3.exercises} </p>
     
    </div>
  )
}

const Total =  ({parts}) => {
  const [part1, part2, part3] = parts;
  return (
    <div style={{fontSize:30,color:"orange",fontStyle:"italic",fontFamily:"serif"}}>
      <p> Total Number of Exercises : {part1.exercises + part2.exercises + part3.exercises }</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    
    <div align="center"  >
     <Header course={course.name} />
     <Content parts={course.parts}  />
     
     <Total parts={course.parts} />
    
   
    </div>
    
  )
}

export default App;
