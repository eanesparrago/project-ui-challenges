import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import textCrop from "../utils/textCrop";

import imageCat from "./cat.png";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    z-index: 0;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  #root { 
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 56.25rem) {
      align-items: flex-start;
      padding: 1em;
    }

  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;

    @media (max-width: 37.4375em) {
      font-size: 0.9375em;
    }
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    position: relative;
    z-index: 1;

    :focus {
      outline: none;
    }
  }
`;

const StyledPopUpOverlay = styled.div`
  /* border: 1px solid magenta; */
  width: 51em;
  color: #212121;
  position: relative;

  @media (max-width: 56.25rem) {
    width: 100%;
  }

  .container {
    /* border: 1px solid cyan; */
    width: 48em;
    
    border-radius: 1em;
    background: linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%);
    box-shadow: 0.25em 0.3em 1.5em rgba(0, 0, 0, 0.2);
    padding: 2em;
    padding-top: 4.5em;
    display: grid;
    grid-template-rows: auto 1fr;
    position: relative;

    @media (max-width: 56.25rem) {
      width: 100%;
      padding-top: 2em;
    }

    @media (max-width: 37.4375em) {
      min-height: unset;
    }

    ::after {
      content: "";
      position: absolute;
      width: 48em;
      /* height: 28em; */
      height: 100%;
      top: 3em;
      left: 3em;
      bottom: 0;
      border: 0.0625em solid #212121;
      border-radius: 0.125em;
      pointer-events: none;

      @media (max-width: 56.25rem) {
        display: none;
      }
    }
  }

  .content {
    /* border: 1px solid magenta; */
    grid-column: 1 / -1;
    z-index: 1;
  }

  .heading {
    /* ${textCrop()}; */
    font-family: Open Sans;
    font-size: 3.875em;
    font-weight: 700;
    color: #3d5afe;
  }

  .body {
    line-height: 1.5em;
    margin-left: 3em;
    margin-top: 0.5em;
    margin-right: 2em;
    margin-bottom: 5em;

    @media (max-width: 56.25rem) {
      margin-left: 0;
      margin-right: 0;
    }

    @media (max-width: 37.4375em) {
      margin-bottom: 2em;
    }
  }

  /* .row {
    border: 1px solid orange;
    display: flex;
    position: relative;
    flex-grow: 1;
  } */

  .image-box {
    position: absolute;
    left: 1.5em;
    bottom: -3em;
    width: 13em;
    transform: translateX(-1.5em) t;
    z-index: 1;

    @media (max-width: 37.4375em) {
      display: none;
    }

    .image {
      width: 100%;
    }
  }

  .buttons-box {
    /* border: 1px solid magenta; */
    justify-self: end;
    align-self: end;

    @media (max-width: 37.4375em) {
      justify-self: center;
      display: flex;
      flex-flow: column;
      align-items: center;
    }

    .button {
      /* width: 8em; */
      height: 3em;
      background: #3D5AFE;
      color: #ffffff;
      box-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
      border-radius: 0.25em;
      font-weight: 700;
      font-size: 1.1875em;
      text-align: center;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding-left: 1.5em;
      padding-right: 1.5em;

      &__icon {
        margin-right: 0.5em;
      }

      &--secondary {
        background: none;
        box-shadow: none;
        color: #212121;

        @media (max-width: 37.4375em) {
         margin-bottom: 0.5em;
        } 
      }
    }
  }

  .design-border {
    position: absolute;
    width: 48em;
    /* height: 28em; */
    left: 3em;
    top: 3em;
    border: 0.0625em solid #212121;
    border-radius: 0.25em;
    pointer-events: none;
  }

  .close-box {
    width: 3em;
    height: 3em;
    position: absolute;
    left: 48em;
    top: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media (max-width: 56.25rem) {
      right: 1em;
      top: 1em;
      left: unset;
    }

    .close {

    }

    
  }
`;

export class PopUpOverlay extends Component {
  render() {
    return (
      <StyledPopUpOverlay>
        <GlobalStyle />
        <div className="container">
          <div className="content">
            <span className="heading">Ocicat Tomcat</span>

            <p className="body">
              Plays league of legends cough furball. Go into a room to decide
              you didn't want to be in there anyway curl into a furry donut what
              a cat-ass-trophy!. All of a sudden cat goes crazy my water bowl is
              clean and freshly replenished, so i'll drink from the toilet check
              cat door for ambush 10 times before coming in for jump five feet
              high and sideways when a shadow moves bird bird bird bird bird
              bird human why take bird out i could have eaten that.
            </p>
          </div>

          <div className="buttons-box">
            <button className="button button--secondary">Not Meow!</button>
            <button className="button">
              <svg
                className="button__icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="28"
                viewBox="0 0 26 28"
              >
                <title>paw</title>
                <path d="M12.187 7.375c0 1.75-0.906 3.828-2.922 3.828-2.531 0-4.062-3.187-4.062-5.375 0-1.75 0.906-3.828 2.922-3.828 2.547 0 4.062 3.187 4.062 5.375zM6.844 14.922c0 1.516-0.797 3.094-2.516 3.094-2.5 0-4.328-3.063-4.328-5.328 0-1.516 0.812-3.109 2.516-3.109 2.5 0 4.328 3.078 4.328 5.344zM13 14.5c3.828 0 9 5.516 9 9.203 0 1.984-1.625 2.297-3.219 2.297-2.094 0-3.781-1.406-5.781-1.406-2.094 0-3.875 1.391-6.141 1.391-1.516 0-2.859-0.516-2.859-2.281 0-3.703 5.172-9.203 9-9.203zM16.734 11.203c-2.016 0-2.922-2.078-2.922-3.828 0-2.188 1.516-5.375 4.062-5.375 2.016 0 2.922 2.078 2.922 3.828 0 2.188-1.531 5.375-4.062 5.375zM23.484 9.578c1.703 0 2.516 1.594 2.516 3.109 0 2.266-1.828 5.328-4.328 5.328-1.719 0-2.516-1.578-2.516-3.094 0-2.266 1.828-5.344 4.328-5.344z" />
              </svg>
              Meow
            </button>
          </div>
        </div>

        {/* <div className="design-border" /> */}

        <div className="image-box">
          <img src={imageCat} alt="" className="image" />
        </div>

        <div className="close-box">
          <svg
            className="close"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 33L33 1M1 1L33 33" stroke="#212121" strokeWidth="2" />
          </svg>
        </div>
      </StyledPopUpOverlay>
    );
  }
}

export default PopUpOverlay;
