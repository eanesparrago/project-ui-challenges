import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {  Transition, animated } from "react-spring";

const theme = {
  font: {
    primary: "Open Sans, sans-serif"
  },
  color: {
    white: "#FFFFFF",
    black: "#424242",
    grey: "#EEEEEE"
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
  }
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: ${theme.font.primary};
    font-size: 1em;
    font-weight: 400;
    margin: 0;
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

const StyledSocialShare = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  .share-container {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: relative;

    &:not(:last-child) {
      margin-bottom: 15em;
    }
  }

  .share-button {
    width: ${theme.size.unit(128)};
    height: ${theme.size.md};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.color.black};
    color: ${theme.color.white};
    border-radius: 0.25em;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    text-align: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }

  .share-dialog-container {
    width: ${theme.size.unit(192)};
    height: ${theme.size.unit(208)};
    background-color: ${theme.color.grey};
    border-radius: 0.25em;
    padding: ${theme.space.sm};
    position: absolute;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    pointer-events: ${props => props.isShareDialogOpen ? "auto" : "none"};
  }

  .share-header-container {
    /* border: 1px solid magenta; */
    width: 100%;
    height: ${theme.size.md};
    display: flex;
    justify-content: space-between;

    .share-title-box {
      display: flex;
      align-items: flex-start;

      .share-title {
        font-size: 1.125em;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
    }

    .share-close-box {
      .share-close {
      }
    }
  }

  .share-content-container {
    margin-bottom: ${theme.space.sm};

    .share-media-box {
      /* border: 1px solid cyan; */
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      width: 100%;
      height: ${theme.space.md};

      &--facebook {
        color: #3b5998;
      }

      &--twitter {
        color: #38a1f3;
      }

      &--google {
        color: #db3236;
      }

      .share-text {
        /* border: 1px solid magenta; */
        font-weight: 700;
        white-space: nowrap;
      }

      .share-number {
        /* border: 1px solid magenta; */
        width: 100%;
        text-align: right;
      }
    }
  }

  .share-link-box {
    .share-link {
      width: 100%;
      height: ${theme.size.md};
      border: none;
      border-radius: 0.25em;
      padding-left: ${theme.space.xs};
      padding-right: ${theme.space.xs};
      font-size: 0.875em;
    }
  }
`;

export class SocialShare extends Component {
  state = {
    isShareDialogOpen: false
  };

  toggleDialogOpen = () => {
    this.setState({ isShareDialogOpen: !this.state.isShareDialogOpen });
  };

  render() {
    return (
      <StyledSocialShare isShareDialogOpen={this.state.isShareDialogOpen}>
        <GlobalStyle />

        <div className="share-container">
          <button className="share-button" onClick={this.toggleDialogOpen}>
            Share
          </button>

          <Transition
            native
            // config={{ duration: 50 }}
            items={this.state.isShareDialogOpen}
            from={{ transform: "scale(0.4)", opacity: "0" }}
            enter={{ transform: "scale(1)", opacity: "1" }}
            leave={{ transform: "scale(0.4)", opacity: "0" }}
            // from={{ transform: "translate3d(0,-40px,0)" }}
            // enter={{ transform: "translate3d(0,0px,0)" }}
            // leave={{ transform: "translate3d(0,-40px,0)" }}
          >
            {isShareDialogOpen =>
              isShareDialogOpen &&
              (props => (
                <animated.div style={props} className="share-dialog-container">
                  <div className="share-header-container">
                    <div className="share-title-box">
                      <span className="share-title">Share</span>
                    </div>

                    <button
                      className="share-close-box"
                      onClick={this.toggleDialogOpen}
                    >
                      <svg
                        className="share-close"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 1L33 33M33 1L1 33" stroke="#424242" />
                      </svg>
                    </button>
                  </div>

                  <div className="share-content-container">
                    <div className="share-media-box share-media-box--facebook">
                      <span className="share-text">Facebook</span>
                      <span className="share-number">9</span>
                    </div>

                    <div className="share-media-box share-media-box--twitter">
                      <span className="share-text">Twitter</span>
                      <span className="share-number">13</span>
                    </div>

                    <div className="share-media-box share-media-box--google">
                      <span className="share-text">Google +</span>
                      <span className="share-number">0</span>
                    </div>
                  </div>

                  <div className="share-link-box">
                    <input
                      type="text"
                      className="share-link"
                      defaultValue="https://github.com/LJEsp"
                    />
                  </div>
                </animated.div>
              ))
            }
          </Transition>
        </div>

        <div className="share-container">
          <button className="share-button" onClick={this.toggleDialogOpen}>
            Share
          </button>

          <Transition
            native
            // config={{ duration: 50 }}
            items={true}
            from={{ transform: "scale(0.4)", opacity: "0" }}
            enter={{ transform: "scale(1)", opacity: "1" }}
            leave={{ transform: "scale(0.4)", opacity: "0" }}
            // from={{ transform: "translate3d(0,-40px,0)" }}
            // enter={{ transform: "translate3d(0,0px,0)" }}
            // leave={{ transform: "translate3d(0,-40px,0)" }}
          >
            {isShareDialogOpen =>
              isShareDialogOpen &&
              (props => (
                <animated.div style={props} className="share-dialog-container">
                  <div className="share-header-container">
                    <div className="share-title-box">
                      <span className="share-title">Share</span>
                    </div>

                    <button
                      className="share-close-box"
                      onClick={this.toggleDialogOpen}
                    >
                      <svg
                        className="share-close"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 1L33 33M33 1L1 33" stroke="#424242" />
                      </svg>
                    </button>
                  </div>

                  <div className="share-content-container">
                    <div className="share-media-box share-media-box--facebook">
                      <span className="share-text">Facebook</span>
                      <span className="share-number">9</span>
                    </div>

                    <div className="share-media-box share-media-box--twitter">
                      <span className="share-text">Twitter</span>
                      <span className="share-number">13</span>
                    </div>

                    <div className="share-media-box share-media-box--google">
                      <span className="share-text">Google +</span>
                      <span className="share-number">0</span>
                    </div>
                  </div>

                  <div className="share-link-box">
                    <input
                      type="text"
                      className="share-link"
                      defaultValue="https://github.com/LJEsp"
                    />
                  </div>
                </animated.div>
              ))
            }
          </Transition>
        </div>
      </StyledSocialShare>
    );
  }
}

export default SocialShare;
