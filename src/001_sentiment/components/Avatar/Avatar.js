import React from "react";
import styled from "styled-components";

const StyledAvatar = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 100%;
  width: 4.6875rem;
  height: 4.6875rem;
  background-color: ${props => props.theme.color.primary.light};

  img {
    width: 100%;
    /* height: 4.6875rem; */
    object-fit: cover;
  }
`;

const StyledAvatarMedium = styled(StyledAvatar)``;

const StyledAvatarBig = styled(StyledAvatar)`
  width: 6.25rem;
  height: 6.25rem;

  img {
    height: 6.25rem;
  }
`;

const StyledAvatarSmall = styled(StyledAvatar)`
  width: 3.125rem;
  height: 3.125rem;

  img {
    height: 3.125rem;
  }
`;

const Avatar = props => {
  switch (props.variant) {
    case "medium":
      return (
        <StyledAvatarMedium {...props}>{props.children}</StyledAvatarMedium>
      );

    case "big":
      return <StyledAvatarBig {...props}>{props.children}</StyledAvatarBig>;

    case "small":
      return <StyledAvatarSmall {...props}>{props.children}</StyledAvatarSmall>;

    default:
      return (
        <StyledAvatarMedium {...props}>{props.children}</StyledAvatarMedium>
      );
  }
};

export default Avatar;
