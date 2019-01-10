import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

const theme = {
  font: {
    primary: "Meddon, sans-serif",
    body: "Open Sans, sans-serif"
  },
  color: {
    primary: {
      main: "#7C7C7C"
    },
    white: "#F5F1E3"
  },
  size: {
    sm: "1rem",
    md: "2rem",
    lg: "4rem"
  },
  space: {
    sm: "1rem",
    md: "2rem",
    lg: "4rem"
  }
};

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
  }

  #root {
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.font.body};
  }

  button {
    cursor: pointer;
  }
`;

const StyledPage404 = styled.div`
  /* border: 1px solid magenta; */
  width: 100%;
  min-height: 100vh;

  background-color: ${theme.color.white};
  padding: ${theme.space.md};

  display: grid;
  grid-template-rows: auto max-content 1fr;
  /* 
  align-content: stretch; 
  align-items: flex-start;
  */

  /* 
  display: flex;
  flex-flow: column;
  justify-content: space-between; */

  color: ${theme.color.primary.main};

  .logo-container {
    /* border: 1px solid magenta; */
    width: calc(${theme.space.lg} * 3);
    height: ${theme.space.lg};
    justify-self: center;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${theme.space.md};
  }

  .logo {
    font-family: ${theme.font.primary};
    font-size: 2.25em;
  }

  .main-container {
  }

  .error-container {
    /* border: 1px solid magenta; */
    display: flex;
    flex-flow: column;
    width: 100%;
    max-width: 60em;
    margin: 0 auto;
    margin-bottom: ${theme.space.md};

    .error-1-box {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr max-content 1fr;
      align-items: center;
      justify-items: center;

      .error-1-line {
        /* border: 1px solid magenta; */
        width: 100%;
        height: 1px;
        background-color: ${theme.color.primary.main};
      }

      .error-1-text {
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-align: center;
        margin-left: ${theme.space.sm};
        margin-right: ${theme.space.sm};
      }
    }

    .error-2-box {
      /* border: 1px solid magenta; */
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: ${theme.space.sm};

      .error-2-text {
        font-family: ${theme.font.primary};
        font-size: 6em;
        text-align: center;
      }
    }

    .error-3-box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: ${theme.space.md};

      .error-3-text {
      }
    }

    .error-4-box {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr max-content 1fr;
      align-items: center;
      justify-items: center;

      .error-4-line {
        width: 100%;
        height: 1px;
        background-color: ${theme.color.primary.main};
      }

      .error-4-circle {
        width: calc(${theme.space.sm} / 2);
        height: calc(${theme.space.sm} / 2);
        border: 1px solid ${theme.color.primary.main};
        border-radius: 100em;

        margin-left: ${theme.space.sm};
        margin-right: ${theme.space.sm};
      }
    }
  }

  .button-box {
    /* border: 1px solid magenta; */
    display: flex;
    justify-content: center;
    align-items: center;

    .button {
      border: none;
      background-color: ${theme.color.primary.main};
      color: ${theme.color.white};
      width: calc(${theme.size.lg} * 2);
      height: ${theme.size.md};
      border-radius: 100em;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
  }

  .burger-container {
    /* border: 1px solid magenta; */
    width: ${theme.size.lg};
    height: ${theme.size.lg};
    align-self: end;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.space.sm};

    .burger-line {
      width: 100%;
      height: 2px;
      background-color: ${theme.color.primary.main};
    }

    :hover {
    }
  }
`;

export default class Page404 extends Component {
  render() {
    return (
      <StyledPage404>
        <GlobalStyle />

        <div className="logo-container">
          <span className="logo">Payapa</span>
        </div>

        <main className="main-container">
          <div className="error-container">
            <div className="error-1-box">
              <div className="error-1-line" />
              <span className="error-1-text">Error</span>
              <div className="error-1-line" />
            </div>

            <div className="error-2-box">
              <span className="error-2-text">404</span>
            </div>

            <div className="error-3-box">
              <span className="error-3-text">The page could not be found.</span>
            </div>

            <div className="error-4-box">
              <div className="error-4-line" />
              <div className="error-4-circle" />
              <div className="error-4-line" />
            </div>
          </div>

          <div className="button-box">
            <button className="button">Go Back</button>
          </div>
        </main>

        <div className="burger-container">
          <div className="burger-line" />
          <div className="burger-line" />
          <div className="burger-line" />
        </div>

        {/* <div style={{ height: "10000px" }}>TEST</div> */}
      </StyledPage404>
    );
  }
}
