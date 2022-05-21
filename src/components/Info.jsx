import React from "react";

const Info = ({ userInfo }) => {
  console.log(userInfo);

  return (
    <div className="info-card">
      <ul>-name: {userInfo?.name}</ul>
      <ul>-username: {userInfo?.username}</ul>
      <ul>-email: {userInfo?.email}</ul>
      <ul>-phone: {userInfo?.phone}</ul>
      <ul>-company: {userInfo?.company?.name}</ul>
      <ul>-website: {userInfo?.website}</ul>
      <ul>
        -address:
        <li>street: {userInfo?.address?.street}</li>
        <li>suite: {userInfo?.address?.suite}</li>
        <li>city: {userInfo?.address?.city}</li>
        <li>zipcode: {userInfo?.address?.zipcode}</li>
      </ul>
    </div>
  );
};

export default Info;
