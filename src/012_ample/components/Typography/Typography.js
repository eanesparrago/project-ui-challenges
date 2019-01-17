import React from "react";
import styled from "styled-components";
import textCrop from "../../utils/textCrop";

const StyledTypographyBody = styled.p`
  ${textCrop()};

  font-family: inherit;
  font-size: 1em;
  line-height: var(--line-height);
  border: 1px solid magenta;
`;

const Typography = (props, { variant }) => {
  switch (variant) {
    case "body":
      return <StyledTypographyBody>{props.children}</StyledTypographyBody>;

    default:
      return <StyledTypographyBody>{props.children}</StyledTypographyBody>;
  }
};

export default Typography;
