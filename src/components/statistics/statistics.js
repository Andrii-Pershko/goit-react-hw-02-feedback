import PropTypes from 'prop-types';
import css from './statistics.module.css'

export const Statistics = ({ bad, good, neutral, total, positivePercentage }) => {

    return ( 
        <div>
            
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive fedback: {positivePercentage}%</li>
            </ul>
        </div>
    )
}

// 