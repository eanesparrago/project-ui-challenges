import React from "react";
import { Typography, Avatar } from "../../components";
import styled from "styled-components";

const StyledNormalPost = styled.div`
  display: flex;
  align-items: center;

  .normalpost__avatar {
    margin-right: ${props => props.theme.spacing.unit};
  }
`;

const NormalPost = props => {
  return (
    <StyledNormalPost>
      <div className="normalpost__avatar">
        <Avatar variant="small">{props.profileImage}</Avatar>
      </div>

      <div>
        <Typography variant="body">{props.content}</Typography>

        <Typography variant="subtle">{props.time}</Typography>
      </div>
    </StyledNormalPost>
  );
};

export default NormalPost;
