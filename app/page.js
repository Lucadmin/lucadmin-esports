import Image from "next/image";
import backgroundImage from "./images/background.png";
import lucadminLogoValoFilled from "./images/lucadmin-logo-valo-filled.png";
import backgroundPatternWelcome from "./images/background-pattern-welcome.png";
import deskKeyboard from "./images/ella-don-gETE8IyZPrM-unsplash.jpg";
import crowd from "./images/danny-howe-bn-D2bCvpik-unsplash.jpg";
import concentratedGamer from "./images/florian-olivo-Mf23RF8xArY-unsplash.jpg";
import H1 from "@/app/components/typography/h1";
import H2 from "@/app/components/typography/h2";
import Outlined from "@/app/components/typography/outlined";
import { majorelleBlue } from "@/utils/colors";
import Subtitle1 from "@/app/components/typography/Subtitle1";
import LandingPageForm from "@/app/components/forms/landing-form";
import FancyButton from "@/app/components/buttons/FancyButton";
import KeyWordAnimation from "@/app/typography/keyword-animation";
import Link from "next/link";
import ScrollingArrowButton from "@/app/components/buttons/ScrollingArrowButton";

export default function Home() {
  return (
    <main className={"h-full"}>
      <section className="relative flex min-h-screen flex-col items-center justify-center py-2">
        <div
          className={
            "video-background absolute top-0 left-0 -z-10 h-screen w-screen overflow-hidden"
          }
        >
          {/*<Image
            src={backgroundImage}
            fill
            className={"select-none object-cover object-center brightness-50"}
            />*/}
          {/*<iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/5c-sfYfuu-0?controls=0&autoplay=1&mute=1&loop=1&start=5&end=60&modestbranding=1&playlist=5c-sfYfuu-0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={
              "absolute top-1/2 left-1/2 aspect-video aspect-video h-screen w-screen -translate-x-1/2 -translate-y-1/2 select-none object-cover brightness-50"
            }
          ></iframe>*/}
          {/*<BackgroundPlayer videoId={"5c-sfYfuu-0"} />*/}
          <video
            autoPlay
            muted
            loop
            playsInline
            className={"h-full w-full object-cover brightness-50"}
            poster={backgroundImage}
          >
            <source
              data-src={
                "https://d36jtmifh5axiy.cloudfront.net/backgroundvideo_improved.mp4"
              }
              type="video/webm"
            />
          </video>
          +
          <div
            className={
              "absolute top-0 left-0 h-screen w-screen bg-majorelleBlue mix-blend-overlay"
            }
          />
        </div>
        <div className={"z-10 flex flex-col gap-5 text-center"}>
          <H1>Lucadmin eSports</H1>
          <div className={"flex flex-col"}>
            <H2 variant={"h6"}>
              <KeyWordAnimation />
            </H2>
          </div>
        </div>
        <ScrollingArrowButton />
        <div className={"absolute bottom-0 right-0 text-xs"}>
          Video by Zischu
        </div>
      </section>
      <section className={"relative px-10"}>
        <div className={"absolute top-0 left-0 -z-10 h-full w-screen"}>
          <Image
            src={backgroundPatternWelcome}
            fill
            className={"select-none object-cover object-center"}
            alt={""}
          />
        </div>
        <div className={"flex flex-col justify-center md:flex-row md:gap-16"}>
          <div className={"w-full sm:p-10"}>
            <Image src={lucadminLogoValoFilled} alt={"Lucadmin Logo Artwork"} />
          </div>
          <div className={"flex w-full flex-col justify-center gap-5 sm:p-10"}>
            <H2 className={"text-majorelleBlue"} variant={"h1"}>
              <Outlined outlineColor={majorelleBlue}>Welcome at</Outlined>
              <br /> Lucadmin eSports
            </H2>
            <p>
              At Lucadmin eSports, our mission is to provide new, ambitious
              esports players with the opportunity to enter the scene and grow
              together. We strive for professionalism, originality and growth in
              everything we do. Join us on our journey to become a leading force
              in the esports industry.
            </p>
            <Link href={"/about-us"}>
              <FancyButton className={"max-w-fit"}>More about us</FancyButton>
            </Link>
          </div>
        </div>
      </section>
      <section className={"relative px-10"}>
        <div className={"flex flex-col-reverse gap-16 sm:flex-row"}>
          <div className={"mb-10 flex w-full flex-col gap-5 sm:p-10"}>
            <H2 variant={"h1"}>
              Ready to take <Outlined>your esports career</Outlined> to the next
              level?
            </H2>
            <Subtitle1 className={"text-majorelleBlue"}>
              Join the Lucadmin eSports team and become a part of something
              bigger.
            </Subtitle1>
            <p className={"mt-10"}>
              We are always looking for dedicated and talented players who share
              our values of professionalism, growth, originality, communication,
              and positivity. Whether you're a seasoned pro or just starting
              out, we want to hear from you. Fill out our application form and
              let us know why you're the perfect fit for our team. Apply now and
              let's make history together.
            </p>
            <Link href={"https://form.jotform.com/221585905935061"}>
              <FancyButton className={"max-w-fit"}>Join us now</FancyButton>
            </Link>
          </div>
          <div
            className={
              "grid w-full grid-cols-5 grid-rows-2 gap-0 sm:-mt-10 sm:-mr-10 sm:grid-cols-2 sm:grid-rows-4 sm:gap-2"
            }
          >
            <div
              className={
                "col-span-2 col-start-4 row-start-2 flex h-full w-full sm:col-span-1 sm:col-start-1 sm:row-span-2 sm:row-start-2"
              }
            >
              <Image
                src={deskKeyboard}
                alt={"desk with gaming keyboard"}
                className={"object-cover object-center mix-blend-screen"}
                placeholder="blur"
              />
            </div>
            <div
              className={
                "col-span-4 col-start-1 row-start-1 flex h-full w-full sm:col-span-1 sm:col-start-2 sm:row-span-2"
              }
            >
              <Image
                src={crowd}
                alt={"crowd of people celebrating an esports victory"}
                className={
                  "aspect-[10/3] object-cover object-center mix-blend-screen"
                }
                placeholder="blur"
              />
            </div>
            <div
              className={
                "col-start-2 row-span-2 row-start-3 hidden h-full w-full sm:flex"
              }
            >
              <Image
                src={concentratedGamer}
                alt={"gamer concentrating on the game"}
                className={"object-cover object-center mix-blend-screen"}
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={"flex gap-4 bg-majorelleBlue px-2 py-1"}>
          {Array.from({ length: 10 }, (_, i) => i).map((i) => (
            <p key={i} className={"whitespace-nowrap"}>
              TEAM SECTION COMING SOON //
            </p>
          ))}
        </div>
      </section>
      <section className={"py-5 sm:px-10"}>
        <div className={"flex flex-col gap-10 p-10 sm:flex-row"}>
          <div className={"flex w-full flex-col gap-5"}>
            <H2>
              Got a <Outlined>question, suggestion</Outlined> or just want to
              say <Outlined>hi</Outlined>?
            </H2>
            <p>
              We'd love to hear from you! Fill out the form below with your
              contact information and message, and we'll get back to you as soon
              as possible. If you prefer, you can also reach us at{" "}
              <a
                className={"text-majorelleBlue underline"}
                href={"mailto:hello@lucadmin.de"}
              >
                hello@lucadmin.de
              </a>
              . We're always happy to help. Let's stay in touch!
            </p>
          </div>
          <div className={"flex w-full items-center justify-center"}>
            <div
              className={
                "w-full border-l-4 border-solid border-l-majorelleBlue md:max-w-2xl"
              }
            >
              <div className={"flex w-full flex-col bg-majorelleBlue"}>
                <p>// CONTACT US FORM</p>
              </div>
              <div className={"p-4"}>
                <LandingPageForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
