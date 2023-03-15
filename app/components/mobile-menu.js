"use client";
import React from "react";
import Image from "next/image";
import logoSrc from "@/app/images/logo.svg";
import Link from "next/link";
import { Close } from "@carbon/react/icons";
import LameButton from "@/app/components/buttons/LameButton";

// full screen menu with the navigation icons aligned vertically on the bottom right of the screen
// having a animation that makes the menu slide in from the right
const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={
        "fixed z-30 h-screen w-screen bg-xiketic transition-all" +
        (isOpen ? " " : " translate-x-full")
      }
      onClick={() => setIsOpen(false)}
    >
      <div className={"flex h-full flex-col p-10"}>
        <div
          className={"flex h-full flex-col items-center justify-between gap-5"}
        >
          <div className={"flex w-full flex-row items-center justify-between"}>
            <Link href={"/"} className={"w-full items-start"}>
              <div className={"flex h-full flex-row items-center gap-2"}>
                <Image
                  src={logoSrc}
                  alt={"Lucadmin logo"}
                  className={"-my-2 h-24 w-24"}
                />
                <div className={"flex flex-col"}>
                  <div>Lucadmin</div>
                  <div>eSports</div>
                </div>
              </div>
            </Link>
            <Close size={32} />
          </div>
          <div className={"flex w-full flex-col items-end gap-5"}>
            <Link href={"/"} className={"text-2xl text-white"}>
              Home
            </Link>
            <Link href={"/about-us"} className={"text-2xl text-white"}>
              About us
            </Link>
            <Link href={"/baet"} className={"text-2xl text-white"}>
              Project BAET
            </Link>
            <Link href={"/team"} className={"text-2xl text-white"}>
              Team
            </Link>
            <div>
              <LameButton
                classname={"-my-2"}
                onClick={() => {
                  window
                    .open("https://form.jotform.com/221585905935061", "_blank")
                    .focus();
                }}
              >
                Apply now
              </LameButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
