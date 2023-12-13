import { weDoItems } from "@/app/const";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import learnMore from "../../../assets/learnMore.svg";

function weDo() {
  return (
    <div className="weDo">
      <div className="container">
        <h1 className="weDoTitle">
          What we do to help our client grow in digital era,
        </h1>
        <div className="weDoItems">
          {weDoItems.map((item) => {
            return (
              <div className="box" key={item.id}>
                <Image src={item.img} alt="???" className="center w-[350px]" />
                <h2 className="boxTitile">{item.title}</h2>
                <h3 className="boxSubtitile">{item.subtitle}</h3>
                <Link className="learnMoreBTN" href={`/ourprojects/${item.id}`}>
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
}

export default weDo;
