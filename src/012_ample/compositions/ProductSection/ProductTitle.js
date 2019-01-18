import React from "react";
import styled from "styled-components";
import textCrop from "../../utils/textCrop";
import TextFit from "react-textfit";

const StyledProductTitleBox = styled.div`
  /* border: 1px solid magenta; */
  padding: var(--space-squish-l);
  background-color: var(--color-white);
  /* border-bottom: 0.125em solid var(--color-black); */
`;

const StyledProductTitle = styled.span`
  ${textCrop()};
  font-size: 3em;
  font-weight: 700;
  /* white-space: nowrap; */
`;

const ProductTitle = props => {
  return (
    <StyledProductTitleBox>
        <StyledProductTitle>{props.children}</StyledProductTitle>
    </StyledProductTitleBox>
  );
};

export default ProductTitle;
