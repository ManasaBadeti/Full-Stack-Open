import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';


const Statistics = ({ good, neutral, bad }) => {
  
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <Statistic feedback="Good" value={good} />
            <Statistic feedback="Neutral" value={neutral} />
            <Statistic feedback="Bad" value={bad} />
           
          </tbody>
        </table>
      </div>
    );
  }

  
const Statistic = ({ feedback, value }) => (
  <tr>
    <td>{feedback}</td>
    <td>{value}</td>
  </tr>
);


const Button = ({ handleClick, feedback }) => (
  <button onClick={handleClick}>{feedback}</button>
);

const App = () => {
  const [good, addGood] = useState(0);
  const [neutral, addNeutral] = useState(0);
  const [bad, addBad] = useState(0);

  const handleGoodVote = () => addGood(good + 1);

  const handleNeutralVote = () => addNeutral(neutral + 1);

  const handleBadVote = () => addBad(bad + 1);

  return (
    <>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodVote} feedback="Good" />
      <Button handleClick={handleNeutralVote} feedback="Neutral" />
      <Button handleClick={handleBadVote} feedback="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
