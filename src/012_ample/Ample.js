import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./GlobalStyle";

import { Header, ProductSection } from "./compositions";

const StyledAmple = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
`;

export class Ample extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledAmple>
          <GlobalStyle />

          <Header />

          <ProductSection />
        </StyledAmple>
      </ThemeProvider>
    );
  }
}

export default Ample;
