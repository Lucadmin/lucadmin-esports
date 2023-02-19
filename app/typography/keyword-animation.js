"use client";
import React, { useEffect, useState } from "react";
import AnimatedText from "@/app/typography/animated-text";

const keywords = [
  "Professionality",
  "Fun",
  "Winning",
  "Mindset",
  "Growth",
  "Lucadmin",
];

const KeyWordAnimation = () => {
  const [keywordIndex, setKeywordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (keywordIndex === keywords.length - 1) {
        setKeywordIndex(0);
        return;
      }
      setKeywordIndex(keywordIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [keywordIndex]);

  return (
    <div>
      <AnimatedText>{keywords[keywordIndex]}</AnimatedText>
      <br /> is key
    </div>
  );
};

export default KeyWordAnimation;
