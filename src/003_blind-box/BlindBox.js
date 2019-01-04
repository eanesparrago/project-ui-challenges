import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Spring, Transition, Trail } from "react-spring";
import woman from "./images/woman.jpg";

const theme = {
  font: {
    main: "Oswald, sans-serif",
    display: "Playfair Display, serif"
  },
  color: {
    primary: "#E3D0AE",
    black: "#000405",
    white: "#FFFFFF"
  },
  spacing: {
    unit: "1rem"
  }
};

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    font-family: ${theme.font.main};
  }
`;

const StyledBirdBox = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  background-color: ${theme.color.black};
  color: ${theme.color.white};

  @media (max-width: 1500px) {
    height: 60vw;
    max-height: 100%;
  }

  @media (max-width: 600px) {
    height: auto;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc(${theme.spacing.unit} * 3) 10%;

  @media (max-width: 1200px) {
    flex-flow: column;
  }

  .logo {
    text-transform: uppercase;
    font-size: 3em;
  }

  .logo-box {
    @media (max-width: 1200px) {
      margin-bottom: calc(${theme.spacing.unit} * 2);
    }
  }

  .nav {
    @media (max-width: 500px) {
      display: flex;
      flex-flow: column;
      align-items: center;
    }
  }

  .nav-item {
    color: ${theme.color.primary};
    text-decoration: none;
    font-size: 1.5em;
  }

  .nav-item:not(:last-child) {
    margin-right: calc(${theme.spacing.unit} * 7);

    @media (max-width: 900px) {
      margin-right: calc(${theme.spacing.unit} * 4);
    }

    @media (max-width: 600px) {
      margin-right: calc(${theme.spacing.unit} * 2);
    }

    @media (max-width: 500px) {
      margin-right: unset;
      margin-bottom: ${theme.spacing.unit};
    }
  }

  .nav-item:hover {
    text-decoration: underline;
  }
`;

const StyledMain = styled.main`
  /* border: 1px solid magenta; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 calc(${theme.spacing.unit} * 6);
  height: 100%;
  

  @media (max-width: 800px){
    grid-template-columns: 1fr;
  }

  @media (max-width: 500px) {
    padding: 0 calc(${theme.spacing.unit} * 3);
  }

  .woman-box-box {
    /* border: 1px solid magenta; */
    position: relative;

    @media (max-width: 800px){
      display: none;
    }
  }

  .woman-box {
    /* border: 1px solid cyan; */
    width: 100%;
    height: 100%;
    background-image: url(${woman});
    background-size: contain;
    background-position: center bottom;
  }

  .woman-box-flipped {
    /* border: 1px solid cyan; */
    width: 100%;
    height: 100%;
    background-image: url(${woman});
    background-size: contain;
    background-position: center bottom;
    transform: scaleX(-1);
  }

  .woman-img {
    /* height: 100%;
    width: 100%;
    object-fit: contain */
    max-height: 100% !important;
  }

  .woman-img-flipped {
    max-width: 100%;
    max-height: 100%;
    transform: scaleX(-1);
  }

  .display-text {
    font-family: ${theme.font.display};
    font-size: 5vw;

    @media (max-width: 600px) {
      font-size: 1.5em;
    }
  }

  .display-box-left,
  .display-box-right {
    display: flex;
    /* padding-top: calc(${theme.spacing.unit} * 10); */
    padding-top: 10vw;

    @media (max-width: 800px){
      display: none;
    }
  }

  .display-box-left {
    justify-content: flex-end;
  }

  .display-box-right {
    flex-flow: column;
  }

  .store-link {
    margin-top: calc(${theme.spacing.unit} * 1);
    text-transform: uppercase;
    text-decoration: none;
    font-size: 2em;
    color: ${theme.color.primary};

    :hover {
      text-decoration: underline;
    }
  }

  .display-box-mobile {
    display: none;

    @media (max-width: 800px){
      height: 100%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      padding-bottom: calc(${theme.spacing.unit} * 4);
    }
  }
`;

export class BlindBox extends Component {
  state = {
    isStoreLinkHovered: false
  };

  toggleFlipWoman = () => {
    this.setState(
      { isStoreLinkHovered: !this.state.isStoreLinkHovered },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    const { isStoreLinkHovered } = this.state;

    const navItems = [
      {
        element: "Store",
        key: 1
      },
      {
        element: "About",
        key: 2
      },
      {
        element: "Contact",
        key: 3
      },
      {
        element: <i className="fas fa-shopping-cart" />,
        key: 4
      },
      {
        element: <i className="fab fa-facebook" />,
        key: 5
      }
    ];

    return (
      <StyledBirdBox>
        <GlobalStyle />

        <Spring
          delay="1200"
          from={{ transform: "translateY(-5em)", opacity: "0" }}
          to={{ transform: "translateY(0)", opacity: "1" }}
        >
          {props => (
            <StyledHeader style={props}>
              <div className="logo-box">
                <span className="logo">Blind Box</span>
              </div>

              <nav className="nav">
                <Trail
                  delay="1900"
                  items={navItems}
                  keys={item => item.key}
                  from={{ color: theme.color.white }}
                  to={{ color: theme.color.primary }}
                >
                  {item => props => (
                    <a style={props} href="#" className="nav-item">
                      {item.element}
                    </a>
                  )}
                </Trail>
              </nav>
            </StyledHeader>
          )}
        </Spring>

        <StyledMain>
          <Spring
            from={{ transform: "translateX(-10em)", opacity: "0" }}
            to={{ transform: "translateX(0)", opacity: "1" }}
          >
            {props => (
              <div style={props} className="display-box-mobile">
                <span className="display-text">Stay alive in style.</span>

                <Spring
                  delay="1800"
                  from={{ opacity: "0" }}
                  to={{ opacity: "1" }}
                >
                  {props => (
                    <a
                      style={props}
                      href="#"
                      className="store-link"
                      onMouseEnter={this.toggleFlipWoman}
                      onMouseLeave={this.toggleFlipWoman}
                    >
                      See the store
                    </a>
                  )}
                </Spring>
              </div>
            )}
          </Spring>

          <Spring
            from={{ transform: "translateX(-10em)", opacity: "0" }}
            to={{ transform: "translateX(0)", opacity: "1" }}
          >
            {props => (
              <div style={props} className="display-box-left">
                <span className="display-text">Stay alive</span>
              </div>
            )}
          </Spring>

          <div className="woman-box-box">
            <Transition
              delay="600"
              items={isStoreLinkHovered}
              from={{ position: "absolute", opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}
            >
              {isStoreLinkHovered =>
                isStoreLinkHovered
                  ? props => <div style={props} className="woman-box-flipped" />
                  : props => <div style={props} className="woman-box" />
              }
            </Transition>
          </div>

          <Spring
            delay="1200"
            from={{ transform: "translateX(5em)", opacity: "0" }}
            to={{ transform: "translateX(0)", opacity: "1" }}
          >
            {props => (
              <div style={props} className="display-box-right">
                <span className="display-text">in style.</span>

                <Spring
                  delay="1800"
                  from={{ opacity: "0" }}
                  to={{ opacity: "1" }}
                >
                  {props => (
                    <a
                      style={props}
                      href="#"
                      className="store-link"
                      onMouseEnter={this.toggleFlipWoman}
                      onMouseLeave={this.toggleFlipWoman}
                    >
                      See the store
                    </a>
                  )}
                </Spring>
              </div>
            )}
          </Spring>
        </StyledMain>
      </StyledBirdBox>
    );
  }
}

export default BlindBox;
