import React from "react";
import propTypes from "prop-types";

function ProfileComponent(props) {
  return (
    <div>
      {props.children}
      <h1 style={{ color: "brown" }}>{props.FullName}</h1>
      <p>{props.bio}</p>
      <h3>{props.profession}</h3>
      <button onClick={() => props.handle(props.FullName)}>Who I am ?</button>
    </div>
  );
}
ProfileComponent.defaultProps = {
  FullName: "Ball player Name",
  bio: "nothing",
  profession: "player",
};

ProfileComponent.prototype = {
  FullName: propTypes.string,
  bio: propTypes.string,
  profession: propTypes.string,
};

export default ProfileComponent;
