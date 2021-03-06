import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser, setAuthToken} from '../actions/auth';
import {processQuit} from '../actions/sr-learning';
import {clearAuthToken} from '../local-storage';
import './header-bar.css';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(processQuit());
        this.props.dispatch(setCurrentUser(null));
        this.props.dispatch(setAuthToken(null));
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        // <button className="small-button" onClick={() => this.logOut()}>Log out</button>
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
              <div id="logout-link">
                <a href="#" onClick={() => this.logOut()}>Logout</a>
              </div>
            );
        }
        return (
            <div className="header-bar">
                <h1>Police Code Trainer</h1>
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(HeaderBar);
