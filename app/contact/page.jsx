import React from "react";
import { Footer, Nav } from "../ui";
import Image from "next/image";
import ContactImg from "../../assets/contactImg.png";

function page() {
  return (
    <div>
      <Nav />
      <div className="contactContent">
        <h1 className="contactTitle">Contact Us</h1>
        <p className="contactSubtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default page;
