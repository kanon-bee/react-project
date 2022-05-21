import React, { useEffect, useState } from "react";
import axios from "axios";
// import Api from "../api/integAPI";
import UserCard from "./UserCard";

const NameList = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await Api.get("/users");
  //     setUsers(response.data);
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      setUsers(res.data);
    }).catch(err => {
      console.log(err);
    })
  })

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
