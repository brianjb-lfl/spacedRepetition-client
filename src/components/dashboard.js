import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import QuestionDisplay from './sr-Learning/question-display';
import ResultDisplay from './sr-Learning/result-display';
import AnswerForm from './sr-Learning/answer-form';
import FeedbackDisplay from './sr-Learning/feedback-display';
import ScoreDisplay from './sr-Learning/score-display';

//import {fetchProtectedData} from '../actions/protected-data';

export class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    //this.props.dispatch(fetchProtectedData());
  }

  render() {
    // Only visible to logged in users
    if (!this.props.loggedIn) {
        return <Redirect to="/" />;
    }

    return (
      <div className="dashboard">
        <div className="dashboard-username">
            Username: {this.props.username}
        </div>

        <QuestionDisplay />
        <ResultDisplay />
        <AnswerForm />
        <FeedbackDisplay />
        <ScoreDisplay />

      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    loggedIn: currentUser !== null,
    username: currentUser ? state.auth.currentUser.username : '',
    name: currentUser
      ? `${currentUser.firstName} ${currentUser.lastName}`
      : '',
    protectedData: state.protectedData.data
  };
};

export default connect(mapStateToProps)(Dashboard);