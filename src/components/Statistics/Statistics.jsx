import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  handleIncrementGood = () => {
    this.setState((prevState) => {return {good: prevState.good + 1}});
  };
  handleIncrementNeutral = () => {
    this.setState({neutral: this.state.neutral + 1});
  };
  handleIncrementEvil = () => {
    this.setState({bad: this.state.bad + 1});
  };

  countTotalFeedback = () => {
    this.total = this.state.good + this.state.neutral + this.state.bad;
    console.log(this.total);
  };
  countPositiveFeedbackPercentage = () => {
    this.positive = Math.ceil((this.state.good / this.total) * 100);
    console.log(this.positive);
  };
  
  render() {
  return (
    <div className={styles.counter}>
      <h2 className={styles.counterHeader}>Please leave feedback</h2>
      <div className={styles.counterBtnList}>
        <button 
        onClick={() => (this.handleIncrementGood(), this.countTotalFeedback(), this.countPositiveFeedbackPercentage())} 
        className={styles.counterBtnGood}>Good</button>
        <button 
        onClick={() => (this.handleIncrementNeutral(), this.countTotalFeedback(), this.countPositiveFeedbackPercentage())} 
        className={styles.counterBtnNeutral}>Neutral</button>
        <button 
        onClick={() => (this.handleIncrementEvil(), this.countTotalFeedback(), this.countPositiveFeedbackPercentage())} 
        className={styles.counterBtnEvil}>Evil</button>
      </div>
      <h2 className={styles.counterHeader}>Statistics</h2>
      <ul className={styles.counterList}>
        <li className={styles.counterDigit}>Good: {this.state.good}</li>
        <li className={styles.counterDigit}>Neutral: {this.state.neutral}</li>
        <li className={styles.counterDigit}>Bad: {this.state.bad}</li>
        <li className={styles.counterDigit}>Total: {this.total}</li>
        <li className={styles.counterDigit}>Positive feedback: {this.positive}%</li>
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