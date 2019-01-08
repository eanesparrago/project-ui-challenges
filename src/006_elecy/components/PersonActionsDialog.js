import React from "react";
import styled from "styled-components";
import { Spring, Transition, animated } from "react-spring";

const StyledPersonActionsDialog = animated(styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  padding: ${props => props.theme.spacing.medium};
  background-color: ${props => props.theme.color.primary};
  z-index: 100;

  @media (max-height: 600px) and (orientation: landscape) {
    flex-flow: row;
    justify-content: space-around;
  }
`);

const PersonActionsDialog = ({
  props,
  isActionsDialogOpen,
  toggleActionsDialog
}) => {
  return (
    <StyledPersonActionsDialog style={props} onClick={toggleActionsDialog}>
      <Spring
        native
        from={{ transform: "translateX(5em)", opacity: 0 }}
        to={{ transform: "translateX(0)", opacity: 1 }}
      >
        {props => (
          <animated.div style={props} className="person-button-bubble">
            <button>
              <svg className="svg-icon">
                <use href="#elecy-icon-bubble" />
              </svg>
            </button>
          </animated.div>
        )}
      </Spring>

      <Spring
        delay="100"
        native
        from={{ transform: "translateX(5em)", opacity: 0 }}
        to={{ transform: "translateX(0)", opacity: 1 }}
      >
        {props => (
          <animated.div style={props} className="person-button-plus">
            <button>
              <svg className="svg-icon">
                <use href="#elecy-icon-plus" />
              </svg>
            </button>
          </animated.div>
        )}
      </Spring>

      <Spring
        delay="200"
        native
        from={{ transform: "translateX(5em)", opacity: 0 }}
        to={{ transform: "translateX(0)", opacity: 1 }}
      >
        {props => (
          <animated.div style={props} className="person-button-block">
            <button>
              <svg className="svg-icon">
                <use href="#elecy-icon-block" />
              </svg>
            </button>
          </animated.div>
        )}
      </Spring>
    </StyledPersonActionsDialog>
  );
};

export default PersonActionsDialog;
