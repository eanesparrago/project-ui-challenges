import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  padding: ${props => props.theme.spacing.unit};
  border: 2px solid
    ${props =>
      props.dark
        ? props.theme.color.primary.light
        : props.theme.color.primary.main};
  border-radius: 1.25rem;
`;

const StyledCardOutline = styled(StyledCard)``;

const StyledCardFill = styled(StyledCard)`
  background-color: ${props => props.theme.color.primary.light};
  border: none;
`;

const Card = props => {
  switch (props.variant) {
    case "outline":
      return (
        <StyledCardOutline dark={props.dark}>
          {props.children}
        </StyledCardOutline>
      );

    case "fill":
      return (
        <StyledCardFill dark={props.dark}>{props.children}</StyledCardFill>
      );

    default:
      return (
        <StyledCardOutline dark={props.dark}>
          {props.children}
        </StyledCardOutline>
      );
  }
};

export default Card;
