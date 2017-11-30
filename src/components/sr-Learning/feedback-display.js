import React from 'react';
import { connect } from 'react-redux';
import './feedback-display.css';

export class FeedbackDisplay extends React.Component {

  render() {

    let feedbackCode = '';
    if(this.props.status === 'answerIncorr') {
      feedbackCode = (
        <div>
          <div className="answ-label">The correct answer is:</div>
          <div className="answ-text">{this.props.answer}</div>
        </div>
      ) 
    }
    else {
      feedbackCode = <div></div>
    }

    const accPct = this.props.qhistAtt > 0 ? this.props.qhistCorr/this.props.qhistAtt : 0;

    return (
      <div id="feedback-container">
        <div id="feedback-box">
          {feedbackCode}
        </div>
        <div id="q-history-box">
          <div className="fb-label">Question history:</div>
          <div className="fb-text fb-pct">{`${accPct.toLocaleString(undefined, {style: 'percent', minimumFractionDigits: 1})}`}</div>
          <div className="fb-text">{`Attempts: ${this.props.qhistAtt}`}</div>
          <div className="fb-text">{`Correct: ${this.props.qhistCorr}`}</div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  answer: state.srLearning.currA,
  status: state.srLearning.currStatus,
  qhistAtt: state.srLearning.qhistAtt,
  qhistCorr: state.srLearning.qhistCorr
});

export default connect(mapStateToProps)(FeedbackDisplay);