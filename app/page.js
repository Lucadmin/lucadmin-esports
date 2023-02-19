import Image from 'next/image'
import backgroundImage from './images/background.png'
import lucadminLogoValoFilled from './images/lucadmin-logo-valo-filled.png'
import backgroundPatternWelcome from './images/background-pattern-welcome.png'
import deskKeyboard from './images/ella-don-gETE8IyZPrM-unsplash.jpg'
import crowd from './images/danny-howe-bn-D2bCvpik-unsplash.jpg'
import concentratedGamer from './images/florian-olivo-Mf23RF8xArY-unsplash.jpg'
import H1 from "@/app/components/typography/h1";
import H2 from "@/app/components/typography/h2";
import Outlined from "@/app/components/typography/outlined";
import {majorelleBlue} from "@/utils/colors";
import Subtitle1 from "@/app/components/typography/Subtitle1";
import LandingPageForm from "@/app/components/forms/landing-form";
import FancyButton from "@/app/components/buttons/FancyButton";
import {ArrowDown} from "@carbon/react/icons"
import KeyWordAnimation from "@/app/typography/keyword-animation";

export default function Home() {
  return (
      <main className={"h-full"}>
        <section className="flex flex-col items-center justify-center min-h-screen py-2 relative">
          <div className={"absolute top-0 left-0 w-screen h-screen -z-10 mix-blend-overlay"}>
            <Image src={backgroundImage} fill className={"object-cover object-center mix-blend-overlay"}/>
          </div>
          <div className={"flex flex-col text-center gap-5 z-10"}>
            <H1>Lucadmin eSports</H1>
            <div className={"flex flex-col"}>
              <H2 variant={"h6"}>
                <KeyWordAnimation/>
              </H2>
            </div>
          </div>
          <div className={"absolute bottom-0 flex justify-center w-full m-5"}>
            <ArrowDown/>
          </div>
        </section>
        <section className={"relative px-10"}>
          <div className={"absolute top-0 left-0 w-screen h-full -z-10"}>
            <Image src={backgroundPatternWelcome} fill className={"object-cover object-center"}/>
          </div>
          <div className={"flex md:gap-16 justify-center flex-col md:flex-row"}>
            <div className={"sm:p-10 w-full"}>
              <Image src={lucadminLogoValoFilled}/>
            </div>
            <div className={"flex flex-col sm:p-10 justify-center gap-5 w-full"}>
              <H2 className={"text-majorelleBlue"} variant={"h1"}><Outlined outlineColor={majorelleBlue}>Welcome
                at</Outlined><br/> Lucadmin eSports</H2>
              <p>At Lucadmin eSports, our mission is to provide new, ambitious esports players with the opportunity to
                enter the scene and grow together. We strive for professionalism, originality and growth in everything
                we do. Join us on our journey to become a leading force in the esports industry.</p>
              <FancyButton className={"max-w-fit"}>
                More about us
              </FancyButton>
            </div>
          </div>
        </section>
        <section className={"relative px-10"}>
          <div className={"flex flex-col-reverse sm:flex-row gap-16"}>
            <div className={"flex flex-col gap-5 sm:p-10 w-full mb-10"}>
              <H2 variant={"h1"}>Ready to take <Outlined>your esports career</Outlined> to the next level?</H2>
              <Subtitle1 className={"text-majorelleBlue"}>Join the Lucadmin eSports team and become a part of something
                bigger.</Subtitle1>
              <p className={"mt-10"}>We are always looking for dedicated and talented players who share our values of
                professionalism,
                growth, originality, communication, and positivity. Whether you're a seasoned pro or just starting out,
                we want to hear from you. Fill out our application form and let us know why you're the perfect fit for
                our team. Apply now and let's make history together.</p>
              <FancyButton className={"max-w-fit"}>
                Join us now
              </FancyButton>
            </div>
            <div
                className={"sm:-mt-10 grid grid-cols-5 grid-rows-2 sm:grid-cols-2 sm:grid-rows-4 w-full gap-0 sm:gap-2 sm:-mr-10"}>
              <div
                  className={"flex w-full h-full row-start-2 col-start-4 col-span-2 sm:col-span-1 sm:col-start-1 sm:row-span-2"}>
                <Image src={deskKeyboard} alt={"desk with gaming keyboard"}
                       className={"mix-blend-screen object-cover object-center"}/>
              </div>
              <div
                  className={"flex w-full h-full row-start-1 col-start-1 col-span-4 sm:col-span-1 sm:col-start-2 sm:row-span-2"}>
                <Image src={crowd} alt={"crowd of people celebrating an esports victory"}
                       className={"mix-blend-screen object-cover object-center aspect-[10/3]"}/>
              </div>
              <div className={"hidden sm:flex w-full h-full row-start-3 row-span-2 col-start-2"}>
                <Image src={concentratedGamer} alt={"gamer concentrating on the game"}
                       className={"mix-blend-screen object-cover object-center"}/>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={"flex gap-4 bg-majorelleBlue px-2 py-1"}>
            {Array.from({length: 10}, (_, i) => i).map((i) => (
                <p key={i} className={"whitespace-nowrap"}>TEAM SECTION COMING SOON //</p>
            ))}
          </div>
        </section>
        <section className={"sm:px-10 py-5"}>
          <div className={"flex flex-col sm:flex-row gap-10 p-10"}>
            <div className={"flex flex-col gap-5 w-full"}>
              <H2>Got a <Outlined>question, suggestion</Outlined> or just want to say <Outlined>hi</Outlined>?</H2>
              <p>We'd love to hear from you! Fill out the form below with your contact information and message, and
                we'll get back to you as soon as possible. If you prefer, you can also reach us at <a
                    className={"text-majorelleBlue underline"}
                    href={"mailto:hello@lucadmin.de"}>hello@lucadmin.de</a>. We're always happy to help. Let's stay in
                touch!</p>
            </div>
            <div className={"w-full flex justify-center items-center"}>
              <div
                  className={"border-l-majorelleBlue border-l-4 border-solid md:max-w-2xl w-full"}>
                <div className={"flex flex-col w-full bg-majorelleBlue"}>
                  <p>// CONTACT US FORM</p>
                </div>
                <div className={"p-4"}>
                  <LandingPageForm/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}
