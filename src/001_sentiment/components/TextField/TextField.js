import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: unset;
  border-radius: 3.125rem;
  border: 2px solid
    ${props =>
      props.dark
        ? props.theme.color.primary.light
        : props.theme.color.primary.main};
  padding: calc(${props => props.theme.spacing.unit} / 2)
    calc(${props => props.theme.spacing.unit} * 2);
  color: ${props =>
    props.dark ? props.theme.color.white : props.theme.color.black};
`;

const TextField = props => {
  return <StyledInput {...props} placeholder={props.placeholder} />;
};

export default TextField;
