import React from "react";
import { Link } from "react-router-dom";

const stylesb = {
  textDecoration: "none",
  color: "white",
};

export const Profile = () => {

  return (
    <div className="container text-center">
        <h1 className="bg-warning">You have a valid JWT-Token!</h1>
    </div>
  );
};