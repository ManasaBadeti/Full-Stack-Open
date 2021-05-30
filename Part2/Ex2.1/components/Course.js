
import './App.css';


const Header = (args) => {
  
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
      <p>  {part1.name}     {part1.exercises} </p>
      <p> {part2.name}      {part2.exercises} </p>
      <p> {part3.name}       {part3.exercises} </p>
     
    </div>
  )
}




const Course = ({course}) => {
  
  return (
    
    <div align="center"  >
     <Header course={course.name} />
     <Content parts={course.parts}  />
     
    
    
   
    </div>
    
  )
}

export default Course;
