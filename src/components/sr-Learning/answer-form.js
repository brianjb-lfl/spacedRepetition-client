import React from 'react';
import { connect } from 'react-redux';
import { processAnswer, processQuit, fetchQuestion } from '../../actions/sr-learning';
import {setCurrentUser, setAuthToken} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import './answer-form.css';

export class AnswerForm extends React.Component {

  handleFormSubmit(event) {
    event.preventDefault();
    if(this.props.status === 'question') {
      this.props.dispatch(processAnswer(this.answer.value))
    }
    else {
      this.answer.value = '';
      this.props.dispatch(fetchQuestion(this.props.id));
    }
  }

  handleQuitClick(event) {
    this.props.dispatch(processQuit());
    this.props.dispatch(setCurrentUser(null));
    this.props.dispatch(setAuthToken(null));
    clearAuthToken();
  }

  render() {
    let btnTxt;
    let inputDisabled = false;
    let quitBtnCode = '';

    if(this.props.status === 'question') {
      btnTxt = 'Submit';
    }
    else {
      btnTxt = 'Next';
      inputDisabled = true;
      quitBtnCode = <button type="button" onClick={e => this.handleQuitClick(e)}>Quit</button>
    }

    return (
      <div id="answer-form">
        <form onSubmit={e => this.handleFormSubmit(e)} ref={form => this.form = form}>
          <input type="text" placeholder="answer" disabled={inputDisabled} ref={input => this.answer = input} />
          <button type="submit">{btnTxt}</button>
          {quitBtnCode}
        </form>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  status: state.srLearning.currStatus,
  id: state.auth.currentUser.id,
});

export default connect(mapStateToProps)(AnswerForm);