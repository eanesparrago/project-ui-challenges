import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Spring } from "react-spring";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;

  .light {
    flex-grow: 1;
    background-color: #fafafa;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    > :first-child {
      margin-bottom: 1em;
    }
  }

  .dark {
    flex-grow: 1;
    background-color: #212121;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    > :first-child {
      margin-bottom: 1em;
    }
  }
`;

const StyledToggle = styled.div`
  width: 6em;
  height: 3em;
  border-radius: 1000em;
  background-color: ${props => (props.dark ? "#FAFAFA" : "#212121")};
  padding: 0.5em;
  display: flex;
  cursor: pointer;
  justify-content: space-between;

  .off-circle {
    width: 2em;
    height: 2em;
    background-color: #ff1744;
    border-radius: 1000em;
  }

  .on-circle {
    margin-left: auto;
    width: 2em;
    height: 2em;
    /* background-color: #00e676; */
    border-radius: 1000em;
  }
`;

class Toggle extends Component {
  state = {
    isOn: false,
    isHovered: false,
    isActive: false
  };

  handleToggleClick = () => {
    this.setState({ isOn: !this.state.isOn });
  };

  handleToggleHover = () => {
    this.setState({ isHovered: !this.state.isHovered });
  };

  handleMouseLeave = () => {
    this.handleToggleHover();

    this.setState({ isActive: false });
  };

  handleMouseDown = () => {
    this.setState({ isActive: true });
  };

  handleMouseUp = () => {
    this.setState({ isActive: false });
  };

  render() {
    const { isOn, isHovered, isActive } = this.state;

    return (
      <StyledToggle
        dark={this.props.dark}
        onClick={this.handleToggleClick}
        onMouseEnter={this.handleToggleHover}
        onMouseLeave={this.handleMouseLeave}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        {/* <Spring
          from={{
            opacity: "0",
            border: "2px solid transparent",
            backgroundColor: "#212121"
          }}
          to={{
            opacity: !isOn || isHovered ? "1" : "0",
            backgroundColor: !isOn ? "#ff1744" : "#212121",
            border:
              isOn && isHovered ? "2px solid #ff1744" : "2px solid transparent",
            transform:  isActive ? "scale(0.8)" : "scale(1)"
          }}
        >
          {props => <div style={props} className="off-circle" />}
        </Spring>

        <Spring
          from={{
            opacity: "0",
            border: "2px solid transparent",
            backgroundColor: "#212121"
          }}
          to={{
            opacity: isOn || isHovered ? "1" : "0",
            backgroundColor: isOn ? "#00e676" : "#212121",
            border:
              !isOn && isHovered
                ? "2px solid #00e676"
                : "2px solid transparent",
            transform:  isActive ? "scale(0.8)" : "scale(1)"
          }}
        >
          {props => <div style={props} className="on-circle" />}
        </Spring> */}

        <Spring
          from={{
            opacity: "1",
            transform: "translateX(0em)"
          }}
          to={{
            transform: isOn ? "translateX(3em)" : "translateX(0em)",
            backgroundColor: isOn ? "#00e676" : "#ff1744"
          }}
        >
          {props => <div style={props} className="off-circle" />}
        </Spring>

        {/* <Spring from={{ opacity: "0" }} to={{ opacity: isOn ? "1" : "0" }}>
          {props => <div style={props} className="on-circle" />}
        </Spring> */}
      </StyledToggle>
    );
  }
}

export class OnOffSwitch extends Component {
  render() {
    return (
      <StyledWrapper>
        <GlobalStyle />

        <div className="light">
          <Toggle />
          <Toggle />
        </div>

        <div className="dark">
          <Toggle dark />
          <Toggle dark />
        </div>
      </StyledWrapper>
    );
  }
}

export default OnOffSwitch;
