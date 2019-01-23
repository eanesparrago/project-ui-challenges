import React, { Component } from "react";
import styled from "styled-components";
import productImage from "../../images/product-image.jpg";
import {
  Button,
  Typography,
  ColorOption,
  SizeOption,
  ShowcasePagination
} from "../../components";
import ProductTitle from "./ProductTitle";

const StyledProductSection = styled.main`
  /* border: 1px solid cyan; */
  height: 100%;
  display: grid;
  grid-template-columns: calc(100% / 1.618) ${props => props.theme.size.xl} 1fr;
  margin-bottom: var(--space-l);

  .showcase_container {
    /* border: 1px solid magenta; */
    grid-column: 1 / 3;
    grid-row: 1;
    position: relative;
    padding: var(--space-inset-l);
    /* overflow: hidden; */
    display: grid;
    grid-template-rows: min-content 1fr;


    .showcase-title-box {
      /* border: 1px solid magenta; */
      display: flex;
      align-items: flex-end;
    }

    .showcase-title {
      transform-origin: left bottom;
      transform: rotate(-90deg) translateY(100%);
      font-size: 1.75em;
      color: var(--color-white);
    }
  }

  .product-image {
    width: 100%;
    object-position: center;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -10;
  }

  .content_container {
    /* border: 1px solid magenta; */
    grid-column: 2 / -1;
    grid-row: 1;

    display: grid;
    grid-template-columns: ${props => props.theme.size.xl} 1fr;
    grid-template-rows: auto auto auto auto;
    align-content: start;
    position: relative;
    padding-right: var(--space-l);
  }

  .breadcrumbs_box {
    grid-column: 2 / -1;
    margin: var(--space-stack-m);
    padding-left: var(--space-m);
  }

  .product-title_container {
    grid-column: 1 / -1;
    /* border: 1px solid cyan; */
    /* background-color: black; */
    margin: var(--space-stack-m);

    .product-title_box {
      transform: translateX(calc(var(--space-m) * -1));
    }
  }

  .showcase-control_container {
    /* border: 1px solid magenta; */
    grid-column: 1 / 2;
    grid-row: 3 / -1;
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
  }

  .star-box {
    /* border: 1px solid magenta; */
    margin: var(--space-stack-m);
  }

  .product-controls_container {
    grid-column: 2 / -1;
    margin: var(--space-stack-m);
    display: flex;
    margin-left: var(--space-m);

    .color-option_box {
      margin: var(--space-inline-m);
    }
  }

  .product-description_container {
    grid-column: 2 / -1;
    padding-left: var(--space-m);
    margin-bottom: var(--space-l);
  }

  .price_box {
    grid-column: 2 / -1;
    padding-left: var(--space-m);
    margin: var(--space-stack-l);
  }

  .add_box {
    grid-column: 2 / -1;
    padding-left: var(--space-m);
    margin-bottom: var(--space-l);
  }

  .design-line_box {
    grid-column: 1/ -1;

    .design-line {
      height: 2px;
      background-color: ${props => props.theme.color.black};
    }
  }
`;

export class ProductSection extends Component {
  render() {
    return (
      <StyledProductSection>
        <div className="showcase_container">
          <img className="product-image" src={productImage} alt="Product" />

          <Button variant="container">
            <svg
              className="back"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M53.3334 29.3333H20.88L35.7867 14.4267L32 10.6667L10.6667 32L32 53.3333L35.76 49.5733L20.88 34.6667H53.3334V29.3333Z"
                fill="white"
              />
            </svg>
          </Button>

          <div className="showcase-title-box">
            <Typography className="showcase-title">
              Tomato Soup Sweater
            </Typography>
          </div>
        </div>

        <div className="content_container">
          <div className="breadcrumbs_box">
            <Typography>Women > Sweaters > Eccentric</Typography>
          </div>

          <div className="product-title_container">
            <div className="product-title_box">
              <ProductTitle>Tomato Soup Sweater</ProductTitle>
            </div>
          </div>

          <div className="showcase-control_container">
            <div className="star-box">
              <Button variant="container">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3333 12.32L19.7467 11.4933L16 2.66666L12.2533 11.5067L2.66666 12.32L9.94666 18.6267L7.76 28L16 23.0267L24.24 28L22.0667 18.6267L29.3333 12.32ZM16 20.5333L10.9867 23.56L12.32 17.8533L7.89333 14.0133L13.7333 13.5067L16 8.13333L18.28 13.52L24.12 14.0267L19.6933 17.8667L21.0267 23.5733L16 20.5333Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>

            <ShowcasePagination />
          </div>

          <div className="product-controls_container">
            <div className="color-option_box">
              <ColorOption />
            </div>

            <div className="size-option_box">
              <SizeOption />
            </div>
          </div>

          <div className="product-description_container">
            <Typography>
              Eiusmod excepteur fugiat nulla et et duis. Dolor ut minim quis
              magna minim ut. Reprehenderit veniam occaecat esse exercitation do
              laboris nisi. Aliqua exercitation ex commodo magna adipisicing
              aliquip officia sit labore nulla mollit. Do pariatur nostrud magna
              qui laboris nulla esse ea officia sunt reprehenderit id elit.
              Velit voluptate in nulla ipsum ipsum minim nulla qui ullamco.
            </Typography>
          </div>

          <div className="price_box">
            <Typography variant="price">$199</Typography>
          </div>

          <div className="add_box">
            <Button variant="fill">Add To Cart</Button>
          </div>

          <div className="design-line_box">
            <div className="design-line" />
          </div>
        </div>
      </StyledProductSection>
    );
  }
}

export default ProductSection;
