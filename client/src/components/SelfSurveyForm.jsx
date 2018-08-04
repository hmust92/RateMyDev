import React from "react";

const selfSurveyForm = (props) => 

    <div className="container">
    <div className="row">
    <div className="col-lg-12">

    

    <form>

    <div className="form-group">
    <label htmlFor="FirstName">First Name</label>
    <input onChange={props.handleFirstNameChange} type="text" className="form-control" id="FirstName" />
    </div> 

    <div className="form-group">
    <label htmlFor="LastName">Last Name</label>
    <input onChange={props.handleLastNameChange} type="text" className="form-control" id="LastName" />
    </div> 

    <div className="form-group">
    <label htmlFor="Email">Email</label>
    <input onChange={props.handleEmailChange} type="text" className="form-control" id="Email" />
    </div>

    <div className="form-group">
    <label htmlFor="Phone">Phone</label>
    <input onChange={props.handlePhoneChange} type="text" className="form-control" id="Phone" />
    </div> 

    <div className="form-group">
    <label htmlFor="Zipcode">Zipcode</label>
    <input onChange={props.handleZipcodeChange} type="text" className="form-control" id="Zipcode" />
    </div> 

    <div className="form-group">
    <label htmlFor="LinkedIn">LinkedIn</label>
    <input onChange={props.handleLinkedInChange} type="text" className="form-control" id="LinkedIn" />
    </div> 

    <div className="form-group">
    <label htmlFor="GitHub">Github</label>
    <input onChange={props.handleGitHubChange} type="text" className="form-control" id="GitHub" />
    </div> 

    <div className="form-group">
    <label htmlFor="Relocate">Willing to Relocate?</label>
    <input onChange={props.handleGitHubChange} type="radio" className="form-control" id="Relocate" />
    </div> 

    <div className="form-group">
    <label htmlFor="About">About You</label>
    <input onChange={props.handleAboutChange} type="text" className="form-control" id="About" />
    </div> 

    <div className="form-group">
    <label htmlFor="Impossible">If your manager asked you to complete a task you thought impossible at first, how would you go about it?:
    </label>
    <input onChange={props.handleImpossibleChange} type="text" className="form-control" id="Impossible" />
    </div> 

    <div className="form-group">
    <label htmlFor="Deadline">Tell me about a time you missed (or almost missed) a deadline. How did you react when you realized you were falling behind? What did that experience teach you? 
    </label>
    <input onChange={props.handleDeadlineChange} type="text" className="form-control" id="Deadline" />
    </div> 

    <div className="form-group">
    <label htmlFor="Team">Do you prefer working in a team or on your own? Why? 
    </label>
    <input onChange={props.handleTeamChange} type="text" className="form-control" id="Team" />
    </div>

    <div className="form-group">
    <label htmlFor="Personality">If you could change one thing about your personality at the snap of your fingers what would it be and why?
    </label>
    <input onChange={props.handlePersonalityChange} type="text" className="form-control" id="Personality" />
    </div>  

    <div className="form-group">
    <label htmlFor="Dissatisfaction">Tell me about a time your manager wasn’t satisfied with the results of your work. How did you discuss the issues and what did you do differently the next time?
    </label>
    <input onChange={props.handleDissatisfactionChange} type="text" className="form-control" id="Dissatisfaction" />
    </div> 

     <div className="form-group">
    <label htmlFor="Dissatisfaction">What are you passionate about? (Causes, Activities, Hobbies, etc.)
    </label>
    <input onChange={props.handlePassionChange} type="text" className="form-control" id="Passion" />
    </div> 

       <p>
    Score yourself 0 to 5 on how strong a developer you are with regard to each specific skill. Use the following scale:</p>
<p>0		1		2		3		4		5</p>

<p>Where</p>
<p>0 = (default) declined to answer / don’t use at all</p>
<p>1 = exposure to this technology</p>
<p>2 = could effectively perform a Junior.-level job using this technology</p>
<p>3 = could effectively perform a Mid-level job using this technology</p>
<p>4 = could effectively perform a Senior-level job using this technology</p>
<p>5 = absolute rockstar, could effectively teach a class at a university about this technology</p>


    <div className="form-group">
    <label htmlFor="Skills">Skill</label>
    <input onChange={props.handleSkillChange} type="text" className="form-control" id="Skill" />
    </div>
    <div className="form-group">
    <label htmlFor="Points">Points</label>
    <input onChange={props.handlePointsChange} type="text" className="form-control" id="Points" />
    </div>
    <div className="form-group">
    <label htmlFor="Points">Skill Type</label>
    <input onChange={props.handleSkillTypeChange} type="text" className="form-control" id="SkillType" />
    </div>
    <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
    </form>

    </div>

    </div>
    </div>



export default selfSurveyForm;
