import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestion, fetchStats } from '../../actions/sr-learning';
import './question-display.css';

export class QuestionDisplay extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchStats(this.props.id));
    this.props.dispatch(fetchQuestion(this.props.id));
  }

  render() {
    return (
      <div>
        <h3>id: {this.props.id}</h3>
        <div id="q-display">{this.props.question}</div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  id: state.auth.currentUser.id,
  question: state.srLearning.currQ,
  answer: state.srLearning.currA,
  lifeC: state.srLearning.lifeCorr,
  lifeA: state.srLearning.lifeAtt,
  currCorr: state.srLearning.currCorr,
  currAtt: state.srLearning.currAtt
});

export default connect(mapStateToProps)(QuestionDisplay);