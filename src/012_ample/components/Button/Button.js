import React, { Component } from "react";
import styled from "styled-components";
import textCrop from "../../utils/textCrop";

const StyledButton = styled.button`
  ${textCrop()};
  /* border: 1px solid magenta; */
  font-size: 1.1875em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: var(--space-squish-m);
`;

const StyledButtonContainer = styled.div`
  cursor: pointer;
`;

const StyledButtonFill = styled.button`
  background-color: var(--color-primary);
  padding: var(--space-squish-l);
  border-radius: ${props => props.theme.size.xs};
  color: ${props => props.theme.color.white};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export class Button extends Component {
  render() {
    const { variant } = this.props;
    switch (variant) {
      case "container":
        return (
          <StyledButtonContainer>{this.props.children}</StyledButtonContainer>
        );

      case "fill":
        return <StyledButtonFill>{this.props.children}</StyledButtonFill>;

      default:
        return <StyledButton>{this.props.children}</StyledButton>;
    }
  }
}

export default Button;
