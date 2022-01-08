import React from "react";
import { embedCheckout } from "@bigcommerce/checkout-sdk";

export default class EmbeddedCheckout extends React.Component {
  async componentDidMount() {
    //const { cartId } = this.props;

    try {
      // Replace URL with the Embedded Checkout URL for the cart
      // https://developer.bigcommerce.com/api-reference/store-management/carts/cart-redirect-urls/createcartredirecturl
      embedCheckout({
        containerId: "checkout-container",
        url: "{{cart URL or Customer Login SSO URL with redirect_to as the cart URL}}"
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
