"use client";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Stroke = styled.div`
  background-color: #fefefe;
  display: block;
  position: absolute;
  transition: all 300ms ease;
`;

const StrokeOne = styled(Stroke)`
  width: ${(props) => (props.clicked ? "5px" : "10px")};
  height: 1px;
  bottom: -5px;
  left: -5px;
  padding: 0 3px;
`;

const StrokeTwo = styled(Stroke)`
  height: ${(props) => (props.clicked ? "5px" : "calc(100% + 5px)")};
  width: 1px;
  bottom: -5px;
  left: -5px;
  padding: 3px 0;
`;

const StrokeThree = styled(Stroke)`
  height: 1px;
  width: ${(props) => (props.clicked ? "5px" : "10px")};
  top: -5px;
  right: -5px;
  padding: 0 3px;
`;

const StrokeFour = styled(Stroke)`
  height: ${(props) => (props.clicked ? "5px" : "calc(100% + 5px)")};
  width: 1px;
  top: -5px;
  right: -5px;
  padding: 3px 0;
`;

const ButtonDiv = styled.div`
  width: calc(100% - 20px);
  user-select: none;
  z-index: 1;
  padding: 10px;
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

&:hover > .stroke-one {
  width: calc(100% + 5px);
}

&:hover > .stroke-three {
  width: calc(100% + 5px);
}
`;

const LoadingButtonDiv = styled(ButtonDiv)`
  @keyframes loader {
    0% {
      width: 0;
      left: 0;
    }
    25% {
      width: 100%;
      left: 0;
    }
    50% {
      width: 100%;
      right: 0;
    }
    100% {
      width: 0;
      right: 0;
    }
  }

  &.loading::after {
    animation: loader 3s infinite;
  }
`;

// TODO: Implement loading state

/**
 * FancyButton component - Main Button of the page including fancy animations for different states
 * @param children - Children of the component
 * @param clicked - Boolean to determine if the button is clicked or not
 * @param onClick - Function to be called when the button is clicked
 * @param pressedWidgets - Array of widgets that get shown when the button is clicked
 * @param pressedStateInactive - Boolean to determine if the button can be in the pressed state or not
 * @param color - Color of the button background
 * @param loading - Boolean to determine if the button is in the loading state or not
 * @param clickedColor - Color of the button background when the button is clicked
 * @returns {JSX.Element} - the FancyButton component
 * @constructor - React component
 */
function FancyButton({
  children,
  clicked,
  onClick,
  pressedWidgets,
  pressedStateInactive,
  color,
  loading,
  clickedColor,
  className,
}) {
  const [buttonClicked, setButtonClicked] = useState(clicked);

  const widgetsOnPressed = !pressedWidgets ? children : pressedWidgets;

  useEffect(() => {
    setButtonClicked(clicked);
  }, [clicked]);

  return (
    <LoadingButtonDiv
      color={color}
      clicked={(buttonClicked && !pressedStateInactive) || loading}
      loader={loading}
      className={(loading ? "loading" : "") + " " + className}
      style={
        (buttonClicked && !pressedStateInactive) || loading
          ? {
              backgroundColor: clickedColor || "#302673",
            }
          : {}
      }
      onClick={() => {
        if (!loading) {
          onClick();
          setButtonClicked(!buttonClicked);
        }
      }}
      onMouseOver={() => {}}
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
      <StrokeOne className="stroke-one" />
      <StrokeTwo />
      <StrokeThree className="stroke-three" />
      <StrokeFour />{" "}
    </LoadingButtonDiv>
  );
}

FancyButton.propTypes = {
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
  loading: PropTypes.bool,
  clickedColor: PropTypes.string,
};

export default FancyButton;
