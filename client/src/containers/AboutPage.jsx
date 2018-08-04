import React from 'react';
import Auth from '../modules/Auth';
import '../css/About.css';
//import Dashboard from '../components/Dashboard.jsx';

class AboutPage extends React.Component {
  /**
   * Render the component.
   */
  render() {
    return (
      <div>
        <div className="intro">
          <h1>About</h1>
            <p>HR managers don't really understand tech beyond the acronyms and the interview process between Devs who are strangers is arduous. Only Devs who have already worked with other Devs really know who can do what.</p>
            <p>Rate My Dev is a React app that scores Developers on tech skills through defined criterias of skill compentency. Hiring managers or startups can contact developers with the closest match to their specific requirements based on skill location and mastery.</p>
        </div>

        <h1>Meet the Team</h1>
          <div className="cardsContainer">
        <div className="row">
  <div className="column">
    <div className="card">
      <img src="/images/dkd.jpeg" alt="David" style={{width: '100%'}} />
      <div className="container aboutContainer">
        <h2>David Daniels</h2>
        <p className="title">UX Developer</p>
        <p className="details">Has some ideas. Feels strongly about them. Likes to work.</p>
        <p>daviddaniels@gmail.com</p>
        <p><button><a href="mailto:daviddaniels@gmail.com">Contact</a></button></p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card aboutCard">
      <img src="/images/paulrose.jpeg" alt="Paul" style={{width: '100%'}} />
      <div className="container aboutContainer">        <h2>Paul Rose</h2>
        <p className="title">Full Stack Developer</p>
        <p className="details">Thought deeply about how it all connects. Building things all the time.</p>
        <p>prose2334@gmail.com</p>
        <p><button><a href="mailto:prose2334@gmail.com">Contact</a></button></p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card aboutCard">
      <img src="/images/hasanmustafa.jpeg" alt="Hasan" style={{width: '100%'}} />
      <div className="container aboutContainer">        <h2>Hasan Mustafa</h2>
        <p className="title">Full Stack Developer</p>
        <p className="details">Deep into the documentation, figuring out how the stuff works. Finding the necessary tools.</p>
        <p>hmust92@gmail.com</p>
        <p><button><a href="mailto:hmust92@gmail.com">Contact</a></button></p>
        {/* <p><button className="button">Contact</button></p> */}
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card aboutCard">
      <img src="/images/sherryyang.jpeg" alt="Sherry" style={{width: '100%'}} />
      <div className="container aboutContainer">        <h2>Sherry Yang</h2>
        <p className="title">UI</p>
        <p className="details">Anticipates the obstacles. Offers an alternative view.</p>
        <p>sharebear31496@gmail.com</p>
        <p><button><a href="mailto:sharebear31496@gmail.com">Contact</a></button></p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card aboutCard">
      <img src="/images/ec.jpeg" alt="Elaulas" style={{width: '100%'}} />
      <div className="container aboutContainer">        <h2>Elaulas Cristiano</h2>
        <p className="title">Subject Matter Expert (SME)</p>
        <p className="details">Brings a thoughtful perspective to the problem at hand.</p>
        <p>eelaulas@gmail.com</p>
        <p><button><a href="mailto:elaulas@gmail.com">Contact</a></button></p>
      </div>
    </div>
  </div>
</div>
</div>
      </div>
    );
  }

}

export default AboutPage;



