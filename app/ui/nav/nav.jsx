import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../assets/logo.svg";
import { navList } from "@/app/const";

function nav() {
  return (
    <div className="nav">
      <div className="container flex justify-between">
        <div className="logo">
          <Image src={logo} alt="logo" />
        </div>
        <ul className="flex items-center gap-[20px]">
          {navList.map((item) => {
            return (
              <Link className="navBarItems" key={item.id} href={item.url}>
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default nav;
