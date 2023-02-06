import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ handleIncrement, options }) => {
    
    const optionsElements = options.map(option => (
        <button key={option} name={option} onClick={handleIncrement} 
        type="button" className={styles.counterBtnGood}>{option}</button>));
    return (
        <div className={styles.counterBtnList}>
            {optionsElements}
        </div>
        )
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    handleIncrement: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
  };

{/* <button 
    onClick={this.handleIncrementGood} 
    className={styles.counterBtnGood}>Good</button>
<button 
    onClick={this.handleIncrementNeutral} 
    className={styles.counterBtnGood}>Neutral</button>
<button 
    onClick={this.handleIncrementEvil}
    className={styles.counterBtnGood}>Evil</button> */}