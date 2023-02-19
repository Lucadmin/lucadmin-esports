"use client"
import React, {useEffect, useState} from 'react';
import LameButton from "@/app/components/buttons/LameButton";
import Image from "next/image";
import logoSrc from "@/app/images/logo.svg"
import Link from "next/link";
import {Menu} from "@carbon/react/icons";

const NavBar = () => {

  const [scrollPosition, setScrollPosition] = useState({before: 0, diff: 0})
  const [position, setPosition] = useState(0)
  const handleScroll = () => {
    setPosition(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true})

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setScrollPosition({
      before: position,
      diff: scrollPosition.before - position
    })
  }, [position])

  return (
      <nav
          className={"flex flex-row items-center justify-between fixed w-full px-4 py-2 z-20 transition-transform ease-in-out" + " " + (scrollPosition.diff > 0 || position === 0 ? '' : '-translate-y-20')}>
        <Link href={"/"}>
          <div className={"flex flex-row items-center gap-2"}>
            <Image src={logoSrc} alt={"Lucadmin logo"} className={"h-24 w-24 -my-2"}/>
            <div className={"flex flex-col"}>
              <div>Lucadmin</div>
              <div>eSports</div>
            </div>
          </div>
        </Link>
        <div className={"hidden sm:flex gap-5"}>
          <Link href={"/"}>Home</Link>
          <Link href={"/about-us"}>About us</Link>
          <Link href={"/baet"}>Project BAET</Link>
          <Link href={"/team"}>Team</Link>
        </div>
        <div className={"hidden sm:flex"}>
          <LameButton classname={"-my-2"} onClick={() => {
            window.open('https://form.jotform.com/221585905935061', '_blank').focus()
          }}>Apply now</LameButton>
        </div>
        <div className={"flex sm:hidden"}>
          <Menu className={"h-10 w-10"}/>
        </div>
      </nav>
  );
};

export default NavBar;
