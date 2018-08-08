import React from "react";

const Personality = props => {
    
    return (
        <div>
        <div className="w3-container">
            <h5 className="w3-opacity"><b>If your manager asked you to complete a task you thought impossible at first, how would you go about it?</b></h5>
            <h6 className="w3-text-indigo"><i className="fa fa-comment fa-fw w3-margin-right" />{props.devContactInfo.impossibleQuestion}</h6>
            <hr className="hr"/>
        </div>
        <div className="w3-container">
            <h5 className="w3-opacity"><b>Tell me about a time you missed (or almost missed) a deadline. How did you react when you realized you were falling behind? What did that experience teach you?</b></h5>
            <h6 className="w3-text-indigo"><i className="fa fa-comment fa-fw w3-margin-right" />{props.devContactInfo.deadlineQuestion}</h6>
            <hr className="hr"/>
        </div>
        <div className="w3-container">
            <h5 className="w3-opacity"><b>Do you prefer working in a team or on your own? Why?</b></h5>
            <h6 className="w3-text-indigo"><i className="fa fa-comment fa-fw w3-margin-right" />{props.devContactInfo.teamQuestion}</h6>
            <hr className="hr"/>
        </div>
        <div className="w3-container">
            <h5 className="w3-opacity"><b>If you could change one thing about your personality at the snap of your fingers what would it be and why?</b></h5>
            <h6 className="w3-text-indigo"><i className="fa fa-comment fa-fw w3-margin-right" />{props.devContactInfo.personalityQuestion}</h6>
            <hr className="hr"/>
        </div>
        <div className="w3-container">
            <h5 className="w3-opacity"><b>Tell me about a time your manager wasn’t satisfied with the results of your work. How did you discuss the issues and what did you do differently the next time?</b></h5>
            <h6 className="w3-text-indigo"><i className="fa fa-comment fa-fw w3-margin-right" />{props.devContactInfo.dissatisfactionQuestion}</h6>
            <hr className="hr"/>
        </div>
        <div className="w3-container">
            <h5 className="w3-opacity"><b>What are you passionate about? (Causes, Activities, Hobbies, etc.)</b></h5>
            <h6 className="w3-text-indigo"><i className="fa fa-comment fa-fw w3-margin-right" />{props.devContactInfo.passionQuestion}</h6>
            <hr className="hr"/>
        </div>
        </div>
    )


}

export default Personality;
