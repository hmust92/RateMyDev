import Auth from '../modules/Auth';
//import Dashboard from '../components/Dashboard.jsx';
import SelfSurveyForm from '../components/SelfSurveyForm.jsx';
import React, { Component } from "react";


class ProfilePage extends Component {



  state = {
    secretData: '',
    user: {},
    tag: "",
    points: ""
  };
  



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

  handleSkillChange = (event) => {
    this.setState({ tag: event.target.value });
  }

  handlePointsChange = (event) => {
    this.setState({ points: event.target.value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    // const userData = {
    //   "tag": this.state.tag,
    //   "points": this.state.points
    // }

    const tagYo = this.state.tag;
    const pointsYo = this.state.points;
    // const userData = `tag=${tagYo}&points=${pointsYo}`;

    const userData = {
      tag: tagYo,
      points: pointsYo
    }

    // console.log({userData)

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/me/survey', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {//Call a function when the state changes.
      if(this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        // Request finished. Do processing here.
      }
    }
    // xhr.send(...userData);
    xhr.send(JSON.stringify(userData));

    
  }


  /**
   * Render the component.
   */
   render() {
    return (
      <div>
      <SelfSurveyForm
      handleSkillChange={this.handleSkillChange}
      handlePointsChange={this.handlePointsChange}
      handleFormSubmit={this.handleFormSubmit} 
      />
      </div>


      );
  }

}

export default ProfilePage;