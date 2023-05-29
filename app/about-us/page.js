import React from "react";
import Outlined from "@/app/components/typography/outlined";
import H1 from "@/app/components/typography/h1";
import aboutUsImage from "@/app/images/weapons-art.png";
import Image from "next/image";
import Offering from "@/app/components/offering";
import "@/app/about-us/about-us.css";
import Subtitle1 from "@/app/components/typography/Subtitle1";
import TeamFitForm from "@/app/about-us/team-fit-form";

const AboutUsPage = () => {
  return (
    <main className={"pt-32 sm:p-10"}>
      <section className={"flex flex-col gap-16 p-10 py-32 sm:flex-row"}>
        <div className={"flex w-full flex-col gap-4"}>
          <div className={"h-[3px] w-[12rem] bg-majorelleBlue"} />
          <H1>
            <Outlined>About</Outlined> us
          </H1>
          <p className={"text-majorelleBlue"}>
            Welcome to Lucadmin eSports, where growth, originality, and
            communication are at the forefront of our mission
          </p>
          <p>
            We are a team of passionate gamers, dedicated to providing a
            professional platform for aspiring eSport athletes. Our goal is to
            bring together like-minded individuals and help them reach their
            full potential in the world of eSports. Join us on this exciting
            journey as we continue to build a community that is positive,
            dynamic, and always pushing the limits of what is possible.
          </p>
        </div>
        <div className={"-mr-20 flex w-full items-center justify-end"}>
          <Image className={"max-w-[30rem]"} src={aboutUsImage} alt={""} />
        </div>
      </section>
      <section className={"p-10"}>
        <div className={"flex flex-col gap-8 overflow-hidden"}>
          <H1>
            <Outlined>Our Offerings</Outlined> to the Players
          </H1>
          <div className={"flex flex-col gap-8 sm:hidden"}>
            <Offering title={"Management"}>
              Our experienced management takes care of everything so you can
              focus on playing. We handle training, scrimmages, coaching, social
              media, team structure, and tournaments, leaving you stress-free.
            </Offering>
            <Offering title={"Professionality"}>
              We take pride in our work and always aim for a professional and
              polished outcome. No sloppy mistakes or trivial issues will stand
              in our way as we grow together.
            </Offering>
            <Offering title={"Team Tools"}>
              Efficient and accessible tools to help the team strategize and
              plan. Professional software ensures everyone has access to the
              same information.
            </Offering>
            <Offering title={"Contract"}>
              In the future, we hope to offer professional contracts for our
              players. These contracts provide security and stability for both
              the team and individuals.
            </Offering>
            <Offering title={"Web presence"}>
              Gain recognition and build your brand with us. Our professional
              website offers team and individual player pages, as well as a
              strong social media presence to showcase your skills.
            </Offering>
            <Offering title={"Team Building"}>
              We bring the players together to form a strong and cohesive team.
              Regular training, scrimmages, tournaments and team-building events
              help foster a tight-knit community.
            </Offering>
            <Offering title={"Tournaments"}>
              Compete at the highest level with Lucadmin e.K. by your side. Our
              consistent and permanent team structure gives us the stability to
              participate in official tournaments and climb the eSports ladder.
            </Offering>
          </div>
          <div
            className={"hidden w-full gap-8 sm:flex"}
            style={{
              animation: `loop 60s infinite linear`,
            }}
          >
            <Offering title={"Management"}>
              Our experienced management takes care of everything so you can
              focus on playing. We handle training, scrimmages, coaching, social
              media, team structure, and tournaments, leaving you stress-free.
            </Offering>
            <Offering title={"Professionality"}>
              We take pride in our work and always aim for a professional and
              polished outcome. No sloppy mistakes or trivial issues will stand
              in our way as we grow together.
            </Offering>
            <Offering title={"Team Tools"}>
              Efficient and accessible tools to help the team strategize and
              plan. Professional software ensures everyone has access to the
              same information.
            </Offering>
            <Offering title={"Contract"}>
              In the future, we hope to offer professional contracts for our
              players. These contracts provide security and stability for both
              the team and individuals.
            </Offering>
            <Offering title={"Web presence"}>
              Gain recognition and build your brand with us. Our professional
              website offers team and individual player pages, as well as a
              strong social media presence to showcase your skills.
            </Offering>
            <Offering title={"Team Building"}>
              We bring the players together to form a strong and cohesive team.
              Regular training, scrimmages, tournaments and team-building events
              help foster a tight-knit community.
            </Offering>
            <Offering title={"Tournaments"}>
              Compete at the highest level with Lucadmin e.K. by your side. Our
              consistent and permanent team structure gives us the stability to
              participate in official tournaments and climb the eSports ladder.
            </Offering>
            <Offering title={"Management"}>
              Our experienced management takes care of everything so you can
              focus on playing. We handle training, scrimmages, coaching, social
              media, team structure, and tournaments, leaving you stress-free.
            </Offering>
            <Offering title={"Professionality"}>
              We take pride in our work and always aim for a professional and
              polished outcome. No sloppy mistakes or trivial issues will stand
              in our way as we grow together.
            </Offering>
            <Offering title={"Team Tools"}>
              Efficient and accessible tools to help the team strategize and
              plan. Professional software ensures everyone has access to the
              same information.
            </Offering>
            <Offering title={"Contract"}>
              In the future, we hope to offer professional contracts for our
              players. These contracts provide security and stability for both
              the team and individuals.
            </Offering>
            <Offering title={"Web presence"}>
              Gain recognition and build your brand with us. Our professional
              website offers team and individual player pages, as well as a
              strong social media presence to showcase your skills.
            </Offering>
            <Offering title={"Team Building"}>
              We bring the players together to form a strong and cohesive team.
              Regular training, scrimmages, tournaments and team-building events
              help foster a tight-knit community.
            </Offering>
            <Offering title={"Tournaments"}>
              Compete at the highest level with Lucadmin e.K. by your side. Our
              consistent and permanent team structure gives us the stability to
              participate in official tournaments and climb the eSports ladder.
            </Offering>
          </div>
        </div>
      </section>
      <section className={"mt-32 p-10"}>
        <div className={"flex flex-col gap-8 overflow-hidden"}>
          <H1>
            <Outlined>Sounds right</Outlined> for you?
          </H1>
          <Subtitle1 className={"text-majorelleBlue"}>
            Find out if you are what we are searching for
          </Subtitle1>
        </div>
        <TeamFitForm />
      </section>
    </main>
  );
};

export default AboutUsPage;
