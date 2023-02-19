import React from 'react';
import {subtitle1} from "@/utils/typography-variants";

const Subtitle1 = ({children, className}) => {
  return (
      <p className={subtitle1 + " " + className}>
        {children}
      </p>
  );
};

export default Subtitle1;
