"use client";
import React, { useState } from "react";
import { Checkbox } from "@carbon/react";
import H5 from "@/app/components/typography/h5";
import FancyButton from "@/app/components/buttons/FancyButton";

const TeamFitForm = () => {
  const [checkedBoxes, setCheckedBoxes] = useState({
    atLeast16: false,
    available: false,
    immortal: false,
    experience: false,
    motivated: false,
    teamSuccess: false,
    criticism: false,
    dedication: false,
  });

  let goodFit =
    checkedBoxes.atLeast16 &&
    checkedBoxes.available &&
    checkedBoxes.immortal &&
    checkedBoxes.experience;
  let perfectFit =
    goodFit &&
    checkedBoxes.motivated &&
    checkedBoxes.teamSuccess &&
    checkedBoxes.criticism &&
    checkedBoxes.dedication;

  // Returns no if no boxes are checked, return GOOD if all requirements are checked, return PERFECT if all requirements and additional are checked
  function getFitStatement() {
    if (goodFit) {
      if (perfectFit) {
        return <span className={"font-bold text-majorelleBlue"}>PERFECT</span>;
      }
      return <span className={"text-majorelleBlue"}>GOOD</span>;
    }
    return "no";
  }

  return (
    <div className={"flex flex-col gap-16 sm:flex-row"}>
      <div className={"flex w-full flex-col gap-4"}>
        <div
          className={
            "mt-8 flex flex-row border-t-2 border-solid border-t-majorelleBlue"
          }
        >
          <div
            className={"rotate-180 bg-majorelleBlue py-1 font-thin"}
            style={{ writingMode: "vertical-rl" }}
          >
            REQUIREMENTS
          </div>
          <div className={"flex flex-col gap-4 p-4"}>
            <legend>I am</legend>
            <fieldset
              onChange={(event) => {
                setCheckedBoxes({
                  ...checkedBoxes,
                  [event.target.id]: event.target.checked,
                });
              }}
            >
              <Checkbox id={"atLeast16"} labelText={"at least 16 years old"} />
              <Checkbox
                id={"available"}
                labelText={"available for regular training"}
              />
              <Checkbox
                id={"immortal"}
                labelText={"or was Immortal or higher"}
              />
              <Checkbox
                id={"experience"}
                labelText={"ready for a team or already have been in a team"}
              />
            </fieldset>
          </div>
        </div>
        <div className={"flex flex-row"}>
          <div
            className={"rotate-180 bg-majorelleBlue py-1 text-end font-thin"}
            style={{ writingMode: "vertical-rl" }}
          >
            ADDITIONAL
          </div>
          <div className={"flex flex-col gap-4 p-4"}>
            <fieldset
              onChange={(event) => {
                setCheckedBoxes({
                  ...checkedBoxes,
                  [event.target.id]: event.target.checked,
                });
              }}
            >
              <Checkbox
                id={"motivated"}
                labelText={
                  "highly motivated to improve and become the best version of myself as a player "
                }
              />
              <Checkbox
                id={"teamSuccess"}
                labelText={
                  "a team player who prioritizes the success of the team over individual accomplishments"
                }
              />
              <Checkbox
                id={"criticism"}
                labelText={
                  "able to take constructive criticism and use it to grow as a player"
                }
              />
              <Checkbox
                id={"dedication"}
                labelText={
                  "dedicated to the growth and success of Lucadmin eSports as a team"
                }
              />
            </fieldset>
          </div>
        </div>
      </div>
      <div className={"flex w-full flex-col items-center justify-center gap-4"}>
        <div
          className={
            "flex w-1/2 flex-col items-center justify-center gap-4 text-center"
          }
        >
          <p>
            Check off all the boxes of the “I am”-statements to see if you are a
            good fit for Lucadmin eSports
          </p>
          <H5>
            I am {goodFit && "a"} {getFitStatement()} fit for Lucadmin eSports
          </H5>
          <FancyButton
            clicked={
              !(
                checkedBoxes.atLeast16 &&
                checkedBoxes.available &&
                checkedBoxes.immortal &&
                checkedBoxes.experience
              )
            }
            onClick={() => {
              window
                .open("https://form.jotform.com/221585905935061", "_blank")
                .focus();
            }}
          >
            Apply now
          </FancyButton>
        </div>
      </div>
    </div>
  );
};

export default TeamFitForm;
