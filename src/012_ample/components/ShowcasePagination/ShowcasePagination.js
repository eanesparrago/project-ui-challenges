import React from "react";
import styled from "styled-components";

const StyledShowcasePagination = styled.div`
  .button {
    padding: var(--space-inset-s);
    width: ${props => props.theme.size.m};
    height: ${props => props.theme.size.m};
    border-radius: 1000em;
    border: 0.125em solid var(--color-white);
    display: flex;
    flex-flow: column;

    &:not(:last-child) {
      margin: var(--space-stack-m);
    }

    &--active {
      background-color: var(--color-white);
    }
  }
`;


const ShowcasePagination = () => {
  return (
    <StyledShowcasePagination>
      <button className="button button--active"></button>
      <button className="button"></button>
      <button className="button"></button>
    </StyledShowcasePagination>
  );
};

export default ShowcasePagination;
