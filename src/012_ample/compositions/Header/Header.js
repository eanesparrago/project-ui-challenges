import React from "react";
import styled from "styled-components";

import { Logo, Button } from "../../components";
import IconCart from "../../icons/IconCart";

const StyledHeader = styled.header`
  /* border: 1px solid magenta; */
  padding: var(--space-squish-xl);
  display: flex;
  align-items: center;

  * {
    /* border: 1px solid magenta; */
  }

  .logo-box {
    margin: var(--space-inline-xl);
  }

  .button-box {
    > :not(:last-child) {
      margin: var(--space-inline-s);
    }

    &--2 {
      margin-left: auto;
      display: flex;
      align-items: center;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo-box">
        <Logo />
      </div>

      <div className="button-box">
        <Button>Home</Button>
        <Button>Women</Button>
        <Button>Men</Button>
        <Button>About Us</Button>
      </div>

      <div className="button-box button-box--2">
        <Button>Account</Button>
        <Button variant="icon">
          <IconCart />
        </Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
