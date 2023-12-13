import Image from "next/image";
import React from "react";
import finishedProd1 from "../../../assets/finishedProd/finishedProd1.png";
import finishedProd2 from "../../../assets/finishedProd/finishedProd2.png";
import finishedProd3 from "../../../assets/finishedProd/finishedProd3.png";

function finishedProjects() {
  return (
    <div className="finishedProjects">
      <div className="container">
        <div className="finishedProdText">
          <h1 className="finishedProdTitle">
            Our Finished <br /> Project
          </h1>
          <p className="finishedProdSubtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="projectsBox">
          <div className="smartHome">
            <Image className="finishedProd1" src={finishedProd1} alt="" />
          </div>
          <div className="sparliteApp">
            <Image className="finishedProd2" src={finishedProd2} alt="" />
          </div>
          <div className="carRapitationApp">
            <Image className="finishedProd3" src={finishedProd3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default finishedProjects;
