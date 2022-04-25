import React from "react";

const CardJob = ({ item }) => {
  return (
    <div className="card cw">
      <div className="card__body">
        <h2>{item?.position}</h2>
      </div>
    </div>
  );
};

export default CardJob;
