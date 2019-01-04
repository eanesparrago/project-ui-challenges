import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Spring, Trail, animated } from "react-spring";
import { Textfit } from "react-textfit";

import controls from "./controls";

const theme = {
  color: {
    primary: "#8C716B",
    secondary: "#F6C18C",
    white: "#FFFFFF"
  },
  spacing: {
    unit: "1rem"
  }
};

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }

  * {
    user-select: none;
  }
`;

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom left, #fcf0e5, #ffffff);
`;

const StyledCalculatey = styled.div`
  position: relative;
  /* width: 100%;
  height: 100%; */
  width: 320px;
  height: 568px;
  display: flex;
  flex-flow: column;
  justify-content: stretch;
  background-color: ${theme.color.secondary};
  overflow: hidden;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }

  @media (max-height: 400px) {
    width: 100%;
    height: 100%;
  }

  .white-border {
    position: absolute;
    border: 2px solid ${theme.color.white};
    margin: ${theme.spacing.unit};
    height: calc(100% - ${theme.spacing.unit} * 2);
    width: calc(100% - ${theme.spacing.unit} * 2);
    border-radius: 30px;
    pointer-events: none;
    z-index: 10;
  }

  .top-panel {
    /* border: 1px solid magenta; */

    width: 100%;
    height: 218px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 40px 40px;
    background-color: ${theme.color.primary};

    padding: calc(${theme.spacing.unit} * 3);
    padding-top: calc(${theme.spacing.unit} * 4);
    color: ${theme.color.white};
    text-transform: lowercase;
    font-size: 1.5em;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    @media (max-height: 400px) {
      padding: calc(${theme.spacing.unit} * 2);
      padding-top: calc(${theme.spacing.unit} * 2);
      flex-flow: row;
      justify-content: space-around;
    }
  }

  .input {
    font-size: 2em;
    cursor: pointer;
    width: 100%;
    text-align: center;
    margin-bottom: ${theme.spacing.unit};

    :hover {
      text-decoration: line-through;
    }
  }

  .answer {
    /* border: 1px solid magenta; */
    text-align: center;
    width: 100%;
    font-size: 3em;
    cursor: pointer;
  }

  .control-box {
    /* border: 1px solid magenta; */

    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    font-size: 2.25em;
    color: ${theme.color.white};
    padding: calc(${theme.spacing.unit} * 2);
  }

  .control {
    /* border: 1px solid magenta; */

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition-duration: 0.3s;
    cursor: pointer;
    background-color: unset;
    border: none;
    color: inherit;

    :hover {
      color: ${theme.color.primary};
      transform: translateY(-3px);
    }

    :active {
      transform: translateY(0);
    }

    :focus {
      outline: 0;
    }
  }

  .logo-box {
    padding-bottom: calc(${theme.spacing.unit} * 2);
    align-self: center;
    color: ${theme.color.white};
    text-transform: lowercase;
    font-size: 1.5em;
  }
`;

const initialState = {
  input1: undefined,
  input2: undefined,
  operator: { text: undefined, value: undefined },
  result: undefined,
  erase: false
};

export class Calculatey extends Component {
  state = initialState;

  setInput = value => {
    // >>> If there's no operator yet...
    if (this.state.operator.value === undefined) {
      if (this.state.input1 !== undefined && value !== 0) {
        // >>> Append to input1
        const appendedNumber = "" + this.state.input1 + value;
        this.setState({ input1: appendedNumber });
      } else {
        if (value !== 0) {
          this.setState({ input1: value });
        }
      }
    } else if (this.state.operator.value !== undefined) {
      // >>> If there's a result already...
      if (this.state.result !== undefined) {
        this.clear();
        this.setState({ input1: value });

        // >>> If there's no result and no input2...
      } else if (this.state.input2 !== undefined && value !== 0) {
        const appendedNumber = "" + this.state.input2 + value;
        this.setState({ input2: appendedNumber });

        // >>> Append to input2...
      } else {
        if (value !== 0) {
          this.setState({ input2: value });
        }
      }
    }
  };

  setOperator = (text, value) => {
    // >>> If there's a result already, use it as input1 and set the operator
    if (this.state.result !== undefined) {
      const input1 = this.state.result;

      this.clear();

      this.setState({ input1: input1, operator: { text: text, value: value } });
    }

    if (this.state.input1 !== undefined) {
      this.setState({ operator: { text: text, value: value } });
    } else {
      console.log("No input1");
    }
  };

  calculate = () => {
    let result;

    switch (this.state.operator.value) {
      case "add":
        result = this.state.input1 + this.state.input2;
        break;

      case "subtract":
        result = this.state.input1 - this.state.input2;
        break;

      case "multiply":
        result = this.state.input1 * this.state.input2;
        break;

      case "divide":
        result = this.state.input1 / this.state.input2;
        break;

      default:
        console.log("Wut");
    }

    return result;
  };

  getEquals = () => {
    if (this.state.operator.value === undefined) {
      this.setState({ result: this.state.input1 });
    } else if (this.state.operator.value !== undefined) {
      if (this.state.input2 !== undefined) {
        this.setState({ result: this.calculate() });
      }
    }
  };

  handleControlClick = item => {
    const { type, value, text } = item;

    switch (type) {
      case "number":
        return this.setInput(value);

      case "operator":
        return this.setOperator(text, value);

      case "equals":
        return this.getEquals();
    }
  };

  clear = () => {
    this.setState(initialState);
  };

  reset = () => {
    if (this.state.input1 !== undefined) {
      this.setState({ erase: true }, () => {
        setTimeout(() => {
          this.setState(initialState);
        }, 500);
      });
    }
  };

  render() {
    const { input1, input2, operator, result, erase } = this.state;

    return (
      <StyledWrapper>
        <StyledCalculatey>
          <GlobalStyle />

          {/* >>> White border */}
          <Spring
            delay="500"
            native
            from={{
              transform: "translateY(-50px)",
              opacity: 0
            }}
            to={{
              transform: "translateY(0)",
              opacity: 1
            }}
          >
            {props => <animated.div style={props} className="white-border" />}
          </Spring>

          {/* >>> Top panel */}
          <Spring
            native
            from={{
              transform: erase ? "translateY(0)" : "translateY(-250px)",
              opacity: 0
            }}
            to={{
              transform: erase ? "translateY(-250px)" : "translateY(0)",
              opacity: 1
            }}
          >
            {props => (
              <animated.div
                style={props}
                className="top-panel"
                onClick={() => this.reset()}
              >
                <span className="input">
                  <Textfit mode="single" max={32}>
                    {input1} {operator.text} {input2}
                  </Textfit>
                </span>

                <span className="answer">
                  <Textfit mode="single" max={48}>
                    {result}
                  </Textfit>
                </span>
              </animated.div>
            )}
          </Spring>

          {/* >>> Controls */}
          <div className="control-box">
            <Trail
              native
              items={controls}
              keys={item => item.text}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {item => props => (
                <animated.button
                  style={props}
                  className="control"
                  onClick={() => this.handleControlClick(item)}
                >
                  <span>{item.text}</span>
                </animated.button>
              )}
            </Trail>
          </div>

          {/* >>> Logo */}
          <Spring
            delay="1000"
            from={{ transform: "translateY(50px)", opacity: 0 }}
            to={{ transform: "translateY(0)", opacity: 1 }}
          >
            {props => (
              <div style={props} className="logo-box">
                <span className="logo">Calculatey</span>
              </div>
            )}
          </Spring>
        </StyledCalculatey>
      </StyledWrapper>
    );
  }
}

export default Calculatey;
