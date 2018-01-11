import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './landing-page.css';

import LoginForm from './login-form';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <div className="home-content">
        <h2>Login</h2>
        <LoginForm />
        <span className="landing-text">Not a user?</span>
        <span className="reg-link"><Link to="/register">Register</Link></span>
      </div>
      <div className="helper-text">
        <h2>Demo Notes</h2>
        <p>This trainer uses spaced repetition to help you learn your 10-codes.
        As you progress you will see codes that you have mastered less often
        than codes with which you are struggling.</p>
        <p>Login:<br/>
        <span className="indent-text">demouser</span><br/>
        <span className="indent-text">demouserpw</span><br/>
        <span className="indent-text">... or register to start fresh.</span></p>
        <p>Type in what each code represents using just significant words (e.g. "beginning tour"
        vice "beginning my tour").  After each submission you will receive feedback and your stats
        will be updated.</p>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
