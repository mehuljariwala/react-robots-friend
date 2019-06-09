import React from "react";
import Card from "../Card/Card";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((user, index) => (
    <Card name={user.name} id={user.id} key={index} />
  ));
  return <>{cardComponent}</>;
};

export default CardList;
