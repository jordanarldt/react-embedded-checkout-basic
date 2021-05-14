import React from "react";
import { embedCheckout } from "@bigcommerce/checkout-sdk";

export default class EmbeddedCheckout extends React.Component {
  async componentDidMount() {
    const { cartId } = this.props;

    try {
      // Replace URL with the Embedded Checkout URL for the cart
      // https://developer.bigcommerce.com/api-reference/store-management/carts/cart-redirect-urls/createcartredirecturl
      embedCheckout({
        containerId: "checkout-container",
        url: "https://store.jabctools.com/cart.php?embedded=1&action=loadInCheckout&id=44319c5a-ec55-4fae-837f-b57b47aef026&token=1f25446ffbcf493a713a3557cdf290c73d9208e06dbe2eb833f64238163a4046"
      });
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="container">
        <span>Checkout container</span>
        <div id="checkout-container"></div>
      </div>
    );
  }
}