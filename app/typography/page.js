import React from 'react';
import H1 from "@/app/components/typography/h1";
import H2 from "@/app/components/typography/h2";
import H3 from "@/app/components/typography/h3";
import H4 from "@/app/components/typography/h4";
import H5 from "@/app/components/typography/h5";
import H6 from "@/app/components/typography/h6";
import Subtitle1 from "@/app/components/typography/Subtitle1";
import Subtitle2 from "@/app/components/typography/Subtitle2";

const TypographyPage = () => {
  return (
      <div>
        <H1>Heading One</H1>
        <H2>Heading Two</H2>
        <H3>Heading Three</H3>
        <H4>Heading Four</H4>
        <H5>Heading Five</H5>
        <H6>Heading Six</H6>
        <Subtitle1 className={"text-majorelleBlue"}>Subtitle One</Subtitle1>
        <Subtitle2 className={"text-majorelleBlue"}>Subtitle Two</Subtitle2>
        <p>Body</p>
      </div>
  );
};

export default TypographyPage;
