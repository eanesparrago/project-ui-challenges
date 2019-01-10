import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import profileImage from "./images/profile.png";
import { Spring, animated } from "react-spring";
import { withRouter } from "react-router-dom";

const initialDelay = 0;

const theme = {
  font: {
    primary: "Work Sans, sans-serif"
  },
  color: {
    primary: {
      main: "#15B4F4"
    },
    grey: {
      main: "#696969"
    },
    white: "#FFFFFF"
  },
  space: {
    // 16px
    sm: "1rem",

    // 32px
    md: "2rem",

    // 64px
    lg: "4rem"
  },
  size: {
    sm: "1rem",
    md: "2rem",
    lg: "4rem"
  },
  unit: "1rem"
};

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body { 
    font-family: ${theme.font.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6, p, button {
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    background-color: unset;
    cursor: pointer;
  }
`;

const StyledSettings = styled.div`
  /* border: 1px solid cyan; */
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: auto auto auto 1fr;

  .color-primary {
    color: ${theme.color.primary.main} !important;
  }

  .sidebar-container {
    /* border: 1px solid magenta; */
    padding: ${theme.space.lg};
    overflow: hidden;

    .sidebar-title-box {
      /* border: 1px solid magenta; */
      width: calc(${theme.unit} * 16);
      height: ${theme.size.lg};
      display: flex;
      align-items: flex-end;
      margin-bottom: ${theme.space.lg};

      .sidebar-title {
        font-size: calc(${theme.unit} * 4);
        font-weight: 200;
        color: ${theme.color.grey.main};
      }
    }
  }

  .sidebar-item-container {
    .sidebar-item-box {
      /* border: 1px solid magenta; */
      width: calc(${theme.unit} * 16);
      height: ${theme.size.lg};
      display: flex;
      align-items: flex-start;

      &:not(:last-child) {
        /* border: 1px solid magenta; */
        margin-bottom: ${theme.space.md};
      }

      .sidebar-item {
        font-size: calc(${theme.unit} * 2.25);
        font-weight: 300;
        color: ${theme.color.grey.main};

        &--active {
          color: ${theme.color.primary.main};
        }
      }
    }
  }

  .divider-box {
    /* border: 1px solid magenta; */
    padding-top: ${theme.space.lg};
    padding-bottom: ${theme.space.lg};

    .divider {
      width: 1px;
      height: 100%;
      background-color: ${theme.color.grey.main};
    }
  }

  .main-container {
    /* border: 1px solid cyan; */
    padding: ${theme.space.lg};
    overflow: hidden;

    .main-title-box {
      /* border: 1px solid magenta; */
      width: calc(${theme.unit} * 16);
      height: ${theme.size.lg};
      display: flex;
      align-items: flex-end;
      margin-bottom: ${theme.space.lg};

      .main-title {
        font-size: calc(${theme.unit} * 4);
        font-weight: 200;
        color: ${theme.color.grey.main};
      }
    }
  }

  .fields-container {
    /* border: 1px solid orange; */

    display: flex;

    .fields-col-1 {
      margin-right: ${theme.space.lg};
    }

    .fields-col-2 {
    }

    .field-box {
      /* border: 1px solid magenta; */
      width: calc(${theme.unit} * 20);
      height: ${theme.size.lg};
      display: flex;
      flex-flow: column;
      justify-content: space-between;

      &:not(:last-child) {
        /* border: 1px solid magenta; */

        margin-bottom: ${theme.space.lg};
      }

      .field-label {
        font-size: 1.125em;
        color: ${theme.color.grey.main};
      }

      .field-input {
        font-size: 1.125em;
        color: ${theme.color.grey.main};
        height: ${theme.size.lg};
        border: none;
        background-color: unset;
        border-bottom: 1px solid ${theme.color.grey.main};
      }

      .field-textarea {
        border: none;
        background-color: unset;
        border-bottom: 1px solid ${theme.color.grey.main};
      }
    }

    .fields-button-box {
      margin-top: -${theme.space.md};

      .field-button {
      }
    }
  }

  .photo-settings-container {
    display: flex;
    margin-bottom: ${theme.space.lg};

    .photo-box {
      /* border: 1px solid magenta; */
      width: calc(${theme.unit} * 8);
      height: calc(${theme.unit} * 8);
      margin-right: ${theme.space.sm};

      .photo {
        width: calc(${theme.unit} * 8);
        object-fit: cover;
      }
    }

    .photo-buttons-box {
    }
  }

  .close-button-container {
    /* border: 1px solid magenta; */
    padding: ${theme.space.lg};

    .close-button-box {
      /* border: 1px solid magenta; */
      display: flex;
      justify-content: flex-end;

      .close-button {
        /* border: 1px solid magenta; */

        height: ${theme.size.lg};
        width: ${theme.size.lg};
      }
    }
  }

  .button {
    /* border: 1px solid magenta; */
    display: block;
    width: calc(${theme.unit} * 10);
    height: ${theme.size.md};
    background-color: ${theme.color.grey.main};
    color: ${theme.color.white};
    text-transform: uppercase;
    font-weight: 500;
    transition: 0.15s;

    &:not(:last-child) {
      margin-bottom: ${theme.space.sm};
    }

    &--primary {
      background-color: ${theme.color.primary.main};
    }

    &--secondary {
      color: ${theme.color.grey.main};
      border: 1px solid ${theme.color.grey.main};
      background-color: unset;
    }

    &:hover {
      box-shadow: 0 0.2em 0.7em rgba(0, 0, 0, 0.2);
    }
  }
`;

class Settings extends Component {
  render() {
    return (
      <StyledSettings onClick={() => {}}>
        <GlobalStyle />

        <svg
          width="65"
          height="66"
          viewBox="0 0 65 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "none" }}
        >
          <symbol id="settings-icon-close" viewBox="0 0 65 66">
            <line
              x1="0.353553"
              y1="0.646447"
              x2="64.3536"
              y2="64.6464"
              stroke="#696969"
            />
            <line
              x1="64.3536"
              y1="1.35355"
              x2="0.353556"
              y2="65.3536"
              stroke="#696969"
            />
          </symbol>
        </svg>

        <nav className="sidebar-container">
          <Spring
            delay={450 + initialDelay}
            native
            from={{ transform: "translateX(50vw)", opacity: "0" }}
            to={{ transform: "translateX(0)", opacity: "1" }}
          >
            {props => (
              <animated.div style={props}>
                <div className="sidebar-title-box">
                  <h1 className="sidebar-title">Settings</h1>
                </div>

                <div className="sidebar-item-container">
                  <div className="sidebar-item-box">
                    <button className="sidebar-item sidebar-item--active">
                      Profile
                    </button>
                  </div>

                  <div className="sidebar-item-box">
                    <button className="sidebar-item">Account</button>
                  </div>

                  <div className="sidebar-item-box">
                    <button className="sidebar-item">Emails</button>
                  </div>

                  <div className="sidebar-item-box">
                    <button className="sidebar-item">Notifications</button>
                  </div>

                  <div className="sidebar-item-box">
                    <button className="sidebar-item">Billings</button>
                  </div>
                </div>
              </animated.div>
            )}
          </Spring>
        </nav>

        <div className="divider-box">
          <Spring
            delay={initialDelay}
            native
            from={{ transform: "scaleY(0)" }}
            to={{ transform: "scaleY(1)" }}
          >
            {props => <animated.div style={props} className="divider" />}
          </Spring>
        </div>

        <section className="main-container">
          <Spring
            delay={450 + initialDelay}
            native
            from={{ transform: "translateX(-50vw)", opacity: "0" }}
            to={{ transform: "translateX(0)", opacity: "1" }}
          >
            {props => (
              <animated.div style={props}>
                <div className="main-title-box">
                  <h1 className="main-title color-primary">Profile</h1>
                </div>

                <div className="fields-container">
                  <div className="fields-col-1">
                    <div className="photo-settings-container">
                      <div className="photo-box">
                        <img src={profileImage} alt="" className="photo" />
                      </div>

                      <div className="photo-buttons-box">
                        <button className="button">Change Photo</button>

                        <button className="button button--secondary">
                          Remove Photo
                        </button>
                      </div>
                    </div>

                    <div className="field-box">
                      <label htmlFor="" className="field-label">
                        Name
                      </label>

                      <input type="text" className="field-input" />
                    </div>

                    <div className="field-box">
                      <label htmlFor="" className="field-label">
                        Email
                      </label>

                      <input type="text" className="field-input" />
                    </div>

                    <div className="field-box">
                      <label htmlFor="" className="field-label">
                        Bio
                      </label>

                      <textarea rows="4" className="field-textarea" />
                    </div>

                    <div className="field-box">
                      <label htmlFor="" className="field-label">
                        URL
                      </label>

                      <input type="text" className="field-input" />
                    </div>
                  </div>

                  <div className="fields-col-2">
                    <div className="field-box">
                      <label htmlFor="" className="field-label">
                        Company
                      </label>

                      <input type="text" className="field-input" />
                    </div>

                    <div className="field-box">
                      <label htmlFor="" className="field-label">
                        Location
                      </label>

                      <input type="text" className="field-input" />
                    </div>

                    <div className="fields-button-box">
                      <button className="button button--primary">
                        Update Profile
                      </button>
                    </div>
                  </div>
                </div>
              </animated.div>
            )}
          </Spring>
        </section>

        <div className="close-button-container">
          <Spring
            delay={450 + initialDelay}
            native
            from={{ transform: "translateY(-50vw)", opacity: "0" }}
            to={{ transform: "translateY(0)", opacity: "1" }}
          >
            {props => (
              <animated.div style={props} className="close-button-box">
                <button>
                  <svg className="close-button">
                    <use href="#settings-icon-close" />
                  </svg>
                </button>
              </animated.div>
            )}
          </Spring>
        </div>
      </StyledSettings>
    );
  }
}

export default withRouter(Settings);
