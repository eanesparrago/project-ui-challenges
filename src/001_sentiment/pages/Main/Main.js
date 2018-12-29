import React from "react";
import styled from "styled-components";
import { Logo, Typography, TextField, Button, Avatar } from "../../components";
import { SelfPost, NormalPost } from "../../templates";

import profile01 from "../../images/profile-01.jpg";
import profile02 from "../../images/profile-02.jpg";
import profile03 from "../../images/profile-03.jpg";
import profile04 from "../../images/profile-04.jpg";
import profile05 from "../../images/profile-05.jpg";
import profile06 from "../../images/profile-06.jpg";
import profile07 from "../../images/profile-07.jpg";
import profile08 from "../../images/profile-08.jpg";
import profile09 from "../../images/profile-09.jpg";
import profile10 from "../../images/profile-10.jpg";
import profile11 from "../../images/profile-11.jpg";

const StyledMain = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.color.white};

  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: calc(${props => props.theme.spacing.unit} * 6)
    calc(${props => props.theme.spacing.unit} * 12);

  ${props => props.theme.media.lg`
    padding: calc(${props => props.theme.spacing.unit} * 3)
    calc(${props => props.theme.spacing.unit} * 6);
  `}

  .column-1 {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
  }

  .column-1__date {
    margin-bottom: ${props => props.theme.spacing.unit};
  }

  .column-1__say-input {
    width: 70%;
    display: flex;
    flex-flow: column;
    margin-bottom: calc(${props => props.theme.spacing.unit} * 2);

    ${props => props.theme.media.lg`
      width: 90%;
    `}

    > :first-child {
      margin-bottom: ${props => props.theme.spacing.unit};
    }

    > :last-child {
      align-self: flex-end;
    }
  }

  .column-1__self-posts {
    > *:not(:last-child) {
      margin-bottom: calc(${props => props.theme.spacing.unit} * 3);
    }
  }

  .column-2 {
    display: flex;
    flex-flow: column;
  }

  .column-2__profile-button {
    align-self: flex-end;
    margin-bottom: calc(${props => props.theme.spacing.unit} * 4);
  }

  .column-2__normal-posts {
    height: 35rem;
    overflow-y: auto;
    margin-bottom: calc(${props => props.theme.spacing.unit} * 2);
    ::-webkit-scrollbar {
      width: 5px;
      border-radius: 100%;
    }
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.color.primary.light};
    }
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.color.primary.main};
      border-radius: 15px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.color.primary.dark};
    }

    > *:not(:last-child) {
      margin-bottom: calc(${props => props.theme.spacing.unit} * 3);
    }
  }

  .column-2__logo {
    align-self: flex-end;
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <div className="column-1">
        <div className="column-1__date">
          <Typography variant="h2">December 26</Typography>
        </div>

        <div className="column-1__say-input">
          <TextField placeholder="Say something..." />

          <Button variant="primary">Send</Button>
        </div>

        <div className="column-1__self-posts">
          <SelfPost content="Good afternoon!" time="Just now" />

          <SelfPost content="Hey" time="An Hour Ago" />

          <SelfPost
            content="The quick brown fox jumped over the lazy dog."
            time="5:42 am"
          />

          <SelfPost content="My first post" time="December 25 | 7:52 pm" />
        </div>
      </div>

      <div className="column-2">
        <div className="column-2__profile-button">
          <Button variant="secondary">Profile</Button>
        </div>

        <div className="column-2__normal-posts">
          <NormalPost
            content="The quick brown fox jumped over the lazy dog."
            time="An hour ago"
            profileImage={<img src={profile01} alt="profile" />}
          />

          <NormalPost
            content="The quick brown fox jumped over the lazy dog."
            time="An hour ago"
            profileImage={<img src={profile02} alt="profile" />}
          />

          <NormalPost
            content="The quick brown fox jumped over the lazy dog."
            time="An hour ago"
            profileImage={<img src={profile03} alt="profile" />}
          />

          <NormalPost
            content="The quick brown fox jumped over the lazy dog."
            time="An hour ago"
            profileImage={<img src={profile04} alt="profile" />}
          />

          <NormalPost
            content="The quick brown fox jumped over the lazy dog."
            time="An hour ago"
            profileImage={<img src={profile05} alt="profile" />}
          />

          <NormalPost
            content="The quick brown fox jumped over the lazy dog."
            time="An hour ago"
            profileImage={<img src={profile06} alt="profile" />}
          />

          <NormalPost
            content="The quick brown fox jumped over the lazy dog."
            time="An hour ago"
            profileImage={<img src={profile07} alt="profile" />}
          />

          <NormalPost
            content="The quick brown fox jumped over the lazy dog."
            time="An hour ago"
            profileImage={<img src={profile08} alt="profile" />}
          />

          <NormalPost
            content="The quick brown fox jumped over the lazy dog."
            time="An hour ago"
            profileImage={<img src={profile09} alt="profile" />}
          />

          <NormalPost
            content="The quick brown fox jumped over the lazy dog."
            time="An hour ago"
            profileImage={<img src={profile10} alt="profile" />}
          />

          <NormalPost
            content="The quick brown fox jumped over the lazy dog."
            time="An hour ago"
            profileImage={<img src={profile11} alt="profile" />}
          />
        </div>

        <div className="column-2__logo">
          <Logo />
        </div>
      </div>
    </StyledMain>
  );
};

export default Main;
