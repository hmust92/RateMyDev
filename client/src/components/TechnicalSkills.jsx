//import Auth from '../modules/Auth';
//import Dashboard from '../components/Dashboard.jsx';
//import SelfSurveyForm from '../components/SelfSurveyForm.jsx';
import React from "react";


const convertToPercent = function (points) {
    return (points / 5) * 100;
    // const percentConversion = (points / 5) * 100;
    // const 
}


const TechnicalSkills = props => (

   
            <div>
                {/* <h1>{props.title}</h1> */}
                {/* {console.log(props.skills[0])} */}
                    
                    {/* {props.skills.map(skill => <li>{skill.tag} {skill.points}</li>)} */}
                        {/* self rated technical skills */}
                    {props.skills.map(skill => ( 
                        <div className="skillTagDiv" key={skill._id}>
                            <p className="skillTagP">{skill.technicalTag}</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{width: `${convertToPercent(skill.technicalPoints)}%`}}>{skill.technicalPoints}</div>
                            </div>
                                <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-red" style={{width: `${convertToPercent(skill.averageRating)}%`}}>{skill.averageRating && Math.round(skill.averageRating*10)/10}</div>
                            </div>
                            {skill.numberOfVotes && <p className="averageCalc">Average Rating out of {skill.numberOfVotes} surveys</p>}
                        </div>
                    ))}
            </div>            
    
);

export default TechnicalSkills;

     