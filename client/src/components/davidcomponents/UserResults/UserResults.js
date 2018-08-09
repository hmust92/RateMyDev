import React from "react";
import "./UserResults.css";

const UserResults = props => (
  <div className="list-group search-results">
    {props.results.map(result => (
      <li key={result._id} className="list-group-item devSearchProfile">
        <a target="_blank" id="userLinks" href={`/profile/${result._id}`}>
          <div className="row">
            <div className="col-sm-4 col-md-2">
              <div className="searchPicContainer">
                <img className="smallSearchPic" src={result.profilePicURL} style={{ width: '100%' }} alt="Avatar" />
              </div>
            </div>
            
            <div className="col-sm-6 col-md-3">
                 <p><i className="fas fa-file-signature userResultsLogos"></i> {result.firstName} {result.lastName}</p>
                 <p><i className="fa fa-briefcase userResultsLogos"></i> {result.jobTitle}</p>
                 <p><i className="fa fa-home userResultsLogos"></i> {result.location}</p>
                 <p><i className="fa fa-envelope userResultsLogos"></i> {result.email}</p>
            </div>
            <div className="col-xs-10 col-sm-12 col-md-7">
                 <p><i className="fa fa-user userResultsLogos"></i> {result.aboutYou}</p>
                 <div><i className="fa fa-laptop userResultsLogos"></i>  
                    {result.selfSurveys.map(selfSurvey => (
                        <span className="skillTagDiv" key={selfSurvey._id}>
                          <p className="skillTagP">{`${selfSurvey.technicalTag}`}</p>
                        </span>  
                    ))}
                 </div>
            </div>

          </div>
        </a>
      </li>
    ))}
  </div>
);

export default UserResults;

