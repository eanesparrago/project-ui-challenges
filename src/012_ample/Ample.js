import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import { Logo, Typography, Button } from "./components";

const theme = {
  font: {
    primary: "Muli, sans-serif"
  },
  color: {
    primary: "#A30A19",
    black: "#000000",
    white: "#FFFFFF"
  },
  size: {
    xs: "0.25em", // 4
    s: "0.5em", // 8
    m: "1em", // 16
    l: "2em", // 32
    xl: "4em", // 64
    em: px => `${px / 16}em`
  },
  breakpoint: {
    sm: "600px",
    md: "960px"
  }
};

const GlobalStyle = createGlobalStyle`
  :root {
    --color-black: ${theme.color.black};
    --font-family-primary: ${theme.font.primary};
    --font-size: 16px;
    --margin-base: ${theme.size.em(24)};
    --line-height: ${theme.size.em(24)};
    --space-inset-default: ${theme.size.m} ${theme.size.m} ${theme.size.m} ${
  theme.size.m
};
    --space-inset-xs: ${theme.size.xs} ${theme.size.xs} ${theme.size.xs} ${
  theme.size.xs
};
    --space-inset-s: ${theme.size.s} ${theme.size.s} ${theme.size.s} ${
  theme.size.s
};
    --space-inset-m: ${theme.size.m} ${theme.size.m} ${theme.size.m} ${
  theme.size.m
};
    --space-inset-l: ${theme.size.l} ${theme.size.l} ${theme.size.l} ${
  theme.size.l
};
    --space-inset-xl: ${theme.size.xl} ${theme.size.xl} ${theme.size.xl} ${
  theme.size.xl
};
    --space-squish-default: calc(${theme.size.m} / 2) ${theme.size.m} calc(${
  theme.size.m
} / 2) ${theme.size.m};
    --space-squish-s: calc(${theme.size.s} / 2) ${theme.size.s} calc(${
  theme.size.s
} / 2) ${theme.size.s};
    --space-squish-m: calc(${theme.size.m} / 2) ${theme.size.m} calc(${
  theme.size.m
} / 2) ${theme.size.m};
    --space-squish-l: calc(${theme.size.l} / 2) ${theme.size.l} calc(${
  theme.size.l
} / 2) ${theme.size.l};
    --space-stretch-default: ${theme.size.m} calc(${theme.size.m} / 2) ${
  theme.size.m
} calc(${theme.size.m} / 2);
    --space-stretch-s: ${theme.size.s} calc(${theme.size.s} / 2) ${
  theme.size.s
} calc(${theme.size.s} / 2);
    --space-stretch-m: ${theme.size.m} calc(${theme.size.m} / 2) ${
  theme.size.m
} calc(${theme.size.m} / 2);
    --space-stretch-l: ${theme.size.l} calc(${theme.size.l} / 2) ${
  theme.size.l
} calc(${theme.size.l} / 2);
    --space-stack-default: 0 0 ${theme.size.m} 0;
    --space-stack-xs: 0 0 ${theme.size.xs} 0;
    --space-stack-s: 0 0 ${theme.size.s} 0;
    --space-stack-m: 0 0 ${theme.size.m} 0;
    --space-stack-l: 0 0 ${theme.size.l} 0;
    --space-stack-xl: 0 0 ${theme.size.xl} 0;
    --space-default: ${theme.size.m};
    --space-xs: ${theme.size.xs};
    --space-s: ${theme.size.s};
    --space-m: ${theme.size.m};
    --space-l: ${theme.size.l};
    --space-xl: ${theme.size.xl};
  }

  p {
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-family-primary);
    font-size: var(--font-size);
    color: var(--color-black);
  }

  button {
    background-color: unset;
    border: none;
    padding: 0;
    margin: 0;
    text-align: left;
    cursor: pointer;
  }
`;

const StyledAmple = styled.div``;

export class Ample extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledAmple>
          <GlobalStyle />
          <div>
            <Logo />
          </div>

          <div>
            <Typography>
              Commodo ex qui non aliqua elit sint velit reprehenderit aliquip
              reprehenderit aliqua dolore. Ad officia nisi excepteur proident id
              incididunt ut sint quis officia sit ut labore. Ipsum sint velit
              nisi tempor et magna dolore consectetur labore voluptate duis.
            </Typography>
          </div>

            <Button>Button</Button>
        </StyledAmple>
      </ThemeProvider>
    );
  }
}

export default Ample;
