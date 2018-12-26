import React from "react";
import styled from "styled-components";

import Typography from "../Typography/Typography";

const StyledButtonPrimary = styled.button`
  width: 12.5rem;
  height: 2.5rem;
  border-radius: 100rem;
  background-image: ${props => props.theme.color.primary.gradient};
  border: 1px solid ${props => props.theme.color.black};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  :hover {
    background-image: none;
    background-color: ${props => props.theme.color.black};
  }
`;

const StyledButtonSecondary = styled.button``;

const StyledTypography = styled(Typography)`
  ${StyledButtonPrimary}:hover & {
    color: ${props => props.theme.color.white};
  }
`;

const Button = props => {
  switch (props.variant) {
    case "primary":
      return (
        <StyledButtonPrimary>
          <StyledTypography variant="button">{props.children}</StyledTypography>
        </StyledButtonPrimary>
      );

    default:
      return (
        <StyledButtonPrimary>
          <StyledTypography variant="button">{props.children}</StyledTypography>
        </StyledButtonPrimary>
      );
  }
};

export default Button;
