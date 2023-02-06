// import StatisticsForm from './StatisticsForm/StatisticsForm';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* <StatisticsForm /> */}
      <Statistics good={0} neutral={0} bad={0} total={0} positivePercentage={0} />
    </div>
  );
};
