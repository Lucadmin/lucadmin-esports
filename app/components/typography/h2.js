import React from "react";
import { typographyVariants } from "@/utils/typography-variants";
import Outlined from "@/app/components/typography/outlined";

const H2 = ({
  children,
  className,
  outlineColor = undefined,
  variant = "h2",
}) => {
  return (
    <h2 className={typographyVariants[variant] + " " + className}>
      {outlineColor ? (
        <Outlined outlineColor={outlineColor}>{children}</Outlined>
      ) : (
        children
      )}
    </h2>
  );
};

export default H2;
