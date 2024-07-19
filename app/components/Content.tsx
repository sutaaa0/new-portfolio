"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll";
import Image from "next/image";

interface Props {
    src: string;
}

export function Content({src} : Props ) {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Works<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-white">My Works</span>
            </h1>
          </>
        }
      >
        <Image src={src} alt="hero" height={720} width={1400} className="mx-auto rounded-2xl object-cover h-full object-left-top" draggable={false} />
      </ContainerScroll>
    </div>
  );
}
