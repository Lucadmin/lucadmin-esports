import React from "react";
import Image from "next/image";
import logoBgSrc from "@/app/images/logo-dark-squared.svg";
import logoSrc from "@/app/images/logo.svg";
import H4 from "@/app/components/typography/h4";
import H3 from "@/app/components/typography/h3";
import { Email, LogoTwitter } from "@carbon/react/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className={
        "relative overflow-hidden bg-xiketicLight py-10 px-10 sm:px-20"
      }
    >
      <div className={"absolute right-0 -bottom-[9.3rem] z-0 w-[25rem]"}>
        <Image src={logoBgSrc} alt={""} className={"w-full"} />
      </div>
      <div className={"relative z-20 grid grid-cols-2 gap-8 sm:grid-cols-4"}>
        <div
          className={
            "order-4 col-span-2 flex flex-col gap-2 sm:order-1 sm:col-span-1"
          }
        >
          <div className={"flex flex-row flex-wrap items-center gap-4"}>
            <Link href={"/"}>
              <Image
                src={logoSrc}
                alt={"Lucadmin logo"}
                className={"h-32 w-32"}
              />
            </Link>
            <H4>
              Lucadmin
              <br />
              eSports
            </H4>
          </div>
          <p className={"text-xiketic600"}>
            Unleash your gaming potential with Lucadmin eSports
          </p>
          <p>Copyright © Lucadmin eSports 2022 | All rights reserved</p>
        </div>
        <div className={"order-1 sm:order-2"}>
          <H3 className={"mb-4 text-majorelleBlue"}>eSports</H3>
          <ul className={"list-inside list-none"}>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about-us"}>About us</Link>
            </li>
            <li>
              <Link href={"/team"}>Team</Link>
            </li>
            <li>
              <Link href={"https://form.jotform.com/221585905935061"}>
                Application form
              </Link>
            </li>
          </ul>
        </div>
        <div className={"order-2 sm:order-3"}>
          <H3 className={"mb-4 text-majorelleBlue"}>Business & Legal</H3>
          <ul className={"list-inside list-none"}>
            <li>
              <Link href={"/baet"}>Bootstrapping an eSports team</Link>
            </li>
            <li>
              <Link href={"/impress"}>Impress</Link>
            </li>
          </ul>
        </div>
        <div className={"order-3 sm:order-4"}>
          <H3 className={"mb-4 text-majorelleBlue"}>Contact us</H3>
          <div className={"flex flex-col gap-4"}>
            <div className={"flex flex-row items-center gap-2"}>
              <Email className={"h-8 w-8"} />
              <a
                className={"text-majorelleBlue underline"}
                href={"mailto:hello@lucadmin.de"}
              >
                hello@lucadmin.de
              </a>
            </div>
            <div className={"flex flex-row items-center gap-2"}>
              <LogoTwitter className={"h-8 w-8"} />
              <a
                className={"text-majorelleBlue underline"}
                href={"https://twitter.com/lucadmn_esports"}
              >
                @lucadmn_esports
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
