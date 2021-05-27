import logo from './logo.svg';
import './App.css';


const Header = (args) => {
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
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    
    <div align="center"  >
     <Header course={course} />
     <Content part={part1} exercise={exercises1} />
    <Content part={part2} exercise={exercises2} />
    <Content part={part3} exercise={exercises3} />
    
    <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
    </div>
    
  )
}

export default App;
