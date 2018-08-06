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
                    <div class="row">
                      <div class="col-md-5 offset-md-1">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text">First Name</span>
                              </div>
                              <input onChange={props.handleFirstNameChange} type="text" placeholder="Enter your first name" class="form-control" id="FirstName"/>
                          </div>
                      </div>

                      <div class="col-md-5">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text">Last Name</span>
                              </div>
                              <input onChange={props.handleLastNameChange} type="text" placeholder="Enter your last name" class="form-control" id="LastName"/>
                          </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-5 offset-md-1">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text">Profile Picture</span>
                              </div>
                              <input onChange={props.handleProfilePicChange} type="url" placeholder="https://image-link.com" class="form-control" id="ProfilePic"/>
                          </div>
                      </div>

                      <div class="col-md-5">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text">Phone</span>
                              </div>
                              <input onChange={props.handlePhoneChange} type="text" placeholder="555-555-5555" class="form-control" id="Phone"/>
                          </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-5 offset-md-1">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text">Zipcode</span>
                              </div>
                              <input onChange={props.handleZipcodeChange} type="text" placeholder="#####" class="form-control" id="Zipcode"/>
                          </div>
                      </div>

                      <div class="col-md-5">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text">Willing to Relocate?</span>
                              </div>
                              <select class="form-control" onChange={props.handleRelocationChange} type="text" class="form-control" id="Relocation">
                                <option value="Maybe">Maybe</option>
                                <option value="Yes">Yes</option>
			                          <option value="No">No</option>
                              </select>
                          </div>
                      </div>
                    </div>  

                    <div class="row">
                      <div class="col-md-5 offset-md-1">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text">LinkedIn</span>
                              </div>
                              <input onChange={props.handleLinkedInChange} type="text" placeholder="https://www.linkedin.com/in/john-doe34/" class="form-control" id="LinkedIn"/>
                          </div>
                      </div>

                      <div class="col-md-5">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text">Github</span>
                              </div>
                              <input onChange={props.handleGithubChange} type="text" placeholder="https://github.com/mastercoder" class="form-control" id="Github"/>
                          </div>
                      </div>
                    </div>  
            
                    <div class="row">
                      <div class="col-md-10 offset-md-1">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text">About You</span>
                              </div>
                              <textarea onChange={props.handleAboutYouChange} class="form-control" cols="40" id="AboutYou" type="text" rows="10"></textarea>
                          </div>
                      </div>
                    </div>               

                    <br/>
                    <br/>

                    <div class="row">
                      <div class="col-md-5 offset-md-1">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text">Technical Skill</span>
                              </div>
                              <input onChange={props.handleSkillChange} type="text" class="form-control" id="Skill"/>
                          </div>
                      </div>

                      <div class="col-md-5">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text">Points</span>
                              </div>
                              <select class="form-control" onChange={props.handlePointsChange} type="text" class="form-control" id="Points">
                                <option value="0">0 = (Default) Declined to Answer / Don’t Use at All</option>
                                <option value="1">1 = Exposure to this Technology</option>
                                <option value="2">2 = Could Effectively Perform a Junior-Level Job using this Technology</option>
                                <option value="3">3 = Could Effectively Perform a Mid-Level Job using this Technology</option>
                                <option value="4">4 = Could Effectively Perform a Senior-Level Job using this Technology</option>
                                <option value="5">5 = Absolute Rockstar, could Effectively Teach a Class at a University about this Technology</option>
                              </select>
                          </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-5 offset-md-1">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text">Soft Skill</span>
                              </div>
                              <select class="form-control" onChange={props.handleSoftSkillChange} type="text" class="form-control" id="SoftSkill">
                                <option value="Work Ethic">Work Ethic</option>
                                <option value="Communication Skills">Communication Skills</option>
                                <option value="Creative Problem Solving">Creative Problem Solving</option>
                                <option value="Time Management">Time Management</option>
                                <option value="Ability to Work on a Team">Ability to Work on a Team</option>
                              </select>                              
                          </div>
                      </div>

                      <div class="col-md-5">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text">Rating</span>
                              </div>
                              <select class="form-control" onChange={props.handleSoftPointsChange} type="text" class="form-control" id="SoftPoints">
                                <option value="0">0 = declined to answer</option>
                                <option value="1">1 = not strong at all</option>
                                <option value="2">2 = weak</option>
                                <option value="3">3 = average</option>
                                <option value="4">4 = above average</option>
                                <option value="5">5 = absolute rockstar</option>
                              </select>
                          </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-10 offset-md-1">
                          <div className="form-group">
                            <label htmlFor="Points">Skill Type</label>
                            <input onChange={props.handleSkillTypeChange} type="text" className="form-control" id="SkillType" />
                          </div>
                      </div>    
                    </div>      

                    <br/>
                    <br/>

                    <div class="row">
                      <div class="col-md-10 offset-md-1">
                        <div className="form-group">
                          <label htmlFor="Impossible">If your manager asked you to complete a task you thought impossible at first, how would you go about it?</label>
                          <input onChange={props.handleImpossibleChange} type="text" className="form-control" id="Impossible"/>
                        </div> 
                      </div>
                    </div>  

                    <div class="row">
                      <div class="col-md-10 offset-md-1">
                        <div className="form-group">
                          <label htmlFor="Deadline">Tell me about a time you missed (or almost missed) a deadline. How did you react when you realized you were falling behind? What did that experience teach you? </label>
                          <input onChange={props.handleDeadlineChange} type="text" className="form-control" id="Deadline" />
                        </div> 
                      </div>
                    </div>     

                    <div class="row">
                      <div class="col-md-10 offset-md-1">
                        <div className="form-group">
                          <label htmlFor="Team">Do you prefer working in a team or on your own? Why? </label>
                          <input onChange={props.handleTeamChange} type="text" className="form-control" id="Team" />
                        </div> 
                      </div>
                    </div>  

                    <div class="row">
                      <div class="col-md-10 offset-md-1">
                        <div className="form-group">
                          <label htmlFor="Personality">If you could change one thing about your personality at the snap of your fingers what would it be and why?</label>
                          <input onChange={props.handlePersonalityChange} type="text" className="form-control" id="Personality"/>
                        </div> 
                      </div>
                    </div>  

                    <div class="row">
                      <div class="col-md-10 offset-md-1">
                        <div className="form-group">
                          <label htmlFor="Dissatisfaction">Tell me about a time your manager wasn’t satisfied with the results of your work. How did you discuss the issues and what did you do differently the next time?</label>
                          <input onChange={props.handleDissatisfactionChange} type="text" className="form-control" id="Dissatisfaction" />
                        </div> 
                      </div>
                    </div>  

                    <div class="row">
                      <div class="col-md-10 offset-md-1">
                        <div className="form-group">
                          <label htmlFor="Dissatisfaction">What are you passionate about? (Causes, Activities, Hobbies, etc.)</label>
                          <input onChange={props.handlePassionChange} type="text" className="form-control" id="Passion" />
                        </div> 
                      </div>
                    </div>  

                    <br/>


                    <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
                  
                  </form>

              {/* </div>
            </div> */}
          </div>

          <button onClick={props.handleClose}>close</button>
        </section>
      </div>
    );
  };

export default Modal;