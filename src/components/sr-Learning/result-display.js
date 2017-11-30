import React from 'react';
import { connect } from 'react-redux';
import './result-display.css';

export class ResultDisplay extends React.Component {

  render() {
    const resCode = {
      answerCorr: <div className="right-answer">Correct!</div>,
      answerIncorr: <div className="wrong-answer">Incorrect</div>,
    }
    
    let response = resCode[this.props.status];

    return (
      <div id="result-display">
        { response }
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  status: state.srLearning.currStatus,
});

export default connect(mapStateToProps)(ResultDisplay);