"use client"
import React, {useState} from 'react';
import {Checkbox} from "@carbon/react";
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
    dedication: false
  });

  // Returns no if no boxes are checked, return GOOD if all requirements are checked, return PERFECT if all requirements and additional are checked
  function getFitStatement() {
    if (checkedBoxes.atLeast16 && checkedBoxes.available && checkedBoxes.immortal && checkedBoxes.experience) {
      if (checkedBoxes.motivated && checkedBoxes.teamSuccess && checkedBoxes.criticism && checkedBoxes.dedication) {
        return <span className={"text-majorelleBlue font-bold"}>PERFECT</span>;
      }
      return <span className={"text-majorelleBlue"}>GOOD</span>;
    }
    return "no";
  }

  return (
      <div className={"flex flex-col sm:flex-row gap-16"}>
        <div className={"flex flex-col gap-4 w-full"}>
          <div className={"border-t-2 border-t-majorelleBlue border-solid flex flex-row mt-8"}>
            <div className={"rotate-180 bg-majorelleBlue font-thin py-1"}
                 style={{writingMode: 'vertical-rl'}}>
              REQUIREMENTS
            </div>
            <div className={"flex flex-col gap-4 p-4"}>
              <legend>I am</legend>
              <fieldset onChange={(event) => {
                setCheckedBoxes({...checkedBoxes, [event.target.id]: event.target.checked})
              }
              }>
                <Checkbox id={"atLeast16"} labelText={"at least 16 years old"}/>
                <Checkbox id={"available"} labelText={"available for regular training"}/>
                <Checkbox id={"immortal"} labelText={"or was Immortal or higher"}/>
                <Checkbox id={"experience"} labelText={"ready for a team or already have been in a team"}/>
              </fieldset>
            </div>
          </div>
          <div className={"flex flex-row"}>
            <div className={"rotate-180 bg-majorelleBlue font-thin py-1 text-end"}
                 style={{writingMode: 'vertical-rl'}}>
              ADDITIONAL
            </div>
            <div className={"flex flex-col gap-4 p-4"}>
              <fieldset onChange={(event) => {
                setCheckedBoxes({...checkedBoxes, [event.target.id]: event.target.checked})
              }
              }>
                <Checkbox id={"motivated"}
                          labelText={"highly motivated to improve and become the best version of myself as a player "}/>
                <Checkbox id={"teamSuccess"}
                          labelText={"a team player who prioritizes the success of the team over individual accomplishments"}/>
                <Checkbox id={"criticism"}
                          labelText={"able to take constructive criticism and use it to grow as a player"}/>
                <Checkbox id={"dedication"}
                          labelText={"dedicated to the growth and success of Lucadmin eSports as a team"}/>
              </fieldset>
            </div>
          </div>
        </div>
        <div className={"flex flex-col w-full justify-center items-center gap-4"}>
          <div className={"w-1/2 flex flex-col justify-center items-center gap-4 text-center"}>
            <p>Check off all the boxes of the “I am”-statements to see if you are a good fit for Lucadmin eSports</p>
            <H5>I am a {getFitStatement()} fit for Lucadmin eSports</H5>
            <FancyButton
                clicked={!(checkedBoxes.atLeast16 && checkedBoxes.available && checkedBoxes.immortal && checkedBoxes.experience)}>Apply
              now</FancyButton>
          </div>
        </div>
      </div>
  );
};

export default TeamFitForm;
