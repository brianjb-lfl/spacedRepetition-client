import React from 'react';
import { connect } from 'react-redux';
import './score-display.css';

export class ScoreDisplay extends React.Component {

  render() {
    console.log('component ', this.props.currAtt, this.props.currCorr);

    const currPct = this.props.currAtt > 0 ? this.props.currCorr/this.props.currAtt : 0;
    const lifePct = this.props.lifeAtt > 0 ? this.props.lifeCorr/this.props.lifeAtt : 0;
    

    return (
      <div id="score-line">
        <div id="score-text-parent">
          <div className="score-text">
            <span className="score-label">Session: </span><span className="score-pct">{currPct.toLocaleString(undefined, {style: 'percent', minimumFractionDigits: 1})}</span>
              ({this.props.currCorr} of {this.props.currAtt})
          </div>
          <div className="score-text">
            <span className="score-label">Lifetime: </span><span className="score-pct">{lifePct.toLocaleString(undefined, {style: 'percent', minimumFractionDigits: 1})}</span>
              ({this.props.lifeCorr} of {this.props.lifeAtt})
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  currAtt: state.srLearning.currAtt,
  currCorr: state.srLearning.currCorr,
  lifeCorr: state.srLearning.lifeCorr,
  lifeAtt: state.srLearning.lifeAtt
});

export default connect(mapStateToProps)(ScoreDisplay);