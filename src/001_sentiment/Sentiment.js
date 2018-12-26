import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import Logo from "./components/Logo/Logo";
import Typography from "./components/Typography/Typography";
import Button from "./components/Button/Button";

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
  spacing: {
    unit: "1rem"
  }
};

export class Sentiment extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Logo />
          <Typography variant="h1">
            The quick brown fox jumped over the lazy dog.
          </Typography>
          <Typography variant="h2">
            The quick brown fox jumped over the lazy dog.
          </Typography>
          <Typography variant="h3">
            The quick brown fox jumped over the lazy dog.
          </Typography>
          <Typography variant="h4">
            The quick brown fox jumped over the lazy dog.
          </Typography>
          <Typography variant="h5">
            The quick brown fox jumped over the lazy dog.
          </Typography>
          <Typography variant="subtitle">
            The quick brown fox jumped over the lazy dog.
          </Typography>
          <Typography variant="body">
            The quick brown fox jumped over the lazy dog.
          </Typography>
          <Typography variant="subtle">
            The quick brown fox jumped over the lazy dog.
          </Typography>
          <Typography variant="button">
            The quick brown fox jumped over the lazy dog.
          </Typography>

          <Button variant="primary">Button Main</Button>
        </div>
      </ThemeProvider>
    );
  }
}

export default Sentiment;
