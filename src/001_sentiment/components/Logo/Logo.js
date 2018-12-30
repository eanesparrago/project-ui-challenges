import React from "react";
import styled from "styled-components";

const StyledLogo = styled.span`
  font-family: ${props => props.theme.font.primary};
  color: ${props =>
    props.dark
      ? props.theme.color.white
      : props.theme.color.primary.dark};
  font-size: 3em;
  font-weight: 100;
  text-transform: uppercase;
`;

const Logo = ({ dark }) => {
  return <StyledLogo dark={dark}>Sentiment</StyledLogo>;
};

export default Logo;
