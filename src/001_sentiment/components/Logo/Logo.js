import React from "react";
import styled from "styled-components";

const StyledLogo = styled.span`
  font-family: ${props => props.theme.font.primary};
  color: ${props =>
    props.dark
      ? props.theme.color.primary.light
      : props.theme.color.primary.dark};
  font-size: 3rem;
  font-weight: 100;
  text-transform: uppercase;
`;

const Logo = ({ dark }) => {
  return <StyledLogo dark={dark}>Sentimental</StyledLogo>;
};

export default Logo;
