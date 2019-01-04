import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Typography, TextField } from "../../../../components";

const StyledSignUpForm = styled.div`
  /* border: 1px solid cyan; */
  position: fixed;
  left: 50%;
  z-index: 20;

  .container {
    /* border: 1px solid magenta; */

    position: relative;
    left: -50%;
    display: flex;
    flex-flow: column;
    align-items: center;
    border-radius: 1.25em;
    padding: calc(${props => props.theme.spacing.unit} * 2)
      calc(${props => props.theme.spacing.unit} * 3);
    background-color: ${props => props.theme.color.black};
    box-shadow: ${props => props.theme.shadow.main};

    /* >>> xsm */
    ${props => props.theme.media.xsm`
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      border-radius: 0;
    `}
  }

  .header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .fields {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: calc(${props => props.theme.spacing.unit} * 2);
    margin-bottom: calc(${props => props.theme.spacing.unit} * 2);

    > *:not(:last-child) {
      margin-bottom: ${props => props.theme.spacing.unit};
    }
  }
`;

const SignUpForm = ({ toggleSignUpForm, style }) => {
  return (
    <StyledSignUpForm style={style}>
      <div className="container">
        <div className="header">
          <Typography dark variant="h3">
            Sign Up
          </Typography>

          <Button dark variant="secondary" onClick={toggleSignUpForm}>
            X
          </Button>
        </div>

        <div className="fields">
          <TextField dark placeholder="Username" />
          <TextField dark placeholder="Email" />
          <TextField dark placeholder="First Name" />
          <TextField dark placeholder="Last Name" />
          <TextField dark type="password" placeholder="Password" />
          <TextField dark type="password" placeholder="Confirm Password" />
        </div>

        <Link to="/001/main">
          <Button dark variant="primary">
            Sign Up
          </Button>
        </Link>
      </div>
    </StyledSignUpForm>
  );
};

export default SignUpForm;
