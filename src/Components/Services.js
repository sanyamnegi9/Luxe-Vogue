import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-12 sm:mx-4 md:flex-row">
      <div className="w-[16rem] py-2 flex flex-col items-center">
        <FontAwesomeIcon icon={faTruckFast} fade size="2xl" />
        <p>Free shipping over ₹500</p>
      </div>
      <div className="w-[16rem] py-2 flex flex-col items-center">
        <FontAwesomeIcon icon={faRotateLeft} spin spinReverse size="2xl" />
        <p>Easy Return</p>
      </div>
      <div className="w-[16rem] py-2 flex flex-col items-center">
        <FontAwesomeIcon icon={faPaperPlane} fade size="2xl" />
        <p>Questions? contact Us</p>
      </div>
    </div>
  );
};

export default Services;
