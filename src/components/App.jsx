import React, { Component } from "react";
import css from './app.module.css'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  addFeedbackPointGood = () => {
    this.setState(state => ({
      good: state.good + 1
    }))
  };

  addFeedbackPointNeutral = () => {
    this.setState(state => ({
      neutral: state.neutral + 1
    }))
  };

  addFeedbackPointBad = () => {
    this.setState(state => ({
      bad: state.bad + 1
    }))
  };

  totalFeedbacl = () => {
    const total = this.setState(state => ({
      good: state.good + 1
    }));
    return total
    
  }



  render() {
    const { good, neutral, bad } = this.state;
    const total = good + bad + neutral;
    return (
      <>
        <h2>Please leave feedback</h2>
        <div style={css.div}>
          <button type="button" onClick={this.addFeedbackPointGood}>Good</button>
          <button type="button" onClick={this.addFeedbackPointNeutral}>Neutral</button>
          <button type="button" onClick={this.addFeedbackPointBad}>Bad</button>
        </div>
        <h2>Statistics</h2>

        <ul>
          <li>Good: {this.state.good }</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {total}</li>
          <li>Positive fedback: { total ? (good * 100 / total).toFixed()  : 0 }%</li>
        </ul>
        
        

      </>
    )
  }
}

