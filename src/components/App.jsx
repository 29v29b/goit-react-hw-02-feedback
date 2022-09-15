import React, { Component } from 'react';
import css from './App.module.css';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = state => {
    this.setState(
      function(prev){
        return{
          [state]:prev[state] +1
        }
      }
    )
    console.log(this.state)
  };


  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };


  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    
    return(
      <div className={css.container}>
        <Section title="Please leave feedback"/>
          <FeedbackOptions 
          options={options} 
          onLeaveFeedback={this.onLeaveFeedback}/>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
              <Statistics 
              good={good}
              neutral={neutral} 
              bad={bad} 
              total={this.countTotalFeedback()} 
              positivePercentage={this.countPositiveFeedbackPercentage()}/>
            ) : (<Notification message="There is no feedback"/>
          )}
          </Section>
      </div>
    );
  }
}

export default App;