import css from './feedbackOptions.module.css'

export const FeedbackOptions = ({ onLeaveFeedback } ) => {

    return (
        <div style={css.div}>
          <button
            type="button"
            onClick={onLeaveFeedback[0]}
          >
            Good
          </button>
          <button
            type="button"
            onClick={onLeaveFeedback[1]}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={onLeaveFeedback[2]}
          >
            Bad
          </button>
        </div>
    )
    
}