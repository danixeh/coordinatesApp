import React from "react";

const Clients = ({ client }) => {
  return (
    <div>
      <img className="clients-img" src={client.img} alt="" />
    </div>
  );
};

export default Clients;
