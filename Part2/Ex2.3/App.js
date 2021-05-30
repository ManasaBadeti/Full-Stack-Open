import './App.css';

const App = () => {
  const Header = (args) => {
  
    return (
      <div >
       <h1 style={{color: "blue", fontSize:40, fontFamily:"Times New Roman"}}>{args.course}</h1>
      </div>
    )
  }
  
  const Content =  ({parts}) => {
    const [part1, part2, part3, part4] = parts;
    return (
      <div style={{fontSize:30,color:"hotpink",fontStyle:"italic",fontFamily:"serif"}}>
        <p>  {part1.name}     {part1.exercises} </p>
        <p> {part2.name}      {part2.exercises} </p>
        <p> {part3.name}       {part3.exercises} </p>
        <p> {part4.name}       {part4.exercises} </p>
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
       <Content parts={course.parts}  />
       <Total parts={course.parts} />
      
      
     
      </div>
      
    )
  }
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App;
