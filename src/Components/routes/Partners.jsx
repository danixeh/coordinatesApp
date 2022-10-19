import React from "react";
import OurPartners from "../Home/OurPartners";
import partnersDB from "../../data/partnersdb";
import PartnersList from "../Partners/PartnersList";
import partnerscs from "../Partners/partnerscs.css";

PartnersList;
const Partners = () => {
  return (
    <div className="home">
      <div className="media-m-partners">
        {partnersDB?.map((partner) => (
          <PartnersList key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
