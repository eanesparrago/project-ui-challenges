import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Logo, TextField, Button } from "../../components";

import bgDog from "../../images/bg-dog.png";

const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding-top: calc(${props => props.theme.spacing.unit} * 5);
  align-items: center;
  background-image: url(${bgDog});
  background-size: cover;
  background-position: center;

  > .login__logo {
    margin-bottom: calc(${props => props.theme.spacing.unit} * 8);
  }

  > .login__text-fields {
    width: 20rem;
    margin-bottom: calc(${props => props.theme.spacing.unit} * 3);

    > :first-child {
      margin-bottom: ${props => props.theme.spacing.unit};
    }

    > * {
      display: block;
      width: 100%;
    }
  }

  > .login__buttons {
    display: flex;
    flex-flow: column;
    align-items: center;

    > * {
      margin-bottom: ${props => props.theme.spacing.unit};
    }
  }
`;

const Login = () => {
  return (
    <StyledLogin>
      <div className="login__logo">
        <Logo dark />
      </div>

      <div className="login__text-fields">
        <TextField dark placeholder="Username" />

        <TextField dark placeholder="Password" />
      </div>

      <div className="login__buttons">
        <Link to="/001/main">
          <Button dark>Log In</Button>
        </Link>

        <Button type="password" dark variant="secondary">
          Sign Up
        </Button>
      </div>
    </StyledLogin>
  );
};

export default Login;