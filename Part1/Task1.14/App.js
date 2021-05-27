import React, { useState } from "react";
import './App.css';


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  
  const generateRandomAnecdote = () => {
    const value = Math.floor(Math.random() * Math.floor(anecdotes.length));
    setSelected(value)
  }
  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const Mymax = () => {
    let z = 0
    let ind = 0
    points.forEach((j, i) => {
      if (z < j) {
        ind = i
        z = j
      }
    })
    return ind;
  }
  const max = Mymax()
  return (
    <div>
      <h1>Anecdote of the day </h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button onClick={vote}>vote</button>
      <button onClick={generateRandomAnecdote}>next anecdote</button>

      <h1>Anecdote with most votes </h1>
      <div>{anecdotes[max]}</div>
      <div>has {points[max]} votes</div>
 
    </div>
  )
}

export default App;
