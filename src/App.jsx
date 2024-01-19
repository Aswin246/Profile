import React, { useState } from "react";
import Profile from "./profile";
import { profileSchema } from "./schema";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [profiles, setProfiles] = useState([]);

  function addProfile() {
    try {
      profileSchema.parse({ name, age, description });
      setProfiles([...profiles, { name, age, description }]);

      setName("");
      setAge("");
      setDescription("");
    } catch (validationError) {
      console.error("Validation error:", validationError.errors);
    }
  }

  return (
    <>
      {profiles.map((profile, index) => (
        <Profile
          key={index}
          name={profile.name}
          age={profile.age}
          description={profile.description}
        />
      ))}
      <div>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        Age:
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button onClick={addProfile}>Add Profile</button>
    </>
  );
}

export default App;
