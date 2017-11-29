import React from 'react';
import { connect } from 'react-redux';

export class ScoreDisplay extends React.Component {

  render() {

    return (
      <div id="score-line">
        <span>Score: {this.props.currCorr} correct out of {this.props.currAtt} attempted</span>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  currAtt: state.srLearning.currAtt,
  currCorr: state.srLearning.currCorr
});

export default connect(mapStateToProps)(ScoreDisplay);