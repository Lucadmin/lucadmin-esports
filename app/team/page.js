import React from "react";
import Image from "next/image";
import teamPageMac from "@/app/images/team-page-mac.png";
import teamPageMobile from "@/app/images/team-page-mobile.png";
import Outlined from "@/app/components/typography/outlined";
import H1 from "@/app/components/typography/h1";

const TeamPage = () => {
  return (
    <div
      className={
        "flex h-screen w-full flex-col items-center justify-center gap-16"
      }
    >
      <H1>
        <Outlined>Coming</Outlined> soon
      </H1>
      <div className={"relative w-1/2"}>
        <Image
          src={teamPageMac}
          alt={"Upcoming team page on Mac"}
          className={"relative top-0 left-0 w-full"}
        />
        <Image
          src={teamPageMobile}
          alt={"Upcoming team page on mobile"}
          className={"absolute top-0 left-0 w-full"}
        />
      </div>
    </div>
  );
};

export default TeamPage;
