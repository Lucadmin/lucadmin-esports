"use client"
import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ButtonDiv = styled.div`
  width: 100%;
  user-select: none;
  z-index: 1;
  padding: 10px 20px;
  display: inline-block;
  background: ${(props) => (props.color ? props.color : "#6957e7")};
  font-size: 1rem;
  line-height: 19px;
  margin: 10px;
  position: relative;
  transition: all 250ms ease;
  background-size: 0;
  color: #fefefe;
  fill: #fefefe;
  cursor: ${(props) => (props.clicked ? "default" : "pointer")};

  &:hover {
    color: ${(props) => {
      if (!props.clicked) {
        return props.color ? props.color : "#6957e7";
      }
      return "fefefe";
    }};
    fill: ${(props) => {
      if (!props.clicked) {
        return props.color ? props.color : "#6957e7";
      }
      return "fefefe";
    }};

    &:after {
      width: ${(props) => (props.clicked ? "0" : "100%")};
      left: 0;
    }
  }

  &:after {
    z-index: -1;
    content: " ";
    height: 100%;
    width: 0;
    position: absolute;
    top: 0;
    right: 0;
    transition: all 250ms ease;
    background-color: #fefefe;
  }
`;

/**
 * LameButton component - The FancyButton component but without specific animations
 * @param children - The components to display in the button
 * @param clicked - Whether the button is clicked or not
 * @param onClick - The function to call when the button is clicked
 * @param pressedWidgets - Array of widgets that get shown when the button is clicked
 * @param pressedStateInactive - Boolean to determine if the button can be in the pressed state or not
 * @param color - Color of the button background
 * @returns {JSX.Element} - The LameButton component
 * @constructor - React component
 */
function LameButton({
                      children,
                      clicked,
                      onClick,
                      pressedWidgets,
                      pressedStateInactive,
                      color,
                      classname
                    }) {
  const [buttonClicked, setButtonClicked] = useState(clicked);

  const widgetsOnPressed = !pressedWidgets ? children : pressedWidgets;

  useEffect(() => {
    setButtonClicked(clicked);
  }, [clicked]);

  return (
      <ButtonDiv
          className={classname}
          color={color}
          clicked={buttonClicked && !pressedStateInactive}
          style={
            buttonClicked && !pressedStateInactive
                ? {backgroundColor: "#302673"}
                : {}
          }
          onClick={() => {
            onClick();
            setButtonClicked(!buttonClicked);
          }}
          onMouseOver={() => {
          }}
      >
        <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
        >
          {buttonClicked && !pressedStateInactive ? widgetsOnPressed : children}
        </div>
      </ButtonDiv>
  );
}

LameButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  clicked: PropTypes.bool,
  onClick: PropTypes.func,
  pressedWidgets: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  pressedStateInactive: PropTypes.bool,
  color: PropTypes.string,
};

export default LameButton;
