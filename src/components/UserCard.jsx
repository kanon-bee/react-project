import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const UserCard = ({ user }) => {
  const firstLetter = user.name.charAt(0);

  return (
    <Link to={`/users/${user.id}`}>
      <div className="column">
        <div className="card">
          <div className="circle">
            <div className="first-letter">{firstLetter}</div>
          </div>
          <div className="container list-group-item list-group-item-action justify-content-between">
            <h4>
              <b>{user.name}</b>
            </h4>
            <i>@{user.username}</i>
            <br />
            <u>{user.website}</u>
            <Button />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
