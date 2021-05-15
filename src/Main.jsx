import React from "react";
import EmbeddedCheckout from "./EmbeddedCheckout";

export default class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Embedded Checkout Test</h1>
        <p>This is to test the BigCommerce Embedded Checkout with the Checkout-SDK</p>
        <EmbeddedCheckout />
      </div>
    );
  }
}
