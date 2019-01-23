import React, { Component } from "react";
import styled from "styled-components";

const StyledColorOption = styled.div`
  display: flex;

  .color-option_box {
    width: ${props => props.theme.size.l};
    height: ${props => props.theme.size.l};
    padding: var(--space-inset-xs);

    &:not(:last-child) {
      margin: var(--space-inline-s);
    }

    &--active {
      border: ${props => props.theme.size.em(2)} solid var(--color-black);
    }

    cursor: pointer;
  }

  .color-option {
    width: 100%;
    height: 100%;
    border-radius: 1000em;

    &--1 {
      background-color: #b7000b;
    }

    &--2 {
      background-color: #53b9c8;
    }

    &--3 {
      background-color: #582b39;
    }
  }
`;

export class ColorOption extends Component {
  render() {
    return (
      <StyledColorOption>
        <div className="color-option_box color-option_box--active">
          <div className="color-option color-option--1" />
        </div>

        <div className="color-option_box">
          <div className="color-option color-option--2" />
        </div>

        <div className="color-option_box">
          <div className="color-option color-option--3" />
        </div>
      </StyledColorOption>
    );
  }
}

export default ColorOption;
