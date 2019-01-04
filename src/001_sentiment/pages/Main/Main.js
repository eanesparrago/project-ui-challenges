import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Spring } from "react-spring";

import { Logo, Typography, TextField, Button } from "../../components";
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

  /* >>> lg */
  ${props => props.theme.media.lg`
    padding: calc(${props => props.theme.spacing.unit} * 3)
    calc(${props => props.theme.spacing.unit} * 6);
  `}

  /* >>> md */
  ${props => props.theme.media.md`
    padding: calc(${props => props.theme.spacing.unit} * 1.5)
    calc(${props => props.theme.spacing.unit} * 3);
  `}

  /* >>> sm */
  ${props => props.theme.media.sm`
    grid-template-columns: 1fr;
    padding: calc(${props => props.theme.spacing.unit} * 1)
    calc(${props => props.theme.spacing.unit} * 1.5);
    height: 100%;
  `}

  .column-1 {
    display: flex;
    flex-flow: column;
    align-items: flex-start;

    /* >>> sm */
    ${props => props.theme.media.sm`
      align-items: stretch;
    `}
  }

  .column-1__heading {
    margin-bottom: ${props => props.theme.spacing.unit};

     /* >>> sm */
    ${props => props.theme.media.sm`
      display: flex;
      justify-content: space-between;
    `}
  }

  .column-1__date {
    ${props => props.theme.media.xsm`
      font-size: 0.5em;
    `}
  }

  .column-1__profile-button {
    display: none;

    /* >>> sm */
    ${props => props.theme.media.sm`
      display: block;
    `}
  }

  .column-1__say-input {
    width: 70%;
    display: flex;
    flex-flow: column;
    align-items: stretch;
    margin-bottom: calc(${props => props.theme.spacing.unit} * 2);

    /* >>> lg */
    ${props => props.theme.media.lg`
      width: 90%;
    `}

    /* >>> sm */
    ${props => props.theme.media.sm`
      width: 100%;
    `}

    > :first-child {
      margin-bottom: ${props => props.theme.spacing.unit};
    }

    > :last-child {
      align-self: flex-end;

      /* >>> xms */
    ${props => props.theme.media.xsm`
      width: 100%;
      align-self: stretch;
    `}
    }
  }

  .column-1__self-posts {
    height: 27rem;
    overflow-y: auto;
    padding-right: calc(${props => props.theme.spacing.unit} * 2);
    margin-right: calc(${props => props.theme.spacing.unit} * 3);
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

    /* >>> sm */
    ${props => props.theme.media.sm`
      height: unset;
      overflow-y: hidden;
      margin-right: 0;
      margin-bottom: calc(${props => props.theme.spacing.unit} * 2);
    `}

    > *:not(:last-child) {
      margin-bottom: calc(${props => props.theme.spacing.unit} * 2);
    }
  }

  .column-2 {
    display: flex;
    flex-flow: column;
  }

  .column-2__profile-button {
    align-self: flex-end;
    margin-bottom: calc(${props => props.theme.spacing.unit} * 4);

    /* >>> sm */
    ${props => props.theme.media.sm`
      display: none;
    `}
  }

  .column-2__normal-posts {
    height: 35rem;
    overflow-y: auto;
    padding-right: calc(${props => props.theme.spacing.unit} * 2);
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

    /* >>> sm */
    ${props => props.theme.media.sm`
      height: unset;
      overflow-y: hidden;
    `}


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
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <StyledMain style={props}>
          <div className="column-1">
            <div className="column-1__heading">
              <div className="column-1__date">
                <Typography variant="h2">December 26</Typography>
              </div>

              <div className="column-1__profile-button">
                <Link to="/001/login">
                  <Button variant="secondary">Profile</Button>
                </Link>
              </div>
            </div>

            <div className="column-1__say-input">
              <TextField placeholder="Say something..." />

              <Button variant="primary">Send</Button>
            </div>

            <div className="column-1__self-posts">
              <SelfPost time="Just now">
                In amet et incididunt aute ea voluptate culpa ipsum
                exercitation.!
              </SelfPost>

              <SelfPost time="An Hour Ago">
                Magna adipisicing et aliqua pariatur dolor consequat deserunt.
              </SelfPost>

              <SelfPost time="5:42 am">
                Incididunt elit labore est Lorem officia consequat aliquip
                aliqua eiusmod. Qui Lorem ullamco incididunt ea dolore aliquip
                sit anim nisi fugiat do ipsum non. Labore anim sint aute elit
                qui nostrud dolor id nulla eiusmod.
              </SelfPost>

              <SelfPost time="December 25 | 7:52 pm">
                Labore minim enim et laboris cillum consectetur enim commodo.
              </SelfPost>

              <SelfPost time="December 25 | 7:52 pm">
                Sunt laborum laborum commodo magna nulla quis dolor.
              </SelfPost>

              <SelfPost time="December 25 | 7:52 pm">
                Qui esse nulla enim qui qui. Esse ea officia exercitation
                deserunt ex dolor veniam incididunt sit pariatur dolor veniam
                mollit. Sunt ipsum reprehenderit non aliqua minim duis do ad
                enim tempor. Laborum tempor voluptate sit velit. Aliqua
                voluptate deserunt exercitation irure tempor duis esse magna in
                cupidatat mollit. Duis deserunt duis aute qui ullamco ullamco
                eiusmod. Duis id pariatur fugiat nisi consectetur quis Lorem
                consequat incididunt ullamco aute.
              </SelfPost>

              <SelfPost time="December 25 | 7:52 pm">
                Cupidatat reprehenderit ipsum commodo laboris elit quis esse
                enim magna proident commodo consectetur quis.
              </SelfPost>

              <SelfPost time="December 25 | 7:52 pm">
                Proident non dolor fugiat et ex fugiat consectetur ad veniam
                incididunt cupidatat do.
              </SelfPost>
            </div>
          </div>

          <div className="column-2">
            <div className="column-2__profile-button">
              <Link to="/001/login">
                <Button variant="secondary">Profile</Button>
              </Link>
            </div>

            <div className="column-2__normal-posts">
              <NormalPost
                time="An hour ago"
                profileImage={<img src={profile01} alt="profile" />}
              >
                Exercitation qui culpa sit enim deserunt nisi in eu sit.
              </NormalPost>

              <NormalPost
                time="An hour ago"
                profileImage={<img src={profile02} alt="profile" />}
              >
                Ex exercitation ipsum ea aliquip qui cupidatat tempor aliqua
                excepteur officia. Nulla aute Lorem duis Lorem ea deserunt magna
                Lorem dolor id. Nisi laborum duis Lorem minim ex amet culpa.
              </NormalPost>

              <NormalPost
                time="An hour ago"
                profileImage={<img src={profile03} alt="profile" />}
              >
                Qui adipisicing mollit proident exercitation ad.
              </NormalPost>

              <NormalPost
                time="An hour ago"
                profileImage={<img src={profile04} alt="profile" />}
              >
                Exercitation et anim dolor occaecat voluptate minim id irure.
              </NormalPost>

              <NormalPost
                time="An hour ago"
                profileImage={<img src={profile05} alt="profile" />}
              >
                Fugiat elit veniam anim eiusmod sint exercitation incididunt
                quis amet excepteur. Et reprehenderit tempor sint aute
                exercitation. Eu non eu velit amet duis. Ea ullamco non ea qui
                nostrud occaecat culpa nisi nostrud. Laboris reprehenderit magna
                voluptate id et ad incididunt. Velit tempor ea voluptate velit
                anim esse anim do aute est est culpa voluptate incididunt. Sit
                tempor minim proident anim eu nulla fugiat sunt.
              </NormalPost>

              <NormalPost
                time="An hour ago"
                profileImage={<img src={profile06} alt="profile" />}
              >
                Nulla irure id consectetur reprehenderit labore ad non laboris
                aliquip commodo. Dolore est velit dolor veniam incididunt
                nostrud ex voluptate esse magna eu deserunt. Fugiat minim ut ut
                sint do voluptate tempor dolor consequat id id.
              </NormalPost>

              <NormalPost
                time="An hour ago"
                profileImage={<img src={profile07} alt="profile" />}
              >
                Ex veniam nulla Lorem Lorem veniam cupidatat pariatur cillum.
              </NormalPost>

              <NormalPost
                time="An hour ago"
                profileImage={<img src={profile08} alt="profile" />}
              >
                Laboris enim eiusmod exercitation Lorem.
              </NormalPost>

              <NormalPost
                time="An hour ago"
                profileImage={<img src={profile09} alt="profile" />}
              >
                Laboris minim duis ex mollit duis ex officia ex nisi.
              </NormalPost>

              <NormalPost
                time="An hour ago"
                profileImage={<img src={profile10} alt="profile" />}
              >
                Eu aliqua eiusmod est officia veniam sit.
              </NormalPost>

              <NormalPost
                time="An hour ago"
                profileImage={<img src={profile11} alt="profile" />}
              >
                Tempor labore sint sunt cupidatat adipisicing non sint.
              </NormalPost>
            </div>

            <div className="column-2__logo">
              <Logo />
            </div>
          </div>
        </StyledMain>
      )}
    </Spring>
  );
};

export default Main;
