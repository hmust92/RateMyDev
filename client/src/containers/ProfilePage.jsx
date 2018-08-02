import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';


class ProfilePage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      user: {}
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/me');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
          user: xhr.response.user
        });
      }
    });
    xhr.send();
  }

  /**
   * Render the component.
   */
  render() {
    //return (<Dashboard secretData={this.state.secretData} user={this.state.user} />);

    return (
      <div>
        <Dashboard secretData={this.state.secretData} user={this.state.user} />;

        <h1>hello</h1>
        <div>
  <title>Profile</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <style dangerouslySetInnerHTML={{__html: "\nhtml,body,h1,h2,h3,h4,h5,h6 {font-family: \"Roboto\", sans-serif}\n" }} />
  {/* Page Container */}
  <div className="w3-content w3-margin-top" style={{maxWidth: 1400}}>
    {/* The Grid */}
    <div className="w3-row-padding">
      {/* Left Column */}
      <div className="w3-third">
        <div className="w3-white w3-text-grey w3-card-4">
          <div className="w3-display-container">
            <img src="/w3images/avatar_hat.jpg" style={{width: '100%'}} alt="Avatar" />
            <div className="w3-display-bottomleft w3-container w3-text-black">
              <h2>Sherry Yang</h2>
            </div>
          </div>
          <div className="w3-container">
            <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />Designer</p>
            <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />London, UK</p>
            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />ex@mail.com</p>
            <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />1224435534</p>
            <hr />
            <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />Skills</b></p>
            <p>Javascript</p>
            <div className="w3-light-grey w3-round-xlarge w3-small">
              <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '90%'}}>90%</div>
            </div>
            <p>HTML</p>
            <div className="w3-light-grey w3-round-xlarge w3-small">
              <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '80%'}}>
                <div className="w3-center w3-text-white">80%</div>
              </div>
            </div>
            <p>CSS</p>
            <div className="w3-light-grey w3-round-xlarge w3-small">
              <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '75%'}}>75%</div>
            </div>
            <p>Node.js</p>
            <div className="w3-light-grey w3-round-xlarge w3-small">
              <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '50%'}}>50%</div>
            </div>
            <br />
            <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />Languages</b></p>
            <p>MySQL</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div className="w3-round-xlarge w3-teal" style={{height: 24, width: '100%'}} />
            </div>
            <p>Balsamiq</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div className="w3-round-xlarge w3-teal" style={{height: 24, width: '55%'}} />
            </div>
            <p>Git</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div className="w3-round-xlarge w3-teal" style={{height: 24, width: '25%'}} />
            </div>
            <br />
          </div>
        </div><br />
        {/* End Left Column */}
      </div>
      {/* Right Column */}
      <div className="w3-twothird">
        <div className="w3-container w3-card w3-white w3-margin-bottom">
          <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Work Experience</h2>
          <div className="w3-container">
            <h5 className="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>
            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Jan 2015 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
            <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
            <hr />
          </div>
          <div className="w3-container">
            <h5 className="w3-opacity"><b>Web Developer / something.com</b></h5>
            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Mar 2012 - Dec 2014</h6>
            <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
            <hr />
          </div>
          <div className="w3-container">
            <h5 className="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>
            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Jun 2010 - Mar 2012</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br />
          </div>
        </div>
        <div className="w3-container w3-card w3-white">
          <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Education</h2>
          <div className="w3-container">
            <h5 className="w3-opacity"><b>W3Schools.com</b></h5>
            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Forever</h6>
            <p>Web Development! All I need to know in one place</p>
            <hr />
          </div>
          <div className="w3-container">
            <h5 className="w3-opacity"><b>London Business School</b></h5>
            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2013 - 2015</h6>
            <p>Master Degree</p>
            <hr />
          </div>
          <div className="w3-container">
            <h5 className="w3-opacity"><b>School of Coding</b></h5>
            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2010 - 2013</h6>
            <p>Bachelor Degree</p><br />
          </div>
        </div>
        {/* End Right Column */}
      </div>
      {/* End Grid */}
    </div>
    {/* End Page Container */}
  </div>
  <footer className="w3-container w3-teal w3-center w3-margin-top">
    <p>Find me on social media.</p>
    <i className="fa fa-facebook-official w3-hover-opacity" />
    <i className="fa fa-instagram w3-hover-opacity" />
    <i className="fa fa-snapchat w3-hover-opacity" />
    <i className="fa fa-pinterest-p w3-hover-opacity" />
    <i className="fa fa-twitter w3-hover-opacity" />
    <i className="fa fa-linkedin w3-hover-opacity" />
    <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
  </footer>
</div>


        <h1>hello</h1>
        </div>
    );
  }

}

export default ProfilePage;



