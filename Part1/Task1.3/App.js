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

const Content =  (props) => {
  return (
    <div style={{fontSize:30,color:"hotpink",fontStyle:"italic",fontFamily:"serif"}}>
      <p>Part Name :  {props.part}  <br/>      No.of Exercises : {props.exercise} </p>
     
    </div>
  )
}

const Total =  (props) => {
  return (
    <div style={{fontSize:30,color:"orange",fontStyle:"italic",fontFamily:"serif"}}>
      <p> Total Number of Exercises : {props.exercise1 + props.exercise2 + props.exercise3 }</p>
    </div>
  )
}




  const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  return (
    
    <div align="center"  >
     <Header course={course} />
     <Content part={part1.name} exercise={part1.exercises} />
    <Content part={part2.name} exercise={part2.exercises} />
    <Content part={part3.name} exercise={part3.exercises} />
    
    <Total exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises} />
    </div>
    
  )
}

export default App;
