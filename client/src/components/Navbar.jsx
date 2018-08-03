import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const Dashboard = ({ secretData, user }) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
  {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</CardText>}
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;


<nav className="navbar navbar-expand-lg navbar-light" id="navbar">
    <a className="navbar-brand" href="/"><i className="fas fa-laptop"></i>  Rate That Dev</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <   span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
            <a className="nav-link" href="/"><i className="fas fa-home"></i>  Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/"><i className="far fa-question-circle"></i>  About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/"><i className="fas fa-user"></i>  Profile</a>
            </li>
            <li classNameName="nav-item">
            <a className="nav-link" href="/search"><i className="fas fa-users"></i>  Search</a>
            </li>
        </ul>
    </div>
</nav>