import React from 'react';
import {subtitle2} from "@/utils/typography-variants";

const Subtitle2 = ({children, className}) => {
  return (
      <p className={subtitle2 + " " + className}>
        {children}
      </p>
  );
};

export default Subtitle2;
