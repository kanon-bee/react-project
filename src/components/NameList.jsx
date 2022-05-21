import React, { useEffect, useState } from "react";

import Api from "../api/integAPI";
import UserCard from "./UserCard";

const NameList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Api.get("/users");
      setUsers(response.data);
    };

    fetchData();
  }, []);

  const renderUsers = () => {
    return (
      <ul>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </ul>
    );
  };
  return <div>{renderUsers()}</div>;
};

export default NameList;
