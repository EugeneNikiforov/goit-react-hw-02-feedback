import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import styles from './Statistics.module.scss';

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  handleIncrement = (e) => {
    this.setState({[e.target.name]: this.state[e.target.name] + 1});
    };
 
  // handleIncrementGood = () => {
  //   this.setState((prevState) => {return {good: prevState.good + 1}});
  // };
  // handleIncrementNeutral = () => {
  //   this.setState((prevState) => {return {neutral: prevState.neutral + 1}});
  // };
  // handleIncrementEvil = () => {
  //   this.setState({bad: this.state.bad + 1});
  // };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    if (this.state.good) {
    return Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
    } else {
      return 0
    }
  };
  
  render() {
  return (
    <div className={styles.counter}>
      <h2 className={styles.counterHeader}>Please leave feedback</h2>
        <FeedbackOptions options={['good', 'neutral', 'bad']} handleIncrement={this.handleIncrement} />
      <h2 className={styles.counterHeader}>Statistics</h2>
      <ul className={styles.counterList}>
        <li className={styles.counterDigit}>Good: {this.state.good}</li>
        <li className={styles.counterDigit}>Neutral: {this.state.neutral}</li>
        <li className={styles.counterDigit}>Bad: {this.state.bad}</li>
        <li className={styles.counterDigit}>Total: {this.countTotalFeedback()}</li>
        <li className={styles.counterDigit}>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
      </ul>
    </div>
  )
}
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number
  };