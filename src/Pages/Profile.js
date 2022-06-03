import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { username } = useParams();

  return (
    <div>
      <p>You're on PROFILE PAGE of {username.toLocaleUpperCase()}</p>
      <button onClick={() => navigate("/")}>Go To About</button>
    </div>
  );
};

export default Profile;
