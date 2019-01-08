import React, { Component } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Spring, Transition } from "react-spring";
import TextFit from "react-textfit";

import imageTilda from "./images/tilda.jpg";

import PersonActionsDialog from "./components/PersonActionsDialog";

// >>> @theme
const theme = {
  font: {
    primary: "Muli, sans-serif"
  },
  color: {
    primary: "#FCF4F8",
    grey: {
      light: "#A3A3A3",
      dark: "#525252"
    }
  },
  spacing: {
    small: "1rem",
    medium: "2rem"
  },
  size: {
    small: "1rem",
    medium: "2rem",
    large: "4rem"
  }
};

// >>> @global
const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: ${theme.font.primary};
  }

  p {
    margin: 0;
    padding: 0;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;

    &:focus {
      outline:0;
    }

  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E5E5E5;
  }
`;

// >>> @css
const StyledElecy = styled.div`
  /* border: 1px solid magenta; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: ${theme.spacing.medium};
  background-color: ${theme.color.primary};
  position: relative;
  overflow: hidden;

  * {
    /* border: 1px solid magenta; */
  }

  @media (max-height: 600px) and (orientation: landscape) {
    flex-flow: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  @media (min-width: 600px) {
    width: 320px;
    height: 528px;
    border-radius: 1em;
  }

  .svg-icon {
    /* border: 1px solid magenta; */
    width: ${theme.size.medium};
    height: ${theme.size.medium};
    color: ${theme.color.grey.light};
    transition-duration: 0.15s;

    :hover {
      color: ${theme.color.grey.dark};
    }
  }

  .menu-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${theme.spacing.medium};

    @media (max-height: 600px) and (orientation: landscape) {
      /* border: 1px solid magenta; */
      width: auto;
      flex-flow: column;
      margin-right: ${theme.spacing.medium};
    }
  }

  .back-button-box {
    @media (max-height: 600px) and (orientation: landscape) {
      margin-bottom: ${theme.spacing.medium};
    }
  }

  .person-container {
    /* border: 1px solid magenta; */
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-flow: column;
    align-items: stretch;
    margin-bottom: ${theme.spacing.small};

    @media (max-height: 600px) and (orientation: landscape) {
      flex-grow: 1;
      width: 80%;
      max-width: unset;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: 1fr 1fr;
      grid-column-gap: ${theme.spacing.medium};
    }
  }

  .person-photo-box {
    /* border: 1px solid magenta; */
    align-self: center;
    min-width: 160px;
    min-height: 160px;
    border-radius: 100em;
    overflow: hidden;
    margin-bottom: ${theme.spacing.small};

    @media (max-height: 600px) and (orientation: landscape) {
      grid-row: 1 / 3;
    }
  }

  .person-photo {
    width: auto;
    height: 160px;
    object-fit: cover;
  }

  .person-name-box {
    /* border: 1px solid magenta; */
    width: 100%;
    align-self: center;
    margin-bottom: ${theme.spacing.small};
    text-align: center;

    @media (max-height: 600px) and (orientation: landscape) {
      justify-self: center;
      aling-self: center;
      margin-bottom: 0;
    }

    .person-name {
      /* border: 1px solid magenta; */
      /* font-size: 1.5em; */
      text-align: center;
    }
  }

  .person-buttons-box {
    /* border: 1px solid magenta; */
    justify-self: center;
    display: flex;
    justify-content: space-between;

    @media (max-height: 600px) and (orientation: landscape) {
      width: 100%;
      max-width: 400px;
    }
  }

  .person-button-box {
    /* border: 1px solid magenta; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${theme.size.large};
    height: ${theme.size.large};
  }

  .content-container {
    /* border: 1px solid magenta; */
    width: 100%;
    max-width: 300px;
    display: flex;

    align-items: flex-start;

    @media (max-height: 600px) and (orientation: landscape) {
      max-width: unset;
    }
  }

  .content-description-box {
    @media (max-height: 600px) and (orientation: landscape) {
      width: 100%;
    }
  }

  .content-description {
    font-size: 1.125em;
    font-weight: 300;
    line-height: 1.6875em;
    text-align: center;
  }
`;

// >>> @elecy
export default class Elecy extends Component {
  state = {
    isActionsDialogOpen: false
  };

  toggleActionsDialog = () => {
    this.setState({ isActionsDialogOpen: !this.state.isActionsDialogOpen });
  };

  render() {
    // >>> state
    const { isActionsDialogOpen } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <StyledElecy>
          <GlobalStyle />

          {/* >>> SVGs */}
          <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
            <symbol id="elecy-icon-arrow-left" viewBox="0 0 32 32">
              <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z" />
            </symbol>
            <symbol id="elecy-icon-bell" viewBox="0 0 32 32">
              <path d="M32.047 25c0-9-8-7-8-14 0-0.58-0.056-1.076-0.158-1.498-0.526-3.532-2.88-6.366-5.93-7.23 0.027-0.123 0.041-0.251 0.041-0.382 0-1.040-0.9-1.891-2-1.891s-2 0.851-2 1.891c0 0.131 0.014 0.258 0.041 0.382-3.421 0.969-5.966 4.416-6.039 8.545-0.001 0.060-0.002 0.121-0.002 0.183 0 7-8 5-8 14 0 2.382 5.331 4.375 12.468 4.878 0.673 1.263 2.002 2.122 3.532 2.122s2.86-0.86 3.532-2.122c7.137-0.503 12.468-2.495 12.468-4.878 0-0.007-0.001-0.014-0.001-0.021l0.048 0.021zM25.82 26.691c-1.695 0.452-3.692 0.777-5.837 0.958-0.178-2.044-1.893-3.648-3.984-3.648s-3.805 1.604-3.984 3.648c-2.144-0.18-4.142-0.506-5.837-0.958-2.332-0.622-3.447-1.318-3.855-1.691 0.408-0.372 1.523-1.068 3.855-1.691 2.712-0.724 6.199-1.122 9.82-1.122s7.109 0.398 9.82 1.122c2.332 0.622 3.447 1.318 3.855 1.691-0.408 0.372-1.523 1.068-3.855 1.691z" />
            </symbol>
            <symbol id="elecy-icon-block">
              <path d="M27.314 4.686c-3.022-3.022-7.040-4.686-11.314-4.686s-8.292 1.664-11.314 4.686c-3.022 3.022-4.686 7.040-4.686 11.314s1.664 8.292 4.686 11.314c3.022 3.022 7.040 4.686 11.314 4.686s8.292-1.664 11.314-4.686c3.022-3.022 4.686-7.040 4.686-11.314s-1.664-8.292-4.686-11.314zM28 16c0 2.588-0.824 4.987-2.222 6.949l-16.727-16.727c1.962-1.399 4.361-2.222 6.949-2.222 6.617 0 12 5.383 12 12zM4 16c0-2.588 0.824-4.987 2.222-6.949l16.727 16.727c-1.962 1.399-4.361 2.222-6.949 2.222-6.617 0-12-5.383-12-12z" />
            </symbol>
            <symbol id="elecy-icon-bubble">
              <path d="M16 2c8.837 0 16 5.82 16 13s-7.163 13-16 13c-0.849 0-1.682-0.054-2.495-0.158-3.437 3.437-7.539 4.053-11.505 4.144v-0.841c2.142-1.049 4-2.961 4-5.145 0-0.305-0.024-0.604-0.068-0.897-3.619-2.383-5.932-6.024-5.932-10.103 0-7.18 7.163-13 16-13z" />
            </symbol>
            <symbol id="elecy-icon-circle">
              <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z" />
            </symbol>
            <symbol id="elecy-icon-diamond">
              <path d="M16 0l-10 16 10 16 10-16z" />
            </symbol>
            <symbol id="elecy-icon-plus">
              <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z" />
            </symbol>
            <symbol id="elecy-icon-square">
              <path d="M4 4h24v24h-24z" />
            </symbol>
          </svg>

          {/* >>> Menu: back-button, notifications-button */}
          <div className="menu-container">
            <div className="back-button-box">
              <button>
                <svg className="svg-icon">
                  <use href="#elecy-icon-arrow-left" />
                </svg>
              </button>
            </div>

            <div className="notifications-button-box">
              <button>
                <svg className="svg-icon">
                  <use href="#elecy-icon-bell" />
                </svg>
              </button>
            </div>
          </div>

          {/* >>> Person: photo, name, buttons */}
          <div className="person-container">
            <div className="person-photo-box">
              <button onClick={this.toggleActionsDialog}>
                <img
                  className="person-photo"
                  src={imageTilda}
                  alt="Profile photo"
                />
              </button>
            </div>

            <div className="person-name-box">
              <TextFit mode="single" className="person-name">
                Katherine Matilda Swinton
              </TextFit>
            </div>

            <div className="person-buttons-box">
              <div className="person-button-box">
                <button>
                  <svg className="svg-icon">
                    <use href="#elecy-icon-square" />
                  </svg>
                </button>
              </div>

              <div className="person-button-box">
                <button>
                  <svg className="svg-icon">
                    <use href="#elecy-icon-circle" />
                  </svg>
                </button>
              </div>

              <div className="person-button-box">
                <button>
                  <svg className="svg-icon">
                    <use href="#elecy-icon-diamond" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* >>> Content: description */}
          <div className="content-container">
            <div className="content-description-box">
              <p className="content-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </div>

          <Transition
            native
            items={isActionsDialogOpen}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {isActionsDialogOpen =>
              isActionsDialogOpen &&
              (props => (
                <PersonActionsDialog
                  props={props}
                  isActionsDialogOpen={isActionsDialogOpen}
                  toggleActionsDialog={this.toggleActionsDialog}
                />
              ))
            }
          </Transition>
        </StyledElecy>
      </ThemeProvider>
    );
  }
}
