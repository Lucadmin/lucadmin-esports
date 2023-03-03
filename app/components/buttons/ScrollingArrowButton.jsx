"use client";
import { ArrowDown } from "@carbon/react/icons";
import React from "react";

const ScrollingArrowButton = () => {
  return (
    <div
      className={
        "absolute bottom-0 m-5 flex w-full cursor-pointer justify-center"
      }
      onClick={() => {
        document.body.scrollBy({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }}
    >
      <ArrowDown />
    </div>
  );
};

export default ScrollingArrowButton;
