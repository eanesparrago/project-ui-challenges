import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import trevertIcon from "./trevert-icon.svg";
import TextFit from "react-textfit";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
`;

const StyledTrevert = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-items: center;
  /* padding-top: 5rem; */

  @media (max-width: 900px) {
    flex-flow: column;
  }

  .icon-box {
    /* border: 1px solid magenta; */
    width: 30vw;

    @media (max-width: 900px) {
      width: 50vw;
    }

    @media (max-width: 900px) {
      margin-bottom: 2rem;
    }

    &--medium {
      width: 20vw;

      @media (max-width: 900px) {
        width: 40vw;
      }
    }

    &--small {
      width: 10vw;

      @media (max-width: 900px) {
        width: 30vw;
      }
    }
  }

  .icon {
    /* border: 1px solid magenta; */
    width: 100%;
  }

  .trevert {
    text-transform: uppercase;
    color: #9c9c9c;
    font-family: "Montserrat", sans-serif;
    text-align: center;
  }

  .text-fit {
    /* border: 1px solid magenta; */
    padding: 0 2rem 0 2rem;
  }
`;

export class Trevert extends Component {
  render() {
    return (
      <StyledTrevert>
        <GlobalStyle />

        <div className="icon-box">
          <img src={trevertIcon} alt="Trevert icon" className="icon" />

          <span className="trevert">
            <TextFit className="text-fit" mode="single">
              Trevert
            </TextFit>
          </span>
        </div>

        <div className="icon-box icon-box--medium ">
          <img src={trevertIcon} alt="Trevert icon" className="icon" />

          <span className="trevert">
            <TextFit className="text-fit" mode="single">
              Trevert
            </TextFit>
          </span>
        </div>

        <div className="icon-box icon-box--small">
          <img src={trevertIcon} alt="Trevert icon" className="icon" />

          <span className="trevert">
            <TextFit className="text-fit" mode="single">
              Trevert
            </TextFit>
          </span>
        </div>
      </StyledTrevert>
    );
  }
}

export default Trevert;
