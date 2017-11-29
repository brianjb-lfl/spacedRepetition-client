import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/sr-learning';
import './question-display.css';

export class QuestionDisplay extends React.Component {

  componentDidMount() {
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
  answer: state.srLearning.currA
});

export default connect(mapStateToProps)(QuestionDisplay);