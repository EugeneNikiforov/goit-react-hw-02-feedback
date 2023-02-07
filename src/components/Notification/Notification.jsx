import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

export default function Notification({ children, countTotalFeedback, message }) {
    // return (
    //     <>
    //         {countTotalFeedback} ? <div>{children}</div> : <div className={styles.notification}>{message}</div>
    //     </>
    // );
    if (!countTotalFeedback) {
        return (<div className={styles.notification}>{message}</div>)
    } else {
        return (<div>{children}</div>)
    };
};

Notification.propTypes = {
    children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
    message: PropTypes.string.isRequired,
    countTotalFeedback: PropTypes.number.isRequired
}
