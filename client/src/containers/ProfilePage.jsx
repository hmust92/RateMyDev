import axios from 'axios';
import Auth from '../modules/Auth';
import API from "../utils/API";

//import SelfSurveyForm from '../components/SelfSurveyForm.jsx';
import React, { Component } from "react";
import UserInfo from '../components/ProfilePageComponents/UserInfo.jsx';
import ProfilePic from "../components/ProfilePageComponents/ProfilePic.jsx"
import AboutMe from '../components/ProfilePageComponents/AboutMe.jsx';
import Personality from '../components/ProfilePageComponents/Personality.jsx';
import TechnicalSkills from '../components/TechnicalSkills.jsx';
import SoftSkills from '../components/SoftSkills.jsx';
import Modal from '../components/Modal.jsx';
import ModalCommunity from '../components/ModalCommunity.jsx';
import '../css/Main.css';
import "../css/ProfilePage.css";


class ProfilePage extends Component {
  state = {
    secretData: '',
    user: null,
    firstName: null,
    lastName: null,
    jobTitle: null,
    portfolioURL: null,
    profilePicURL: null,
    phoneNumber: null,
    zipcode: null,
    relocation: null,
    location: null,
    linkedInURL: null,
    githubURL: null,
    aboutYou: null,
    technicalTag: "",
    technicalPoints: "",
    techSkillType: "",
    // technicalCommunityTag: "",
    // technicalCommunityPoints: "",
    // techSkillcommunityType: "",
    softTag: "",
    softPoints: "",
    softSkillType: "",
    // softCommunityTag: "",
    // softCommunityPoints: "",
    // softCommunitySkillType: "",
    show: false,
    showCommunity: false,

    search: "",
    stackOverflowSkills: [],
    results: [],
    error: "",

    impossibleQuestion: null,
    deadlineQuestion: null,
    teamQuestion: null,
    personalityQuestion: null,
    dissatisfactionQuestion: null,
    passionQuestion: null,
  };

  showModal = () => {
    this.setState({ show: true });
  };

  showCommunityModal = () => {
    this.setState({ showCommunity: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  hideModalCommunity = () => {
    this.setState({ showCommunity: false });
  };

  /**
   * This method will be executed after initial rendering.
   */
   componentDidMount() {
    console.log(this.props);
    this.loadData();

    API.getSkillsList()
    .then(res => {
      console.log(res)
      this.setState({ stackOverflowSkills: res.data.items })
    })
    .catch(err => console.log(err));

  }


  loadData = () => {
    axios.get(`/api/profile/${this.props.match.params.userId}`,
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
    // event.preventDefault();
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange = (event) => {
    // event.preventDefault();
    this.setState({ lastName: event.target.value });
  }

  handleJobTitleChange = (event) => {
    // event.preventDefault();
    this.setState({ jobTitle: event.target.value });
  }

  handlePortfolioChange = (event) => {
    // event.preventDefault();
    this.setState({ portfolioURL: event.target.value });
  }

  handleProfilePicChange = (event) => {
    // event.preventDefault();
    this.setState({ profilePicURL: event.target.value });
  }

  handlePhoneChange = (event) => {
    // event.preventDefault();
    this.setState({ phoneNumber: event.target.value });
  }

  handleZipcodeChange = (event) => {
    // event.preventDefault();
    this.setState({ zipcode: event.target.value });
  }

  handleLocationChange = (event) => {
    // event.preventDefault();
    this.setState({ location: event.target.value });
  }

  handleRelocationChange = (event) => {
    // event.preventDefault();
    this.setState({ relocation: event.target.value });
  }

  handleLinkedInChange = (event) => {
    // event.preventDefault();
    this.setState({ linkedInURL: event.target.value });
  }

  handleGithubChange = (event) => {
    // event.preventDefault();
    this.setState({ githubURL: event.target.value });
  }

  handleAboutYouChange = (event) => {
    // event.preventDefault();
    this.setState({ aboutYou: event.target.value });
  }

  
  handleTechnicalSkillChange = (event) => {
    // event.preventDefault();
    if(event.target.value) {
      this.setState({ 
        technicalTag: event.target.value,
        techSkillType: "Technical"
      });
    }
  }

  handleTechnicalPointsChange = (event) => {
    // event.preventDefault();
    if(event.target.value) {
      this.setState({ technicalPoints: event.target.value });
    }
  }



  handleSoftSkillChange = (event) => {
    // event.preventDefault();
    if(event.target.value) {
      this.setState({ 
        softTag: event.target.value,
        softSkillType: "Soft"
      });
    }
  }

  handleSoftPointsChange = (event) => {
    // event.preventDefault();
    if(event.target.value) {
      this.setState({ softPoints: event.target.value });
    }
  }

  handleImpossibleChange = (event) => {
    // event.preventDefault();
    this.setState({ impossibleQuestion: event.target.value });
  }

  handleDeadlineChange = (event) => {
    // event.preventDefault();
    this.setState({ deadlineQuestion: event.target.value });
  }

  handleTeamChange = (event) => {
    // event.preventDefault();
    this.setState({ teamQuestion: event.target.value });
  }

  handlePersonalityChange = (event) => {
    // event.preventDefault();
    this.setState({ personalityQuestion: event.target.value });
  }

  handleDissatisfactionChange = (event) => {
    // event.preventDefault();
    this.setState({ dissatisfactionQuestion: event.target.value });
  }

  handlePassionChange = (event) => {
    // event.preventDefault();
    this.setState({ passionQuestion: event.target.value });
  }

 
  handleCommunitySubmit = (event) => {
    event.preventDefault();
    const communityData = {
      technicalTag: this.state.technicalTag,
      technicalPoints: this.state.technicalPoints
    }

      let axiosConfigCommunity = {
      headers: {
        'Authorization': `bearer ${Auth.getToken()}`,
        'Content-type': 'application/json',
      }
    };

    // console.log({userData)
    axios.post(`/api/users/${this.props.match.params.userId}/surveys`, communityData, axiosConfigCommunity)
      .then((res) => {
        this.loadData()
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })

    this.hideModal()
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const userData = {
      technicalTag: this.state.technicalTag,
      technicalPoints: this.state.technicalPoints,
      techSkillType: this.state.techSkillType,
      softTag: this.state.softTag,
      softPoints: this.state.softPoints,
      softSkillType: this.state.softSkillType,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      jobTitle: this.state.jobTitle,
      portfolioURL: this.state.portfolioURL,
      profilePicURL: this.state.profilePicURL,
      phoneNumber: this.state.phoneNumber,
      zipcode: this.state.zipcode,
      location: this.state.location,
      relocation: this.state.relocation,
      linkedInURL: this.state.linkedInURL,
      githubURL: this.state.githubURL,
      aboutYou: this.state.aboutYou,
      impossibleQuestion: this.state.impossibleQuestion,
      deadlineQuestion: this.state.deadlineQuestion,
      teamQuestion: this.state.teamQuestion,
      personalityQuestion: this.state.personalityQuestion,
      dissatisfactionQuestion: this.state.dissatisfactionQuestion,
      passionQuestion: this.state.passionQuestion
    }

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

    this.hideModal()
  };


  /**
   * Render the component.
   */
  render() {
    return (

      <div>
        <main>
          {/* <h1>React Modal</h1> */}

          <Modal 
            show={this.state.show} 
            handleClose={this.hideModal}
            handleFirstNameChange={this.handleFirstNameChange}
            handleLastNameChange={this.handleLastNameChange}

            handleJobTitleChange={this.handleJobTitleChange}
            handlePortfolioChange={this.handlePortfolioChange}

            handleProfilePicChange={this.handleProfilePicChange}
            handlePhoneChange={this.handlePhoneChange}
            handleZipcodeChange={this.handleZipcodeChange}
            handleLocationChange={this.handleLocationChange}
            handleRelocationChange={this.handleRelocationChange}
            handleLinkedInChange={this.handleLinkedInChange}
            handleGithubChange={this.handleGithubChange}
            handleAboutYouChange={this.handleAboutYouChange}

            handleTechnicalSkillChange={this.handleTechnicalSkillChange}
            handleTechnicalPointsChange={this.handleTechnicalPointsChange}

            handleInputChange={this.handleInputChange}
            stackOverflowSkills={this.state.stackOverflowSkills}

            handleSoftSkillChange={this.handleSoftSkillChange}
            handleSoftPointsChange={this.handleSoftPointsChange}

            handleImpossibleChange={this.handleImpossibleChange}
            handleDeadlineChange={this.handleDeadlineChange}
            handleTeamChange={this.handleTeamChange}
            handlePersonalityChange={this.handlePersonalityChange}
            handleDissatisfactionChange={this.handleDissatisfactionChange}
            handlePassionChange={this.handlePassionChange}


            handleFormSubmit={this.handleFormSubmit}>

          </Modal> 

          {/* {this.props.match.params.userId===Auth.getUserId() && <button type="button" onClick={this.showModal}>Create/Update Profile</button>} */}
      
        </main>


        <div>

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
                  {this.state.user && <ProfilePic devContactInfo={this.state.user}/>}

                  <div className="w3-container">

                    {this.state.user && <UserInfo devContactInfo={this.state.user}/>}

                    <hr className="hr"/>
                    
                    <p className="w3-large"><b><i className="fa fa-laptop fa-fw w3-margin-right w3-text-indigo" />Technical Skills</b></p>

                    {this.state.user && <TechnicalSkills title="Technical Skills" skills={this.state.user.selfSurveys.filter(word => word.techSkillType === "Technical")} />}

                    <hr className="hr"/>
                    <br />

                    <p className="w3-large"><b><i className="fa fa-handshake-o fa-fw w3-margin-right w3-text-indigo" />Soft Skills</b></p>

                    {this.state.user && <SoftSkills title="Soft Skills" skills={this.state.user.selfSurveys.filter(word => word.softSkillType === "Soft")} />}


                    <br/>
                  </div>
                </div>
                <br/>
              </div>  
            {/* End Left Column */}


              {/* Right Column */}
              <div className="w3-twothird">
                {this.state.user && <AboutMe devContactInfo={this.state.user}/>}

                <div className="w3-container w3-card w3-white">
                  <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-superpowers fa-fw w3-margin-right w3-xxlarge w3-text-indigo" />Personality + Work Culture</h2>
                  {this.state.user && <Personality devContactInfo={this.state.user}/>}
                </div>
                {/* End Right Column */}
                <div className="profileButtonContainer">
                  {this.props.match.params.userId===Auth.getUserId() && <button className="profileButton" type="button" onClick={this.showModal}>Create/Update Profile</button>}
                </div>
                <div className="communityButtonContainer">
                  {this.props.match.params.userId!==Auth.getUserId() && <button className="communityButton" type="button" onClick={this.showCommunityModal}>Community button</button>}
                </div>

            <ModalCommunity 
                showCommunity={this.state.showCommunity} 
                handleClose={this.hideModalCommunity}

                handleTechnicalSkillChange={this.handleTechnicalSkillChange}
                handleTechnicalPointsChange={this.handleTechnicalPointsChange}

                handleInputChange={this.handleInputChange}
                stackOverflowSkills={this.state.stackOverflowSkills}


                handleCommunitySubmit={this.handleCommunitySubmit}>
          </ModalCommunity>

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