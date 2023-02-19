import React from 'react';
import H2 from "@/app/components/typography/h2";

const Offering = ({title, children}) => {
  return (
      <div className={"min-w-[28rem]"}>
        <H2 className={"text-majorelleBlue"} variant={"h4"}>{title}</H2>
        <p>{children}</p>
      </div>
  );
};

export default Offering;
