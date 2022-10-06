import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div>
      <div>
        <h2 style={{textAlign: "center"}}> FullName: {props.fullName}</h2>
      </div>
      <div style={{marginTop: "30px"}}>
        <span><strong>Bio:</strong> {props.bio}</span>
      </div>
      <div style={{margin:"10px 0"}}>
        <span> <strong>Profession</strong>: {props.profession}</span>
      </div>
      <div style={{marginLeft:"75px"}}>
      <img src={props.children} alt="profile-img" width={350} />
      <div>
      <button onClick={() => props.alertMyInput(props.fullName)}>
        ClickMe
      </button>
      </div>
      </div>
    </div>
  );
};
Profile.defaultProps = {
  fullName: "Imen Jlassi",
  bio:"Another day, another chance!!",
  profession:"Dreamer ☾"
};

Profile.propTypes = {
 fullName: PropTypes.string,
 bio: PropTypes.string,
 profession: PropTypes.string,
 children: PropTypes.string,
 alertMyInput: PropTypes.func
};

export default Profile;
