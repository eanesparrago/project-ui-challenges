import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

import { Logo, Typography, Button } from "./components";
import { Header, ProductPage } from "./compositions";

const StyledAmple = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
`;

export class Ample extends Component {
  render() {
    return (
      <StyledAmple>
        <GlobalStyle />

        <Header />

        <ProductPage />
      </StyledAmple>
    );
  }
}

export default Ample;
