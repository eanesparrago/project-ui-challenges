import React, { Component } from "react";
import styled, { css, createGlobalStyle } from "styled-components";

import card1 from "./images/card_american-express.png";
import card2 from "./images/card_master-card.png";
import card3 from "./images/card_ucb.png";
import card4 from "./images/card_visa.png";

const breakpoints = {
  xsm: 600,
  sm: 800,
  md: 960,
  lg: 1280,
  xl: 1920
};

const theme = {
  font: {
    logo: "Orbitron, sans-serif",
    primary: "Source Sans Pro, sans-serif"
  },
  color: {
    primary: {
      main: "#242C3C"
    },
    secondary: {
      main: "#F4711D"
    },
    white: "#FFFFFF",
    black: "#000000"
  },
  spacing: {
    unit: "1em"
  },
  media: Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${breakpoints[label] / 16}em) {
        ${css(...args)}
      }
    `;

    return acc;
  }, {})
};

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    font-family: ${theme.font.primary};
    color: ${theme.color.primary.main};
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;

const StyledOrbitalSkies = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
`;

const StyledHeader = styled.header`
  width: 100%;
  background-color: ${theme.color.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.unit};

  span {
    font-family: ${theme.font.logo};
    font-size: 3em;
    font-weight: 500;
    color: #ffffff;

    span {
      font-size: inherit;
      color: ${theme.color.secondary.main};
    }
  }

  /* >>> sm */
  ${theme.media.sm`
    span {
      font-size: 1.5em;
      font-weight: 500;
      color: #ffffff;

      span {
        font-size: inherit;
        color: ${theme.color.secondary.main};
      }
    }
  `}
`;

const StyledMain = styled.main`
  flex-grow: 1;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: calc(${theme.spacing.unit} * 3);
  padding-bottom: calc(${theme.spacing.unit} * 10);

  /* >>> md */
  ${theme.media.md`
    grid-template-columns: 1fr;
  `}

  /* >>> sm */
  ${theme.media.sm`
    padding-top: ${theme.spacing.unit};
    padding-bottom: none;
  `}
`;

const StyledColumn1 = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${theme.color.secondary.main};

  h1 {
    font-weight: 300;
    font-size: 3em;
  }

  /* >>> md */
  ${theme.media.md`
    border-right: none;

    h1 {
      font-size: 3em;
      margin: 0;
    }
  `}

  /* >>> sm */
  ${theme.media.sm`
    h1 {
      font-weight: 300;
      font-size: 1.7em;
    }

    div {
      img {
        width: 3em;
      }
    }
  `}
`;

const StyledColumn2 = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-flow: column;
    /* >>> sm */
    ${theme.media.sm`
      margin: ${theme.spacing.unit};
    `}
  }

  .field {
    margin-bottom: calc(${theme.spacing.unit} * 2);
    display: flex;
    flex-flow: column;
  }

  .field-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
  }

  label {
  }

  input {
    border: unset;
    border-bottom: 1px solid ${theme.color.primary.main};
    height: 3em;
    width: 100%;

    /* >>> sm */
    ${theme.media.sm`
    height: 2em;
  `}
  }

  .price {
    align-self: center;
    font-size: 2em;
    margin-bottom: ${theme.spacing.unit};

    span {
      font-weight: 700;
    }
  }

  button {
    align-self: center;
    background-color: ${theme.color.secondary.main};
    font-weight: 700;
    color: ${theme.color.white};
    border: 0;
    border-radius: 100em;
    text-transform: uppercase;
    height: 3em;
    width: 15em;
    cursor: pointer;

    :hover {
      background-color: ${theme.color.primary.main};
    }
  }
`;

export default class OrbitalSkies extends Component {
  render() {
    return (
      <StyledOrbitalSkies>
        <GlobalStyle />

        <StyledHeader>
          <span>
            Orbital <span>Skies</span>
          </span>
        </StyledHeader>

        <StyledMain>
          <StyledColumn1>
            <h1>Credit Card Checkout</h1>

            <div>
              <img src={card1} alt="" />
              <img src={card2} alt="" />
              <img src={card3} alt="" />
              <img src={card4} alt="" />
            </div>
          </StyledColumn1>

          <StyledColumn2>
            <form>
              <div className="field">
                <label>Name on card</label>
                <input type="text" />
              </div>

              <div className="field">
                <label>Card Number</label>
                <input type="text" />
              </div>

              <div className="field-split">
                <div className="field">
                  <label>MM/YY</label>
                  <input type="text" />
                </div>

                <div className="field">
                  <label>CVC</label>
                  <input type="text" />
                </div>
              </div>

              <span className="price">
                Total: <span>$100.00</span>
              </span>

              <button>Pay Now</button>
            </form>
          </StyledColumn2>
        </StyledMain>
      </StyledOrbitalSkies>
    );
  }
}
