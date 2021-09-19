import PropTypes from "prop-types";
import { ButtonFeedback } from "./FeedBack.styled.jsx";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map((option) => {
    return (
      <ButtonFeedback key={option} onClick={() => onLeaveFeedback(option)}>
        {" "}
        {option}
      </ButtonFeedback>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
