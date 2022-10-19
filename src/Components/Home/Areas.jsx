import React from "react";

const areas = ({ area }) => {
  // const isNumber ()) => {
  //     const isEntire =
  //     if (number.isInteger(area / 2){

  //     }
  // }

  return (
    <div className="area-bd">
      <h3
        className={
          area.project / 2 === parseInt(area.project / 2, 10)
            ? "area-tone-green"
            : "area-tone-yellow"
        }
      >
        {area.project}
      </h3>
      <h3
        className={
          area.project / 2 === parseInt(area.project / 2, 10)
            ? "area-ttwo-green"
            : "area-ttwo-yellow"
        }
      >
        {area.subject}
      </h3>
      <p className="area-p">{area.description}</p>
    </div>
  );
};

export default areas;
