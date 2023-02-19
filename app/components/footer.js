import React from 'react';
import Image from "next/image";
import logoBgSrc from "@/app/images/logo-dark-squared.svg"
import logoSrc from "@/app/images/logo.svg"
import H4 from "@/app/components/typography/h4";
import H3 from "@/app/components/typography/h3";
import {Email, LogoTwitter} from "@carbon/react/icons"

const Footer = () => {
  return (
      <footer className={"bg-xiketicLight py-10 px-10 sm:px-20 relative overflow-hidden"}>
        <div className={"absolute right-0 -bottom-[9.3rem] w-[25rem] z-0"}>
          <Image src={logoBgSrc} alt={""} className={"w-full"}/>
        </div>
        <div className={"grid grid-cols-2 sm:grid-cols-4 gap-8 z-20 relative"}>
          <div className={"order-4 col-span-2 sm:col-span-1 sm:order-1 flex flex-col gap-2"}>
            <div className={"flex flex-row flex-wrap items-center gap-4"}>
              <Image src={logoSrc} alt={"Lucadmin logo"} className={"h-32 w-32"}/>
              <H4>Lucadmin<br/>eSports</H4>
            </div>
            <p className={"text-xiketic600"}>Unleash your gaming potential with Lucadmin eSports</p>
            <p>Copyright © Lucadmin eSports 2022 | All rights reserved</p>
          </div>
          <div className={"order-1 sm:order-2"}>
            <H3 className={"text-majorelleBlue mb-4"}>eSports</H3>
            <ul className={"list-inside list-none"}>
              <li>Home</li>
              <li>About us</li>
              <li>team</li>
              <li>Application form</li>
            </ul>
          </div>
          <div className={"order-2 sm:order-3"}>
            <H3 className={"text-majorelleBlue mb-4"}>Business & Legal</H3>
            <ul className={"list-inside list-none"}>
              <li>Bootstrapping an eSports team</li>
              <li>Impress</li>
            </ul>
          </div>
          <div className={"order-3 sm:order-4"}>
            <H3 className={"text-majorelleBlue mb-4"}>Contact us</H3>
            <div className={"flex flex-col gap-4"}>
              <div className={"flex flex-row items-center gap-2"}>
                <Email className={"h-8 w-8"}/>
                <a className={"text-majorelleBlue underline"} href={"mailto:hello@lucadmin.de"}>hello@lucadmin.de</a>
              </div>
              <div className={"flex flex-row items-center gap-2"}>
                <LogoTwitter className={"h-8 w-8"}/>
                <a className={"text-majorelleBlue underline"}
                   href={"https://twitter.com/lucadmn_esports"}>@lucadmn_esports</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
