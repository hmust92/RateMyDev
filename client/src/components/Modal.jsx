import React from 'react';

const Modal = (props) => {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {props.children}
          
          <div className="container">
            {/* <div className="row">
              <div className="col-lg-12"> */}

                  <form>
                    <div className="row">
                      <div className="col-md-5 offset-md-1">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text">First Name</span>
                              </div>
                              <input onChange={props.handleFirstNameChange} type="text" placeholder="Enter your first name" className="form-control" id="FirstName"/>
                          </div>
                      </div>

                      <div className="col-md-5">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text">Last Name</span>
                              </div>
                              <input onChange={props.handleLastNameChange} type="text" placeholder="Enter your last name" className="form-control" id="LastName"/>
                          </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-5 offset-md-1">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text">Current Role</span>
                              </div>
                              <input onChange={props.handleJobTitleChange} type="text" placeholder="Enter your current role" className="form-control" id="CurrentRole"/>
                          </div>
                      </div>

                      <div className="col-md-5">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text">Portfolio Link</span>
                              </div>
                              <input onChange={props.handlePortfolioChange} type="text" placeholder="Enter your portfolio link" className="form-control" id="PortfolioLink"/>
                          </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-5 offset-md-1">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text">Profile Picture</span>
                              </div>
                              <input onChange={props.handleProfilePicChange} type="url" placeholder="https://image-link.com" className="form-control" id="ProfilePic"/>
                          </div>
                      </div>

                      <div className="col-md-5">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text">Phone</span>
                              </div>
                              <input onChange={props.handlePhoneChange} type="text" placeholder="555-555-5555" className="form-control" id="Phone"/>
                          </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-5 offset-md-1">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text">Zipcode</span>
                              </div>
                              <input onChange={props.handleZipcodeChange} type="text" placeholder="#####" className="form-control" id="Zipcode"/>
                          </div>
                      </div>

                      <div className="col-md-5">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text">Willing to Relocate?</span>
                              </div>
                              <select defaultValue="DisabledSelect" className="form-control" onChange={props.handleRelocationChange} type="text" id="Relocation">
                                <option value="DisabledSelect" disabled > -- Select an Option -- </option>
                                <option value="Maybe">Maybe</option>
                                <option value="Yes">Yes</option>
			                    <option value="No">No</option>
                              </select>
                          </div>
                      </div>
                    </div>  

                    <div className="row">
                      <div className="col-md-5 offset-md-1">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text">LinkedIn</span>
                              </div>
                              <input onChange={props.handleLinkedInChange} type="text" placeholder="https://www.linkedin.com/in/john-doe34/" className="form-control" id="LinkedIn"/>
                          </div>
                      </div>

                      <div className="col-md-5">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text">Github</span>
                              </div>
                              <input onChange={props.handleGithubChange} type="text" placeholder="https://github.com/mastercoder" className="form-control" id="Github"/>
                          </div>
                      </div>
                    </div>  
            
                    <div className="row">
                      <div className="col-md-10 offset-md-1">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text">About You</span>
                              </div>
                              <textarea onChange={props.handleAboutYouChange} className="form-control" cols="40" id="AboutYou" type="text" rows="5"></textarea>
                          </div>
                      </div>
                    </div>               

                    <br/>
                    <br/>

                    <div className="row">
                      <div className="col-md-5 offset-md-1">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text">Technical Skill</span>
                              </div>
                              <input 
                                // value={props.search}
                                // onChange={props.handleInputChange}
                                onChange={props.handleTechnicalSkillChange}
                                name="stackOverflowSkill"
                                list="stackOverflowSkills"
                                type="text"
                                className="form-control"
                                placeholder="ex: javascript, css, html"
                                id="stackOverflowSkill"
                              />
                            <datalist id="stackOverflowSkills">
                                {props.stackOverflowSkills.map(stackOverflowSkill => <option value={stackOverflowSkill.name} key={stackOverflowSkill.name} />)}
                            </datalist>  
                          </div>
                      </div>

                      <div className="col-md-5">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text">Points</span>
                              </div>
                              <select defaultValue="DisabledSelect" className="form-control" onChange={props.handleTechnicalPointsChange} type="text" id="Points">
                                <option value="DisabledSelect" disabled> -- Select an Option -- </option>
                                {/* <option value="0">0 = (Default) Declined to Answer / Don’t Use at All</option> */}
                                <option value="1">1 = Exposure to this Technology</option>
                                <option value="2">2 = Could Effectively Perform a Junior-Level Job using this Technology</option>
                                <option value="3">3 = Could Effectively Perform a Mid-Level Job using this Technology</option>
                                <option value="4">4 = Could Effectively Perform a Senior-Level Job using this Technology</option>
                                <option value="5">5 = Absolute Rockstar, could Effectively Teach a Class at a University about this Technology</option>
                              </select>
                          </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-5 offset-md-1">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text">Soft Skill</span>
                              </div>
                              <select defaultValue="DisabledSelect" className="form-control" onChange={props.handleSoftSkillChange} type="text" id="SoftSkill">
                                <option value="DisabledSelect" disabled> -- Select an Option -- </option>
                                <option value="Work Ethic">Work Ethic</option>
                                <option value="Communication Skills">Communication Skills</option>
                                <option value="Creative Problem Solving">Creative Problem Solving</option>
                                <option value="Time Management">Time Management</option>
                                <option value="Ability to Work on a Team">Ability to Work on a Team</option>
                              </select>                              
                          </div>
                      </div>

                      <div className="col-md-5">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text">Rating</span>
                              </div>

                              {/* <select class="form-control" onChange={props.handleSoftPointsChange} type="text" class="form-control" id="SoftPoints"> */}  
                              <select defaultValue="DisabledSelect" className="form-control" onChange={props.handleSoftPointsChange} type="text" id="SoftPoints">
                                <option value="DisabledSelect" disabled> -- Select an Option -- </option>
                                <option value="1">1 = Not Strong at All</option>
                                <option value="2">2 = Weak</option>
                                <option value="3">3 = Average</option>
                                <option value="4">4 = Above Average</option>
                                <option value="5">5 = Absolute Rockstar</option>
                              </select>
                          </div>
                      </div>
                    </div>    

                    <br/>
                    <br/>

                    <div className="row">
                      <div className="col-md-10 offset-md-1">
                        <div className="form-group">
                          <label htmlFor="Impossible">If your manager asked you to complete a task you thought impossible at first, how would you go about it?</label>
                          <input onChange={props.handleImpossibleChange} type="text" className="form-control" id="Impossible"/>
                        </div> 
                      </div>
                    </div>  

                    <div className="row">
                      <div className="col-md-10 offset-md-1">
                        <div className="form-group">
                          <label htmlFor="Deadline">Tell me about a time you missed (or almost missed) a deadline. How did you react when you realized you were falling behind? What did that experience teach you? </label>
                          <input onChange={props.handleDeadlineChange} type="text" className="form-control" id="Deadline" />
                        </div> 
                      </div>
                    </div>     

                    <div className="row">
                      <div className="col-md-10 offset-md-1">
                        <div className="form-group">
                          <label htmlFor="Team">Do you prefer working in a team or on your own? Why? </label>
                          <input onChange={props.handleTeamChange} type="text" className="form-control" id="Team" />
                        </div> 
                      </div>
                    </div>  

                    <div className="row">
                      <div className="col-md-10 offset-md-1">
                        <div className="form-group">
                          <label htmlFor="Personality">If you could change one thing about your personality at the snap of your fingers what would it be and why?</label>
                          <input onChange={props.handlePersonalityChange} type="text" className="form-control" id="Personality"/>
                        </div> 
                      </div>
                    </div>  

                    <div className="row">
                      <div className="col-md-10 offset-md-1">
                        <div className="form-group">
                          <label htmlFor="Dissatisfaction">Tell me about a time your manager wasn’t satisfied with the results of your work. How did you discuss the issues and what did you do differently the next time?</label>
                          <input onChange={props.handleDissatisfactionChange} type="text" className="form-control" id="Dissatisfaction" />
                        </div> 
                      </div>
                    </div>  

                    <div className="row">
                      <div className="col-md-10 offset-md-1">
                        <div className="form-group">
                          <label htmlFor="Dissatisfaction">What are you passionate about? (Causes, Activities, Hobbies, etc.)</label>
                          <input onChange={props.handlePassionChange} type="text" className="form-control" id="Passion" />
                        </div> 
                      </div>
                    </div>  

                    <br/>


                    <button onClick={props.handleFormSubmit} onClick={props.handleClose} type="submit" className="btn btn-primary">Submit</button>
                  
                  </form>

              {/* </div>
            </div> */}
          </div>

          <button type="button" onClick={props.handleClose}>close</button>
          
        </section>
      </div>
    );
  };

export default Modal;