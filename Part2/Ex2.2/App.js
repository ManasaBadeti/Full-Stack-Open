const App = () => {
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
  const Content =  ({parts}) => {
    
    return (
      <div style={{fontSize:30,color:"hotpink",fontStyle:"italic",fontFamily:"serif"}}>
        {parts.map((part) => <Part key={part.id} part={part} />)}
      </div>
    )
  }
  
 const Total =  ({parts}) => {
  const [part1, part2, part3] = parts;
  return (
    <div style={{fontSize:30,color:"orange",fontStyle:"italic",fontFamily:"serif"}}>
      <p> Total of {part1.exercises + part2.exercises + part3.exercises } exercises </p>
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
