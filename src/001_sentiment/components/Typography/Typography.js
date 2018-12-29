import React from "react";
import styled, { css } from "styled-components";

const sharedStyles = css`
  color: ${props =>
    props.dark ? props.theme.color.white : props.theme.color.black};
  font-family: ${props => props.theme.font.primary};
  margin: 0;
  padding: 0;
  z-index: 20;
`;

const StyledBody = styled.p`
  ${sharedStyles}
  font-size: 1rem;
`;

const StyledHeading1 = styled.h1`
  ${sharedStyles}
  font-size: 5rem;
  font-weight: 100;
`;

const StyledHeading2 = styled.h2`
  ${sharedStyles}
  font-size: 3.75rem;
  font-weight: 100;
  color: ${props => props.theme.color.primary.dark};
`;

const StyledHeading3 = styled.h3`
  ${sharedStyles}
  font-size: 3rem;
  font-weight: 300;
`;

const StyledHeading4 = styled.h4`
  ${sharedStyles}
  font-size: 2rem;
  font-weight: 300;
`;

const StyledHeading5 = styled.h5`
  ${sharedStyles}
  font-size: 1.5rem;
  font-weight: 700;
`;

const StyledSubtitle = styled.span`
  ${sharedStyles}
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

const StyledSubtle = styled.span`
  ${sharedStyles}
  font-size: 0.6875rem;
  text-transform: uppercase;
  font-weight: 700;
  color: ${props => props.theme.color.primary.dark};
`;

const StyledButton = styled.span`
  ${sharedStyles}
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

const Typography = props => {
  switch (props.variant) {
    case "h1":
      return (
        <StyledHeading1 dark={props.dark}>{props.children}</StyledHeading1>
      );

    case "h2":
      return (
        <StyledHeading2 dark={props.dark}>{props.children}</StyledHeading2>
      );

    case "h3":
      return (
        <StyledHeading3 dark={props.dark}>{props.children}</StyledHeading3>
      );

    case "h4":
      return (
        <StyledHeading4 dark={props.dark}>{props.children}</StyledHeading4>
      );

    case "h5":
      return (
        <StyledHeading5 dark={props.dark}>{props.children}</StyledHeading5>
      );

    case "body":
      return <StyledBody dark={props.dark}>{props.children}</StyledBody>;

    case "subtitle":
      return (
        <StyledSubtitle dark={props.dark}>{props.children}</StyledSubtitle>
      );

    case "subtle":
      return <StyledSubtle dark={props.dark}>{props.children}</StyledSubtle>;

    case "button":
      return (
        <StyledButton className={props.className} dark={props.dark}>
          {props.children}
        </StyledButton>
      );

    default:
      return <StyledBody dark={props.dark}>{props.children}</StyledBody>;
  }
};

export default Typography;
