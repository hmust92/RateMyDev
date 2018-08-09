import React from 'react';


const ModalCommunity = (props) => {
    const showHideClassName = props.showCommunity ? "modal display-block" : "modal display-none";

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

                    

                    <br/>

                    <div className="row modalButtons">
                      <div className="col-md-2 offset-md-4">
                        <button onClick={props.handleCommunitySubmit} type="submit" className="btn btn-success" id="modalButton">Submit</button>
                      </div>
                  
                      <div className="col-md-2">
                        <button className="btn btn-primary" id="modalButton" type="button" onClick={props.handleClose}>Close</button>

                      </div>
                    </div>


                  </form>

          </div>
          
        </section>
      </div>
    );
  };

export default ModalCommunity;