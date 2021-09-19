// import React, { Component } from "react";
import {useState} from 'react';
import FeedbackOptions from "./feedback/FeedBack.jsx";
import Statistics from "./Statistics/Statistics.jsx";
import Section from "./section/Section.jsx";
import { Notification } from "./Notification/Notification.jsx";
import "./App.css";

function App () {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  

  const onIncrement = (option) => {
  switch (option) {
    case 'good':
      setGood(value => value+1);
      break;

    case 'neutral':
        setNeutral(value => value+1);
        break;

    case 'bad':
          setBad(value => value+1);
          break;  
    default:
        return;
  }
  };

  const countTotalFeedback = () => {
    
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    

    return Math.round((good * 100) / (good + neutral + bad));
  };

  
    const feedbackOptions = { good, neutral, bad };
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={onIncrement}
          />
        </Section>
        {good || neutral || bad ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  
}

export default App;
