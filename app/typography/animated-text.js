import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeInAnimation = (color) => keyframes`
  0% {
    color: #060410;
  }

  100% {
    color: ${color ? color : "#fefefe"};
  }
`;

const revBlock = keyframes`
  0% {
    left: 0;
    width: 0
  }

  50% {
    left: 0;
    width: 100%
  }

  100% {
    left: 100%;
    width: 0
  }
`;

const AnimatedTextSpan = styled.span`
  position: relative;
  animation: 0.0001s linear 0.7s 1 normal forwards running
    ${(props) => (props.inView ? fadeInAnimation(props.color) : null)};
  color: #060410;
  display: inline-block;
  background-size: 100% 100%;
  visibility: ${(props) => (props.inView ? "visible" : "hidden")};
  z-index: 1;

  &:after {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 0;
    height: 100%;
    background-color: ${(props) => (props.color ? props.color : `#fefefe`)};
    background-size: 100% 100%;
    transition: all 0.5s ease;
    animation: 1.4s cubic-bezier(0.19, 1, 0.22, 1) 0s 1 normal forwards running
      ${(props) => (props.inView ? revBlock : "")};
    z-index: 2;
  }
`;

function AnimatedText({ children, color, rootMargin }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: rootMargin ? rootMargin : "-100px 0px",
  });

  return (
    <AnimatedTextSpan key={children} ref={ref} inView={inView} color={color}>
      {children}
    </AnimatedTextSpan>
  );
}

AnimatedText.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  rootMargin: PropTypes.string,
};

export default AnimatedText;
