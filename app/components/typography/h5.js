import React from 'react';
import {typographyVariants} from "@/utils/typography-variants";
import Outlined from "@/app/components/typography/outlined";

const H5 = (
    {
      children,
      className,
      outlineColor = undefined,
      variant = "h5"
    }) => {

  return (
      <h6 className={typographyVariants[variant] + " " + className}>
        {outlineColor ? <Outlined outlineColor={outlineColor}>
          {children}
        </Outlined> : children}
      </h6>
  );
};

export default H5;
