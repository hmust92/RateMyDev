 
import React from 'react';
//import Auth from '../modules/Auth';
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
          <link
            rel="stylesheet"
            href="https://www.w3schools.com/w3css/4/w3.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />

          <p>
            The tools used to create and run the modern web change at incredible
            speed. HR managers and recruiters often don't fully understand
            programming languages and the technological tools associated with them
            beyond the spelling of the acronyms. What's more, the
            interview process between Developers who are strangers can be stressful,
            arduous and incomplete. Only Devs who have already worked with other
            Devs on real world projects really know who can do what.
          </p>
          <p>
            RATE THAT DEV is a Full Stack app using REACT that scores Developers
            on Technical skills (using defined criteria of skill compentency) as
            well as Soft Skills reflecting the Dev's ability to work with
            others. Recruiters, CTOs, Hiring managers or startups can contact
            developers with the closest match to their specific requirements and
            work culture needs. Comprehensive Developer Profiles allow decision
            makers to have a much clearer idea of who a developer is before
            reaching out for an interview. Ratings that reflect the developer's
            own estimation of their skill as well as{" "}
            <b>
              anonymized peer reviews of the developer skills ensure that the
              developer profiles are accurate.
            </b>
          </p>
        </div>
        <hr />
        <h1>Meet the Team</h1>
        <div className="cardsContainer">
          <div className="row">
            <div className="column">
              <div className="card aboutCard">
                <img src="https://avatars3.githubusercontent.com/u/35070929?s=400%26u=cc721c00d94f16f3bead7e00b49abccc987b81e3%26v=4"
                  alt="David"
                  style={{ width: "100%" }}
                />
                <div className="container aboutContainer">
                  <h2>David Daniels</h2>
                  <p className="title">UX Developer</p>
                  <p className="details">
                    Thinks job searching is inefficient. Has some ideas. Feels
                    strongly about them. Sees the big picture and likes to work.
                  </p>
                  <p className="aboutDevLinks">
                    
                  <a href="mailto:daviddaniels@gmail.com" title="check out this developer on GitHub"><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-black" /></a>
                  <a target="_blank" rel="noopener noreferrer" href="http://www.github.com/dvdkrstndnls" title="check out this developer on GitHub"><i className="fa fa-github fa-fw w3-margin-right w3-large w3-text-black" /></a>
                  </p>
                  {/* <p><button><a href="mailto:daviddaniels@gmail.com">Contact</a></button></p> */}
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card aboutCard">
                <img
                  src="images/paulrose2.jpeg"
                  alt="Paul"
                  style={{ width: "100%" }}
                />
                <div className="container aboutContainer">
                  {" "}
                  <h2>Paul Rose</h2>
                  <p className="title">Full Stack Developer</p>
                  <p className="details">
                    Thinks deeply about how the technology connects. Building and refining things
                    all the time.
                  </p>
                  <p className="aboutDevLinks">
                  <a href="mailto:prose2334@gmail.com"><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-black" /></a>    
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/prose34" title="check out this developer on GitHub"><i className="fa fa-github fa-fw w3-margin-right w3-large w3-text-black" /></a>
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card aboutCard">
                <img
                  src="images/hasanmustafa.jpeg"
                  alt="Hasan"
                  style={{ width: "100%" }}
                />
                <div className="container aboutContainer">
                  {" "}
                  <h2>Hasan Mustafa</h2>
                  <p className="title">Back End Developer</p>
                  <p className="details">
                    Deep into the documentation, finding the necessary tools.
                  </p>
                  <p className="aboutDevLinks">
                  <a href="mailto:hmust92@gmail.com"><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-black" /></a>  
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/hmust92" title="check out this developer on GitHub"><i className="fa fa-github fa-fw w3-margin-right w3-large w3-text-black" /></a>
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card aboutCard">
                <img
                  src="images/sherryyang.jpeg"
                  alt="Sherry"
                  style={{ width: "100%" }}
                />
                <div className="container aboutContainer">
                  {" "}
                  <h2>Sherry Yang</h2>
                  <p className="title">UI Developer</p>
                  <p className="details">
                    Anticipates the obstacles. Offers an alternate view.
                  </p>
                  <p className="aboutDevLinks">
                    
                  <a href="mailto:sharebear31496@gmail.com"><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-black" /></a>  
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/xxsherryyy" title="check out this developer on GitHub"><i className="fa fa-github fa-fw w3-margin-right w3-large w3-text-black" /></a>
                  </p>
                 
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
