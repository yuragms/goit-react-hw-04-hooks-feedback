import PropTypes from "prop-types";
import { Stats } from "./Statistics.styled.jsx";

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <Stats>Good: {good}</Stats>
      <Stats>Neutral: {neutral}</Stats>
      <Stats>Bad: {bad}</Stats>
      <Stats>Total: {total}</Stats>
      <Stats>Positive Feedback: {countPositiveFeedbackPercentage}%</Stats>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  countPositiveFeedbackPercentage: PropTypes.number,
};

export default Statistics;
