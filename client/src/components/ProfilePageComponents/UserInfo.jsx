import React from "react";

const UserInfo = props => {

    return (
        <div>
            <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-indigo" />{props.devContactInfo.jobTitle}</p>
            <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-indigo" />{props.devContactInfo.location}</p>
            <p><i className="fas fa-user-circle fa-fw w3-margin-right w3-large w3-text-indigo" /><a target="_blank" href={props.devContactInfo.portfolioURL}>Portfolio</a></p>
            <p><i className="fa fa-linkedin fa-fw w3-margin-right w3-large w3-text-indigo" /><a target="_blank" href={props.devContactInfo.linkedInURL}>LinkedIn</a></p>
            <p><i className="fa fa-github fa-fw w3-margin-right w3-large w3-text-indigo" /><a target="_blank" href={props.devContactInfo.githubURL}>Github</a></p>
            <p><i className="fa fa-plane fa-fw w3-margin-right w3-large w3-text-indigo" />Willing to Relocate: {props.devContactInfo.relocation}</p>
            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-indigo" />{props.devContactInfo.email}</p>
            <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-indigo" />{props.devContactInfo.phoneNumber}</p>
        </div>
    )

}

export default UserInfo;
