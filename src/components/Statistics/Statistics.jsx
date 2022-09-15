import PropTypes from "prop-types";
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className="css.optionsList">
            <li className={css.listItem}>Good: {good}</li>
            <li className={css.listItem}>Neutral: {neutral}</li>
            <li className={css.listItem}>Bad: {bad}</li>
            <li className={css.listItem}>Total: {total}</li>
            <li className={css.listItem}>Positive feedback: {positivePercentage}%</li>
        </ul>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

export default Statistics;