import React from "react";
import Qzone1 from "../../../assets/qZone1.png";
import Qzone2 from "../../../assets/qZone2.png";
import Qzone3 from "../../../assets/qZone3.png";
import bg from "../../../assets/bg.png";

const Qzone = () => {
  return (
    <div>
      <div className="bg-secondary mt-3 py-3">
        <img src={Qzone1} alt="" />
        <img src={Qzone2} alt="" />
        <img src={Qzone3} alt="" />
      </div>
      <div className="mt-3">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
