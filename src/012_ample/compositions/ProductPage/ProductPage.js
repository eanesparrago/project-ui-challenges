import React, { Component } from "react";
import styled from "styled-components";
import productImage from "../../images/product-image.jpg";
import { Typography } from "../../components";

const StyledProductPage = styled.main`
  /* border: 1px solid cyan; */
  height: 100%;
  display: flex;
  margin-bottom: var(--space-l);

  .showcase-box {
    /* border: 1px solid magenta; */
    min-width: calc(100% / 1.618);
    overflow: hidden;
    position: relative;
  }

  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .detail-box {
    border: 1px solid magenta;
    margin-left: var(--space-l);
    padding-right: var(--space-l);
  }
`;

export class ProductPage extends Component {
  render() {
    return (
      <StyledProductPage>
        <div className="showcase-box">
          <img className="product-image" src={productImage} alt="Product" />
        </div>

        <div className="detail-box">
          <Typography>Women > Shirts > Eccentric</Typography>

          <Typography>
            Eiusmod excepteur fugiat nulla et et duis. Dolor ut minim quis magna
            minim ut. Reprehenderit veniam occaecat esse exercitation do laboris
            nisi. Aliqua exercitation ex commodo magna adipisicing aliquip
            officia sit labore nulla mollit. Do pariatur nostrud magna qui
            laboris nulla esse ea officia sunt reprehenderit id elit. Velit
            voluptate in nulla ipsum ipsum minim nulla qui ullamco.
          </Typography>
        </div>
      </StyledProductPage>
    );
  }
}

export default ProductPage;
