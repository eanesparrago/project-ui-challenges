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

  :focus {
    outline: none;
  }
`;

const StyledButtonIcon = styled.button``;

export class Button extends Component {
  render() {
    const { variant } = this.props;
    switch (variant) {
      case "icon":
        return <StyledButtonIcon>{this.props.children}</StyledButtonIcon>;

      default:
        return <StyledButton>{this.props.children}</StyledButton>;
    }
  }
}

export default Button;
