import React from "react";

function Profile({ name, age, description }) {
  return (
    <>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Description: {description}</div>
      <hr />
    </>
  );
}

export default Profile;
