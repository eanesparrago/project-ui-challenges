import React, { Component } from "react";
import styled from "styled-components";

const StyledSizeOption = styled.div`
  display: flex;

  .size-option_box {
    width: ${props => props.theme.size.l};
    height: ${props => props.theme.size.l};
    padding: var(--space-inset-xs);
    display: flex;
    justify-content: center;
    align-items: center;

    &:not(:last-child) {
      margin: var(--space-inline-s);
    }

    &--active {
      border: ${props => props.theme.size.em(2)} solid var(--color-black);
    }

    cursor: pointer;
  }

  .size-option {
    font-weight: 700;
  }
`;

export class SizeOption extends Component {
  render() {
    return (
      <StyledSizeOption>
        <div className="size-option_box size-option_box--active">
          <span className="size-option">S</span>
        </div>

        <div className="size-option_box">
          <span className="size-option">M</span>
        </div>

        <div className="size-option_box">
          <span className="size-option">L</span>
        </div>
      </StyledSizeOption>
    );
  }
}

export default SizeOption;
