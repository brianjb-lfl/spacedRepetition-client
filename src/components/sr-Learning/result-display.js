import React from 'react';
import { connect } from 'react-redux';

export class ResultDisplay extends React.Component {

  render() {
    const resCode = {
      answerCorr: <span className="right-answer">Correct!</span>,
      answerIncorr: <span className="wrong-answer">Incorrect</span>,
      question: <span>Waiting</span>
    }
    
    let response = resCode[this.props.status];

    return (
      <div>
        { response }
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  status: state.srLearning.currStatus,
});

export default connect(mapStateToProps)(ResultDisplay);