import React from "react";

const PartnersList = ({ partner }) => {
  return (
    <div className="partners-list">
      <img className="img-partners-list" src={partner.img} alt="" />
    </div>
  );
};

export default PartnersList;
