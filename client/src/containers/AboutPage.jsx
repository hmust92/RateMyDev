import React from 'react';
import Auth from '../modules/Auth';
//import Dashboard from '../components/Dashboard.jsx';


class AboutPage extends React.Component {
  /**
   * Render the component.
   */
  render() {
    return (
      <div>

        <h1>About</h1>
        <h4>We built this city on rock and roll</h4>
        <h1>hello</h1>
        <h1>Meet the Team</h1>

        <div className="row">
  <div className="column">
    <div className="card">
      <img src="../../images/dkd.jpeg" alt="David" style={{width: '100%'}} />
      <div className="container">
        <h2>David Daniels</h2>
        <p className="title">UX Developer</p>
        <p>Has some ideas. Feels strongly about them. Likes to work.</p>
        <p>daviddaniels@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <img src="img2.jpg" alt="Mike" style={{width: '100%'}} />
      <div className="container">
        <h2>Paul Rose</h2>
        <p className="title">Full Stack Developer</p>
        <p>Thought deeply about how it all connects. Building things.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <img src="img3.jpg" alt="John" style={{width: '100%'}} />
      <div className="container">
        <h2>Hasan Mustafa</h2>
        <p className="title">Full Stack Developer</p>
        <p>Deep into the documentation, figuring out how the stuff works.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <img src="img1.jpg" alt="Jane" style={{width: '100%'}} />
      <div className="container">
        <h2>Sherry Yang</h2>
        <p className="title">UI</p>
        <p>Anticipates the obstacles. Offers an alternative view</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <img src="img1.jpg" alt="Jane" style={{width: '100%'}} />
      <div className="container">
        <h2>Elaulas Cristiano</h2>
        <p className="title">Subject Matter Expert (SME)</p>
        <p>Brings a thoughtful perspective to the problem at hand.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>

      </div>
    );
  }

}

export default AboutPage;



