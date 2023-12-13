"use client";
import Image from "next/image";
import { weDoItems } from "@/app/const";

function Page({ params }) {
  const id = params.id - 1;

  return (
    <div className="box flex flex-col	items-center">
      <Image src={weDoItems[id].img} alt="???" className="center w-[50%]" />
      <h2 className="boxTitile text-[red]">{weDoItems[id].title}</h2>
      <h3 className="boxSubtitile">{weDoItems[id].moreInfo}</h3>
    </div>
  );
}

export default Page;
