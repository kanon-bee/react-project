import React, { useState, useEffect } from "react";
import Api from "../api/integAPI";
import { useParams } from "react-router-dom";
import Info from "./Info";

const InfoCard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const results = await Api.get(`/users/${id}`);
      setUserInfo(results.data);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  const renderInfo = () => {
    return <Info userInfo={userInfo} />;
  };
  return <div>{renderInfo()}</div>;
};

export default InfoCard;
