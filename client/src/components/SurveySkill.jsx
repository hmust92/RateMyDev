import Auth from '../modules/Auth';
//import Dashboard from '../components/Dashboard.jsx';
//import SelfSurveyForm from '../components/SelfSurveyForm.jsx';
import React, { Component } from "react";


class SurveySkill extends Component {

    render(){
        return (
            <div>
                <p>Javascript</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '90%'}}>90%</div>
                </div>
            </div>
        )
    }

};

export default SurveySkill;