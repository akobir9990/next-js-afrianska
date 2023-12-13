import React from "react";
import { weDoItems } from "../const";
import Image from "next/image";
import Link from "next/link";
import learnMore from "../../assets/learnMore.svg";
import { Header, Nav } from "../ui";

function Projects() {
  return (
    <div>
      <Nav />
      {weDoItems.map((item) => {
        return (
          <div key={item.id} className="weDo">
            <div className="container">
              <h1 className="weDoTitle">Our projects </h1>
              <div className="weDoItems flex-col">
                {weDoItems.map((item) => {
                  return (
                    <div className="projectBox w-[500px]" key={item.id}>
                      <Image
                        src={item.img}
                        alt="???"
                        className="center w-[350px]"
                      />
                      <h2 className="boxTitile projectBoxTitle">
                        {item.title}
                      </h2>
                      <h3 className="boxSubtitile projectBoxSubtitile">
                        {item.moreInfo}
                      </h3>
                      <Link
                        className="learnMoreBTN"
                        href={`/ourprojects/${item.id}`}
                      >
                        Learn more
                        <Image src={learnMore} alt="" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
