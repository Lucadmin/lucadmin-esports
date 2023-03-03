"use client";
import React from "react";
import TextInput from "@carbon/react/lib/components/TextInput";
import TextArea from "@carbon/react/lib/components/TextArea";
import LameButton from "@/app/components/buttons/LameButton";
import { Formik } from "formik";
import axios from "axios";

const LandingPageForm = () => {
  return (
    <Formik
      initialValues={{
        "contact-mail": "",
        "contact-name": "",
        "contact-message": "",
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // send post request to backend at /api/contact-us
        setSubmitting(true);
        axios
          .post("/api/contact-us", {
            mail: values["contact-mail"],
            name: values["contact-name"],
            message: values["contact-message"],
          })
          .then((res) => {
            setSubmitting(false);
            resetForm();
          })
          .catch((err) => {
            setSubmitting(false);
            console.log(err);
          });
      }}
    >
      {({ handleSubmit, handleChange, values, isSubmitting }) => (
        <form className={"flex flex-col gap-4"}>
          <TextInput
            id="contact-mail"
            name={"contact-mail"}
            labelText={"Your Email address"}
            onChange={handleChange}
            value={values["contact-mail"]}
          />
          <TextInput
            id="contact-name"
            labelText={"Your name"}
            onChange={handleChange}
            value={values["contact-name"]}
          />
          <TextArea
            id="contact-message"
            labelText={"Your message"}
            name={"contact-message"}
            onChange={handleChange}
            value={values["contact-message"]}
          />
          <LameButton
            classname={"max-w-fit"}
            onClick={handleSubmit}
            clicked={isSubmitting}
          >
            Send
          </LameButton>
        </form>
      )}
    </Formik>
  );
};

export default LandingPageForm;
