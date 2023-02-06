import React from 'react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsForm.module.scss';

function StatisticsForm() {
  const [Good, setGood] = React.useState(0);
  const [Neutral, setNeutral] = React.useState(0);
  const [Bad, setBad] = React.useState(0);
  const [Total, setTotal] = React.useState(0);
  const [Positive, setPositive] = React.useState(0);

  const onClickGood = () => {
    setGood(Good + 1);
  };
  const onClickNeutral = () => {
    setNeutral(Neutral + 1);
  };
  const onClickBad = () => {
    setBad(Bad + 1);
  };

  const countTotalFeedback = () => {
    setTotal(Total + 1);
  };

  const countPositiveFeedbackPercentage = () => {
    setPositive(Math.ceil((Good / Total) * 100));
  };

  return (
    <div className={styles.counter}>
      <h2 className={styles.counterHeader}>Please leave feedback</h2>
      <div className={styles.counterBtnList}>
        <button onClick={() => (onClickGood(), countTotalFeedback(), countPositiveFeedbackPercentage())} className={styles.counterBtnGood}>Good</button>
        <button onClick={() => (onClickNeutral(), countTotalFeedback(), countPositiveFeedbackPercentage())} className={styles.counterBtnNeutral}>Neutral</button>
        <button onClick={() => (onClickBad(), countTotalFeedback(), countPositiveFeedbackPercentage())} className={styles.counterBtnEvil}>Evil</button>
      </div>
      <h2 className={styles.counterHeader}>Statistics</h2>
      <ul className={styles.counterList}>
        <li className={styles.counterDigit}>Good: {Good}</li>
        <li className={styles.counterDigit}>Neutral: {Neutral}</li>
        <li className={styles.counterDigit}>Bad: {Bad}</li>
        <li className={styles.counterDigit}>Total: {Total}</li>
        <li className={styles.counterDigit}>Positive feedback: {Positive}%</li>
      </ul>
    </div>
  )
};
export default StatisticsForm;

StatisticsForm.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number
};