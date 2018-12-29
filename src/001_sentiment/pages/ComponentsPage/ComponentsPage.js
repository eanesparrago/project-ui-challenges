import React from "react";
import {
  Button,
  Logo,
  Typography,
  Card,
  TextField,
  Avatar
} from "../../components";
import styled from "styled-components";

import profile01 from "../../images/profile-01.jpg";

const Wrapper = styled.div`
  > * {
    margin-bottom: ${props => props.theme.spacing.unit};
  }
`;

const ComponentsPage = () => {
  return (
    <Wrapper>
      {/* <Logo /> */}

      <Typography variant="h1">
        The quick brown fox jumped over the lazy dog.
      </Typography>

      <Typography variant="h2">
        The quick brown fox jumped over the lazy dog.
      </Typography>

      <Typography variant="h3">
        The quick brown fox jumped over the lazy dog.
      </Typography>

      <Typography variant="h4">
        The quick brown fox jumped over the lazy dog.
      </Typography>

      <Typography variant="h5">
        The quick brown fox jumped over the lazy dog.
      </Typography>

      <Typography variant="subtitle">
        The quick brown fox jumped over the lazy dog.
      </Typography>

      <Typography variant="body">
        The quick brown fox jumped over the lazy dog.
      </Typography>

      <Typography variant="subtle">
        The quick brown fox jumped over the lazy dog.
      </Typography>

      <Typography variant="button">
        The quick brown fox jumped over the lazy dog.
      </Typography>

      <Button variant="primary">Button Primary</Button>

      <Button variant="secondary">Button Secondary</Button>

      <Card variant="oultine">Card Outline (Default)</Card>

      <Card variant="fill">Card Fill</Card>

      <TextField type="password" placeholder="TextField" />

      <div>
        <Typography variant="body">
          The quick brown fox jumped over the lazy dog.
        </Typography>

        <Typography variant="subtle">Five Minutes Ago</Typography>
      </div>

      <Avatar variant="big">
        <img src={profile01} alt="" />
      </Avatar>

      <Avatar variant="medium">
        <img src={profile01} alt="" />
      </Avatar>

      <Avatar variant="small">
        <img src={profile01} alt="" />
      </Avatar>
    </Wrapper>
  );
};

export default ComponentsPage;
