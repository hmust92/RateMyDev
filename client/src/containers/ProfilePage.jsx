import axios from 'axios';
import Auth from '../modules/Auth';
//import SelfSurveyForm from '../components/SelfSurveyForm.jsx';
import React, { Component } from "react";
import TechnicalSkills from '../components/TechnicalSkills.jsx';
import SoftSkills from '../components/SoftSkills.jsx';
import Modal from '../components/Modal.jsx';
import '../css/Main.css';

class ProfilePage extends Component {
  state = {
    secretData: '',
    user: null,
    firstName: null,
    tag: "",
    points: "",
    skillType: "",
    show: false
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  /**
   * This method will be executed after initial rendering.
   */
   componentDidMount() {
    console.log(this.props)
    this.loadData()
  }

  loadData = () => {
    axios.get(`/api/${this.props.match.params.userId}`,
    {
      headers: {
        'Authorization': `bearer ${Auth.getToken()}`,
        'Content-type': 'application/json',
      }
    })
    .then(response => {
      this.setState({
        user: response.data.user,
      });
    })
  }


  handleFirstNameChange = (event) => {
    event.preventDefault();
    // console.log("=====================================")
    // console.log(event.target.value);
    // console.log("=====================================")
    // if(event.target.value) {
      this.setState({ firstName: event.target.value });
    // }
  }

  handleSkillChange = (event) => {
    // event.preventDefault();
    if(event.target.value) {
      this.setState({ tag: event.target.value });
    }
  }

  handlePointsChange = (event) => {
    // event.preventDefault();
    if(event.target.value) {
      this.setState({ points: event.target.value });
    }
  }

  handleSkillTypeChange = (event) => {
    // event.preventDefault();
    if(event.target.value) {
      this.setState({ skillType: event.target.value });
    }
  }


  handleFormSubmit = (event) => {
    event.preventDefault();

    const tagYo = this.state.tag;
    const pointsYo = this.state.points;
    const skillTypeYo = this.state.skillType;
    const firstNameYo = this.state.firstName; 
    


    // if(this.state.firstName) {
    //   firstNameYo = this.state.firstName;
    // }
    // const userData = `tag=${tagYo}&points=${pointsYo}`;

    const userData = {
      tag: tagYo,
      points: pointsYo,
      skillType: skillTypeYo,
      firstName: firstNameYo

    }

    // const userData = {
    //   tag: this.state.tag,
    //   points: this.state.points,
    //   skillType: this.state.skillType,
    //   firstName: this.state.firstName

    // }

    // const userDemoData = {
    //   firstName: firstNameYo

    // }

    let axiosConfig = {
      headers: {
        'Authorization': `bearer ${Auth.getToken()}`,
        'Content-type': 'application/json',
      }
    };

    // console.log({userData)
    axios.post('/api/me/survey', userData, axiosConfig)
      .then((res) => {
        this.loadData()
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })


    // axios.post('/auth/login', userDemoData, axiosConfig)  
    //   .then((res) => {
    //     this.loadData()
    //   })
    //   .catch((err) => {
    //     console.log("AXIOS ERROR: ", err);
    //   })  
  }


  /**
   * Render the component.
   */
  render() {
    return (

      <div>
        <main>
          <h1>React Modal</h1>

          <Modal 
            show={this.state.show} 
            handleClose={this.hideModal}
            handleFirstNameChange={this.handleFirstNameChange}
            handleSkillChange={this.handleSkillChange}
            handlePointsChange={this.handlePointsChange}
            handleSkillTypeChange={this.handleSkillTypeChange}
            handleFormSubmit={this.handleFormSubmit}>
          
            <p>Modal</p>
            <p>Data</p>

          </Modal> 

          <button type="button" onClick={this.showModal}>Rate Myself</button>
      
        </main>


        {/* <div>
        <SelfSurveyForm
        handleSkillChange={this.handleSkillChange}
        handlePointsChange={this.handlePointsChange}
        handleSkillTypeChange={this.handleSkillTypeChange}
        handleFormSubmit={this.handleFormSubmit}  */}

        <div>

          {/* {var skill= console.log(this.state.user.selfSurveys[0].tag)} */}
              
          <div>
            {/* {this.state.user && <SurveySkill title="Technical Skills" skills={this.state.user.selfSurveys} />} */}
          </div>

          <div>
            <title>Profile</title>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
              <style dangerouslySetInnerHTML={{ __html: "\nhtml,body,h1,h2,h3,h4,h5,h6 {font-family: \"Roboto\", sans-serif}\n" }} />
          
          {/* Page Container */}
          <div className="w3-content w3-margin-top" style={{ maxWidth: 1400 }}>
            {/* The Grid */}
            <div className="w3-row-padding">
              {/* Left Column */}
              <div className="w3-third">
                <div className="w3-white w3-text-grey w3-card-4">
                  <div className="w3-display-container">
                    <img src="/images/sherryyang.jpeg" style={{ width: '100%' }} alt="Avatar" />
                    <div className="w3-display-bottomleft w3-container w3-text-black">
                      <h2>Sherry Yang</h2>
                    </div>
                  </div>
                  <div className="w3-container">
                    <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-indigo" />Full Stack Developer</p>
                    <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-indigo" />Dallas, TX</p>
                    <p><i className="fa fa-linkedin fa-fw w3-margin-right w3-large w3-text-indigo" />LinkedIn</p>
                    <p><i className="fa fa-github fa-fw w3-margin-right w3-large w3-text-indigo" />GitHub</p>
                    <p><i className="fa fa-plane fa-fw w3-margin-right w3-large w3-text-indigo" />Willing to Relocate: Yes</p>
                    <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-indigo" />sharebear31496@gmail.com</p>
                    <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-indigo" />2145555555</p>
                    <hr />
                    <p className="w3-large"><b><i className="fa fa-laptop fa-fw w3-margin-right w3-text-indigo" />Technical Skills</b></p>

                    {this.state.user && <TechnicalSkills title="Technical Skills" skills={this.state.user.selfSurveys.filter(word => word.skillType === "Technical")} />}

                    <br />

                    {this.state.user && <SoftSkills title="Soft Skills" skills={this.state.user.selfSurveys.filter(word => word.skillType === "Soft")} />}

                    <br />
                  </div>
                </div><br />
                {/* End Left Column */}
              </div>
              {/* Right Column */}
              <div className="w3-twothird">
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                  <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-user fa-fw w3-margin-right w3-xxlarge w3-text-indigo" />About</h2>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b></b></h5>
                    <h6 className="w3-text-indigo"><i /><span className="w3-tag w3-indigo w3-round"></span></h6>
                    <p>I love the environment. I want to use code to fight climate change!</p>
                    <hr />
                  </div>
                  {/* <div className="w3-container">
            <h5 className="w3-opacity"><b>Web Developer / something.com</b></h5>
            <h6 className="w3-text-indigo"><i className="fa fa-calendar fa-fw w3-margin-right" />Mar 2012 - Dec 2014</h6>
            <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
            <hr />
          </div>
          <div className="w3-container">
            <h5 className="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>
            <h6 className="w3-text-indigo"><i className="fa fa-calendar fa-fw w3-margin-right" />Jun 2010 - Mar 2012</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br />
          </div> */}
                </div>
                <div className="w3-container w3-card w3-white">
                  <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-superpowers fa-fw w3-margin-right w3-xxlarge w3-text-indigo" />Personality + Work Culture</h2>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>If your manager asked you to complete a task you thought impossible at first, how would you go about it?</b></h5>
                    <h6 className="w3-text-indigo"><i className="fa fa-comment fa-fw w3-margin-right" />I love documentation! I'd dive right in...as long as it takes.</h6>
                    {/* <p>I love documentation! I'd dive right in...as long as it takes.</p> */}
                    <hr />
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>Tell me about a time you missed (or almost missed) a deadline. How did you react when you realized you were falling behind? What did that experience teach you?</b></h5>
                    <h6 className="w3-text-indigo"><i className="fa fa-comment fa-fw w3-margin-right" />Accept what you cannot control. That's my mantra</h6>
                    {/* <p>I love documentation! I'd dive right in...as long as it takes.</p> */}
                    <hr />
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>Do you prefer working in a team or on your own? Why?</b></h5>
                    <h6 className="w3-text-indigo"><i className="fa fa-comment fa-fw w3-margin-right" />I love teams! I grew up in a big family!</h6>
                    {/* <p>I love documentation! I'd dive right in...as long as it takes.</p> */}
                    <hr />
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>If you could change one thing about your personality at the snap of your fingers what would it be and why?</b></h5>
                    <h6 className="w3-text-indigo"><i className="fa fa-comment fa-fw w3-margin-right" />I wish I were more outgoing...</h6>
                    {/* <p>I love documentation! I'd dive right in...as long as it takes.</p> */}
                    <hr />
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>Tell me about a time your manager wasn’t satisfied with the results of your work. How did you discuss the issues and what did you do differently the next time?</b></h5>
                    <h6 className="w3-text-indigo"><i className="fa fa-comment fa-fw w3-margin-right" />I am a perfectionist. My manager is always happy - seriously.</h6>
                    {/* <p>I love documentation! I'd dive right in...as long as it takes.</p> */}
                    <hr />
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>What are you passionate about? (Causes, Activities, Hobbies, etc.)</b></h5>
                    <h6 className="w3-text-indigo"><i className="fa fa-comment fa-fw w3-margin-right" />I love to rock climb and I voluteer for Dallas Homeless Organization</h6>
                    {/* <p>I love documentation! I'd dive right in...as long as it takes.</p> */}
                    <hr />
                  </div>
                </div>
                {/* End Right Column */}
              </div>
              {/* End Grid */}
            </div>
            {/* End Page Container */}
          </div>

        </div>



      </div>

</div>
      );
  }

}

export default ProfilePage;