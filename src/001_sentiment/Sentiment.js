import React, { Component } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import { Route, Redirect, Switch } from "react-router-dom";

import { ComponentsPage, Login, Main } from "./pages";

const breakpoints = {
  xsm: 600,
  sm: 800,
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
    unit: "1em"
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
  font-size: 1rem;

  /* >>> md */
  ${theme.media.md`
    font-size: 0.875rem;
  `}

  a {
    text-decoration: none;
  }
`;

export class Sentiment extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledSentiment>
          <Switch>
            <Route exact path={"/001"}>
              <Redirect to={"/001/login"} />
            </Route>

            <Route path={`/001/login`} component={Login} />

            <Route path={`/001/main`} component={Main} />

            <Route path={`/001/components`} component={ComponentsPage} />

            <Route component={() => <div>404 Not found </div>} />
          </Switch>
        </StyledSentiment>
      </ThemeProvider>
    );
  }
}

export default Sentiment;
