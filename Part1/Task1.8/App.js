import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';


const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1)/total; // Good = 1, neutral = 0, bad = -1
  const positivePercent = `${(good / total) * 100}%`;
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <Statistic feedback="Good" value={good} />
            <Statistic feedback="Neutral" value={neutral} />
            <Statistic feedback="Bad" value={bad} />
            <Statistic feedback="All" value={total} />
            <Statistic feedback="Average" value={average} />
            <Statistic feedback="Positive" value={positivePercent} />
          </tbody>
        </table>
      </div>
    );
  }

  


const Statistic = (props) => (
  <tr>
    <td>{props.feedback}</td>
    <td>{props.value}</td>
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
