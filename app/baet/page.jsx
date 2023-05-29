import React from "react";
import Outlined from "@/app/components/typography/outlined";
import FancyButton from "@/app/components/buttons/FancyButton";
import H1 from "@/app/components/typography/h1";
import H2 from "@/app/components/typography/h2";
import H6 from "@/app/components/typography/h6";
import { electricPurple } from "@/utils/colors";

const BaetPage = () => {
  return (
    <div
      className={
        "relative flex min-h-screen flex-col justify-center px-10 sm:m-10"
      }
    >
      <section
        className={
          "flex h-screen w-full flex-col items-center justify-center gap-5"
        }
      >
        <H1>
          <Outlined>Bootstrapping</Outlined> an eSports Team
        </H1>
        <p className={"my-5 max-w-prose"}>
          Welcome to{" "}
          <span className={"text-majorelleBlue"}>
            Lucadmin eSports Bootstrapping an eSports Team (BAET)
          </span>{" "}
          consulting services. Our team of experienced esports professionals is
          dedicated to helping new professional teams get started and grow in
          the competitive esports scene. With our proven strategies and tactics,
          we can assist you in creating a professional environment that will
          help your team succeed.
        </p>
      </section>
      <div className={"flex w-full flex-col justify-around gap-16 md:flex-row"}>
        <div>
          <H2>Our Services</H2>
          <p className={"mt-3 max-w-prose"}>
            At Lucadmin eSports, we offer a wide range of consulting services to
            starting professional teams. Our services include:
          </p>
        </div>
        <ul
          className={
            "border- mt-5 flex max-w-prose flex-col justify-center gap-2 border-l-2 border-solid border-l-electricPurple p-3 text-base"
          }
        >
          <li>
            <span className={"text-electricPurple"}>
              Providing the right tools:
            </span>{" "}
            We&apos;ll help you select the right hardware and software for your
            team&apos;s needs, ensuring that you have everything you need to
            succeed.
          </li>
          <li>
            <span className={"text-electricPurple"}>Finding team members:</span>{" "}
            Our extensive network of esports professionals can help you find the
            right players and staff members to build your team.
          </li>
          <li>
            <span className={"text-electricPurple"}>Creating the brand:</span>{" "}
            We&apos;ll work with you to create a strong and memorable brand that
            will help your team stand out in the esports scene.
          </li>
          <li>
            <span className={"text-electricPurple"}>Help with contracts:</span>{" "}
            Our legal experts can help you draft contracts and agreements that
            will protect your team&apos;s interests.
          </li>
          <li>
            <span className={"text-electricPurple"}>
              Contacts in the esports scene:
            </span>{" "}
            Our network of contacts in the esports industry can help you get the
            exposure you need to succeed.
          </li>
          <li>
            <span className={"text-electricPurple"}>Management coaching:</span>{" "}
            We&apos;ll provide you with coaching and training on how to
            effectively manage your team and ensure its continued success.
          </li>
          <li>
            <span className={"text-electricPurple"}>And much more:</span> Our
            consulting services are tailored to meet the unique needs of your
            team. If you have a specific need that isn&apos;t listed here, just
            let us know and we&apos;ll do our best to assist you.
          </li>
        </ul>
      </div>
      <div className={"my-32 flex flex-col justify-around gap-16 md:flex-row"}>
        <div className={"w-full"}>
          <H2 className={"mt-5 max-w-prose"}>Our Approach</H2>
          <p className={"max-w-prose"}>
            At Lucadmin eSports, we believe in a collaborative approach to
            consulting. We work closely with our clients to understand their
            goals and objectives, and we develop customized strategies and
            tactics that are tailored to their unique needs. We believe that
            this approach is the key to achieving success in the competitive
            esports scene.
          </p>
        </div>
        <div className={"w-full"}>
          <H2 className={"mt-5"}>Our Experience</H2>
          <p className={"max-w-prose"}>
            Lucadmin eSports has a proven track record of success in the
            competitive esports scene. We started our own team from scratch with
            zero money and built it into a successful esports organization. Our
            team has extensive experience in brand creation, team building,
            tournament hosting, and more. We have played in official tournaments
            and have won multiple awards for our achievements.
          </p>
        </div>
      </div>
      <p className={"mx-auto max-w-prose"}>
        If you&apos;re interested in learning more about our Bootstrapping an
        eSports Team (BAET) consulting services, contact us today. Our team of
        experts is ready to help you achieve your goals and build a successful
        esports team.
      </p>
      <FancyButton className={"mx-auto mt-5 mb-32 w-fit"}>
        Get in contact now
      </FancyButton>
    </div>
  );
};

export default BaetPage;
