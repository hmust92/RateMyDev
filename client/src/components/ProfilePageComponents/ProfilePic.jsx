import React from "react";

const ProfilePic = props => {
    
    return (
    <div className="w3-display-container">
        <img src={props.devContactInfo.profilePicURL} style={{ width: '100%' }} alt="Avatar" />
        <div className="w3-display-bottomleft w3-container w3-text-black">
            <h2>{props.devContactInfo.firstName} {props.devContactInfo.lastName}</h2>
        </div> 
    </div>
    )


}

export default ProfilePic;
