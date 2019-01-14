import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";

const theme = {
  font: {
    primary: "Muli, sans-serif"
  },
  color: {
    success: "#00E676",
    error: "#FF1744",
    black: "#212121",
    white: "#FFFFFF"
  },
  size: {
    xs: "0.5em",
    sm: "1em",
    md: "2em",
    lg: "4em",
    unit: px => `${px / 16}em`
  },
  space: {
    xs: "0.5em",
    sm: "1em",
    md: "2em",
    lg: "4em",
    unit: px => `${px / 16}em`
  },
  breakpoint: {
    sm: "600px",
    md: "960px"
  }
};

const GlobalStyle = createGlobalStyle`
  :root {
  }

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme.font.primary};
    color: ${theme.color.black};
  }

  button {
    background-color: unset;
    border: none;
    text-align: left;
    padding: 0;
    margin: 0;
    cursor: pointer;

    :focus {
      outline: 0;
    }
  }
`;

const StyledWrapper = styled.div`
  .light-container,
  .dark-container {
    padding: ${theme.space.lg};

    > *:not(:last-child) {
      margin-bottom: ${theme.space.sm};
    }

    @media (max-width: ${theme.breakpoint.sm}) {
      padding: ${theme.space.md};
    }
  }

  .light-container {
  }

  .dark-container {
    background-color: ${theme.color.black};
  }
`;

const StyledFlashMessage = styled.div`
  .success-block {
    /* border: 1px solid cyan; */
    /* width: ${theme.size.unit(500)}; */
    min-width: ${theme.size.unit(256)};
    height: ${theme.size.unit(172)};
    position: relative;
    display: inline-block; 

    @media (max-width: ${theme.breakpoint.md}) {
      height: unset;
      width: unset;

    }

    @media (max-width: ${theme.breakpoint.sm}) {
      /* width: ${theme.size.unit(256)}; */
      width: 100%;
    }

    --color-primary: ${props =>
      props.type === "success"
        ? theme.color.success
        : props.type === "error"
        ? theme.color.error
        : theme.color.success};

    --color-secondary: ${props =>
      props.dark ? theme.color.white : theme.color.black};

    --color-tertiary: ${props =>
      props.dark ? theme.color.black : theme.color.white};
  }

  .success-container {
    ${"" /* position: absolute; */}
    top: ${theme.space.unit(20)};
    left: 0em;
    height: ${theme.size.unit(128)};
    margin-top: ${theme.space.unit(20)};
    margin-right: ${theme.space.unit(56)};
    border: ${theme.size.unit(2)} solid var(--color-primary);
    border-radius: ${theme.size.unit(16)};
    padding-top: ${theme.size.sm};
    padding-right: ${theme.size.unit(80)};
    padding-bottom: ${theme.size.sm};
    padding-left: ${theme.size.md}; 

    @media (max-width: ${theme.breakpoint.md}) {
      margin-right: 0;
      /* width: ${theme.size.unit(256)}; */
      height: 100%;
      margin-bottom: ${theme.space.sm};
      padding-right: ${theme.space.md};
      padding-bottom: ${theme.size.md};
    }

    .success-title-box {
    /* border: 1px solid magenta; */
    /* width: ${theme.size.unit(128)}; */
    height: ${theme.size.md};
    margin-bottom: ${theme.space.xs};
    display: flex;
    align-content: flex-end;
    
      .success-title {
        font-weight: bold;
        font-size: 1.5em;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--color-primary);
      }
    }

    .success-message-box {
      /* border: 1px solid magenta; */

      .success-message {
        line-height: ${theme.space.unit(24)};
        color: var(--color-secondary);
      }
    }

    .success-close-box {
      position: absolute; 
      width: ${theme.size.md};
      height: ${theme.size.md};
      top: ${theme.space.unit(4)};
      right: ${theme.space.unit(88)};
      border: ${theme.size.unit(2)} solid var(--color-secondary);
      border-radius: 1000em;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--color-tertiary);
      transform-style: preserve-3d;

      @media (max-width: ${theme.breakpoint.md}) {
        right: ${theme.space.md};
      }

      :before {
        border: ${theme.size.unit(4)} solid var(--color-tertiary);
        content: "";
        /* background-color: ${theme.color.white}; */
        width: ${theme.size.unit(40)};
        height: ${theme.size.unit(40)};
        border-radius: 1000em;
        position: absolute;
        transform: translateZ(-1px);
      }

      .success-close-icon {
        /* border: 1px solid magenta; */
        stroke: var(--color-secondary);
      }
    }
  }

  .success-graphic-box {
    /* border: 1px solid magenta; */
    position: absolute;
    right: ${theme.space.xs};
    bottom: ${theme.space.xs};
    width: ${theme.size.unit(112)};
    height: ${theme.size.unit(112)};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    border-radius: 1000em;

    @media (max-width: ${theme.breakpoint.md}) {
      width: ${theme.size.md};
      height: ${theme.size.md};
      bottom: ${theme.space.unit(4)};
      right: calc(100% - 50% - ${theme.size.md}/2);
    }

    :before {
      content: "";
      position: absolute;
      border: ${theme.size.unit(8)} solid var(--color-tertiary);
      width: ${theme.size.unit(128)};
      height: ${theme.size.unit(128)};
      border-radius: 1000em;

      @media (max-width: ${theme.breakpoint.md}) {
        border: ${theme.size.unit(4)} solid var(--color-tertiary);
        width: ${theme.size.unit(40)};
        height: ${theme.size.unit(40)};  
      }
    }

    .success-graphic-icon {
      /* border: 1px solid magenta; */
      stroke: var(--color-tertiary);
      stroke-width: 4;
      
      @media (max-width: ${theme.breakpoint.md}) {
        width: ${theme.size.unit(18)};
        height: ${theme.size.unit(18)};
        stroke-width: 8;
      }
    }
  }

  .success-design-line {
    /* border: 1px solid magenta; */
    position: absolute;
    top: ${theme.space.unit(4)};
    left: ${theme.space.sm};
    width: ${theme.size.unit(2)};
    height: ${theme.size.unit(160)};
    border-radius: 1000em;
    background-color: var(--color-primary);

    @media (max-width: ${theme.breakpoint.md}) {
      height: 97%;
      
    }
  }

  .success-design-dots-box { 
    display: flex;
    position: absolute;
    top: ${theme.space.unit(4)};
    left: ${theme.space.md};

    .success-design-dot {
      /* border: 1px solid magenta; */ 
      width: ${theme.size.xs};
      height: ${theme.size.xs};
      background-color: var(--color-primary);
      border-radius: 1000em;

      :not(:last-child) {
        margin-right: ${theme.size.xs};
      }
    }
  }
  
`;

export class FlashMessage extends Component {
  render() {
    return (
      <StyledWrapper>
        <GlobalStyle />

        <div className="light-container">
          <StyledFlashMessage type="success">
            <div className="success-block">
              <div className="success-container">
                <div className="success-title-box">
                  <span className="success-title">Success</span>
                </div>

                <div className="success-message-box">
                  <span className="success-message">
                    Oh yeah! Everything seems to be in order.
                  </span>
                </div>

                <button className="success-close-box">
                  <svg
                    className="success-close-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 1L1 17M1 1L17 17" strokeWidth="2" />
                  </svg>
                </button>
              </div>

              <button className="success-graphic-box">
                <svg
                  className="success-graphic-icon"
                  width="68"
                  height="53"
                  viewBox="0 0 68 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 26L26.5 49.5L66 2" />
                </svg>
              </button>

              <div className="success-design-line" />
              <div className="success-design-dots-box">
                <div className="success-design-dot" />
                <div className="success-design-dot" />
                <div className="success-design-dot" />
              </div>
            </div>
          </StyledFlashMessage>

          <StyledFlashMessage type="error">
            <div className="success-block">
              <div className="success-container">
                <div className="success-title-box">
                  <span className="success-title">Error</span>
                </div>

                <div className="success-message-box">
                  <span className="success-message">
                    Yikes! Something went terribly wrong. Please try again
                    later.
                  </span>
                </div>

                <button className="success-close-box">
                  <svg
                    className="success-close-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 1L1 17M1 1L17 17" strokeWidth="2" />
                  </svg>
                </button>
              </div>

              <button className="success-graphic-box">
                <svg
                  className="success-graphic-icon"
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 51L51 2M2 2L51 51" />
                </svg>
              </button>

              <div className="success-design-line" />
              <div className="success-design-dots-box">
                <div className="success-design-dot" />
                <div className="success-design-dot" />
                <div className="success-design-dot" />
              </div>
            </div>
          </StyledFlashMessage>
        </div>

        <div className="dark-container">
          <StyledFlashMessage dark type="success">
            <div className="success-block">
              <div className="success-container">
                <div className="success-title-box">
                  <span className="success-title">Success</span>
                </div>

                <div className="success-message-box">
                  <span className="success-message">
                    Oh yeah! Everything seems to be in order.
                  </span>
                </div>

                <button className="success-close-box">
                  <svg
                    className="success-close-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 1L1 17M1 1L17 17" strokeWidth="2" />
                  </svg>
                </button>
              </div>

              <button className="success-graphic-box">
                <svg
                  className="success-graphic-icon"
                  width="68"
                  height="53"
                  viewBox="0 0 68 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 26L26.5 49.5L66 2" />
                </svg>
              </button>

              <div className="success-design-line" />
              <div className="success-design-dots-box">
                <div className="success-design-dot" />
                <div className="success-design-dot" />
                <div className="success-design-dot" />
              </div>
            </div>
          </StyledFlashMessage>

          <StyledFlashMessage dark type="error">
            <div className="success-block">
              <div className="success-container">
                <div className="success-title-box">
                  <span className="success-title">Error</span>
                </div>

                <div className="success-message-box">
                  <span className="success-message">
                    Yikes! Something went terribly wrong. Please try again
                    later.
                  </span>
                </div>

                <button className="success-close-box">
                  <svg
                    className="success-close-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 1L1 17M1 1L17 17" strokeWidth="2" />
                  </svg>
                </button>
              </div>

              <button className="success-graphic-box">
                <svg
                  className="success-graphic-icon"
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 51L51 2M2 2L51 51" />
                </svg>
              </button>

              <div className="success-design-line" />
              <div className="success-design-dots-box">
                <div className="success-design-dot" />
                <div className="success-design-dot" />
                <div className="success-design-dot" />
              </div>
            </div>
          </StyledFlashMessage>
        </div>
      </StyledWrapper>
    );
  }
}

export default FlashMessage;
