import Image from "next/image";
import React from "react";
import footerLogo from "../../../assets/footerLogo.svg";


function footer() {
  return (
    <footer className="footer">
      <div className="container footerContainer">
        <div className="believedClient">
          <div className="believedText">
            <h1 className="title">Our Beloved Client</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <table className="believedTab">
            <tr className="topTable">
              <th className="leftTable">LOGO CLIENT 1</th>
              <th className="centerTable">LOGO CLIENT 2</th>
              <th className="leftTable">LOGO CLIENT 3</th>
            </tr>
            <tr className="bottomTable">
              <th className="leftTable">LOGO CLIENT 4</th>
              <th className="centerTable">LOGO CLIENT 5</th>
              <th className="leftTable">More Client</th>
            </tr>
          </table>
        </div>
        <div className="teamWork">
          <div className="teamWorkContent">
            <div className="workText">
              <h1 className="workTitle">Interested to work with our team?</h1>
              <p className="workSubtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="workButton">
              <button className="workBtn">Let’s Talk</button>
            </div>
          </div>
          <div className="footerContent">
            <hr />
            <div className="footerContact">
              <div className="footerHading">
                <h1 className="footerTitle">
                  <Image src={footerLogo} alt="" />
                  Afrianska
                </h1>
                <ol type="A">
                  <li type="A">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                  <li type="A">+62-812-7313-4321</li>
                  <li type="A">hello.afrian@gmail.com</li>
                </ol>
              </div>
              <div className="footerAbout">
                <h1 className="aboutTitle">About US</h1>
                <ul>
                  <li>About</li>
                  <li>What We Do</li>
                  <li>Project</li>
                  <li>How It Work With Us</li>
                </ul>
              </div>
              <div className="footerSocial">
                <h1 className="socialTitle">Follow US</h1>
                <ul>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>LinkedIn</li>
                  <li>Youtube</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
