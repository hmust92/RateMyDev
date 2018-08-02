import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
    //withRouter
  } from 'react-router-dom'


class NavBarTest extends React.Component {

  componentDidMount() {
    // deauthenticate user
    Auth.deauthenticateUser();
    // change the current URL to / after logout
    this.props.history.push('/');
  }

  render() {
    return (
        <Router>  
        <div>
          <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
            <Link className="navbar-brand" to="/"><i className="fas fa-laptop"></i> Rate That Dev</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              {this.state.authenticated ? (
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/"><i className="fas fa-home"></i> Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about"><i className="far fa-question-circle"></i> About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile"><i className="fas fa-user"></i> Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/search"><i className="fas fa-users"></i> Search</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout"><i className="fas fa-sign-out-alt"></i> Log Out</Link>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/"><i className="fas fa-home"></i> Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about"><i className="far fa-question-circle"></i> About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login"><i className="fas fa-sign-in-alt"></i> Log In</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup"><i className="fas fa-user-plus"></i> Sign Up</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/search"><i className="fas fa-users"></i> Search</Link>
                  </li>
                </ul>
              )}  
            </div>
          </nav>
          
            <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <PrivateRoute path="/dashboard" component={DashboardPage}/>
            <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute path="/signup" component={SignUpPage}/>
            <Route path="/logout" component={LogoutFunction}/>
            <Route path="/search" component={Search}/>
            <PrivateRoute path="/profile" component={ProfilePage}/>
           

        </div>
        
      </Router> 
    )
  }
}

NavBarTest.contextTypes = {
  router: PropTypes.object.isRequired
};

export default NavBarTest;
