import React from 'react';
import { connect } from 'react-redux';

export class FeedbackDisplay extends React.Component {

  render() {

    let feedbackCode = '';
    if(this.props.status === 'answerIncorr') {
      feedbackCode = (
        <div>
          <div className="fb-label">The correct answer is:</div>
          <div className="fb-text">{this.props.answer}</div>
        </div>
      ) 
    }
    else {
      feedbackCode = <div></div>
    }

    return (
      <div id="feedback-box">
        {feedbackCode}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  answer: state.srLearning.currA,
  status: state.srLearning.currStatus,
});

export default connect(mapStateToProps)(FeedbackDisplay);