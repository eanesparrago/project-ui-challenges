import React from "react";
import styled from "styled-components";

const StyledPersonActionsDialog = styled.div`
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
`;

const PersonActionsDialog = ({ toggleActionsDialog }) => {
  return (
    <StyledPersonActionsDialog onClick={toggleActionsDialog}>
      <div className="person-button-bubble">
        <button>
          <svg className="svg-icon">
            <use href="#elecy-icon-bubble" />
          </svg>
        </button>
      </div>

      <div className="person-button-plus">
        <button>
          <svg className="svg-icon">
            <use href="#elecy-icon-plus" />
          </svg>
        </button>
      </div>

      <div className="person-button-block">
        <button>
          <svg className="svg-icon">
            <use href="#elecy-icon-block" />
          </svg>
        </button>
      </div>
    </StyledPersonActionsDialog>
  );
};

export default PersonActionsDialog;
