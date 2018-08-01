import React from "react";

const selfSurveyForm = (props) => 

    <div className="container">
    <div className="row">
    <div className="col-lg-12">

    <form>
    <div className="form-group">
    <label htmlFor="Skills">Skill</label>
    <input onChange={props.handleSkillChange} type="text" className="form-control" id="Skill" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
    <label htmlFor="Points">Points</label>
    <input onChange={props.handlePointsChange} type="text" className="form-control" id="Points" />
    </div>
    <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
    </form>

    </div>

    </div>
    </div>



export default selfSurveyForm;
