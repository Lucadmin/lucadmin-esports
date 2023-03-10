import React from "react";
import { typographyVariants } from "@/utils/typography-variants";
import Outlined from "@/app/components/typography/outlined";

const H4 = ({
  children,
  className,
  outlineColor = undefined,
  variant = "h4",
}) => {
  return (
    <h4 className={typographyVariants[variant] + " " + className}>
      {outlineColor ? (
        <Outlined outlineColor={outlineColor}>{children}</Outlined>
      ) : (
        children
      )}
    </h4>
  );
};

export default H4;
