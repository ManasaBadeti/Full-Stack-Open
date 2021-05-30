import React from 'react'
import './App.css';
const Header = (args) => {
  
  return (
    <div >
     <h1 style={{color: "blue", fontSize:40, fontFamily:"Times New Roman"}}>{args.course}</h1>
    </div>
  )
}
const Part = ({ part }) => {
  return (
      <>
          <p>{part.name} {part.exercises}</p>
      </>
  )
}
const Content =  ({content}) => {
  
  return (
    <div style={{fontSize:30,color:"hotpink",fontStyle:"italic",fontFamily:"serif"}}>
    {content.map((part) => <Part key={part.id} part={part} />)}
    </div>
  )
}

const Total =  ({parts}) => {
  
  const total = parts.reduce((s, p) => {
    console.log('what is happening', s, p)
    s = s + p.exercises;
    return s
},0)
  return (
    <div style={{fontSize:30,color:"orange",fontStyle:"italic",fontFamily:"serif"}}>
      <p> <strong> Total of {total} exercises </strong></p>
    </div>
  )
}


const Course = ({course}) => {
  
  return (
    
    <div align="center"  >
     <Header course={course.name} />
     <Content content={course.parts}  />
     <Total parts={course.parts} />
    
    
   
    </div>
    
  )
}

export default Course;
