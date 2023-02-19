"use client";
import React from "react";
import TextInput from "@carbon/react/lib/components/TextInput";
import TextArea from "@carbon/react/lib/components/TextArea";
import LameButton from "@/app/components/buttons/LameButton";

const LandingPageForm = () => {
  return (
    <form className={"flex flex-col gap-4"}>
      <TextInput id="contact-mail" labelText={"Your Email address"} />
      <TextInput id="contact-name" labelText={"Your name"} />
      <TextArea id="contact-message" labelText={"Your message"} />
      <LameButton classname={"max-w-fit"}>Send</LameButton>
    </form>
  );
};

export default LandingPageForm;
