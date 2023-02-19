import React from 'react';
import {typographyVariants} from "@/utils/typography-variants";
import Outlined from "@/app/components/typography/outlined";

const H3 = (
    {
      children,
      className,
      outlineColor = undefined,
      variant = "h3"
    }) => {

  return (
      <h3 className={typographyVariants[variant] + " " + className}>
        {outlineColor ? <Outlined outlineColor={outlineColor}>
          {children}
        </Outlined> : children}
      </h3>
  );
};

export default H3;
