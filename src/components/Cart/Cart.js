import React, { Component, Fragment } from "react";
import { ProductConsumer } from "../../context";
import CartColumns from "./CartColumns";
import Title from "../Title";
import Product from "../Product";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <Fragment>
                  <Title name="my" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </Fragment>
              );
            } else {
              return <Title name="my cart is currently empty" />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
