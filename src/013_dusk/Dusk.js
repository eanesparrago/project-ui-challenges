import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import textCrop from "../utils/textCrop";

const theme = {
  font: {
    primary: "Muli, sans-serif"
  },
  color: {
    black: "#212121",
    white: "#FAFAFA",
    active: "#00C853",
    idle: "#FFD600",
    grey: {
      800: "#424242",
      700: "#616161",
      600: "#757575"
    }
  },
  size: {
    xs: "0.25em", // 4
    s: "0.5em", // 8
    m: "1em", // 16
    l: "2em", // 32
    xl: "4em" // 64
  },
  em: px => `${px / 16}em`
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body {
    font-family: ${theme.font.primary}
  }

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }
`;

const StyledDusk = styled.div`
  /* border: 1px solid magenta; */
  width: 320px;
  height: 568px;
  background-color: ${theme.color.black};

  .header {
    /* border: 1px solid cyan; */
    width: ${theme.em(320)};
    height: ${theme.em(80)};
    background-color: ${theme.color.black};
    color: ${theme.color.white};
    display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr max-content 1fr;
    align-items: center;
    padding: ${theme.size.m};

    &__title-box {
      /* border: 1px solid magenta; */
      display: flex;
      align-items: center;
    }

    &__status {
      width: ${theme.size.s};
      height: ${theme.size.s};
      background-color: ${theme.color.active};
      border-radius: 1000em;
    }

    &__title {
      ${textCrop()};
      font-size: 1.75em;
      justify-self: center;
      letter-spacing: 0.08em;
    }

    &__title--chat {
      letter-spacing: 0;
      margin-right: ${theme.size.xs};
    }

    &__secondary-button {
      /* border: 1px solid magenta; */
      justify-self: end;
    }
  }

  .avatar {
    /* border: 1px solid magenta; */
    width: ${theme.size.xl};
    height: ${theme.size.xl};
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    cursor: pointer;

    &__img-box {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 1000em;
      position: absolute;
    }

    &__img {
      width: 100%;
      height: auto;
      object-fit: cover;
      object-position: center;
    }

    &__status {
      width: ${theme.size.s};
      height: ${theme.size.s};
      background-color: ${theme.color.active};
      border-radius: 1000em;
    }

    &--small {
      width: ${theme.em(48)};
      height: ${theme.em(48)};
    }
  }



  .button {
    width: ${theme.em(48)};
    height: ${theme.em(48)};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &__svg {
      width: ${theme.em(32)};
      height: ${theme.em(32)};
    }
  }

  .main {
    /* border: 1px solid magenta; */
    color: ${theme.color.white};
    position: relative;
    overflow-y: auto;
    height: calc(100% - ${theme.size.xl});

    /* width */
    ::-webkit-scrollbar {
      width: ${theme.size.s};
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${theme.color.grey[800]}; 

    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${theme.color.grey[700]}; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.color.grey[600]}; 
    }
  }

  .chat-container {
    padding-right: ${theme.size.m};
    display: grid;
    grid-template-columns: ${theme.size.m} auto 1fr auto;
    grid-template-rows: auto 1fr;
    margin-bottom: ${theme.size.m};
    cursor: pointer;

    /* &:last-child {
      margin-bottom: calc(${theme.size.xl} + ${theme.size.m});
    } */

    &__status {
      /* border: 1px solid magenta; */
      grid-column: 1 / 2;
      grid-row: 1 / -1;
      width: ${theme.size.m};
      height: ${theme.size.m};
      background-color: ${theme.color.white};
      align-self: center;
      border-radius: 1000em;
      transform: translateX(-50%);
    }

    &__avatar-box {
      grid-column: 2 / 3;
      grid-row: 1 / -1;
      margin-right: ${theme.size.m};
    }

    &__name {
      /* ${textCrop()}; */
      grid-column: 3 / 4;
      grid-row: 1 / 2;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-bottom: ${theme.size.s};
      margin-right: ${theme.size.s};
    }

    &__time {
      /* ${textCrop()}; */
      grid-column: 4 / -1;
      grid-row: 1 / 2;
      font-style: italic;
      font-size: 0.8125em;
    }

    &__message {
      ${textCrop()};
      grid-column: 3 / -1;
      grid-row: 2 / -1;
      display: -webkit-box;
      height: 100%;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__message--new {
      /* border: 1px solid magenta; */
      font-weight: 700;
    }
  }

  .bottom-nav {
    /* border: 1px solid cyan; */
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(${theme.size.xl} + 1px);
    background-color: ${theme.color.black};
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    justify-items: center;
    align-items: center;
  }

  .bottom-nav-2 {
    /* border: 1px solid cyan; */
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(${theme.size.xl} + 1px);
    background-color: ${theme.color.black};
    display: grid;
    grid-template-columns: ${theme.size.xl} 1fr ${theme.size.xl};
    justify-items: center;
    align-items: center;
  }

  .nav-button {
    color: ${theme.color.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;

    &__icon-box {
      /* border: 1px solid magenta; */
      margin-right: ${theme.size.s};
    }

    &__svg {
      width: ${theme.em(26)};
      height: auto;
    }

    &__counter {
      font-weight: 700;
    }

    &--active {
      background-color: ${theme.color.white};
      color: ${theme.color.black};
    }
  }

  .nav-item {
    /* border: 1px solid magenta; */
    color: ${theme.color.white};
    justify-self: start;

  span {
    white-space: nowrap;
  }
    
  }

  .message-box {
    margin-left: ${theme.size.m};
    margin-right: ${theme.size.m};
    color: ${theme.color.white};
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: ${theme.size.s};
    justify-items: start;
    justify-content: start;
    align-items: start;
    margin-bottom: ${theme.size.m};

    &--self {
      grid-template-columns: auto;
      justify-content: end;
      justify-items: end;
      margin-left: ${theme.em(48)};
      margin-bottom: ${theme.size.s};
    }

    &--last {
      margin-bottom: ${theme.size.m};
    }
  }

  .message-text {
    background-color: ${theme.color.grey[800]};
    padding: ${theme.size.s} ${theme.size.m};
    padding-bottom: ${theme.size.m};
    border-radius: ${theme.em(4)};

    &__text {
      ${textCrop()};
    }

    &--emoji {
      background-color: unset;
    }

    &--update {
      background-color: unset;
      padding: 0;
      font-style: italic;
    }
  }

  .emoji {
    width: ${theme.size.l};
    height: auto;
  }
`;

export class Dusk extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledDusk>
          <GlobalStyle />

          <Route exact path="/013" component={Home} />
          <Route path="/013/chat" component={Chat} />
        </StyledDusk>
      </ThemeProvider>
    );
  }
}

export default Dusk;
