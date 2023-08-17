import React, { useEffect, useState } from "react";
import { embedCheckout } from "@bigcommerce/checkout-sdk";

export const EmbeddedCheckout = ({ cartUrl }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    async function createEmbeddedCheckout() {
      try {
        // Replace URL with the Embedded Checkout URL for the cart
        // https://developer.bigcommerce.com/api-reference/store-management/carts/cart-redirect-urls/createcartredirecturl
        embedCheckout({
          containerId: "checkout-container",
          // url: "https://store.jabctools.com/cart.php?embedded=1&action=loadInCheckout&id=4d815359-622e-4f37-b6b2-89edf9899c03&token=1048657c5a60f83dc6409ea2ce37360ce85151064fce0a414c3e5f5c1761ad2b"
          url: cartUrl,
        });
      } catch(err) {
        console.log(err);
        setError(err.message);
      }
    }

    createEmbeddedCheckout();
  });

  return (
    <div className="container">
      <span>Checkout container</span>
      {error && (
        <div>
          Error with embedded checkout: {error}
        </div>
      )}
      <div id="checkout-container"></div>
    </div>
  );
};
