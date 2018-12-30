import React from "react";
import styled from "styled-components";

import Typography from "../Typography/Typography";

// >>> StyledButtonPrimary
const StyledButtonPrimary = styled.button`
  display: block;
  width: 12.5em;
  height: 2.5em;
  border-radius: 100em;
  background-image: ${props => props.theme.color.primary.gradient};
  border: 1px solid
    ${props => (props.dark ? props.theme.color.white : props.theme.color.black)};
  box-shadow: ${props => props.theme.shadow.main};
  cursor: pointer;

  :hover {
    background-image: none;
    background-color: ${props => props.theme.color.black};
  }

  > * {
    color: ${props => props.theme.color.black};
    text-decoration: none;
  }
`;

// >>> StyledButtonSecondary
const StyledButtonSecondary = styled.button`
  background-color: unset;
  border: none;
  cursor: pointer;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  > div {
    width: calc(100% + 0.2em);
    height: 0.125em;
    background-color: ${props =>
      props.dark ? props.theme.color.white : props.theme.color.black};
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;
  }

  ${StyledButtonSecondary}:hover div {
    transform: scaleY(10);
    transform-origin: bottom;
  }
`;

// >>> Turn the text white on hover
const StyledTypography = styled(Typography)`
  ${StyledButtonPrimary}:hover & {
    color: ${props => props.theme.color.white};
  }

  ${StyledButtonSecondary}:hover & {
    color: ${props =>
      props.dark ? props.theme.color.black : props.theme.color.white};
  }
`;

const Button = props => {
  switch (props.variant) {
    case "primary":
      return (
        <StyledButtonPrimary {...props}>
          <StyledTypography variant="button">{props.children}</StyledTypography>
        </StyledButtonPrimary>
      );

    case "secondary":
      return (
        <StyledButtonSecondary {...props}>
          <StyledTypography {...props} variant="button">
            {props.children}
          </StyledTypography>

          <div />
        </StyledButtonSecondary>
      );

    default:
      return (
        <StyledButtonPrimary {...props}>
          <StyledTypography variant="button">{props.children}</StyledTypography>
        </StyledButtonPrimary>
      );
  }
};

export default Button;
