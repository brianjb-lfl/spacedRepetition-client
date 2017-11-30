import React from 'react';
import { connect } from 'react-redux';
import './score-display.css';

export class ScoreDisplay extends React.Component {

  render() {
    console.log('component ', this.props.currAtt, this.props.currCorr);

    return (
      <div id="score-line">
        <div>Current Score: {this.props.currCorr} correct out of {this.props.currAtt} attempted</div>
        <div>Lifetime Score: {this.props.lifeC} correct out of {this.props.lifeA} attempted</div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  currAtt: state.srLearning.currAtt,
  currCorr: state.srLearning.currCorr,
  lifeC: state.srLearning.lifeCorr,
  lifeA: state.srLearning.lifeAtt
});

export default connect(mapStateToProps)(ScoreDisplay);