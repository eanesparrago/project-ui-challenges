import React, { Component } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Logo from "./components/Logo/Logo";
import Typography from "./components/Typography/Typography";
import Button from "./components/Button/Button";

import { ComponentsPage, Login, Main } from "./pages";

const baseRoute = "/001";

const breakpoints = {
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

const theme = {
  font: {
    primary: "Open Sans, sans-serif"
  },
  color: {
    primary: {
      main: "#c0d4fc",
      light: "#dfe9fd",
      dark: "#808A9E",
      gradient: "linear-gradient(45deg, #C0D4FC, #DFE9FD )"
    },
    white: "#EFF4FE",
    black: "#30353F"
  },
  shadow: {
    main: "0px 5px 4px rgba(48, 53, 63, 0.15);"
  },
  spacing: {
    unit: "1rem"
  },
  media: Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${breakpoints[label] / 16}em) {
        ${css(...args)}
      }
    `;

    return acc;
  }, {})
};

const StyledSentiment = styled.div`
  a {
    text-decoration: none;
  }
`;

export class Sentiment extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledSentiment>
          <Route exact path={`/001`} component={Login} />

          <Route path={`/001/main`} component={Main} />

          <Route path={`/001/components`} component={ComponentsPage} />
        </StyledSentiment>
      </ThemeProvider>
    );
  }
}

export default Sentiment;
