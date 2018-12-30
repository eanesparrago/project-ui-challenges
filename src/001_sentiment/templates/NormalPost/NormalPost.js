import React from "react";
import { Typography, Avatar } from "../../components";
import styled from "styled-components";

const StyledNormalPost = styled.div`
  display: flex;
  align-items: center;

  .normal-post__avatar {
    margin-right: ${props => props.theme.spacing.unit};
    align-self: flex-start;
  }
`;

const NormalPost = props => {
  return (
    <StyledNormalPost>
      <div className="normal-post__avatar">
        <Avatar variant="small">{props.profileImage}</Avatar>
      </div>

      <div>
        <Typography variant="body">{props.children}</Typography>

        <Typography variant="subtle">{props.time}</Typography>
      </div>
    </StyledNormalPost>
  );
};

export default NormalPost;
