import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import textCrop from "../utils/textCrop";
import imageSigil1Stark from "./images/sigil-1-stark.png";
import imageSigilThumb1Stark from "./images/sigil-thumb-1-stark.png";
import imageSigilThumb2Lannister from "./images/sigil-thumb-2-lannister.png";
import imageSigilThumb3Baratheon from "./images/sigil-thumb-3-baratheon.png";
import imageSigilThumb4Targaryen from "./images/sigil-thumb-4-targaryen.png";
import imageSigilThumb5Greyjoy from "./images/sigil-thumb-5-greyjoy.png";
import imageSigilThumb6Martell from "./images/sigil-thumb-6-martell.png";
import imageSigilThumb7Tyrell from "./images/sigil-thumb-7-tyrell.png";
import imageSigilThumb8Tully from "./images/sigil-thumb-8-tully.png";

const houses = [
  {
    name: "Stark",
    motto: "Winter is Coming.",
    color: "#F4EAE4",
    textColor: "dark"
  },
  {
    name: "Lannister",
    motto: "Hear Me Roar!",
    color: "#A41D20",
    textColor: "light"
  },
  {
    name: "Baratheon",
    motto: "Ours Is the Fury.",
    color: "#D3C5AA",
    textColor: "dark"
  },
  {
    name: "Targaryen",
    motto: "Fire and Blood.",
    color: "#282828",
    textColor: "light"
  },
  {
    name: "Greyjoy",
    motto: "We Do Not Sow.",
    color: "#000000",
    textColor: "light"
  },
  {
    name: "Martell",
    motto: "Unbowed, Unbent, Unbroken.",
    color: "#E29D2D",
    textColor: "dark"
  },
  {
    name: "Tyrell",
    motto: "Growing Strong.",
    color: "#7DB797",
    textColor: "dark"
  },
  {
    name: "Tully",
    motto: "Family, Duty, Honor.",
    color: "#A41D20",
    textColor: "light"
  }
];

const theme = {
  font: {
    primary: "Montserrat, sans-serif",
    motto: "Playfair Display SC, serif"
  },
  color: {
    light: "#FFFFFF",
    dark: "#212121"
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
    z-index: 1;
  }

  html, body, #root {
    width: 100%;
    ${"" /* min-height: 100vh; */}
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme.font.primary};
    color: ${theme.color.dark};
    font-size: 16px;

    @media (max-width: 45em) {
      font-size: 15px;
    }

    @media (max-width: 37.5em) {
      font-size: 14px;
    }
  }
`;

const StyledGotSeason8 = styled.div`
  border: 1px solid cyan;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f4eae4;
  position: relative;
  padding: ${theme.size.xl};

  @media (max-width: 45em) {
    padding: ${theme.size.m};
  }

  .background-image {
    position: absolute;
    z-index: 0;
    opacity: 0.2;
    width: 70%;
    max-height: 90vh;
    object-fit: contain;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    pointer-events: none;
  }

  .header {
    margin-bottom: ${theme.size.l};

    &__title {
      display: block;
      font-size: 3em;
      font-weight: 300;
      text-align: center;
      margin-bottom: ${theme.size.xs};
    }

    &__sub {
      display: block;
      font-size: 2em;
      font-weight: 700;
      text-align: center;
    }
  }

  .countdown-box {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: ${theme.size.l};
  }

  .countdown-item {
    /* border: 1px solid magenta; */
    width: 12em;
    display: flex;
    flex-flow: column;
    align-items: center;

    &__time {
      font-size: 6em;
      font-weight: 700;
      text-align: center;
      white-space: nowrap;
    }

    &__description {
      font-size: 1.3125em;
      text-align: center;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
  }

  .motto {
    text-align: center;
    margin-bottom: ${theme.size.m};

    &__text {
      font-family: ${theme.font.motto};
      font-size: 3em;
      text-align: center;
      letter-spacing: 0.08em;
    }
  }

  .houses {
    /* border: 1px solid magenta; */
    align-self: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .houses-item {
    display: flex;
    flex-flow: column;
    align-items: center;
    cursor: pointer;

    margin-left: ${theme.size.m};
    margin-right: ${theme.size.m};

    &__image-box {
      width: 6em;
      height: 6em;
      border: 2px solid ${theme.color.light};
      transform: scale(0.8333);
      margin-bottom: ${theme.size.s};

      &--active {
        transform: scale(1);
      }
    }

    &__image {
      width: 100%;
      height: 100%;
    }

    &__name {
      font-weight: bold;
      font-size: 1em;
      text-align: center;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: ${theme.color.light};

      @media (max-width: 75em) {
        color: ${theme.color.dark};
      }
    }
  }

  .design-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 8em;
    background-color: #000000;
    z-index: 0;

    @media (max-width: 75em) {
      display: none;
    }
  }
`;

export class GotSeason8 extends Component {
  render() {
    return (
      <StyledGotSeason8>
        <GlobalStyle />

        <header className="header">
          <span className="header__title">Game of Thrones</span>
          <span className="header__sub">Season 8 Countdown</span>
        </header>

        <main className="countdown-box">
          <div className="countdown-item">
            <span className="countdown-item__time">82</span>
            <div className="countdown-item__description">Days</div>
          </div>

          <div className="countdown-item">
            <span className="countdown-item__time">15</span>
            <div className="countdown-item__description">Hours</div>
          </div>

          <div className="countdown-item">
            <span className="countdown-item__time">07</span>
            <div className="countdown-item__description">Days</div>
          </div>

          <div className="countdown-item">
            <span className="countdown-item__time">11</span>
            <div className="countdown-item__description">Seconds</div>
          </div>
        </main>

        <section className="motto">
          <span className="motto__text">Winter Is Coming.</span>
        </section>

        <nav className="houses">
          <div className="houses-item">
            <div className="houses-item__image-box houses-item__image-box--active">
              <img
                src={imageSigilThumb1Stark}
                alt=""
                className="houses-item__image"
              />
            </div>

            <span className="houses-item__name">Stark</span>
          </div>

          <div className="houses-item">
            <div className="houses-item__image-box">
              <img
                src={imageSigilThumb2Lannister}
                alt=""
                className="houses-item__image"
              />
            </div>

            {/* <span className="houses-item__name">Lannister</span> */}
          </div>
          <div className="houses-item">
            <div className="houses-item__image-box">
              <img
                src={imageSigilThumb3Baratheon}
                alt=""
                className="houses-item__image"
              />
            </div>

            {/* <span className="houses-item__name">Baratheon</span> */}
          </div>
          <div className="houses-item">
            <div className="houses-item__image-box">
              <img
                src={imageSigilThumb4Targaryen}
                alt=""
                className="houses-item__image"
              />
            </div>

            {/* <span className="houses-item__name">Targaryen</span> */}
          </div>
          <div className="houses-item">
            <div className="houses-item__image-box">
              <img
                src={imageSigilThumb5Greyjoy}
                alt=""
                className="houses-item__image"
              />
            </div>

            {/* <span className="houses-item__name">Greyjoy</span> */}
          </div>
          <div className="houses-item">
            <div className="houses-item__image-box">
              <img
                src={imageSigilThumb6Martell}
                alt=""
                className="houses-item__image"
              />
            </div>

            {/* <span className="houses-item__name">Tyrell</span> */}
          </div>
          <div className="houses-item">
            <div className="houses-item__image-box">
              <img
                src={imageSigilThumb7Tyrell}
                alt=""
                className="houses-item__image"
              />
            </div>

            {/* <span className="houses-item__name">Martell</span> */}
          </div>
          <div className="houses-item">
            <div className="houses-item__image-box">
              <img
                src={imageSigilThumb8Tully}
                alt=""
                className="houses-item__image"
              />
            </div>

            {/* <span className="houses-item__name">Tully</span> */}
          </div>
        </nav>

        <img src={imageSigil1Stark} alt="" className="background-image" />

        <div className="design-bar" />
      </StyledGotSeason8>
    );
  }
}

export default GotSeason8;
