// import Auth from '../modules/Auth';
//import Dashboard from '../components/Dashboard.jsx';
//import SelfSurveyForm from '../components/SelfSurveyForm.jsx';
import React from "react";




const convertToPercent = function (points) {
    return (points / 5) * 100;
    // const percentConversion = (points / 5) * 100;
    // const 
}


const SoftSkills = props => (

   
            <div>
                {/* <h1>{props.title}</h1> */}
                {/* {console.log(props.skills[0])} */}
                    
                    {/* {props.skills.map(skill => <li>{skill.tag} {skill.points}</li>)} */}
                        {/* user's self rating of soft skills */}     
                    {props.skills.map(skill => ( 
                        <div className="skillTagDiv" key={skill._id}>
                            <p className="skillTagP">{skill.softTag}</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{width: `${convertToPercent(skill.softPoints)}%`}}>{skill.softPoints}</div>
                            </div>
                        </div>
                    ))}
                        {/* community rating of soft skills */}
                    {props.skills.map(skill => ( 
                        <div className="skillTagDiv" key={skill._id}>
                            {/* <p className="skillTagP">{skill.softTag}</p> */}
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-red" style={{width: `${convertToPercent(skill.softPoints)}%`}}>{skill.softPoints}</div>
                            </div>
                        </div>
                    ))}
            </div>            
    
);

export default SoftSkills;