import React from "react";
import styled from "styled-components";
import textCrop from "../../utils/textCrop";

const StyledTypographyBody = styled.p`
  ${textCrop()};
  /* border: 1px solid magenta; */
  font-family: inherit;
  font-size: 1em;
  line-height: var(--line-height);
`;

const StyledTypographyPrice = styled.span`
  ${textCrop()};
  /* border: 1px solid magenta; */
  font-size: 3.875em;
  font-weight: 300;
`;

const Typography = (props) => {
  switch (props.variant) {
    case "body":
      return <StyledTypographyBody>{props.children}</StyledTypographyBody>;

    case "price":
      return <StyledTypographyPrice>{props.children}</StyledTypographyPrice>;

    default:
      return <StyledTypographyBody>{props.children}</StyledTypographyBody>;
  }
};

export default Typography;
