import React, { useState } from "react";
import './App.css';


const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1)/total; // Good = 1, neutral = 0, bad = -1
  const positivePercent = `${(good / total) * 100}%`;
  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
        </div>
    )
  }
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticLine feedback="Good" value={good} />
            <StatisticLine feedback="Neutral" value={neutral} />
            <StatisticLine feedback="Bad" value={bad} />
            <StatisticLine feedback="All" value={total} />
            <StatisticLine feedback="Average" value={average} />
            <StatisticLine feedback="Positive" value={positivePercent} />
          </tbody>
        </table>
      </div>
    );
  }

  


const StatisticLine = (props) => (
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
