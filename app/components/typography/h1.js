import React from "react";
import { typographyVariants } from "@/utils/typography-variants";
import Outlined from "@/app/components/typography/outlined";

const H1 = ({
  children,
  className,
  outlineColor = undefined,
  variant = "h1",
}) => {
  return (
    <h1 className={typographyVariants[variant] + " " + className}>
      {outlineColor ? (
        <Outlined outlineColor={outlineColor}>{children}</Outlined>
      ) : (
        children
      )}
    </h1>
  );
};

export default H1;
